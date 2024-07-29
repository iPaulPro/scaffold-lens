import deployedContracts from "~~/contracts/deployedContracts";

/**
 * Fetches all ABIs from the deployment data.
 * @returns {Array} - The array of all ABIs.
 */
export function getAllAbis(): any[] {
  const networkId = 31337; // Adjust based on your hardhat network ID
  // @ts-ignore
  const contracts = deployedContracts[networkId];

  const allAbis: any[] = [];

  for (const contractName in contracts) {
    // @ts-ignore
    const contract = contracts[contractName];
    allAbis.push(...contract.abi);
    for (const inheritedContractName in contract.inheritedFunctions) {
      // @ts-ignore
      const inheritedContract = contracts[inheritedContractName];
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
