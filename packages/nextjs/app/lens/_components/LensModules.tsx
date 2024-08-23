"use client";

import React, { useState } from "react";
import CollectModuleSelector from "~~/app/lens/_components/CollectModuleSelector";
import OpenActionsSelector from "~~/app/lens/_components/OpenActionsSelector";
import { Profile } from "~~/app/lens/_components/Profile";
import { CollectModuleContract } from "~~/hooks/scaffold-lens";
import { OpenActionContract } from "~~/hooks/scaffold-lens/useOpenActions";

const LensModules: React.FC = () => {
  const [selectedActionModule, setSelectedActionModule] = useState<OpenActionContract>();
  const [, setSelectedCollectModule] = useState<CollectModuleContract>();

  const onOpenActionSelected = async (contract: OpenActionContract) => {
    setSelectedActionModule(contract);
  };

  const onCollectModuleSelected = async (contract: CollectModuleContract) => {
    setSelectedCollectModule(contract);
  };

  return (
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
      </div>
    </div>
  );
};

export default LensModules;
