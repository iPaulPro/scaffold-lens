import { useEffect, useState } from "react";
import { usePublicClient, useWatchBlocks } from "wagmi";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import { ModuleMetadata, useModuleMetadata } from "~~/hooks/scaffold-lens";
import { GenericContract, contracts } from "~~/utils/scaffold-eth/contract";

export interface OpenActionContract {
  contractName: string;
  contract: GenericContract;
  metadata: ModuleMetadata;
}

export const useOpenActions = () => {
  const [latestBlock, setLatestBlock] = useState<bigint>();
  const [openActions, setOpenActions] = useState<OpenActionContract[]>();

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

    const fetchOpenActions = async () => {
      const deployedContracts = contracts?.[targetNetwork.id];
      if (!deployedContracts) return;
      const openActions: OpenActionContract[] = [];
      for (const [contractName, contract] of Object.entries(deployedContracts)) {
        if (contract.inheritedFunctions && "initializePublicationAction" in contract.inheritedFunctions) {
          const metadata = await getModuleMetadata(publicClient, contract.address, contract.abi);
          openActions.push({ contractName, contract, metadata });
        }
      }
      setOpenActions(openActions);
    };

    fetchOpenActions();
  }, [latestBlock, publicClient, getModuleMetadata, targetNetwork.id]);

  return { openActions };
};
