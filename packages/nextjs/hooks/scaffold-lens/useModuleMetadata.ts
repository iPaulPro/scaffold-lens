import { useCallback } from "react";
import { AbiParameter } from "abitype";
import { Abi, Address, PublicClient } from "viem";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
import {
  collectPublicationAddressInitABI,
  collectPublicationAddressProcessABI,
  multirecipientFeeCollectModuleInitABI,
  multirecipientFeeCollectModuleProcessABI,
  simpleFeeCollectModuleInitABI,
  simpleFeeCollectModuleProcessABI,
} from "~~/utils/scaffold-lens";

export interface ModuleMetadata {
  initializeCalldataABI: AbiParameter[];
  processCalldataABI: AbiParameter[];
}

export const useModuleMetadata = () => {
  const { data: collectPublicationAction, isLoading: loadingCollectPublicationAction } =
    useDeployedContractInfo("CollectPublicationAction");
  const { data: multirecipientFeeCollectModule, isLoading: loadingMultirecipientFeeCollectModule } =
    useDeployedContractInfo("MultirecipientFeeCollectModule");
  const { data: simpleFeeCollectModule, isLoading: loadingSimpleFeeCollectModule } =
    useDeployedContractInfo("SimpleFeeCollectModule");

  const getModuleMetadata = useCallback(
    async (publicClient: PublicClient, moduleAddress: Address, moduleAbi: Abi): Promise<ModuleMetadata> => {
      if (loadingCollectPublicationAction || loadingMultirecipientFeeCollectModule || loadingSimpleFeeCollectModule) {
        return {
          initializeCalldataABI: [],
          processCalldataABI: [],
        };
      }

      // The core modules don't have metadata URIs
      if (moduleAddress === collectPublicationAction?.address) {
        return {
          initializeCalldataABI: collectPublicationAddressInitABI,
          processCalldataABI: collectPublicationAddressProcessABI,
        };
      }
      if (moduleAddress === simpleFeeCollectModule?.address) {
        return {
          initializeCalldataABI: simpleFeeCollectModuleInitABI,
          processCalldataABI: simpleFeeCollectModuleProcessABI,
        };
      }
      if (moduleAddress === multirecipientFeeCollectModule?.address) {
        return {
          initializeCalldataABI: multirecipientFeeCollectModuleInitABI,
          processCalldataABI: multirecipientFeeCollectModuleProcessABI,
        };
      }

      try {
        const metadataUri = (await publicClient.readContract({
          address: moduleAddress,
          abi: moduleAbi,
          functionName: "getModuleMetadataURI",
        })) as string;
        const metadataRes = await fetch(metadataUri.replace("ar://", "https://gateway.irys.xyz/"));
        const json = await metadataRes.json();
        return {
          initializeCalldataABI: JSON.parse(json.initializeCalldataABI),
          processCalldataABI: JSON.parse(json.processCalldataABI),
        };
      } catch (e) {
        return {
          initializeCalldataABI: [],
          processCalldataABI: [],
        };
      }
    },
    [collectPublicationAction, multirecipientFeeCollectModule, simpleFeeCollectModule],
  );

  return { getModuleMetadata };
};
