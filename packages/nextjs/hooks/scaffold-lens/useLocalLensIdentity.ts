import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LensSigner } from "@frames.js/render/identity/lens";
import { LensFrameContext } from "@frames.js/render/identity/lens/use-lens-context";
import { WebStorage } from "@frames.js/render/identity/storage/web-storage";
import { Storage } from "@frames.js/render/identity/types";
import type { SignFrameActionFunction, SignerStateActionContext } from "@frames.js/render/types";
import { LensClient, production } from "@lens-protocol/client";
import { useAccount, useConfig, useConnections } from "wagmi";
import { signTypedData, switchChain } from "wagmi/actions";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import { LensSignerInstance } from "~~/hooks/scaffold-lens/useLensIdentity";
import { useProfile } from "~~/hooks/scaffold-lens/useProfile";
import { ZERO_ADDRESS } from "~~/utils/scaffold-eth/common";
import { toHex } from "~~/utils/scaffold-lens";

type LensFrameRequest = {
  clientProtocol: string;
  untrustedData: {
    specVersion: string;
    profileId: string;
    pubId: string;
    url: string;
    buttonIndex: number;
    unixTimestamp: number;
    deadline?: number;
    inputText?: string;
    state?: string;
    actionResponse?: string;
    identityToken: string;
  };
  trustedData: {
    messageBytes: string;
  };
};

type LensIdentityOptions = {
  /**
   * @defaultValue WebStorage
   */
  storage?: Storage;
  /**
   * @defaultValue "lensProfile"
   */
  storageKey?: string;
};

const frameTypes = {
  FrameData: [
    {
      name: "specVersion",
      type: "string",
    },
    {
      name: "url",
      type: "string",
    },
    {
      name: "buttonIndex",
      type: "uint256",
    },
    {
      name: "profileId",
      type: "string",
    },
    {
      name: "pubId",
      type: "string",
    },
    {
      name: "inputText",
      type: "string",
    },
    {
      name: "state",
      type: "string",
    },
    {
      name: "actionResponse",
      type: "string",
    },
    {
      name: "deadline",
      type: "uint256",
    },
  ],
};

const defaultStorage = new WebStorage();

export function useLocalLensIdentity({
  storage = defaultStorage,
  storageKey = "lensProfile",
}: LensIdentityOptions = {}): LensSignerInstance {
  const storageRef = useRef(storage);
  const [lensSigner, setLensSigner] = useState<LensSigner | null>(null);
  const config = useConfig();
  const { address } = useAccount();
  const activeConnection = useConnections();

  const { profileId } = useProfile();
  const { targetNetwork } = useTargetNetwork();

  const chainId = useMemo(() => targetNetwork?.id, [targetNetwork]);

  const lensClient = useRef(
    new LensClient({
      environment: production,
    }),
  ).current;

  useEffect(() => {
    if (!profileId || !address) return;
    setLensSigner({
      profileId: toHex(profileId),
      address: address as `0x${string}`,
      identityToken: "",
      handle: "",
      accessToken: "",
    });
  }, [address, profileId]);

  const logout = useCallback(async () => {
    await storageRef.current.delete(storageKey);
    setLensSigner(null);
  }, [storageKey]);

  const onSignerlessFramePress = useCallback(async () => {
    if (!profileId) {
      throw new Error("No Lens profile is active");
    }
  }, [profileId]);

  const signFrameAction: SignFrameActionFunction<
    SignerStateActionContext<LensSigner, LensFrameContext>,
    LensFrameRequest
  > = useCallback(
    async (actionContext: SignerStateActionContext<LensSigner, LensFrameContext>) => {
      if (!lensSigner) {
        throw new Error("No lens signer active");
      }

      if (activeConnection[0]?.chainId !== chainId) {
        await switchChain(config, { chainId });
      }

      const message = {
        url: actionContext.url,
        inputText: actionContext.inputText || "",
        state: actionContext.state || "",
        buttonIndex: actionContext.buttonIndex,
        actionResponse: actionContext.type === "tx-post" ? actionContext.transactionId : "",
        profileId: lensSigner.profileId,
        pubId: actionContext.frameContext.pubId || "",
        specVersion: "1.0.0",
        deadline: Math.floor(Date.now() / 1000) + 86400, // 1 day
      };

      const signature = await signTypedData(config, {
        domain: {
          chainId,
          name: "Lens Frames",
          verifyingContract: ZERO_ADDRESS,
          version: "1.0.0",
        },
        types: frameTypes,
        message,
        primaryType: "FrameData",
      });

      const searchParams = new URLSearchParams({
        postType: actionContext.type === "tx-post" ? "post" : actionContext.frameButton.action,
        postUrl: actionContext.target ?? "",
      });

      return {
        body: {
          clientProtocol: "lens@1.0.0",
          untrustedData: {
            ...message,
            identityToken: address ?? ZERO_ADDRESS, // simply send the address here
            unixTimestamp: Date.now(),
            chainId,
          },
          trustedData: {
            messageBytes: signature,
          },
        },
        searchParams,
      };
    },
    [activeConnection, config, lensClient.frames, lensClient.profile, lensSigner, address, chainId],
  );

  return useMemo(
    () => ({
      signer: lensSigner,
      hasSigner: !!address,
      signFrameAction,
      isLoadingSigner: false,
      onSignerlessFramePress,
      logout,
      showProfileSelector: false,
      closeProfileSelector: () => {
        return false;
      },
      availableProfiles: [],
      handleSelectProfile: async () => {
        return Promise.resolve();
      },
    }),
    [lensSigner, logout, onSignerlessFramePress, signFrameAction, address],
  );
}
