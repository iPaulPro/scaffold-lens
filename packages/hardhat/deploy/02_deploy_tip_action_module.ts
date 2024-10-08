import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { module } from "@lens-protocol/metadata";
import { uploadMetadata } from "../lib/irysService";
import { TipActionModule } from "../typechain-types";
import { isLocalHost, LENS_HUB, MODULE_REGISTRY } from "../config";

/**
 * Generates the metadata for the TipActionModule contract compliant with the Module Metadata Standard at:
 * https://docs.lens.xyz/docs/module-metadata-standard
 */
const metadata = module({
  name: "TipActionModule",
  title: "Tip Open Action",
  description: "Allow users to tip the creator of a publication",
  authors: ["dev@lens.xyz", "paul@paulburke.co", "martijn.vanhalen@gmail.com"],
  initializeCalldataABI: JSON.stringify([{ type: "address", name: "tipReceiver" }]),
  processCalldataABI: JSON.stringify([
    { type: "address", name: "currency" },
    { type: "uint256", name: "tipAmount" },
  ]),
  attributes: [],
});

/**
 * Deploys a contract named "TipActionModule" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployTipActionModuleContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network goerli`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  // First check to see if there's a local mocked LensHub contract deployed
  // This allows us to run tests locally with the same flow as on-chain
  let lensHubAddress: string | undefined;
  try {
    const { address } = await get("LensHub");
    lensHubAddress = address;
  } catch (e) {}

  if (!lensHubAddress) {
    lensHubAddress = LENS_HUB;
  }

  // First check to see if there's a local mocked ModuleRegistry contract deployed
  // This allows us to run tests locally with the same flow as on-chain
  let moduleRegistry: string | undefined;
  try {
    const { address } = await get("ModuleRegistry");
    moduleRegistry = address;
  } catch (e) {}

  // If there's no local mocked ModuleRegistry, use the live address from the environment
  if (!moduleRegistry) {
    moduleRegistry = MODULE_REGISTRY;
  }

  // Deploy the TipActionModule contract
  await deploy("TipActionModule", {
    from: deployer,
    args: [lensHubAddress, moduleRegistry],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract
  const tipPublicationAction = await hre.ethers.getContract<TipActionModule>("TipActionModule", deployer);

  // Upload the metadata to Arweave with Irys and set the URI on the contract
  const metadataURI = await uploadMetadata(metadata);
  const setMetadataRes = await tipPublicationAction.setModuleMetadataURI(metadataURI);
  console.log("set metadata URI: tx=", setMetadataRes.hash);

  if (!isLocalHost) {
    // Add a delay before calling registerModule to allow for propagation
    await new Promise(resolve => setTimeout(resolve, 10000));
  }

  // Register the module with the ModuleRegistry
  const registered = await tipPublicationAction.registerModule();
  console.log("registered open action: tx=", registered.hash);
};

export default deployTipActionModuleContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployTipActionModuleContract.tags = ["TipActionModule"];
