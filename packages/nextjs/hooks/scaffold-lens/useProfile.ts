import { useContext } from "react";
import { ProfileContext, ProfileContextType } from "~~/components/LensProfileProvider";

export interface Profile {
  id: bigint;
  handle: string;
}

export function useProfile(): ProfileContextType {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}
