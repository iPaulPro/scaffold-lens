import { ContractType, deployLensContract } from "../lib/lens/lensUtils";
import { HardhatRuntimeEnvironment } from "hardhat/types";

async function deploy(hre: HardhatRuntimeEnvironment) {
  await deployLensContract(hre, {
    name: "Multicall3",
    contractName: "Multicall3",
    contractType: ContractType.Misc,
  });
}

export default deploy;

deploy.tags = ["Multicall"];
