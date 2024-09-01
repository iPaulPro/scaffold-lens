import React, { useEffect, useState } from "react";
import { AbiParameter } from "abitype";
import { encodeAbiParameters } from "viem";
import { useAccount, usePublicClient } from "wagmi";
import { ContractInput, getParsedContractFunctionArgs } from "~~/app/debug/_components/contract";
import { CollectModuleContract, OpenActionContract, Publication } from "~~/hooks/scaffold-lens";
import { getFormattedABI, mergeObjects } from "~~/utils/scaffold-lens";

interface CollectModuleProcessDataProps {
  publication: Publication;
  actionModule: OpenActionContract;
  collectModule: CollectModuleContract;
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

export const CollectModuleProcessDataInput: React.FC<CollectModuleProcessDataProps> = ({
  publication,
  actionModule,
  collectModule,
  setActionProcessData,
}) => {
  const [form, setForm] = useState<Record<string, any>>(() =>
    getInitialFormState(collectModule.metadata.processCalldataABI),
  );

  const publicClient = usePublicClient();
  const { address } = useAccount();

  useEffect(() => {
    if (!publicClient || Object.values(form).some(value => value)) return;

    const getPublicationData = async () => {
      const publicationData = await publicClient.readContract({
        address: collectModule.contract.address,
        abi: collectModule.contract.abi,
        functionName: "getPublicationData",
        args: [publication.profileId, publication.pubId],
      });
      if (publicationData) {
        setForm(prevForm => mergeObjects(prevForm, publicationData));
      }
    };

    getPublicationData();
  }, [collectModule, publicClient, publication, form]);

  useEffect(() => {
    if (!form) return;

    try {
      const formData = getParsedContractFunctionArgs(form);
      const formattedCollectABI = getFormattedABI(collectModule.metadata.processCalldataABI);
      const collectProcessData = encodeAbiParameters(formattedCollectABI, formData);

      const formattedActionABI = getFormattedABI(actionModule.metadata.processCalldataABI);
      const actionProcessData = encodeAbiParameters(formattedActionABI, [address, collectProcessData]);
      setActionProcessData(actionProcessData);
    } catch (e) {
      setActionProcessData(undefined);
    }
  }, [form, collectModule, actionModule, setActionProcessData, address]);

  return (
    <div className="flex flex-col space-y-3">
      {collectModule.metadata.processCalldataABI.map(
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
