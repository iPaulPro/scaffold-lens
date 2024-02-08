import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployModuleRegistry: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  const { address } = await get("MockSchemaRegistry");

  await deploy("MockEAS", {
    from: deployer,
    args: [address],
    log: true,
    autoMine: true,
  });
};

export default deployModuleRegistry;

deployModuleRegistry.tags = ["MockEAS"];
