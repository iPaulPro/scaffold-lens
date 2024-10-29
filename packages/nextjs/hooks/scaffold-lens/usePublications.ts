import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LensClient, LimitType, PublicationType, development } from "@lens-protocol/client";
import { useIsMounted } from "usehooks-ts";
import { hardhat, polygonAmoy } from "viem/chains";
import { usePublicClient } from "wagmi";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import { OpenActionContract, useOpenActions, useProfile } from "~~/hooks/scaffold-lens";
import { Contract, contracts } from "~~/utils/scaffold-eth/contract";
import { toHex } from "~~/utils/scaffold-lens";

export type Publication = {
  profileId: bigint;
  pubId: bigint;
  contentURI: string;
  openActions: OpenActionContract[];
};

export const usePublications = (refreshCounter = 0) => {
  const [publications, setPublications] = useState<Publication[]>();
  const [isLoadingRemote, setIsLoadingRemote] = useState<boolean>(false);

  const isMounted = useIsMounted();
  const publicClient = usePublicClient();
  const { profileId } = useProfile();
  const { openActions } = useOpenActions();
  const { targetNetwork } = useTargetNetwork();

  const chainId = useMemo(() => targetNetwork?.id, [targetNetwork]);

  const lensHub = contracts?.[targetNetwork.id]?.["LensHub"] as Contract<"LensHub">;

  const lensClient = useRef(
    new LensClient({
      environment: development,
    }),
  ).current;

  const getLocalPublications = useCallback(async () => {
    if (!profileId || !publicClient || !lensHub) return [];

    const pubs: Publication[] = [];
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

        if (publicationRes.pubType === 0) {
          hasMore = false;
          break;
        }

        let enabledActions: (OpenActionContract | null)[] = [];
        if (openActions?.length) {
          enabledActions = await Promise.all(
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
        }

        pubs.push({
          profileId,
          pubId: index,
          contentURI: publicationRes.contentURI,
          openActions: enabledActions.filter((action): action is OpenActionContract => action !== null),
        });

        index++;
      } catch (error) {
        console.error("Error fetching publication:", error);
        hasMore = false;
      }
    }

    return pubs;
  }, [publicClient, lensHub, openActions, profileId]);

  const getEnabledOpenActionsBatch = useCallback(
    async (profileId: bigint, publications: Publication[]) => {
      if (!openActions?.length || !publicClient || !lensHub) return undefined;

      const getOpenActionsContractConfig = {
        address: lensHub.address,
        abi: lensHub.abi,
        functionName: "isActionModuleEnabledInPublication",
      } as const;

      const actionsOnPublications = new Map<bigint, OpenActionContract[]>();

      for (let i = 0; i < openActions.length; i++) {
        const action = openActions[i];
        const contracts = publications.map(publication => ({
          ...getOpenActionsContractConfig,
          args: [profileId, publication.pubId, action.contract.address],
        }));
        const call = await publicClient.multicall({ contracts });

        publications.forEach((publication, j) => {
          const res = call[j];
          if (res.status === "success" && res.result) {
            if (!actionsOnPublications.has(publication.pubId)) {
              actionsOnPublications.set(publication.pubId, []);
            }
            actionsOnPublications.get(publication.pubId)?.push(action);
          }
        });
      }

      return actionsOnPublications;
    },
    [openActions, publicClient, lensHub],
  );

  const getRemotePublications = useCallback(
    async (profileId: bigint) => {
      if (isLoadingRemote) return undefined;

      const result = await lensClient.publication.fetchAll({
        where: {
          from: [toHex(profileId)],
          publicationTypes: [PublicationType.Post],
        },
        limit: LimitType.Fifty,
      });

      const publications = result.items
        .filter(item => !item.momoka)
        .map(
          item =>
            ({
              profileId: profileId,
              pubId: BigInt(item.id.split("-")[1]),
              contentURI: "metadata" in item ? item.metadata.rawURI : "",
              openActions: [],
            }) satisfies Publication,
        );

      const enabledActions = await getEnabledOpenActionsBatch(profileId, publications);

      const pubs: Publication[] = [];

      publications.forEach(publication => {
        pubs.push({
          ...publication,
          openActions: enabledActions?.get(publication.pubId) ?? [],
        });
      });

      return pubs;
    },
    [isLoadingRemote, getEnabledOpenActionsBatch, lensClient.publication],
  );

  useEffect(() => {
    const getPublications = async () => {
      if (!isMounted || !profileId) {
        return;
      }

      if (chainId === hardhat.id) {
        const publications = await getLocalPublications();
        setPublications(publications?.reverse());
      } else if (chainId === polygonAmoy.id) {
        setIsLoadingRemote(true);
        try {
          const publications = await getRemotePublications(profileId);
          setPublications(publications);
        } finally {
          setIsLoadingRemote(false);
        }
      }
    };

    getPublications();
  }, [isMounted, refreshCounter, profileId, chainId]);

  return useMemo(() => ({ publications }), [publications]);
};
