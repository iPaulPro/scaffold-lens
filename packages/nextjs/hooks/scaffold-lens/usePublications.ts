import { useCallback, useEffect, useState } from "react";
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
  const { profileId } = useProfile();
  const { openActions } = useOpenActions();

  const publicClient = usePublicClient();

  const getPublications = useCallback(async () => {
    console.log("getPublications called...");
    if (!profileId || !openActions?.length || !publicClient) return;

    const pubs: Publication[] = [];
    const lensHub = deployedContracts[hardhat.id].LensHub;
    let hasMore = true;
    let index = 1n;

    while (hasMore) {
      try {
        const publicationRes = await publicClient.readContract({
          address: lensHub.address,
          abi: lensHub.abi,
          functionName: "getPublication",
          args: [profileId, index],
        });

        if (publicationRes.pubType === PublicationType.Nonexistent) {
          hasMore = false;
          break;
        }

        const enabledActions = await Promise.all(
          openActions.map(async action => {
            const enabled = await publicClient.readContract({
              address: lensHub.address,
              abi: lensHub.abi,
              functionName: "isActionModuleEnabledInPublication",
              args: [profileId, index, action.contract.address],
            });
            return enabled ? action : null;
          }),
        );

        pubs.push({
          profileId,
          pubId: index,
          pointedProfileId: publicationRes.pointedProfileId,
          pointedPubId: publicationRes.pointedPubId,
          contentURI: publicationRes.contentURI,
          referenceModule: publicationRes.referenceModule as `0x${string}`,
          pubType: publicationRes.pubType,
          rootProfileId: publicationRes.rootProfileId,
          rootPubId: publicationRes.rootPubId,
          openActions: enabledActions.filter((action): action is OpenActionContract => action !== null),
        });

        index++;
      } catch (error) {
        console.error("Error fetching publication:", error);
        hasMore = false;
      }
    }

    setPublications(pubs);
  }, [publicClient, profileId, openActions]);

  useEffect(() => {
    getPublications();
  }, [getPublications, refreshCounter]);

  return { publications };
};
