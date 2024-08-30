"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AbiParameter } from "abitype";
import { encodeAbiParameters } from "viem";
import { usePublicClient } from "wagmi";
import { getParsedContractFunctionArgs } from "~~/app/debug/_components/contract";
import { CollectModuleInitDataInput } from "~~/app/lens/_components/CollectModuleInitDataInput";
import { CollectModuleSelector } from "~~/app/lens/_components/CollectModuleSelector";
import { OpenActionInitDataInput } from "~~/app/lens/_components/OpenActionInitDataInput";
import { OpenActionsSelector } from "~~/app/lens/_components/OpenActionsSelector";
import { Profile } from "~~/app/lens/_components/Profile";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { CollectModuleContract, OpenActionContract, useCollectModules, useProfile } from "~~/hooks/scaffold-lens";
import { ZERO_ADDRESS } from "~~/utils/scaffold-eth/common";
import { getFormattedABI } from "~~/utils/scaffold-lens";

interface CreatePostProps {
  onPostCreated: () => void;
}

export const CreatePost: React.FC<CreatePostProps> = () => {
  const [selectedActionModule, setSelectedActionModule] = useState<OpenActionContract>();
  const [selectedCollectModule, setSelectedCollectModule] = useState<CollectModuleContract>();
  const [compatibleModules, setCompatibleModules] = useState<CollectModuleContract[]>([]);
  const [postContent, setPostContent] = useState<string>();
  const [collectModuleRequired, setCollectModuleRequired] = useState<boolean>(true);
  const [collectModuleMetadataABI, setCollectModuleMetadataABI] = useState<AbiParameter[]>([]);
  const [collectModuleInitForm, setCollectModuleInitForm] = useState<Record<string, any>>({});
  const [openActionMetadataABI, setOpenActionMetadataABI] = useState<AbiParameter[]>([]);
  const [openActionInitForm, setOpenActionInitForm] = useState<Record<string, any>>({});

  const [submitError, setSubmitError] = useState<string>();

  const { collectModules } = useCollectModules();
  const publicClient = usePublicClient();
  const { profileId } = useProfile();
  const { writeContractAsync } = useScaffoldWriteContract("LensHub");

  useMemo(() => {
    if (!collectModules || !publicClient) {
      return;
    }

    const compatModules: CollectModuleContract[] = [];
    const getCompatibleModules = async () => {
      for (const collectModule of collectModules) {
        const actionModule = await publicClient.readContract({
          address: collectModule.contract.address,
          abi: collectModule.contract.abi,
          functionName: "ACTION_MODULE",
        });
        if (actionModule === selectedActionModule?.contract.address) {
          compatModules.push(collectModule);
        }
      }
      setCompatibleModules(compatModules);
    };
    getCompatibleModules();
  }, [collectModules, selectedActionModule, publicClient]);

  useEffect(() => {
    if (compatibleModules.length) {
      setCollectModuleRequired(!selectedCollectModule);
    } else {
      setCollectModuleRequired(false);
    }
  }, [selectedCollectModule, compatibleModules]);

  const submitPost = async () => {
    if (!profileId) return;

    if (!postContent) {
      setSubmitError("Post content is required");
      return;
    }

    const actionModules: `0x${string}`[] = [];
    const actionModulesInitDatas: `0x${string}`[] = [];

    if (selectedActionModule) {
      actionModules.push(selectedActionModule.contract.address as `0x${string}`);
    }

    const formattedActionABI = getFormattedABI(openActionMetadataABI);

    if (selectedCollectModule) {
      if (!selectedActionModule) return;

      // If there is a Collect Module we're using CollectPublicationAction
      try {
        const formData = getParsedContractFunctionArgs(collectModuleInitForm);
        const formattedCollectABI = getFormattedABI(collectModuleMetadataABI);
        const collectInitData = encodeAbiParameters(formattedCollectABI, formData);

        const actionInitData = encodeAbiParameters(formattedActionABI, [
          selectedCollectModule.contract.address,
          collectInitData,
        ]);
        actionModulesInitDatas.push(actionInitData);
      } catch (e) {
        console.error(e);
        setSubmitError("Error initializing Collect Module");
        return;
      }
    } else if (selectedActionModule) {
      // If there is no Collect Module we're using the OpenActionModule
      try {
        const formData = getParsedContractFunctionArgs(openActionInitForm);
        console.log("submitPost: formData", formData, "formattedActionABI", formattedActionABI);
        const openActionInitData = encodeAbiParameters(formattedActionABI, formData);

        actionModulesInitDatas.push(openActionInitData);
      } catch (e) {
        console.error(e);
        setSubmitError("Error initializing Open Action Module");
        return;
      }
    }

    try {
      await writeContractAsync({
        functionName: "post",
        args: [
          {
            profileId,
            contentURI: postContent,
            actionModules,
            actionModulesInitDatas,
            referenceModule: ZERO_ADDRESS,
            referenceModuleInitData: "0x",
          },
        ],
      });
    } catch (e) {
      console.error(e);
      setSubmitError("Error creating post. See console for more details.");
      return;
    }

    setPostContent("");
    setSubmitError(undefined);
    setSelectedActionModule(undefined);
  };

  useEffect(() => {
    setCompatibleModules([]);
    setSelectedCollectModule(undefined);
  }, [selectedActionModule]);

  return (
    <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col">
      <div className="flex gap-4 px-4 pt-4">
        <OpenActionsSelector
          selectedActionModule={selectedActionModule}
          setSelectedActionModule={setSelectedActionModule}
        />
        {compatibleModules.length > 0 && (
          <CollectModuleSelector
            compatibleModules={compatibleModules}
            collectModuleSelected={setSelectedCollectModule}
          />
        )}
      </div>
      <div className="flex flex-col gap-y-2 p-4">
        <div className="px-2">
          <Profile />
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex border-2 border-base-200 bg-base-200 rounded-xl text-accent">
            <textarea
              className="input focus-within:border-transparent focus:outline-none focus:bg-transparent text-neutral w-full h-40 p-4 border w-full font-medium rounded-xl"
              value={postContent}
              onChange={e => setPostContent(e.target.value)}
              placeholder="Write your post here..."
            />
          </div>
          {selectedActionModule && !compatibleModules.length ? (
            <div>
              <div className="pb-3 px-2">
                <div className="text-sm font-bold">Selected Module</div>
                <Address address={selectedActionModule.contract.address} />
              </div>
              <OpenActionInitDataInput
                module={selectedActionModule}
                onMetadataChange={setOpenActionMetadataABI}
                onFormChange={setOpenActionInitForm}
              />
            </div>
          ) : (
            selectedCollectModule && (
              <div>
                <div className="pb-3 px-2">
                  <div className="text-sm font-bold">Selected Module</div>
                  <Address address={selectedCollectModule.contract.address} />
                </div>
                <CollectModuleInitDataInput
                  module={selectedCollectModule}
                  onMetadataChange={setCollectModuleMetadataABI}
                  onFormChange={setCollectModuleInitForm}
                />
              </div>
            )
          )}
          <div className="flex gap-2 items-center py-1 justify-end">
            {collectModuleRequired && (
              <div className="text-red-500 text-sm">
                A Collect Module must be selected to create a post with the selected Action Module
              </div>
            )}
            {submitError && <div className="text-red-500 text-sm">{submitError}</div>}
            <button className="btn btn-primary" onClick={submitPost} disabled={collectModuleRequired}>
              Create Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
