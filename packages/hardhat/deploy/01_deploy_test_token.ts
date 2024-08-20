import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ModuleRegistry } from "../typechain-types";
import { log } from "../lib/logger";

const deployTestToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("TestToken", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  const moduleGlobals = await hre.ethers.getContract<ModuleRegistry>("ModuleRegistry", deployer);

  const currency = await hre.ethers.getContract("TestToken", deployer);
  const registerTx = await moduleGlobals.registerErc20Currency(await currency.getAddress());
  log("Registered TestToken as currency (tx:", registerTx.hash + ")");
};

export default deployTestToken;

deployTestToken.tags = ["TestToken"];
