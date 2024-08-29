"use client";

import React, { useEffect, useState } from "react";
import { AbiParameter } from "abitype";
import { PublicClient, encodeAbiParameters } from "viem";
import { usePublicClient } from "wagmi";
import { ContractInput, getParsedContractFunctionArgs } from "~~/app/debug/_components/contract";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import {
  CollectModuleContract,
  OpenActionContract,
  Publication,
  useCollectModules,
  useProfile,
} from "~~/hooks/scaffold-lens";
import { notification } from "~~/utils/scaffold-eth";
import { getFormattedABI, getModuleMetadata } from "~~/utils/scaffold-lens";

interface ActOnPostProps {
  publication: Publication;
}

const getCollectModuleAddress = async (
  publicClient: PublicClient,
  publication: Publication,
  openAction: OpenActionContract,
) => {
  if (!openAction || !publicClient) return null;

  try {
    const collectData: any = await publicClient.readContract({
      address: openAction.contract.address,
      abi: openAction.contract.abi,
      functionName: "getCollectData",
      args: [publication.profileId, publication.pubId],
    });
    if ("collectModule" in collectData) {
      return collectData.collectModule;
    }
  } catch (e) {
    // will throw if the action doesn't have a collect module
  }
  return null;
};

export const ActOnPost: React.FC<ActOnPostProps> = ({ publication }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<Record<string, any>>({});
  const [actionMetadata, setActionMetadata] = useState<AbiParameter[]>([]);
  const [collectModule, setCollectModule] = useState<CollectModuleContract>();
  const [collectMetadata, setCollectMetadata] = useState<AbiParameter[]>([]);

  const publicClient = usePublicClient();
  const { profileId } = useProfile();
  const { collectModules } = useCollectModules();
  const { writeContractAsync } = useScaffoldWriteContract("LensHub");

  useEffect(() => {
    if (!modalOpen || !publication.openActions.length || !publicClient) return;

    const setInitialFormState = (metadata: AbiParameter[]) => {
      if (Object.keys(form).length) return;
      const initialForm = metadata.reduce((acc, param) => {
        if (!param.name) return acc;
        return {
          ...acc,
          [param.name]: "",
        };
      }, {});
      setForm(initialForm);
    };

    const getCollectMetadata = async () => {
      const openAction = publication.openActions[0];
      const collectModuleAddress = await getCollectModuleAddress(publicClient, publication, openAction);
      if (!collectModuleAddress) return;
      const collectModule = collectModules?.find(module => module.contract.address === collectModuleAddress);
      if (!collectModule) return;
      const metadataJson = await getModuleMetadata(publicClient, collectModule);
      const params: AbiParameter[] = metadataJson.processCalldataABI;
      setInitialFormState(params);
      setCollectMetadata(params);
      setCollectModule(collectModule);
    };

    const getActionMetadata = async () => {
      const openAction = publication.openActions[0];
      if (!openAction) return;
      const metadataJson = await getModuleMetadata(publicClient, openAction);
      const params: AbiParameter[] = metadataJson.processCalldataABI;
      if (!collectMetadata.length) {
        setInitialFormState(params);
      }
      setActionMetadata(params);
    };

    getCollectMetadata();
    getActionMetadata();
  }, [publication, modalOpen, collectMetadata.length, collectModules, publicClient, form]);

  useEffect(() => {
    if (!publicClient || !collectModule) return;

    type GenericObject = { [key: string]: any };

    const mergeObjects = <T extends GenericObject, U extends GenericObject>(target: T, source: U): T => {
      Object.keys(target).forEach(key => {
        if (key in source) {
          (target as any)[key] = source[key];
        }
      });
      return target;
    };

    const getPublicationData = async () => {
      const publicationData = await publicClient.readContract({
        address: collectModule.contract.address,
        abi: collectModule.contract.abi,
        functionName: "getPublicationData",
        args: [publication.profileId, publication.pubId],
      });
      if (publicationData) {
        // mergeObjects(form, publicationData);
        setForm(mergeObjects(form, publicationData));
      }
    };

    getPublicationData();
  }, [collectMetadata, collectModule, publicClient, setForm, form, publication]);

  const getFormMetadata = () => {
    if (collectMetadata.length) {
      return collectMetadata;
    }
    return actionMetadata;
  };

  const submitAct = async () => {
    if (!profileId || !publicClient) return;

    const formData = getParsedContractFunctionArgs(form);

    let collectProcessData: `0x${string}` | undefined = undefined;
    if (collectMetadata.length) {
      const formattedABI = getFormattedABI(collectMetadata);
      collectProcessData = encodeAbiParameters(formattedABI, formData);
    }

    const openActionModule = publication.openActions[0];
    let actionProcessData: `0x${string}` | undefined;
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
  };

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
            {getFormMetadata()?.map(
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
