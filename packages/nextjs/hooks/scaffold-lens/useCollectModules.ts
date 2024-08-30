import { useMemo, useState } from "react";
import { hardhat } from "viem/chains";
import { usePublicClient, useWatchBlocks } from "wagmi";
import deployedContracts from "~~/contracts/deployedContracts";
import { GenericContract } from "~~/utils/scaffold-eth/contract";
import { ModuleMetadata, getModuleMetadata } from "~~/utils/scaffold-lens";

export interface CollectModuleContract {
  contractName: string;
  contract: GenericContract;
  metadata: ModuleMetadata;
}

export const useCollectModules = () => {
  const [latestBlock, setLatestBlock] = useState<bigint>();
  const [collectModules, setCollectModules] = useState<CollectModuleContract[]>();

  const publicClient = usePublicClient();

  useWatchBlocks({
    onBlock(block) {
      setLatestBlock(block.number);
    },
  });

  useMemo(() => {
    if (!publicClient) return;

    const fetchCollectModules = async () => {
      const contracts = deployedContracts[hardhat.id];
      const collectModules: CollectModuleContract[] = [];
      for (const [contractName, contract] of Object.entries(contracts)) {
        if ("initializePublicationCollectModule" in contract.inheritedFunctions) {
          const metadata = await getModuleMetadata(publicClient, contract.address, contract.abi);
          collectModules.push({ contractName, contract, metadata });
        }
      }
      setCollectModules(collectModules);
    };

    fetchCollectModules();
  }, [latestBlock, publicClient]);

  return { collectModules };
};
