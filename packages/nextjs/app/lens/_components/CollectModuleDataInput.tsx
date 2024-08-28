"use client";

import React, { useEffect } from "react";
import { AbiParameter } from "abitype";
import { usePublicClient } from "wagmi";
import { ContractInput } from "~~/app/debug/_components/contract";
import { CollectModuleContract } from "~~/hooks/scaffold-lens";
import { getModuleMetadata } from "~~/utils/scaffold-lens";

interface CollectModuleDataInputProps {
  module: CollectModuleContract;
  form: Record<string, any>;
  setForm: (data: Record<string, any>) => void;
  metadata: AbiParameter[];
  setMetadata: (metadata: AbiParameter[]) => void;
}

export const CollectModuleDataInput: React.FC<CollectModuleDataInputProps> = ({
  module,
  form,
  setForm,
  metadata,
  setMetadata,
}) => {
  const publicClient = usePublicClient();

  useEffect(() => {
    if (!publicClient || !module) {
      setMetadata([]);
      return;
    }

    const setInitialFormState = (metadata: AbiParameter[]) => {
      const initialForm = metadata.reduce((acc, param) => {
        if (!param.name) return acc;
        return {
          ...acc,
          [param.name]: "",
        };
      }, {});
      setForm(initialForm);
    };

    const getModuleInitABI = async () => {
      const metadataJson = await getModuleMetadata(publicClient, module);
      const params: AbiParameter[] = metadataJson.initializeCalldataABI;
      setInitialFormState(params);
      setMetadata(params);
    };

    getModuleInitABI();
  }, [module, publicClient, setMetadata, setForm]);

  return (
    <div className="flex flex-col space-y-3">
      {metadata?.map(
        param =>
          param.name && (
            <ContractInput
              key={param.name}
              setForm={updatedFormValue => {
                setForm(updatedFormValue);
              }}
              form={form}
              stateObjectKey={param.name}
              paramType={param}
            />
          ),
      )}
    </div>
  );
};
