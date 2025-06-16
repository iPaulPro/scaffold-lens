import { deployLensContract, ContractType, ContractInfo, loadContractAddressFromAddressBook } from "./lensUtils";
import { HardhatRuntimeEnvironment } from "hardhat/types";

export async function deployLock(hre: HardhatRuntimeEnvironment, lockType: string, lockOwner: string): Promise<void> {
  await deployLensContract(hre, {
    name: lockType,
    contractName: "Lock",
    contractType: ContractType.Aux,
    constructorArguments: [lockOwner, true],
  });
}

export async function deployBeacons(hre: HardhatRuntimeEnvironment, beaconOwner: string): Promise<void> {
  const contracts: ContractInfo[] = [
    {
      name: "AppBeacon",
      contractName: "Beacon",
      contractType: ContractType.Beacon,
      constructorArguments: [beaconOwner, 1, loadContractAddressFromAddressBook("AppImpl")],
    },
    {
      name: "AccountBeacon",
      contractName: "Beacon",
      contractType: ContractType.Beacon,
      constructorArguments: [beaconOwner, 1, loadContractAddressFromAddressBook("AccountImpl")],
    },
    {
      name: "FeedBeacon",
      contractName: "Beacon",
      contractType: ContractType.Beacon,
      constructorArguments: [beaconOwner, 1, loadContractAddressFromAddressBook("FeedImpl")],
    },
    {
      name: "GraphBeacon",
      contractName: "Beacon",
      contractType: ContractType.Beacon,
      constructorArguments: [beaconOwner, 1, loadContractAddressFromAddressBook("GraphImpl")],
    },
    {
      name: "GroupBeacon",
      contractName: "Beacon",
      contractType: ContractType.Beacon,
      constructorArguments: [beaconOwner, 1, loadContractAddressFromAddressBook("GroupImpl")],
    },
    {
      name: "NamespaceBeacon",
      contractName: "Beacon",
      contractType: ContractType.Beacon,
      constructorArguments: [beaconOwner, 1, loadContractAddressFromAddressBook("NamespaceImpl")],
    },
  ];

  for (const contract of contracts) {
    await deployLensContract(hre, contract);
  }
}
