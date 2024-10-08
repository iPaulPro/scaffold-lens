import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { module } from "@lens-protocol/metadata";
import { uploadMetadata } from "../lib/irysService";
import { PayWhatYouWantCollectModule } from "../typechain-types";
import { isLocalHost, COLLECT_PUBLICATION_ACTION, LENS_HUB, MODULE_REGISTRY } from "../config";

/**
 * Generates the metadata for the PayWhatYouWantCollectModule contract compliant with the Module Metadata Standard at:
 * https://docs.lens.xyz/docs/module-metadata-standard
 */
const metadata = module({
  name: "PayWhatYouWantCollectModule",
  title: "Pay What You Want Collect Module",
  description: "Allows users to collect publications with any denomination of any token.",
  authors: ["paul@paulburke.co"],
  initializeCalldataABI: JSON.stringify([
    { type: "uint160", name: "amountFloor" },
    { type: "uint96", name: "collectLimit" },
    { type: "address", name: "currency" },
    { type: "uint16", name: "referralFee" },
    { type: "bool", name: "followerOnly" },
    { type: "uint72", name: "endTimestamp" },
    {
      type: "tuple(address,uint16)[]",
      name: "recipients",
      components: [
        { type: "address", name: "recipient" },
        { type: "uint16", name: "split" },
      ],
    },
  ]),
  processCalldataABI: JSON.stringify([
    { type: "address", name: "currency" },
    { type: "uint256", name: "amount" },
  ]),
  attributes: [],
});

/**
 * Deploys a contract named "PayWhatYouWantCollectModule" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployPayWhatYouWantCollectModuleContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
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
  let lensHub: string | undefined;
  try {
    const { address } = await get("LensHub");
    lensHub = address;
  } catch (e) {}

  if (!lensHub) {
    lensHub = LENS_HUB;
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

  // Next, check to see if there's a local mocked CollectPublicationAction contract deployed
  // This allows us to run tests locally with the same flow as on-chain
  let collectPublicationAction: string | undefined;
  try {
    const { address } = await get("CollectPublicationAction");
    collectPublicationAction = address;
  } catch (e) {}

  // If there's no local mocked CollectPublicationAction, use the live address from the environment
  if (!collectPublicationAction) {
    collectPublicationAction = COLLECT_PUBLICATION_ACTION;
  }

  // Deploy the PayWhatYouWantCollectModule contract
  await deploy("PayWhatYouWantCollectModule", {
    from: deployer,
    args: [lensHub, collectPublicationAction, moduleRegistry],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract
  const collectModule = await hre.ethers.getContract<PayWhatYouWantCollectModule>(
    "PayWhatYouWantCollectModule",
    deployer,
  );

  // Upload the metadata to Arweave with Irys and set the URI on the contract
  const metadataURI = await uploadMetadata(metadata);
  await collectModule.setModuleMetadataURI(metadataURI);

  if (!isLocalHost) {
    // Add a delay before calling registerModule to allow for propagation
    await new Promise(resolve => setTimeout(resolve, 10000));
  }

  // Register the module with the Publication Action
  const publicationActionContract = await hre.ethers.getContractAt(
    "CollectPublicationAction",
    collectPublicationAction!,
  );
  const registerTx = await publicationActionContract.registerCollectModule(await collectModule.getAddress());
  console.log("registered PayWhatYouWantCollectModule with CollectPublicationAction", registerTx.hash);
};

export default deployPayWhatYouWantCollectModuleContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags PayWhatYouWantCollectModule
deployPayWhatYouWantCollectModuleContract.tags = ["PayWhatYouWantCollectModule"];
