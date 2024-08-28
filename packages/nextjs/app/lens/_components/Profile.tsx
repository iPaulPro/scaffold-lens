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

  if (!profileId) {
    return null;
  }

  return (
    <div>
      Posting as: <span className="font-bold">{localName ?? profileId.toString()}</span>{" "}
      <span className="text-sm">(Profile ID: {profileId.toString()})</span>
    </div>
  );
}
