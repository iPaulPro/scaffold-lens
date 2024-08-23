"use client";

import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { useProfile } from "~~/hooks/scaffold-lens";

export function Profile() {
  const { profileId } = useProfile();

  const { data: handleId } = useScaffoldReadContract({
    contractName: "TokenHandleRegistry",
    functionName: "getDefaultHandle",
    args: [profileId],
  });

  const { data: localName } = useScaffoldReadContract({
    contractName: "LensHandles",
    functionName: "getLocalName",
    args: [handleId],
  });

  return <p>Posting as: {profileId ? (localName ?? profileId.toString()) : "No profile"}</p>;
}
