import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { LENS_HUB } from "../config";
import getNextContractAddress from "../lib/get-next-contract-address";

const deployCollectNFT: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const collectPublicationActionAddress = await getNextContractAddress(deployer);

  await deploy("CollectNFT", {
    from: deployer,
    args: [LENS_HUB, collectPublicationActionAddress],
    log: true,
    autoMine: true,
  });
};

export default deployCollectNFT;

deployCollectNFT.tags = ["CollectNFT"];
