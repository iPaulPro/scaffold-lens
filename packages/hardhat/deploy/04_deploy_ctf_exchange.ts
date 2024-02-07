import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployCtfExchangeContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("MockCtfExchange", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });
};

export default deployCtfExchangeContract;

deployCtfExchangeContract.tags = ["MockCtfExchange"];
