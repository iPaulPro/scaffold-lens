import React, { useEffect, useRef, useState } from "react";
import { AbiParameter } from "abitype";
import { encodeAbiParameters } from "viem";
import { getParsedContractFunctionArgs } from "~~/app/debug/_components/contract";
import { CollectModuleDataInput } from "~~/app/lens/_components/CollectModuleDataInput";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { CollectModuleContract, OpenActionContract, useProfile } from "~~/hooks/scaffold-lens";
import { ZERO_ADDRESS } from "~~/utils/scaffold-eth/common";
import { collectPublicationAddress, collectPublicationAddressInitABI } from "~~/utils/scaffold-lens";

interface CreatePostProps {
  openActionModule: OpenActionContract | undefined;
  collectModule: CollectModuleContract | undefined;
}

const CreatePost: React.FC<CreatePostProps> = ({ openActionModule, collectModule }) => {
  const [postContent, setPostContent] = useState<string>();
  const [collectModuleRequired, setCollectModuleRequired] = useState<boolean>(true);
  const [collectModuleMetadataABI, setCollectModuleMetadataABI] = useState<AbiParameter[]>([]);
  const [collectModuleInitForm, setCollectModuleInitForm] = useState<Record<string, any>>({});

  const [moduleError, setModuleError] = useState<string>();

  const { profileId } = useProfile();
  const { writeContractAsync } = useScaffoldWriteContract("LensHub");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (openActionModule?.contract.address === collectPublicationAddress) {
      setCollectModuleRequired(!collectModule);
    } else {
      setCollectModuleRequired(false);
    }
  }, [openActionModule, collectModule]);

  const submitPost = async () => {
    if (!profileId || !postContent) return;

    const actionModules: `0x${string}`[] = [];
    const actionModulesInitDatas: `0x${string}`[] = [];

    if (openActionModule) {
      actionModules.push(openActionModule.contract.address as `0x${string}`);
    }

    if (collectModule) {
      // If there is a Collect Module we're using CollectPublicationAction
      try {
        const formData = getParsedContractFunctionArgs(collectModuleInitForm);
        const formattedABI = collectModuleMetadataABI.map(param => ({
          ...param,
          // viem only supports standard tuple expressions
          type: param.type.replace(/tuple\([^)]*\)/, "tuple"),
        }));
        const collectInitData = encodeAbiParameters(formattedABI, formData);

        const actionInitData = encodeAbiParameters(collectPublicationAddressInitABI, [
          collectModule.contract.address,
          collectInitData,
        ]);
        console.log("actionInitData", actionInitData);
        actionModulesInitDatas.push(actionInitData);
      } catch (e) {
        setModuleError("Error initializing Collect Module");
        return;
      }
    }

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
      {collectModule && (
        <CollectModuleDataInput
          module={collectModule}
          metadata={collectModuleMetadataABI}
          setMetadata={setCollectModuleMetadataABI}
          form={collectModuleInitForm}
          setForm={setCollectModuleInitForm}
        />
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
        {moduleError && <div className="text-red-500 text-sm">{moduleError}</div>}
      </div>
    </div>
  );
};

export default CreatePost;
