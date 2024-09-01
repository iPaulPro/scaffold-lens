"use client";

import React, { useEffect, useState } from "react";
import { AbiParameter } from "abitype";
import { encodeAbiParameters } from "viem";
import { ContractInput, getParsedContractFunctionArgs } from "~~/app/debug/_components/contract";
import { OpenActionContract } from "~~/hooks/scaffold-lens";
import { getFormattedABI } from "~~/utils/scaffold-lens";

interface OpenActionProcessDataProps {
  actionModule: OpenActionContract;
  setActionProcessData: React.Dispatch<React.SetStateAction<`0x${string}` | undefined>>;
}

const getInitialFormState = (abiParmeters: AbiParameter[]): Record<string, any> => {
  const initialForm: Record<string, any> = {};
  if (!abiParmeters.length) return initialForm;
  abiParmeters.forEach(param => {
    const key = param.name || param.type;
    initialForm[key] = "";
  });
  return initialForm;
};

export const OpenActionProcessDataInput: React.FC<OpenActionProcessDataProps> = ({
  actionModule,
  setActionProcessData,
}) => {
  const [form, setForm] = useState<Record<string, any>>(() =>
    getInitialFormState(actionModule.metadata.processCalldataABI),
  );

  useEffect(() => {
    if (!form) return;

    try {
      const formData = getParsedContractFunctionArgs(form);
      const actionMetadata = actionModule.metadata.processCalldataABI;
      const formattedABI = getFormattedABI(actionMetadata);
      const actionProcessData = encodeAbiParameters(formattedABI, formData);
      setActionProcessData(actionProcessData);
    } catch (e) {
      setActionProcessData(undefined);
    }
  }, [form, actionModule, setActionProcessData]);

  return (
    <div className="flex flex-col space-y-3">
      {actionModule.metadata.processCalldataABI?.map(
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
