import { useEffect, useState } from "react";
import { usePublicClient, useWatchBlocks } from "wagmi";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import { ModuleMetadata, useModuleMetadata } from "~~/hooks/scaffold-lens";
import { GenericContract, contracts } from "~~/utils/scaffold-eth/contract";

export interface CollectModuleContract {
  contractName: string;
  contract: GenericContract;
  metadata: ModuleMetadata;
}

export const useCollectModules = () => {
  const [latestBlock, setLatestBlock] = useState<bigint>();
  const [collectModules, setCollectModules] = useState<CollectModuleContract[]>();

  const publicClient = usePublicClient();
  const { targetNetwork } = useTargetNetwork();
  const { getModuleMetadata } = useModuleMetadata();

  useWatchBlocks({
    onBlock(block) {
      setLatestBlock(block.number);
    },
  });

  useEffect(() => {
    if (!publicClient) return;

    const fetchCollectModules = async () => {
      const deployedContracts = contracts?.[targetNetwork.id];
      if (!deployedContracts) return;
      const collectModules: CollectModuleContract[] = [];
      for (const [contractName, contract] of Object.entries(deployedContracts)) {
        if (contract.inheritedFunctions && "initializePublicationCollectModule" in contract.inheritedFunctions) {
          const metadata = await getModuleMetadata(publicClient, contract.address, contract.abi);
          collectModules.push({ contractName, contract, metadata });
        }
      }
      setCollectModules(collectModules);
    };

    fetchCollectModules();
  }, [latestBlock, publicClient, getModuleMetadata, targetNetwork.id]);

  return { collectModules };
};
