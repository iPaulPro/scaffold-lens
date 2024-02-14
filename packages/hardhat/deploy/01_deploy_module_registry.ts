import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { MockModuleRegistry } from "../typechain-types";

const deployModuleRegistry: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("MockModuleRegistry", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  const moduleGlobals = await hre.ethers.getContract<MockModuleRegistry>("MockModuleRegistry", deployer);

  const currency = await hre.ethers.getContract("TestToken", deployer);
  await moduleGlobals.registerErc20Currency(await currency.getAddress());
};

export default deployModuleRegistry;

deployModuleRegistry.tags = ["MockModuleRegistry"];
