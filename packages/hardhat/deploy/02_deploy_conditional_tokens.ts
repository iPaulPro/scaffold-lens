import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployConditionalTokensContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("MockConditionalTokens", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });
};

export default deployConditionalTokensContract;

deployConditionalTokensContract.tags = ["MockConditionalTokens"];
