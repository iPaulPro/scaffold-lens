"use client";

import React, { useEffect, useState } from "react";
import { usePublicClient } from "wagmi";
import { ActOnPost } from "~~/app/lens/_components/ActOnPost";
import { Address } from "~~/components/scaffold-eth";
import { CollectModuleContract, Publication } from "~~/hooks/scaffold-lens";
import { getCollectModuleAddress } from "~~/utils/scaffold-lens";

interface PublicationProps {
  publication: Publication;
  collectModules: CollectModuleContract[] | undefined;
}

export const Post: React.FC<PublicationProps> = ({ publication, collectModules }) => {
  const [collectModule, setCollectModule] = useState<CollectModuleContract>();
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const publicClient = usePublicClient();

  const openAction = publication.openActions[0];

  useEffect(() => {
    if (!publicClient || !openAction) return;

    const getCollectModule = async () => {
      const collectModuleAddress = await getCollectModuleAddress(publicClient, publication, openAction);
      if (!collectModuleAddress || !collectModules?.length) return;
      const collectModule = collectModules?.find(module => module.contract.address === collectModuleAddress);
      setCollectModule(collectModule);
    };
    getCollectModule();
  }, [openAction, publicClient, collectModules, publication]);

  const fetchContent = async () => {
    setIsLoading(true);
    setError(null);
    try {
      let uri = publication.contentURI;
      if (uri.startsWith("ipfs://")) {
        uri = uri.replace("ipfs://", "https://ipfs.io/ipfs/");
      } else if (uri.startsWith("ar://")) {
        uri = uri.replace("ar://", "https://gateway.irys.xyz/");
      }
      const response = await fetch(uri);
      if (!response.ok) {
        throw new Error("Failed to fetch content");
      }
      const json = await response.json();
      setContent(json.lens.content);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, [publication.contentURI]);

  return (
    <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col space-y-2 p-4">
      <div className="text-sm opacity-70">Publication {publication.pubId.toString()}</div>
      {isLoading ? (
        <div>Loading content...</div>
      ) : error ? (
        <div>
          <div className="text-red-500">Error: {error}</div>
          <button className="btn btn-secondary" onClick={fetchContent}>
            Retry
          </button>
        </div>
      ) : (
        <div>{content}</div>
      )}
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
      {publication.openActions.length > 0 && <ActOnPost publication={publication} collectModule={collectModule} />}
    </div>
  );
};
