import { useCallback, useEffect, useState } from "react";
import { hardhat } from "viem/chains";
import { useWatchBlocks } from "wagmi";
import deployedContracts from "~~/contracts/deployedContracts";
import { ContractName, GenericContract } from "~~/utils/scaffold-eth/contract";

export interface ERC20TokenContract {
  contractName: ContractName;
  contract: GenericContract;
}

export const useERC20Tokens = () => {
  const [latestBlock, setLatestBlock] = useState<bigint>();
  const [erc20Tokens, setERC20Tokens] = useState<ERC20TokenContract[]>();

  useWatchBlocks({
    onBlock(block) {
      setLatestBlock(block.number);
    },
  });

  const getERC20Tokens = useCallback(async () => {
    const contracts = deployedContracts[hardhat.id];
    const erc20Tokens: ERC20TokenContract[] = [];
    Object.entries(contracts).forEach(([contractName, contract]) => {
      if (
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
  }, [latestBlock]);

  useEffect(() => {
    getERC20Tokens();
  }, [getERC20Tokens]);

  return { erc20Tokens };
};
