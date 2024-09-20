import { useEffect, useMemo, useState } from "react";
import { useIsMounted } from "usehooks-ts";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import { ContractName, GenericContract, contracts } from "~~/utils/scaffold-eth/contract";

export interface ERC20TokenContract {
  contractName: ContractName;
  contract: GenericContract;
  canMint: boolean;
}

const isAbiFunction = (abi: any, name: string) => "name" in abi && abi.name === name;

export const useERC20Tokens = () => {
  const [erc20Tokens, setERC20Tokens] = useState<ERC20TokenContract[]>();

  const isMounted = useIsMounted();
  const { targetNetwork } = useTargetNetwork();

  const deployedContracts = useMemo(() => contracts?.[targetNetwork.id], [contracts, targetNetwork.id]);

  useEffect(() => {
    if (!isMounted() || !deployedContracts) return;
    const erc20Tokens: ERC20TokenContract[] = Object.entries(deployedContracts)
      .filter(
        ([, contract]) =>
          contract.abi.some(abi => isAbiFunction(abi, "balanceOf")) &&
          contract.abi.some(abi => isAbiFunction(abi, "transfer")) &&
          contract.abi.some(abi => isAbiFunction(abi, "allowance")) &&
          contract.abi.some(abi => isAbiFunction(abi, "approve")) &&
          contract.abi.some(abi => isAbiFunction(abi, "transferFrom")),
      )
      .map(([contractName, contract]) => ({
        contractName: contractName as ContractName,
        contract,
        canMint:
          contract.abi.some(abi => isAbiFunction(abi, "mint")) &&
          !contract.abi.some(abi => isAbiFunction(abi, "minterAllowance")),
      }));
    setERC20Tokens(erc20Tokens);
  }, [isMounted, deployedContracts]);

  return useMemo(() => ({ erc20Tokens }), [erc20Tokens]);
};
