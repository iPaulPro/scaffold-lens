"use client";

import React, { useEffect, useState } from "react";
import { usePublicClient } from "wagmi";
import { ActOnPost } from "~~/app/lens/_components/ActOnPost";
import { Address } from "~~/components/scaffold-eth";
import { CollectModuleContract, Publication, useCollectModules } from "~~/hooks/scaffold-lens";
import { getCollectModuleAddress } from "~~/utils/scaffold-lens";

interface PublicationProps {
  publication: Publication;
}

export const Post: React.FC<PublicationProps> = ({ publication }) => {
  const [collectModule, setCollectModule] = useState<CollectModuleContract>();

  const publicClient = usePublicClient();
  const { collectModules } = useCollectModules();

  const openAction = publication.openActions[0];

  useEffect(() => {
    if (!publicClient || !openAction) return;

    const getCollectModule = async () => {
      const collectModuleAddress = await getCollectModuleAddress(publicClient, publication, openAction);
      if (!collectModuleAddress) return;
      const collectModule = collectModules?.find(module => module.contract.address === collectModuleAddress);
      setCollectModule(collectModule);
    };
    getCollectModule();
  }, [openAction, publicClient, collectModules, publication]);

  return (
    <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col space-y-2 p-4">
      <div className="text-sm opacity-70">Publication {publication.pubId.toString()}</div>
      <div>{publication.contentURI}</div>
      <div className="flex gap-2 flex-wrap">
        {openAction && (
          <div className="flex w-fit text-sm border border-base-300 rounded-lg divide-x divide-base-300">
            <div className="py-1 px-2 opacity-70 flex items-center bg-secondary text-xs rounded-l-lg">Open Action</div>
            <div className="flex flex-col py-1 px-2 flex justify-center">
              <div className="font-semibold flex items-center">{openAction.contractName}</div>
              <Address address={openAction.contract.address} size="xs" />
            </div>
          </div>
        )}
        {collectModule && (
          <div className="flex w-fit text-sm border border-base-300 rounded-lg divide-x divide-base-300">
            <div className="py-1 px-2 opacity-70 flex items-center bg-secondary text-xs rounded-l-lg">
              Collect Module
            </div>
            <div className="flex flex-col py-1 px-2 flex justify-center">
              <div className="font-semibold">{collectModule.contractName}</div>
              <Address address={collectModule.contract.address} size="xs" />
            </div>
          </div>
        )}
      </div>
      {publication.openActions.length > 0 && <ActOnPost publication={publication} />}
    </div>
  );
};
