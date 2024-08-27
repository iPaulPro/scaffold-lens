import { AbiParameter } from "abitype";
import { PublicClient } from "viem";
import { CollectModuleContract, OpenActionContract } from "~~/hooks/scaffold-lens";
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

interface ModuleMetadata {
  initializeCalldataABI: AbiParameter[];
  processCalldataABI: AbiParameter[];
}

export const getModuleMetadata = async (
  publicClient: PublicClient,
  module: CollectModuleContract | OpenActionContract,
): Promise<ModuleMetadata> => {
  // The core modules don't have metadata URIs
  if (module.contract.address === collectPublicationAction) {
    return {
      initializeCalldataABI: collectPublicationAddressInitABI,
      processCalldataABI: collectPublicationAddressProcessABI,
    };
  }
  if (module.contract.address === simpleFeeCollectModule) {
    return {
      initializeCalldataABI: simpleFeeCollectModuleInitABI,
      processCalldataABI: simpleFeeCollectModuleProcessABI,
    };
  }
  if (module.contract.address === multirecipientFeeCollectModule) {
    return {
      initializeCalldataABI: multirecipientFeeCollectModuleInitABI,
      processCalldataABI: multirecipientFeeCollectModuleProcessABI,
    };
  }

  const metadataUri = (await publicClient.readContract({
    address: module.contract.address,
    abi: module.contract.abi,
    functionName: "getModuleMetadataURI",
  })) as string;
  const metadataRes = await fetch(metadataUri.replace("ar://", "https://gateway.irys.xyz/"));
  const json = await metadataRes.json();
  return {
    initializeCalldataABI: JSON.parse(json.initializeCalldataABI),
    processCalldataABI: JSON.parse(json.processCalldataABI),
  };
};
