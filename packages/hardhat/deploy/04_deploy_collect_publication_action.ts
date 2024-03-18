import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import { CollectPublicationAction } from "../typechain-types";
import { COLLECT_NFT, LENS_HUB, MODULE_REGISTRY } from "../config";

const deployCollectPublicationAction: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  const lensHubAddress = LENS_HUB;

  // First check to see if there's a local mocked CollectNFT contract deployed
  // This allows us to run tests locally with the same flow as on-chain
  let collectNft: string | undefined;
  try {
    const { address } = await get("CollectNFT");
    collectNft = address;
  } catch (e) {}

  // If there's no local mocked CollectNFT, use the live address from the environment
  if (!collectNft) {
    collectNft = COLLECT_NFT;
  }

  const salt = ethers.keccak256(ethers.toUtf8Bytes("something very unique"));

  await deploy("CollectPublicationAction", {
    from: deployer,
    args: [lensHubAddress, collectNft, deployer],
    deterministicDeployment: salt,
    log: true,
    autoMine: true,
  });

  // Get the deployed contract
  const publicationAction = await hre.ethers.getContract<CollectPublicationAction>(
    "CollectPublicationAction",
    deployer,
  );

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

  const moduleRegistryContract = await ethers.getContractAt("ModuleRegistry", moduleRegistry!);
  await moduleRegistryContract.registerModule(await publicationAction.getAddress(), 1);
  console.log("Registered CollectPublicationAction with ModuleRegistry");
};

export default deployCollectPublicationAction;

deployCollectPublicationAction.tags = ["CollectPublicationAction"];
