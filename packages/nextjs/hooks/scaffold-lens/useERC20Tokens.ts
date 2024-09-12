import { useMemo, useState } from "react";
import { useWatchBlocks } from "wagmi";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import { ContractName, GenericContract, contracts } from "~~/utils/scaffold-eth/contract";

export interface ERC20TokenContract {
  contractName: ContractName;
  contract: GenericContract;
}

export const useERC20Tokens = () => {
  const [latestBlock, setLatestBlock] = useState<bigint>();
  const [erc20Tokens, setERC20Tokens] = useState<ERC20TokenContract[]>();

  const { targetNetwork } = useTargetNetwork();

  useWatchBlocks({
    onBlock(block) {
      setLatestBlock(block.number);
    },
  });

  useMemo(() => {
    const deployedContracts = contracts?.[targetNetwork.id];
    if (!deployedContracts) return;
    const erc20Tokens: ERC20TokenContract[] = [];
    Object.entries(deployedContracts).forEach(([contractName, contract]) => {
      if (
        contract.inheritedFunctions &&
        "totalSupply" in contract.inheritedFunctions &&
        "balanceOf" in contract.inheritedFunctions &&
        "transfer" in contract.inheritedFunctions &&
        "allowance" in contract.inheritedFunctions &&
        "approve" in contract.inheritedFunctions &&
        "transferFrom" in contract.inheritedFunctions
      ) {
        erc20Tokens.push({ contractName: contractName as ContractName, contract });
      }
    });
    setERC20Tokens(erc20Tokens);
  }, [latestBlock, targetNetwork.id]);

  return { erc20Tokens };
};
