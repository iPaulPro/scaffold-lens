"use client";

import { useState } from "react";
import CreateProfile from "~~/app/lens/_components/CreateProfile";
import ProfileSelector from "~~/app/lens/_components/ProfileSelector";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { useProfile } from "~~/hooks/scaffold-lens";

export function Profile() {
  const [ownedTokenRefresh, setOwnedTokenRefresh] = useState(0);

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
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      <p>Selected Profile: {profileId ? (localName ?? profileId.toString()) : "No profile"}</p>

      <ProfileSelector refreshCounter={ownedTokenRefresh} />

      <CreateProfile onProfileCreated={() => setOwnedTokenRefresh(count => count + 1)} />
    </div>
  );
}
