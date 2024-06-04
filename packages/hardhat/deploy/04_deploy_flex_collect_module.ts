import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { FlexCollectModule } from "../typechain-types";
import { ethers } from "hardhat";
import { module } from "@lens-protocol/metadata";
import { uploadMetadata } from "../lib/irys-service";
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

  const lensHubAddress = LENS_HUB;

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

  await deploy("FlexCollectModule", {
    from: deployer,
    args: [lensHubAddress, flexCollectPublicationAction, moduleRegistry],
    log: true,
    autoMine: true,
  });

  const yourCollectModule = await hre.ethers.getContract<FlexCollectModule>("FlexCollectModule", deployer);

  const metadataURI = await uploadMetadata(metadata);
  await yourCollectModule.setModuleMetadataURI(metadataURI);

  await new Promise(resolve => setTimeout(resolve, 10000));

  const publicationActionContract = await ethers.getContractAt(
    "FlexCollectPublicationAction",
    flexCollectPublicationAction!,
  );
  await publicationActionContract.registerCollectModule(await yourCollectModule.getAddress());
  console.log("Registered FlexCollectModule with FlexCollectPublicationAction");
};

export default deployFlexCollectModuleContract;

deployFlexCollectModuleContract.tags = ["FlexCollectModule"];
