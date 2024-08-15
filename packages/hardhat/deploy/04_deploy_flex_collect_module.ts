import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { FlexCollectModule } from "../typechain-types";
import { ethers } from "hardhat";
import { module } from "@lens-protocol/metadata";
import { uploadMetadata } from "../lib/irysService";
import { LENS_HUB, MODULE_REGISTRY } from "../config";

const metadata = module({
  name: "FlexCollectModule",
  title: "Your Collect Action",
  description: "Description of your collect action",
  authors: ["some@email.com"],
  initializeCalldataABI: JSON.stringify([]),
  processCalldataABI: JSON.stringify([]),
  attributes: [],
});

const deployFlexCollectModuleContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
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

  await deploy("FlexCollectModule", {
    from: deployer,
    args: [lensHubAddress, flexCollectPublicationAction, moduleRegistry, deployer],
    log: true,
    autoMine: true,
  });

  const flexCollectModule = await hre.ethers.getContract<FlexCollectModule>("FlexCollectModule", deployer);

  const metadataURI = await uploadMetadata(metadata);
  const metadataTx = await flexCollectModule.setModuleMetadataURI(metadataURI);
  console.log("Set metadata URI on FlexCollectModule at", metadataTx.hash);

  await new Promise(resolve => setTimeout(resolve, 10000));

  const publicationActionContract = await ethers.getContractAt(
    "FlexCollectPublicationAction",
    flexCollectPublicationAction!,
  );
  const registerTx = await publicationActionContract.registerCollectModule(await flexCollectModule.getAddress());
  console.log("Registered FlexCollectModule with FlexCollectPublicationAction at", registerTx.hash);
};

export default deployFlexCollectModuleContract;

deployFlexCollectModuleContract.tags = ["FlexCollectModule"];
