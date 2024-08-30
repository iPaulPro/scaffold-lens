"use client";

import React, { useEffect } from "react";
import { AbiParameter } from "abitype";
import { usePublicClient } from "wagmi";
import { ContractInput } from "~~/app/debug/_components/contract";
import { OpenActionContract } from "~~/hooks/scaffold-lens";

interface OpenActionDataInputProps {
  module: OpenActionContract;
  form: Record<string, any>;
  setForm: (data: Record<string, any>) => void;
  metadata: AbiParameter[];
  setMetadata: (metadata: AbiParameter[]) => void;
}

export const OpenActionInitDataInput: React.FC<OpenActionDataInputProps> = ({
  module,
  form,
  setForm,
  metadata,
  setMetadata,
}) => {
  const publicClient = usePublicClient();

  useEffect(() => {
    if (!publicClient) {
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

    const params: AbiParameter[] = module.metadata.initializeCalldataABI;
    setInitialFormState(params);
    setMetadata(params);
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
