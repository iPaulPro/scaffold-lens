import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { LENS_HUB } from "../config";
import getNextContractAddress from "../lib/getNextContractAddress";

const deployCollectNFT: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const lensHubAddress = LENS_HUB;

  const actionAddress = await getNextContractAddress(deployer);

  await deploy("FlexCollectNFT", {
    from: deployer,
    args: [lensHubAddress, actionAddress],
    log: true,
    autoMine: true,
  });
};

export default deployCollectNFT;

deployCollectNFT.tags = ["FlexCollectNFT"];
