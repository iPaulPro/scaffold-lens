import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployModuleRegistry: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("MockSchemaRegistry", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });
};

export default deployModuleRegistry;

deployModuleRegistry.tags = ["MockSchemaRegistry"];
