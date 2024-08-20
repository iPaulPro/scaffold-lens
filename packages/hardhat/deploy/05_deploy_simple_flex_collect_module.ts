import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { FlexCollectPublicationAction, SimpleFlexCollectModule } from "../typechain-types";
import { module } from "@lens-protocol/metadata";
import { uploadMetadata } from "../lib/irysService";
import { LENS_HUB, MODULE_REGISTRY } from "../config";
import { log } from "../lib/logger";

const metadata = module({
  name: "SimpleFlexCollectModule",
  title: "Your Collect Action",
  description: "Description of your collect action",
  authors: ["some@email.com"],
  initializeCalldataABI: JSON.stringify([
    { type: "uint160", name: "amount" },
    { type: "uint96", name: "collectLimit" },
    { type: "address", name: "currency" },
    { type: "uint16", name: "referralFee" },
    { type: "bool", name: "followerOnly" },
    { type: "uint72", name: "endTimestamp" },
    { type: "address", name: "recipient" },
  ]),
  processCalldataABI: JSON.stringify([
    { type: "address", name: "currency" },
    { type: "uint256", name: "amount" },
  ]),
  attributes: [],
});

const deploySimpleFlexCollectModuleContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  let lensHubAddress: string | undefined;
  try {
    const { address } = await get("LensHub");
    lensHubAddress = address;
  } catch (e) {}

  if (!lensHubAddress) {
    lensHubAddress = LENS_HUB;
  }

  let moduleRegistry: string | undefined;
  try {
    const { address } = await get("ModuleRegistry");
    moduleRegistry = address;
  } catch (e) {}

  if (!moduleRegistry) {
    moduleRegistry = MODULE_REGISTRY;
  }

  let flexCollectPublicationAction: string | undefined;
  try {
    const { address } = await get("FlexCollectPublicationAction");
    flexCollectPublicationAction = address;
  } catch (e) {}

  if (!flexCollectPublicationAction) {
    throw new Error("FlexCollectPublicationAction not deployed");
  }

  await deploy("SimpleFlexCollectModule", {
    from: deployer,
    args: [lensHubAddress, flexCollectPublicationAction, moduleRegistry, deployer],
    log: true,
    autoMine: true,
  });

  const flexCollectModule = await hre.ethers.getContract<SimpleFlexCollectModule>("SimpleFlexCollectModule", deployer);

  const metadataURI = await uploadMetadata(metadata);
  const metadataTx = await flexCollectModule.setModuleMetadataURI(metadataURI);
  log("Set metadata URI on SimpleFlexCollectModule at", metadataTx.hash);

  if (process.env.NETWORK !== "localhost") {
    await new Promise(resolve => setTimeout(resolve, 10000));
  }

  const publicationActionContract = await hre.ethers.getContract<FlexCollectPublicationAction>(
    "FlexCollectPublicationAction",
    deployer,
  );
  const registerTx = await publicationActionContract.registerCollectModule(await flexCollectModule.getAddress());
  log("Registered SimpleFlexCollectModule with FlexCollectPublicationAction at", registerTx.hash);
};

export default deploySimpleFlexCollectModuleContract;

deploySimpleFlexCollectModuleContract.tags = ["SimpleFlexCollectModule"];
