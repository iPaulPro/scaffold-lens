import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const deployTestToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const testToken = await deploy("TestToken", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  // get deployed ModuleRegistry
  const moduleRegistry = await hre.deployments.get("ModuleRegistry");
  if (!moduleRegistry) {
    throw new Error("ModuleRegistry not found");
  }

  const ModuleRegistry = await ethers.getContractAt("ModuleRegistry", moduleRegistry.address);

  const register = await ModuleRegistry.registerErc20Currency(testToken.address);
  console.log("registered TestToken (tx: " + register.hash + ")");
};

export default deployTestToken;

deployTestToken.tags = ["TestToken"];
