import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

import { module } from "@lens-protocol/metadata";
import { uploadMetadata } from "../lib/irys-service";
import { FlexCollectPublicationAction } from "../typechain-types";
import { LENS_HUB, MODULE_REGISTRY } from "../config";

/**
 * Generates the metadata for the FlexCollectPublicationAction contract compliant with the Module Metadata Standard at:
 * https://docs.lens.xyz/docs/module-metadata-standard
 */
const metadata = module({
  name: "FlexCollectPublicationAction",
  title: "Smart Collections",
  description: "Collect Publication Action that allows adding new publications to an existing collection.",
  authors: ["paul@paulburke.co"],
  initializeCalldataABI: JSON.stringify([
    { type: "address", name: "collectModule" },
    { type: "bytes", name: "collectModuleInitData" },
    { type: "address", name: "collectNFT" },
    { type: "bytes32", name: "tokenName" },
    { type: "bytes32", name: "tokenSymbol" },
    { type: "uint16", name: "tokenRoyalty" },
  ]),
  processCalldataABI: JSON.stringify([
    { type: "address", name: "collectNftRecipient" },
    { type: "bytes", name: "collectData" },
  ]),
  attributes: [],
});

/**
 * Deploys a contract named "FlexCollectPublicationAction" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployFlexCollectPublicationActionContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
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

  // This is the address of the LensHub contract on the network we're deploying to
  // When running locally, this should be the address of burner wallet used in the nextjs app
  const lensHubAddress = LENS_HUB;

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

  const { address: collectNFTImpl } = await get("FlexCollectNFT");

  // Deploy the FlexCollectPublicationAction contract
  await deploy("FlexCollectPublicationAction", {
    from: deployer,
    args: [lensHubAddress, moduleRegistry, collectNFTImpl, deployer],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract
  const action = await hre.ethers.getContract<FlexCollectPublicationAction>("FlexCollectPublicationAction", deployer);

  // Upload the metadata to Arweave with Irys and set the URI on the contract
  const metadataURI = await uploadMetadata(metadata);
  const setMetadataRes = await action.setModuleMetadataURI(metadataURI);
  console.log("set metadata URI: tx=", setMetadataRes.hash);

  // Add a delay before calling registerModule to allow for propagation
  await new Promise(resolve => setTimeout(resolve, 10000));

  // Register the module with the ModuleRegistry
  const registered = await action.registerModule();
  console.log("registered open action: tx=", registered.hash);
};

export default deployFlexCollectPublicationActionContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags FlexCollectPublicationAction
deployFlexCollectPublicationActionContract.tags = ["FlexCollectPublicationAction"];
