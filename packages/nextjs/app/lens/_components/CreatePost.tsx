"use client";

import React, { useEffect, useRef, useState } from "react";
import { AbiParameter } from "abitype";
import { encodeAbiParameters } from "viem";
import { getParsedContractFunctionArgs } from "~~/app/debug/_components/contract";
import { CollectModuleInitDataInput } from "~~/app/lens/_components/CollectModuleInitDataInput";
import { OpenActionInitDataInput } from "~~/app/lens/_components/OpenActionInitDataInput";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { CollectModuleContract, OpenActionContract, useProfile } from "~~/hooks/scaffold-lens";
import { ZERO_ADDRESS } from "~~/utils/scaffold-eth/common";
import { getFormattedABI } from "~~/utils/scaffold-lens";

interface CreatePostProps {
  openActionModule: OpenActionContract | undefined;
  compatibleModules: CollectModuleContract[];
  collectModule: CollectModuleContract | undefined;
  setPostRefreshCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const CreatePost: React.FC<CreatePostProps> = ({
  openActionModule,
  compatibleModules,
  collectModule,
  setPostRefreshCounter,
}) => {
  const [postContent, setPostContent] = useState<string>();
  const [collectModuleRequired, setCollectModuleRequired] = useState<boolean>(true);
  const [collectModuleMetadataABI, setCollectModuleMetadataABI] = useState<AbiParameter[]>([]);
  const [collectModuleInitForm, setCollectModuleInitForm] = useState<Record<string, any>>({});
  const [openActionMetadataABI, setOpenActionMetadataABI] = useState<AbiParameter[]>([]);
  const [openActionInitForm, setOpenActionInitForm] = useState<Record<string, any>>({});

  const [submitError, setSubmitError] = useState<string>();

  const { profileId } = useProfile();
  const { writeContractAsync } = useScaffoldWriteContract("LensHub");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (compatibleModules.length) {
      setCollectModuleRequired(!collectModule);
    } else {
      setCollectModuleRequired(false);
    }
  }, [collectModule, compatibleModules]);

  const clearForm = (form: Record<string, any>) => {
    for (const key in form) {
      form[key] = "";
    }
    return form;
  };

  const submitPost = async () => {
    if (!profileId) return;

    if (!postContent) {
      setSubmitError("Post content is required");
      return;
    }

    const actionModules: `0x${string}`[] = [];
    const actionModulesInitDatas: `0x${string}`[] = [];

    if (openActionModule) {
      actionModules.push(openActionModule.contract.address as `0x${string}`);
    }

    const formattedActionABI = getFormattedABI(openActionMetadataABI);

    if (collectModule) {
      if (!openActionModule) return;

      // If there is a Collect Module we're using CollectPublicationAction
      try {
        const formData = getParsedContractFunctionArgs(collectModuleInitForm);
        const formattedCollectABI = getFormattedABI(collectModuleMetadataABI);
        const collectInitData = encodeAbiParameters(formattedCollectABI, formData);

        const actionInitData = encodeAbiParameters(formattedActionABI, [
          collectModule.contract.address,
          collectInitData,
        ]);
        actionModulesInitDatas.push(actionInitData);
      } catch (e) {
        console.error(e);
        setSubmitError("Error initializing Collect Module");
        return;
      }
    } else if (openActionModule) {
      // If there is no Collect Module we're using the OpenActionModule
      try {
        const formData = getParsedContractFunctionArgs(openActionInitForm);
        const openActionInitData = encodeAbiParameters(formattedActionABI, formData);

        actionModulesInitDatas.push(openActionInitData);
      } catch (e) {
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
    setCollectModuleInitForm(clearForm(collectModuleInitForm));
    setOpenActionInitForm(clearForm(openActionInitForm));
    setSubmitError(undefined);
    setPostRefreshCounter(prev => prev + 1);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex border-2 border-base-200 bg-base-200 rounded-xl text-accent">
        <textarea
          className="input focus-within:border-transparent focus:outline-none focus:bg-transparent text-neutral w-full h-40 p-4 border w-full font-medium rounded-xl"
          ref={inputRef}
          value={postContent}
          onChange={e => setPostContent(e.target.value)}
          placeholder="Write your post here..."
        />
      </div>
      {openActionModule && !compatibleModules.length ? (
        <div>
          <div className="pb-3 px-2">
            <div className="text-sm font-bold">Selected Module</div>
            <Address address={openActionModule.contract.address} />
          </div>
          <OpenActionInitDataInput
            module={openActionModule}
            form={openActionInitForm}
            setForm={setOpenActionInitForm}
            metadata={openActionMetadataABI}
            setMetadata={setOpenActionMetadataABI}
          />
        </div>
      ) : (
        collectModule && (
          <div>
            <div className="pb-3 px-2">
              <div className="text-sm font-bold">Selected Module</div>
              <Address address={collectModule.contract.address} />
            </div>
            <CollectModuleInitDataInput
              module={collectModule}
              metadata={collectModuleMetadataABI}
              setMetadata={setCollectModuleMetadataABI}
              form={collectModuleInitForm}
              setForm={setCollectModuleInitForm}
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
  );
};
