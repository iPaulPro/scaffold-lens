"use client";

import React, { useCallback, useMemo, useState } from "react";
import { usePublicClient } from "wagmi";
import {
  CollectModuleSelector,
  CreatePost,
  CreateProfile,
  ERC20Token,
  OpenActionsSelector,
  Post,
  Profile,
  ProfileSelector,
} from "~~/app/lens/_components";
import {
  CollectModuleContract,
  OpenActionContract,
  useCollectModules,
  useERC20Tokens,
  useProfile,
  usePublications,
} from "~~/hooks/scaffold-lens";

export const LensModules: React.FC = () => {
  const [selectedActionModule, setSelectedActionModule] = useState<OpenActionContract>();
  const [selectedCollectModule, setSelectedCollectModule] = useState<CollectModuleContract>();
  const [compatibleModules, setCompatibleModules] = useState<CollectModuleContract[]>([]);
  const [postRefreshCounter, setPostRefreshCounter] = useState(0);

  const { profileId } = useProfile();
  const { collectModules } = useCollectModules();
  const { erc20Tokens } = useERC20Tokens();
  const { publications } = usePublications(postRefreshCounter);
  const publicClient = usePublicClient();

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

  const handleActionModuleChange = useCallback((module: OpenActionContract | undefined) => {
    setCompatibleModules([]);
    setSelectedCollectModule(undefined);
    setSelectedActionModule(module);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-6 px-6 lg:px-10 lg:gap-12 w-full max-w-7xl">
          <div className="col-span-5 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="col-span-1 flex flex-col">
              <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl p-6 mb-6 space-y-1">
                <div className="flex flex-col">
                  <span className="font-bold">Lens Profiles</span>
                  <ProfileSelector />
                  <CreateProfile />
                </div>
              </div>
              {erc20Tokens?.map(token => <ERC20Token token={token} key={token.contract.address} />)}
            </div>
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
              <div className="z-10">
                {profileId ? (
                  <div className="flex flex-col">
                    <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col">
                      <div className="flex gap-4 px-4 pt-4">
                        <OpenActionsSelector openActionSelected={handleActionModuleChange} />
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
                        <CreatePost
                          openActionModule={selectedActionModule}
                          compatibleModules={compatibleModules}
                          collectModule={selectedCollectModule}
                          setPostRefreshCounter={setPostRefreshCounter}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-2 pt-4 flex-col-reverse">
                      {publications?.map(publication => (
                        <Post
                          publication={publication}
                          collectModules={collectModules}
                          key={publication.pubId.toString()}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col gap-y-2 p-4">
                    <div>Create a profile to get started</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
