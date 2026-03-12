import { deployLensContract, ContractType, ContractInfo } from "./lensUtils";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import deployLensCreate2 from "./deployLensCreate2";

export default async function deployLocal(hre: HardhatRuntimeEnvironment): Promise<void> {
  await deployLensCreate2(hre);

  const contracts: ContractInfo[] = [
    {
      name: "GHO",
      contractName: "GHO",
      contractType: ContractType.Implementation,
    },
    {
      name: "WGHO",
      contractName: "WGHO",
      contractType: ContractType.Implementation,
    },
  ];

  for (const contract of contracts) {
    await deployLensContract(hre, contract);
  }
}
