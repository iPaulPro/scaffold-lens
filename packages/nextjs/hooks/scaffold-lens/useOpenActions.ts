import { useMemo, useState } from "react";
import { hardhat } from "viem/chains";
import { usePublicClient, useWatchBlocks } from "wagmi";
import deployedContracts from "~~/contracts/deployedContracts";
import { GenericContract } from "~~/utils/scaffold-eth/contract";
import { ModuleMetadata, getModuleMetadata } from "~~/utils/scaffold-lens";

export interface OpenActionContract {
  contractName: string;
  contract: GenericContract;
  metadata: ModuleMetadata;
}

export const useOpenActions = () => {
  const [latestBlock, setLatestBlock] = useState<bigint>();
  const [openActions, setOpenActions] = useState<OpenActionContract[]>();

  const publicClient = usePublicClient();

  useWatchBlocks({
    onBlock(block) {
      setLatestBlock(block.number);
    },
  });

  useMemo(() => {
    if (!latestBlock || !publicClient) return;

    const fetchOpenActions = async () => {
      const contracts = deployedContracts[hardhat.id];
      const openActions: OpenActionContract[] = [];
      for (const [contractName, contract] of Object.entries(contracts)) {
        if ("initializePublicationAction" in contract.inheritedFunctions) {
          const metadata = await getModuleMetadata(publicClient, contract.address, contract.abi);
          openActions.push({ contractName, contract, metadata });
        }
      }
      setOpenActions(openActions);
    };

    fetchOpenActions();
  }, [latestBlock]);

  return { openActions };
};
