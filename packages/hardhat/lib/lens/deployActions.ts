import { deployLensContract, ContractType, ContractInfo } from "./lensUtils";
import { HardhatRuntimeEnvironment } from "hardhat/types";

export async function deployActions(
  hre: HardhatRuntimeEnvironment,
  actionHub: string,
  actionsOwner: string,
): Promise<void> {
  const metadataURI = "";
  const contracts: ContractInfo[] = [
    // Actions
    {
      contractName: "TippingAccountAction",
      contractType: ContractType.Action,
      constructorArguments: [actionHub, actionsOwner, metadataURI],
    },
    {
      contractName: "TippingPostAction",
      contractType: ContractType.Action,
      constructorArguments: [actionHub, actionsOwner, metadataURI],
    },
    {
      contractName: "SimpleCollectAction",
      contractType: ContractType.Action,
      constructorArguments: [actionHub, actionsOwner, metadataURI],
    },
  ];

  for (const contract of contracts) {
    await deployLensContract(hre, contract);
  }
}
