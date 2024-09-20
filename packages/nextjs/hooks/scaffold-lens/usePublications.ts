import { useCallback, useEffect, useMemo, useState } from "react";
import { LensClient, LimitType, PublicationType, development } from "@lens-protocol/client";
import { useIsMounted } from "usehooks-ts";
import { polygonAmoy } from "viem/chains";
import { usePublicClient } from "wagmi";
import { useDeployedContractInfo, useTargetNetwork } from "~~/hooks/scaffold-eth";
import { OpenActionContract, useOpenActions, useProfile } from "~~/hooks/scaffold-lens";

export type Publication = {
  profileId: bigint;
  pubId: bigint;
  contentURI: string;
  openActions: OpenActionContract[];
};

const lensClient = new LensClient({
  environment: development,
});

export const usePublications = (refreshCounter = 0) => {
  const [publications, setPublications] = useState<Publication[]>();
  const [isLoadingRemote, setIsLoadingRemote] = useState<boolean>(false);

  const isMounted = useIsMounted();
  const publicClient = usePublicClient();
  const { profileId } = useProfile();
  const { openActions } = useOpenActions();
  const { targetNetwork } = useTargetNetwork();

  const chainId = useMemo(() => targetNetwork?.id, [targetNetwork]);

  const { data: lensHubData, isLoading: loadingLensHubData } = useDeployedContractInfo("LensHub");

  const getBatchPublications = useCallback(
    async (profileId: bigint, index = 1n) => {
      if (!publicClient || !lensHubData) return undefined;
      const getPublicationsContractConfig = {
        address: lensHubData.address,
        abi: lensHubData.abi,
        functionName: "getPublication",
      } as const;

      const contracts = Array.from({ length: 10 }, (_, i) => ({
        ...getPublicationsContractConfig,
        args: [profileId, index + BigInt(i)],
      }));
      const call = await publicClient.multicall({ contracts });
      return call
        .filter(res => res.status === "success")
        .map(
          (res: any, i: number) =>
            ({
              profileId,
              pubId: BigInt(i + 1),
              contentURI: res.result.contentURI,
              openActions: [],
            }) satisfies Publication,
        );
    },
    [publicClient, lensHubData, loadingLensHubData],
  );

  const getEnabledOpenActions = useCallback(
    async (profileId: bigint, publications: Publication[]) => {
      console.log(
        "usePublications: getEnabledOpenActions: checking",
        openActions?.length,
        "open actions",
        "lensHubData=",
        lensHubData,
      );
      if (!openActions?.length || !publicClient || !lensHubData) return undefined;

      const getOpenActionsContractConfig = {
        address: lensHubData.address,
        abi: lensHubData.abi,
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
    [openActions, publicClient, lensHubData, loadingLensHubData],
  );

  const getLocalPublications = useCallback(
    async (profileId: bigint) => {
      const pubs: Publication[] = [];
      const index = 1n;

      try {
        const publications = await getBatchPublications(profileId, index);
        if (!publications) return pubs;

        const enabledActions = await getEnabledOpenActions(profileId, publications);

        publications.forEach(publication => {
          pubs.push({
            ...publication,
            openActions: enabledActions?.get(publication.pubId) ?? [],
          });
        });
      } catch (error) {
        console.error("Error fetching local publications:", error);
      }

      return pubs;
    },
    [getBatchPublications, getEnabledOpenActions],
  );

  const getRemotePublications = useCallback(
    async (profileId: bigint) => {
      if (isLoadingRemote || loadingLensHubData) return undefined;

      const result = await lensClient.publication.fetchAll({
        where: {
          from: ["0x" + profileId.toString(16)],
          publicationTypes: [PublicationType.Post],
          // metadata: {
          //   publishedOn: ["scaffold-lens"]
          // }
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

      const enabledActions = await getEnabledOpenActions(profileId, publications);

      const pubs: Publication[] = [];

      publications.forEach(publication => {
        pubs.push({
          ...publication,
          openActions: enabledActions?.get(publication.pubId) ?? [],
        });
      });

      return pubs;
    },
    [isLoadingRemote, getEnabledOpenActions, loadingLensHubData],
  );

  useEffect(() => {
    const getPublications = async () => {
      if (!isMounted || !profileId || !openActions) {
        return;
      }

      if (chainId === polygonAmoy.id) {
        setIsLoadingRemote(true);
        try {
          const publications = await getRemotePublications(profileId);
          setPublications(publications);
        } finally {
          setIsLoadingRemote(false);
        }
      } else {
        const publications = await getLocalPublications(profileId);
        setPublications(publications?.reverse());
      }
    };

    getPublications();
  }, [isMounted, refreshCounter, profileId, chainId, openActions]);

  return useMemo(() => ({ publications }), [publications]);
};
