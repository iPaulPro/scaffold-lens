"use client";

import React, { ReactNode, createContext, useCallback, useEffect, useMemo, useState } from "react";
import { useAccount } from "wagmi";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";

export interface ProfileContextType {
  profileId: bigint | undefined;
  updateProfileId: (newProfileId: bigint) => void;
}

export const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

interface ProfileProviderProps {
  children: ReactNode;
}

export function LensProfileProvider({ children }: ProfileProviderProps) {
  const [profileId, setProfileId] = useState<bigint>();

  const { targetNetwork } = useTargetNetwork();
  const chainId = useMemo(() => targetNetwork?.id, [targetNetwork]);

  const { address } = useAccount();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedProfileId = localStorage.getItem("profileId-" + chainId);
    if (storedProfileId) {
      setProfileId(BigInt(storedProfileId));
    } else {
      setProfileId(undefined);
    }
  }, [chainId]);

  useEffect(() => {
    if (!address) {
      setProfileId(undefined);
    }
  }, [address]);

  const updateProfileId = useCallback(
    (newProfileId: bigint) => {
      setProfileId(newProfileId);
      localStorage.setItem("profileId-" + chainId, newProfileId.toString());
    },
    [chainId],
  );

  const contextValue = useMemo(() => ({ profileId, updateProfileId }), [profileId, updateProfileId]);

  return <ProfileContext.Provider value={contextValue}>{children}</ProfileContext.Provider>;
}
