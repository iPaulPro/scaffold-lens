"use client";

import React, { ReactNode, createContext, useEffect, useState } from "react";

// The private key for the burner wallet, whitelisted on Lens contracts
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
  const [profileId, setProfileId] = useState<bigint | undefined>(undefined);

  useEffect(() => {
    // Set burnerWallet.pk to whitelisted private key
    localStorage.setItem("burnerWallet.pk", burnerPrivateKey);

    const storedProfileId = localStorage.getItem("profileId");
    if (storedProfileId) {
      setProfileId(BigInt(storedProfileId));
    }
  }, []);

  const updateProfileId = (newProfileId: bigint) => {
    setProfileId(newProfileId);
    localStorage.setItem("profileId", newProfileId.toString());
  };

  return <ProfileContext.Provider value={{ profileId, updateProfileId }}>{children}</ProfileContext.Provider>;
}
