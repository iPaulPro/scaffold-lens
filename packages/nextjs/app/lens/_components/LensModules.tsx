"use client";

import React, { useState } from "react";
import CollectModuleSelector from "~~/app/lens/_components/CollectModuleSelector";
import CreatePost from "~~/app/lens/_components/CreatePost";
import CreateProfile from "~~/app/lens/_components/CreateProfile";
import OpenActionsSelector from "~~/app/lens/_components/OpenActionsSelector";
import { Profile } from "~~/app/lens/_components/Profile";
import ProfileSelector from "~~/app/lens/_components/ProfileSelector";
import { CollectModuleContract, useProfile } from "~~/hooks/scaffold-lens";
import { OpenActionContract } from "~~/hooks/scaffold-lens/useOpenActions";

const LensModules: React.FC = () => {
  const [selectedActionModule, setSelectedActionModule] = useState<OpenActionContract>();
  const [selectedCollectModule, setSelectedCollectModule] = useState<CollectModuleContract>();

  const { profileId } = useProfile();

  const onOpenActionSelected = async (contract: OpenActionContract) => {
    setSelectedActionModule(contract);
  };

  const onCollectModuleSelected = async (contract: CollectModuleContract) => {
    setSelectedCollectModule(contract);
  };

  return (
    <>
      <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-6 px-6 lg:px-10 lg:gap-12 w-full max-w-7xl">
          <div className="col-span-5 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="col-span-1 flex flex-col">
              <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl p-6 mb-6 space-y-1">
                <div className="flex flex-col gap-1">
                  <span className="font-bold">Lens Profiles</span>
                  <ProfileSelector />
                  <CreateProfile />
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
              <div className="z-10">
                {profileId ? (
                  <div className="flex flex-col gap-y-4">
                    <div className="flex gap-4">
                      <OpenActionsSelector openActionSelected={onOpenActionSelected} />
                      {selectedActionModule && (
                        <CollectModuleSelector
                          openActionModuleAddress={selectedActionModule.contract.address}
                          collectModuleSelected={onCollectModuleSelected}
                        />
                      )}
                    </div>
                    <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col gap-y-2 p-4">
                      <Profile />
                      <CreatePost openActionModule={selectedActionModule} collectModule={selectedCollectModule} />
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
