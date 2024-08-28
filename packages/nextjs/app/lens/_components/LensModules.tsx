"use client";

import React, { useCallback, useEffect, useState } from "react";
import { usePublicClient } from "wagmi";
import CollectModuleSelector from "~~/app/lens/_components/CollectModuleSelector";
import CreatePost from "~~/app/lens/_components/CreatePost";
import CreateProfile from "~~/app/lens/_components/CreateProfile";
import ERC20Token from "~~/app/lens/_components/ERC20Token";
import OpenActionsSelector from "~~/app/lens/_components/OpenActionsSelector";
import { Profile } from "~~/app/lens/_components/Profile";
import ProfileSelector from "~~/app/lens/_components/ProfileSelector";
import { CollectModuleContract, useCollectModules, useProfile } from "~~/hooks/scaffold-lens";
import { useERC20Tokens } from "~~/hooks/scaffold-lens/useERC20Tokens";
import { OpenActionContract } from "~~/hooks/scaffold-lens/useOpenActions";

const LensModules: React.FC = () => {
  const [selectedActionModule, setSelectedActionModule] = useState<OpenActionContract>();
  const [selectedCollectModule, setSelectedCollectModule] = useState<CollectModuleContract>();
  const [compatibleModules, setCompatibleModules] = useState<CollectModuleContract[]>([]);

  const { profileId } = useProfile();
  const { collectModules } = useCollectModules();
  const { erc20Tokens } = useERC20Tokens();

  const publicClient = usePublicClient();

  useEffect(() => {
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

  const handleActionModuleChange = useCallback((module: OpenActionContract) => {
    setCompatibleModules([]);
    setSelectedCollectModule(undefined);
    setSelectedActionModule(module);
  }, []);

  useEffect(() => {
    console.log("found erc20 tokens:", erc20Tokens);
  }, [erc20Tokens]);

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
                  <div className="flex flex-col gap-y-4">
                    <div className="flex gap-4">
                      <OpenActionsSelector openActionSelected={handleActionModuleChange} />
                      {compatibleModules.length > 0 && (
                        <CollectModuleSelector
                          compatibleModules={compatibleModules}
                          collectModuleSelected={setSelectedCollectModule}
                        />
                      )}
                    </div>
                    <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col gap-y-2 p-4">
                      <Profile />
                      <CreatePost
                        openActionModule={selectedActionModule}
                        compatibleModules={compatibleModules}
                        collectModule={selectedCollectModule}
                      />
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

export default LensModules;
