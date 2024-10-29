import { useCallback, useEffect, useMemo, useState } from "react";
import { useIsMounted } from "usehooks-ts";
import { usePublicClient } from "wagmi";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import { ModuleMetadata, useModuleMetadata } from "~~/hooks/scaffold-lens";
import { GenericContract, contracts } from "~~/utils/scaffold-eth/contract";

export interface OpenActionContract {
  contractName: string;
  contract: GenericContract;
  metadata: ModuleMetadata;
}

export const useOpenActions = () => {
  const [openActions, setOpenActions] = useState<OpenActionContract[]>();

  const isMounted = useIsMounted();
  const publicClient = usePublicClient();
  const { targetNetwork } = useTargetNetwork();
  const { getModuleMetadata } = useModuleMetadata();

  const deployedContracts = useMemo(() => contracts?.[targetNetwork.id], [targetNetwork.id]);

  const getMetadata = useCallback(
    async (contract: GenericContract) => {
      if (!publicClient) return undefined;
      return getModuleMetadata(publicClient, contract.address, contract.abi);
    },
    [publicClient, getModuleMetadata],
  );

  useEffect(() => {
    const fetchOpenActions = async () => {
      if (!isMounted() || !deployedContracts) return;

      const openActionsPromises = Object.entries(deployedContracts)
        .filter(([, contract]) => contract.abi.find(abi => "name" in abi && abi.name === "initializePublicationAction"))
        .map(async ([contractName, contract]) => {
          const metadata = await getMetadata(contract);
          return metadata ? { contractName, contract, metadata } : null;
        });

      const results = await Promise.all(openActionsPromises);
      const newOpenActions = results.filter((module): module is OpenActionContract => module !== null);

      setOpenActions(newOpenActions);
    };

    fetchOpenActions();
  }, [isMounted, deployedContracts]);

  return useMemo(() => ({ openActions }), [openActions]);
};
