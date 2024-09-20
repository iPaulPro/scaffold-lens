"use client";

import React, { ReactNode, createContext, useEffect, useMemo, useState } from "react";

// The private key for the burner wallet, whitelisted on Lens contracts.
// If this is changed, the public key must also be changed in packages/hardhat/deploy/00_deploy_lens_protocol.ts
const burnerPrivateKey =
  process.env.NEXT_PUBLIC_BURNER_PRIVATE_KEY || "0xf63df6f85a8a01eeed7eb110f19d5812cf3da44d946d98daca77514341d6c708";

export interface ProfileContextType {
  profileId: bigint | undefined;
  updateProfileId: (newProfileId: bigint) => void;
}

export const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

interface ProfileProviderProps {
  children: ReactNode;
}

export function LensProfileProvider({ children }: ProfileProviderProps) {
  const [profileId, setProfileId] = useState(() => {
    if (typeof window !== "undefined") {
      const storedProfileId = localStorage.getItem("profileId");
      return storedProfileId ? BigInt(storedProfileId) : undefined;
    }
    return undefined;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set burnerWallet.pk to whitelisted private key
      localStorage.setItem("burnerWallet.pk", burnerPrivateKey);
    }
  }, []);

  const updateProfileId = (newProfileId: bigint) => {
    setProfileId(newProfileId);
    localStorage.setItem("profileId", newProfileId.toString());
  };

  const contextValue = useMemo(() => ({ profileId, updateProfileId }), [profileId]);

  return <ProfileContext.Provider value={contextValue}>{children}</ProfileContext.Provider>;
}
