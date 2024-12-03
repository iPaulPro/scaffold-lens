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
    const contract = deployedContract[contractName];
    allAbis.push(...contract.abi);
    for (const inheritedContractName in contract.inheritedFunctions) {
      // @ts-ignore
      const inheritedContract = deployedContract[inheritedContractName];
      if (inheritedContract) {
        allAbis.push(...inheritedContract.abi);
      }
    }
  }

  if (allAbis.length === 0) {
    console.error("No ABIs found.");
    throw new Error("No ABIs found.");
  }

  return allAbis;
}
