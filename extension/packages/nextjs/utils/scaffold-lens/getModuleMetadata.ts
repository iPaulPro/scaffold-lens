import { AbiParameter } from "abitype";
import { Abi, PublicClient } from "viem";
import {
  collectPublicationAction,
  collectPublicationAddressInitABI,
  collectPublicationAddressProcessABI,
  multirecipientFeeCollectModule,
  multirecipientFeeCollectModuleInitABI,
  multirecipientFeeCollectModuleProcessABI,
  simpleFeeCollectModule,
  simpleFeeCollectModuleInitABI,
  simpleFeeCollectModuleProcessABI,
} from "~~/utils/scaffold-lens";

export interface ModuleMetadata {
  initializeCalldataABI: AbiParameter[];
  processCalldataABI: AbiParameter[];
}

export const getModuleMetadata = async (
  publicClient: PublicClient,
  moduleAddress: string,
  moduleAbi: Abi,
): Promise<ModuleMetadata> => {
  // The core modules don't have metadata URIs
  if (moduleAddress === collectPublicationAction) {
    return {
      initializeCalldataABI: collectPublicationAddressInitABI,
      processCalldataABI: collectPublicationAddressProcessABI,
    };
  }
  if (moduleAddress === simpleFeeCollectModule) {
    return {
      initializeCalldataABI: simpleFeeCollectModuleInitABI,
      processCalldataABI: simpleFeeCollectModuleProcessABI,
    };
  }
  if (moduleAddress === multirecipientFeeCollectModule) {
    return {
      initializeCalldataABI: multirecipientFeeCollectModuleInitABI,
      processCalldataABI: multirecipientFeeCollectModuleProcessABI,
    };
  }

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
};
