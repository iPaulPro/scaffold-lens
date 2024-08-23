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

  return (
    <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col gap-y-2 py-8 lg:py-12 justify-center items-center">
      <p>Selected Profile: {profileId ? (localName ?? profileId.toString()) : "No profile"}</p>
    </div>
  );
}
