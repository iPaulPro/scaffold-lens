import { useCallback, useEffect, useState } from "react";
import { hardhat } from "viem/chains";
import { useWatchBlocks } from "wagmi";
import deployedContracts from "~~/contracts/deployedContracts";
import { GenericContract } from "~~/utils/scaffold-eth/contract";

export interface OpenActionContract {
  contractName: string;
  contract: GenericContract;
}

export const useOpenActions = () => {
  const [latestBlock, setLatestBlock] = useState<bigint>();
  const [openActions, setOpenActions] = useState<OpenActionContract[]>();

  useWatchBlocks({
    onBlock(block) {
      setLatestBlock(block.number);
    },
  });

  const getOpenActions = useCallback(async () => {
    const contracts = deployedContracts[hardhat.id];
    const openActions: OpenActionContract[] = [];
    Object.entries(contracts).forEach(([contractName, contract]) => {
      if ("initializePublicationAction" in contract.inheritedFunctions) {
        openActions.push({ contractName, contract });
      }
    });
    setOpenActions(openActions);
  }, [latestBlock]);

  useEffect(() => {
    getOpenActions();
  }, [getOpenActions]);

  return { openActions };
};
