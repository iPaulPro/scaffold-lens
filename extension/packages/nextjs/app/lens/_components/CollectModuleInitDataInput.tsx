"use client";

import React, { useEffect, useState } from "react";
import { AbiParameter } from "abitype";
import { usePublicClient } from "wagmi";
import { ContractInput } from "~~/app/debug/_components/contract";
import { CollectModuleContract } from "~~/hooks/scaffold-lens";

interface CollectModuleDataInputProps {
  module: CollectModuleContract;
  onMetadataChange: (metadata: AbiParameter[]) => void;
  onFormChange: (form: Record<string, any>) => void;
}

export const CollectModuleInitDataInput: React.FC<CollectModuleDataInputProps> = ({
  module,
  onMetadataChange,
  onFormChange,
}) => {
  const publicClient = usePublicClient();
  const [metadata, setMetadata] = useState<AbiParameter[]>([]);
  const [form, setForm] = useState<Record<string, any>>({});

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

    const params: AbiParameter[] = module.metadata.initializeCalldataABI;
    setInitialFormState(params);
    setMetadata(params);
  }, [module, publicClient, setMetadata, setForm]);

  useEffect(() => {
    onFormChange(form);
  }, [form, onFormChange]);

  useEffect(() => {
    onMetadataChange(metadata);
  }, [metadata, onMetadataChange]);

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
