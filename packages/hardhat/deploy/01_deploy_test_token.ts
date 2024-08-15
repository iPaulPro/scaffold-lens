import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployTestToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("TestToken", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });
};

export default deployTestToken;

deployTestToken.tags = ["TestToken"];
