import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployUmaCtfAdapterContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("MockUmaCtfAdapter", {
    from: deployer,
    args: ["0x91430CaD2d3975766499717fA0D66A78D814E5c5"],
    log: true,
    autoMine: true,
  });
};

export default deployUmaCtfAdapterContract;

deployUmaCtfAdapterContract.tags = ["MockUmaCtfAdapter"];
