import { useCallback, useEffect, useMemo, useState } from "react";
import { useIsMounted } from "usehooks-ts";
import { usePublicClient } from "wagmi";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import { ModuleMetadata, useModuleMetadata } from "~~/hooks/scaffold-lens";
import { GenericContract, contracts } from "~~/utils/scaffold-eth/contract";

export interface CollectModuleContract {
  contractName: string;
  contract: GenericContract;
  metadata: ModuleMetadata;
}

export const useCollectModules = () => {
  const [collectModules, setCollectModules] = useState<CollectModuleContract[]>();

  const isMounted = useIsMounted();
  const publicClient = usePublicClient();
  const { targetNetwork } = useTargetNetwork();
  const { getModuleMetadata } = useModuleMetadata();

  const deployedContracts = useMemo(() => contracts?.[targetNetwork.id], [contracts, targetNetwork.id]);

  const getMetadata = useCallback(
    async (contract: GenericContract) => {
      if (!publicClient) return;
      return getModuleMetadata(publicClient, contract.address, contract.abi);
    },
    [publicClient, getModuleMetadata],
  );

  useEffect(() => {
    const fetchCollectModules = async () => {
      if (!isMounted() || !deployedContracts) return;

      const collectModulesPromises = Object.entries(deployedContracts)
        .filter(([, contract]) =>
          contract.abi.find(abi => "name" in abi && abi.name === "initializePublicationCollectModule"),
        )
        .map(async ([contractName, contract]) => {
          const metadata = await getMetadata(contract);
          return metadata ? { contractName, contract, metadata } : null;
        });

      const results = await Promise.all(collectModulesPromises);
      const newCollectModules = results.filter((module): module is CollectModuleContract => module !== null);

      setCollectModules(newCollectModules);
    };

    fetchCollectModules();
  }, [isMounted, deployedContracts, getMetadata]);

  return useMemo(() => ({ collectModules }), [collectModules]);
};
