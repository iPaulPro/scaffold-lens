import React, { useEffect, useRef, useState } from "react";
import { AbiParameter } from "abitype";
import { encodeAbiParameters } from "viem";
import { getParsedContractFunctionArgs } from "~~/app/debug/_components/contract";
import { CollectModuleDataInput } from "~~/app/lens/_components/CollectModuleDataInput";
import { OpenActionDataInput } from "~~/app/lens/_components/OpenActionDataInput";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { CollectModuleContract, OpenActionContract, useProfile } from "~~/hooks/scaffold-lens";
import { ZERO_ADDRESS } from "~~/utils/scaffold-eth/common";

interface CreatePostProps {
  openActionModule: OpenActionContract | undefined;
  compatibleModules: CollectModuleContract[];
  collectModule: CollectModuleContract | undefined;
}

const CreatePost: React.FC<CreatePostProps> = ({ openActionModule, compatibleModules, collectModule }) => {
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
    if (!profileId || !postContent) return;

    const actionModules: `0x${string}`[] = [];
    const actionModulesInitDatas: `0x${string}`[] = [];

    if (openActionModule) {
      actionModules.push(openActionModule.contract.address as `0x${string}`);
    }

    if (collectModule) {
      if (!openActionModule) return;

      // If there is a Collect Module we're using CollectPublicationAction
      try {
        const formData = getParsedContractFunctionArgs(collectModuleInitForm);
        const formattedABI = collectModuleMetadataABI.map(param => ({
          ...param,
          // viem only supports standard tuple expressions
          type: param.type.replace(/tuple\([^)]*\)/, "tuple"),
        }));
        const collectInitData = encodeAbiParameters(formattedABI, formData);

        const actionInitData = encodeAbiParameters(openActionModule.contract.abi, [
          collectModule.contract.address,
          collectInitData,
        ]);
        console.log("actionInitData", actionInitData);
        actionModulesInitDatas.push(actionInitData);
      } catch (e) {
        setSubmitError("Error initializing Collect Module");
        return;
      }
    } else {
      // If there is no Collect Module we're using the OpenActionModule
      try {
        const formData = getParsedContractFunctionArgs(openActionInitForm);
        const formattedABI = openActionMetadataABI.map(param => ({
          ...param,
          // viem only supports standard tuple expressions
          type: param.type.replace(/tuple\([^)]*\)/, "tuple"),
        }));
        const openActionInitData = encodeAbiParameters(formattedABI, formData);

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
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex border-2 border-base-200 bg-base-200 rounded-xl text-accent">
        <textarea
          className="input focus-within:border-transparent focus:outline-none focus:bg-transparent text-neutral w-full h-40 p-4 border w-full font-medium placeholder:text-white/50 rounded-xl"
          ref={inputRef}
          value={postContent}
          onChange={e => setPostContent(e.target.value)}
          placeholder="Write your post here..."
        />
      </div>
      {openActionModule && !compatibleModules.length ? (
        <OpenActionDataInput
          module={openActionModule}
          form={openActionInitForm}
          setForm={setOpenActionInitForm}
          metadata={openActionMetadataABI}
          setMetadata={setOpenActionMetadataABI}
        />
      ) : (
        collectModule && (
          <CollectModuleDataInput
            module={collectModule}
            metadata={collectModuleMetadataABI}
            setMetadata={setCollectModuleMetadataABI}
            form={collectModuleInitForm}
            setForm={setCollectModuleInitForm}
          />
        )
      )}
      <div className="flex gap-2 items-center">
        <button className="btn btn-primary" onClick={submitPost} disabled={collectModuleRequired}>
          Create Post
        </button>
        {collectModuleRequired && (
          <div className="text-red-500 text-sm">
            A Collect Module must be selected to create a post with the Collect Publication Action
          </div>
        )}
        {submitError && <div className="text-red-500 text-sm">{submitError}</div>}
      </div>
    </div>
  );
};

export default CreatePost;
