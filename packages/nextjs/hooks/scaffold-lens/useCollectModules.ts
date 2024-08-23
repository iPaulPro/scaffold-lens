import { useCallback, useEffect, useState } from "react";
import { hardhat } from "viem/chains";
import { useWatchBlocks } from "wagmi";
import deployedContracts from "~~/contracts/deployedContracts";
import { GenericContract } from "~~/utils/scaffold-eth/contract";

export interface CollectModuleContract {
  contractName: string;
  contract: GenericContract;
}

export const useCollectModules = () => {
  const [latestBlock, setLatestBlock] = useState<bigint>();
  const [collectModules, setCollectModules] = useState<CollectModuleContract[]>();

  useWatchBlocks({
    onBlock(block) {
      setLatestBlock(block.number);
    },
  });

  const getCollectModules = useCallback(async () => {
    const contracts = deployedContracts[hardhat.id];
    const collectModules: CollectModuleContract[] = [];
    const entries = Object.entries(contracts);
    for (const [contractName, contract] of entries) {
      if ("initializePublicationCollectModule" in contract.inheritedFunctions) {
        collectModules.push({ contractName, contract });
      }
    }
    setCollectModules(collectModules);
  }, [latestBlock]);

  useEffect(() => {
    getCollectModules();
  }, [getCollectModules]);

  return { collectModules };
};
