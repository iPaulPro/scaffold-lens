import { contracts } from "~~/utils/scaffold-eth/contract";

/**
 * Fetches all ABIs from the deployment data.
 * @returns {Array} - The array of all ABIs.
 */
export function getAllAbis(chainId: number): any[] {
  const deployedContracts = contracts?.[chainId];

  const allAbis: any[] = [];

  for (const contractName in deployedContracts) {
    // @ts-ignore
    const contract = deployedContracts[contractName];
    allAbis.push(...contract.abi);
    for (const inheritedContractName in contract.inheritedFunctions) {
      // @ts-ignore
      const inheritedContract = deployedContracts[inheritedContractName];
      if (inheritedContract) {
        allAbis.push(...inheritedContract.abi);
      }
    }
  }

  return allAbis;
}
