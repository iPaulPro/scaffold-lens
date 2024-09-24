"use client";

import React, { ReactNode, createContext, useMemo, useState } from "react";

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

  const updateProfileId = (newProfileId: bigint) => {
    setProfileId(newProfileId);
    localStorage.setItem("profileId", newProfileId.toString());
  };

  const contextValue = useMemo(() => ({ profileId, updateProfileId }), [profileId]);

  return <ProfileContext.Provider value={contextValue}>{children}</ProfileContext.Provider>;
}
