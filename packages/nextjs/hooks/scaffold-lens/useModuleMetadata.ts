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
  const { data: collectPublicationAction } = useDeployedContractInfo("CollectPublicationAction");
  const { data: multirecipientFeeCollectModule } = useDeployedContractInfo("MultirecipientFeeCollectModule");
  const { data: simpleFeeCollectModule } = useDeployedContractInfo("SimpleFeeCollectModule");

  const getModuleMetadata = async (
    publicClient: PublicClient,
    moduleAddress: Address,
    moduleAbi: Abi,
  ): Promise<ModuleMetadata> => {
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

  return { getModuleMetadata };
};
