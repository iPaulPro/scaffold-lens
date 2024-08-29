"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AbiParameter } from "abitype";
import { createPublicClient, encodeAbiParameters, http } from "viem";
import { hardhat } from "viem/chains";
import { ContractInput, getParsedContractFunctionArgs } from "~~/app/debug/_components/contract";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { CollectModuleContract, Publication, useCollectModules, useProfile } from "~~/hooks/scaffold-lens";
import { notification } from "~~/utils/scaffold-eth";
import { getCollectModuleAddress, getFormattedABI, getModuleMetadata, mergeObjects } from "~~/utils/scaffold-lens";

interface ActOnPostProps {
  publication: Publication;
}

export const ActOnPost: React.FC<ActOnPostProps> = ({ publication }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<Record<string, any>>({});
  const [actionMetadata, setActionMetadata] = useState<AbiParameter[]>([]);
  const [collectMetadata, setCollectMetadata] = useState<AbiParameter[]>([]);

  const publicClient = createPublicClient({
    chain: hardhat,
    transport: http(),
  });

  const { profileId } = useProfile();
  const { collectModules } = useCollectModules();
  const { writeContractAsync } = useScaffoldWriteContract("LensHub");

  const setInitialFormState = useCallback(
    (metadata: AbiParameter[]) => {
      if (Object.keys(form).length) return;
      const initialForm = metadata.reduce((acc, param) => {
        if (!param.name) return acc;
        return {
          ...acc,
          [param.name]: "",
        };
      }, {});
      setForm(initialForm);
    },
    [form],
  );

  const getPublicationData = useCallback(
    async (collectModule: CollectModuleContract) => {
      const publicationData = await publicClient.readContract({
        address: collectModule.contract.address,
        abi: collectModule.contract.abi,
        functionName: "getPublicationData",
        args: [publication.profileId, publication.pubId],
      });
      if (publicationData) {
        setForm(prevForm => mergeObjects(prevForm, publicationData));
      }
    },
    [publicClient, publication.profileId, publication.pubId],
  );

  const getCollectMetadata = useCallback(async () => {
    if (!collectModules) return;
    const openAction = publication.openActions[0];
    const collectModuleAddress = await getCollectModuleAddress(publicClient, publication, openAction);
    if (!collectModuleAddress) return;

    const collectModule = collectModules.find(module => module.contract.address === collectModuleAddress);
    if (!collectModule) return;

    const metadataJson = await getModuleMetadata(publicClient, collectModule);
    const params: AbiParameter[] = metadataJson.processCalldataABI;
    setCollectMetadata(params);
    setInitialFormState(params);

    await getPublicationData(collectModule);
  }, [publicClient, collectModules, publication, setInitialFormState, getPublicationData]);

  const getActionMetadata = useCallback(async () => {
    const openAction = publication.openActions[0];
    if (!openAction) return;

    const metadataJson = await getModuleMetadata(publicClient, openAction);
    const params: AbiParameter[] = metadataJson.processCalldataABI;
    if (!collectMetadata.length) {
      setInitialFormState(params);
    }
    setActionMetadata(params);
  }, [publicClient, publication.openActions, collectMetadata.length, setInitialFormState]);

  useEffect(() => {
    if (!modalOpen || !publication.openActions.length || !publicClient) return;
    getCollectMetadata();
    getActionMetadata();
  }, [modalOpen, publication, publicClient, getCollectMetadata, getActionMetadata]);

  const getFormMetadata = useMemo(() => {
    return collectMetadata.length ? collectMetadata : actionMetadata;
  }, [collectMetadata, actionMetadata]);

  const submitAct = useCallback(async () => {
    if (!profileId || !publicClient) return;

    const formData = getParsedContractFunctionArgs(form);

    let collectProcessData: `0x${string}` | undefined = undefined;
    if (collectMetadata.length) {
      const formattedABI = getFormattedABI(collectMetadata);
      collectProcessData = encodeAbiParameters(formattedABI, formData);
    }

    const openActionModule = publication.openActions[0];
    let actionProcessData: `0x${string}`;
    if (collectProcessData) {
      const collectModuleAddress = await getCollectModuleAddress(publicClient, publication, openActionModule);
      const formattedABI = getFormattedABI(actionMetadata);
      actionProcessData = encodeAbiParameters(formattedABI, [collectModuleAddress, collectProcessData]);
    } else {
      const formattedABI = getFormattedABI(actionMetadata);
      actionProcessData = encodeAbiParameters(formattedABI, formData);
    }

    try {
      await writeContractAsync({
        functionName: "act",
        args: [
          {
            publicationActedProfileId: publication.profileId,
            publicationActedId: publication.pubId,
            actorProfileId: profileId,
            referrerProfileIds: [],
            referrerPubIds: [],
            actionModuleAddress: openActionModule.contract.address,
            actionModuleData: actionProcessData,
          },
        ],
      });
    } catch (e) {
      notification.error("Transaction failed.");
      console.error("Error acting on publication", e);
      return;
    }

    setModalOpen(false);
  }, [profileId, publicClient, form, collectMetadata, actionMetadata, publication, writeContractAsync]);

  if (!publication.openActions.length) return null;

  return (
    <>
      <button className="btn btn-primary dark:btn-secondary btn-sm w-fit px-6" onClick={() => setModalOpen(true)}>
        Act
      </button>
      <dialog id="act_on_post_modal" className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
          <h3>Act on post</h3>
          <div className="flex flex-col space-y-3 pt-2">
            {getFormMetadata.map(
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
            <button className="btn btn-primary dark:btn-secondary btn-sm w-fit px-6" onClick={submitAct}>
              Submit
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setModalOpen(false)}>close</button>
        </form>
      </dialog>
    </>
  );
};
