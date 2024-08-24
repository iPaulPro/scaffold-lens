import React, { useRef, useState } from "react";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { CollectModuleContract, OpenActionContract, useProfile } from "~~/hooks/scaffold-lens";
import { ZERO_ADDRESS } from "~~/utils/scaffold-eth/common";

interface CreatePostProps {
  openActionModule: OpenActionContract | undefined;
  collectModule: CollectModuleContract | undefined;
}

const CreatePost: React.FC<CreatePostProps> = ({ openActionModule, collectModule }) => {
  const [postContent, setPostContent] = useState<string>();
  const { profileId } = useProfile();

  const { writeContractAsync } = useScaffoldWriteContract("LensHub");

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const submitPost = async () => {
    if (!profileId || !postContent) return;

    const actionModules: string[] = [];

    if (collectModule) {
      console.log("collectModule", collectModule);
    }

    if (openActionModule) {
      actionModules.push(openActionModule.contract.address);
    }

    await writeContractAsync({
      functionName: "post",
      args: [
        {
          profileId,
          contentURI: postContent,
          actionModules,
          actionModulesInitDatas: [],
          referenceModule: ZERO_ADDRESS,
          referenceModuleInitData: "0x",
        },
      ],
    });
  };

  return (
    <div>
      <div className="flex border-2 border-base-200 bg-base-200 rounded-xl text-accent">
        <textarea
          className="input focus-within:border-transparent focus:outline-none focus:bg-transparent text-neutral w-full h-40 p-4 border w-full font-medium placeholder:text-white/50 rounded-xl"
          ref={inputRef}
          value={postContent}
          onChange={e => setPostContent(e.target.value)}
          placeholder="Write your post here..."
        />
      </div>
      <button className="btn btn-primary mt-2" onClick={submitPost}>
        Create Post
      </button>
    </div>
  );
};

export default CreatePost;
