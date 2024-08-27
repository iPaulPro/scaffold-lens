"use client";

import React, { useEffect } from "react";
import { AbiParameter } from "abitype";
import { usePublicClient } from "wagmi";
import { ContractInput } from "~~/app/debug/_components/contract";
import { CollectModuleContract } from "~~/hooks/scaffold-lens";
import { multirecipientFeeCollectModule, multirecipientFeeCollectModuleInitABI } from "~~/utils/scaffold-lens";
import { simpleFeeCollectModule, simpleFeeCollectModuleInitABI } from "~~/utils/scaffold-lens";

interface CollectModuleDataInputProps {
  module: CollectModuleContract;
  metadata: AbiParameter[];
  setMetadata: (metadata: AbiParameter[]) => void;
  form: Record<string, any>;
  setForm: (data: Record<string, any>) => void;
}

export const CollectModuleDataInput: React.FC<CollectModuleDataInputProps> = ({
  module,
  form,
  setForm,
  metadata,
  setMetadata,
}) => {
  const publicClient = usePublicClient();

  const setInitialFormState = (metadata: AbiParameter[]) => {
    const initialForm = metadata.reduce((acc, param) => {
      return {
        ...acc,
        [param.name!]: "",
      };
    }, {});
    setForm(initialForm);
  };

  useEffect(() => {
    if (!publicClient) return;
    const getModuleMetadata = async () => {
      const metadataUri = (await publicClient.readContract({
        address: module.contract.address,
        abi: module.contract.abi,
        functionName: "getModuleMetadataURI",
      })) as string;
      const metadataRes = await fetch(metadataUri.replace("ar://", "https://gateway.irys.xyz/"));
      const json = await metadataRes.json();
      const params: AbiParameter[] = JSON.parse(json.initializeCalldataABI);
      setInitialFormState(params);
      setMetadata(params);
    };

    if (module.contract.address === simpleFeeCollectModule) {
      setInitialFormState(simpleFeeCollectModuleInitABI);
      setMetadata(simpleFeeCollectModuleInitABI);
    } else if (module.contract.address === multirecipientFeeCollectModule) {
      setInitialFormState(multirecipientFeeCollectModuleInitABI);
      setMetadata(multirecipientFeeCollectModuleInitABI);
    } else {
      getModuleMetadata();
    }
  }, [module]);

  return (
    <>
      {metadata?.map(param => (
        <ContractInput
          key={param.name}
          setForm={updatedFormValue => {
            setForm(updatedFormValue);
          }}
          form={form}
          stateObjectKey={param.name!}
          paramType={param}
        />
      ))}
    </>
  );
};
