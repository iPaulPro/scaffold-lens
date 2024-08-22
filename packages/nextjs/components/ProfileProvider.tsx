"use client";

import React, { ReactNode, createContext, useEffect, useState } from "react";

export interface ProfileContextType {
  profileId: bigint | undefined;
  updateProfileId: (newProfileId: bigint) => void;
}

export const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

interface ProfileProviderProps {
  children: ReactNode;
}

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [profileId, setProfileId] = useState<bigint | undefined>(undefined);

  useEffect(() => {
    // Load profileId from localStorage on initial render
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
