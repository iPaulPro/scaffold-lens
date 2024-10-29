import { useCallback } from "react";
import { AbiParameter } from "abitype";
import { useSessionStorage } from "usehooks-ts";
import { Abi, Address, PublicClient } from "viem";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import { ZERO_ADDRESS } from "~~/utils/scaffold-eth/common";
import { contracts } from "~~/utils/scaffold-eth/contract";
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
  const { targetNetwork } = useTargetNetwork();
  const collectPublicationAction = contracts?.[targetNetwork.id]?.["CollectPublicationAction"];
  const multirecipientFeeCollectModule = contracts?.[targetNetwork.id]?.["MultirecipientFeeCollectModule"];
  const simpleFeeCollectModule = contracts?.[targetNetwork.id]?.["SimpleFeeCollectModule"];

  const [moduleMetadata, setModuleMetadata] = useSessionStorage<{ [address: string]: ModuleMetadata }>(
    "moduleMetadata",
    {
      [ZERO_ADDRESS]: {
        initializeCalldataABI: [],
        processCalldataABI: [],
      },
    },
    { initializeWithValue: false },
  );

  const getModuleMetadata = useCallback(
    async (publicClient: PublicClient, moduleAddress: Address, moduleAbi: Abi): Promise<ModuleMetadata> => {
      if (moduleMetadata[moduleAddress]) {
        return moduleMetadata[moduleAddress];
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
        const metadata = {
          initializeCalldataABI: JSON.parse(json.initializeCalldataABI),
          processCalldataABI: JSON.parse(json.processCalldataABI),
        };
        setModuleMetadata(moduleMetadata => ({ ...moduleMetadata, [moduleAddress]: metadata }));
        return metadata;
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
