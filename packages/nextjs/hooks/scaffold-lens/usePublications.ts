import { useEffect, useState } from "react";
import { hardhat } from "viem/chains";
import { usePublicClient } from "wagmi";
import deployedContracts from "~~/contracts/deployedContracts";
import { OpenActionContract, useOpenActions, useProfile } from "~~/hooks/scaffold-lens";

export enum PublicationType {
  Nonexistent,
  Post,
  Comment,
  Mirror,
  Quote,
}

export type Publication = {
  profileId: bigint;
  pubId: bigint;
  pointedProfileId: bigint;
  pointedPubId: bigint;
  contentURI: string;
  referenceModule: `0x${string}`;
  pubType: PublicationType;
  rootProfileId: bigint;
  rootPubId: bigint;
  openActions: OpenActionContract[];
};

export const usePublications = (refreshCounter = 0) => {
  const [publications, setPublications] = useState<Publication[]>();

  const publicClient = usePublicClient();
  const { profileId } = useProfile();
  const { openActions } = useOpenActions();

  useEffect(() => {
    const pubs: Publication[] = [];

    const getPublications = async () => {
      if (!publicClient || !profileId) return;

      const lensHub = deployedContracts[hardhat.id].LensHub;
      let hasMore = true;
      let index = 1n;
      while (hasMore) {
        const publicationRes = await publicClient.readContract({
          address: lensHub.address,
          abi: lensHub.abi,
          functionName: "getPublication",
          args: [profileId, index],
        });

        if (publicationRes.pubType !== PublicationType.Nonexistent) {
          const enabledActions: OpenActionContract[] = [];
          for (const action of openActions ?? []) {
            const enabled = await publicClient.readContract({
              address: lensHub.address,
              abi: lensHub.abi,
              functionName: "isActionModuleEnabledInPublication",
              args: [profileId, index, action.contract.address],
            });
            if (enabled) {
              enabledActions.push(action);
            }
          }

          pubs.push({
            profileId: profileId,
            pubId: index,
            pointedProfileId: publicationRes.pointedProfileId,
            pointedPubId: publicationRes.pointedPubId,
            contentURI: publicationRes.contentURI,
            referenceModule: publicationRes.referenceModule as `0x${string}`,
            pubType: publicationRes.pubType,
            rootProfileId: publicationRes.rootProfileId,
            rootPubId: publicationRes.rootPubId,
            openActions: enabledActions,
          });

          index++;
        } else {
          hasMore = false;
        }
      }

      setPublications(pubs);
    };

    getPublications();
  }, [publicClient, profileId, openActions, refreshCounter]);

  return { publications };
};
