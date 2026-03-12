import { deployLensContract, ContractType, ContractInfo } from "./lensUtils";
import { HardhatRuntimeEnvironment } from "hardhat/types";

export async function deployActions(hre: HardhatRuntimeEnvironment, actionHub: string): Promise<void> {
  const contracts: ContractInfo[] = [
    // Actions
    {
      contractName: "TippingAccountAction",
      contractType: ContractType.Action,
      constructorArguments: [actionHub],
    },
    {
      contractName: "TippingPostAction",
      contractType: ContractType.Action,
      constructorArguments: [actionHub],
    },
    {
      contractName: "SimpleCollectAction",
      contractType: ContractType.Action,
      constructorArguments: [actionHub],
    },
  ];

  for (const contract of contracts) {
    await deployLensContract(hre, contract);
  }
}
