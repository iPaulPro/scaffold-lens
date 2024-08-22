"use client";

import React, { useEffect, useState } from "react";
import { readContract } from "@wagmi/core";
import { hardhat } from "viem/chains";
import { useAccount } from "wagmi";
import deployedContracts from "~~/contracts/deployedContracts";
import { useOwnedTokens, useProfile } from "~~/hooks/scaffold-lens";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";

interface ChildProps {
  refreshCounter: number;
}

interface Profile {
  id: bigint;
  handle: string;
}

const ProfileSelector: React.FC<ChildProps> = ({ refreshCounter }: ChildProps) => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const { address: lensHubAddress, abi: lensHubAbi } = deployedContracts[hardhat.id].LensHub;
  const { address: tokenHandleRegistryAddress, abi: tokenHandleRegistryAbi } =
    deployedContracts[hardhat.id].TokenHandleRegistry;
  const { address: lensHandlesAddress, abi: lensHandlesAbi } = deployedContracts[hardhat.id].LensHandles;

  const { address } = useAccount();
  const { updateProfileId } = useProfile();
  const { getOwnedTokens } = useOwnedTokens(address, lensHubAddress, lensHubAbi);

  useEffect(() => {
    async function fetchProfiles() {
      const ownedTokens = await getOwnedTokens();
      const profiles = [];
      for (const tokenId of ownedTokens) {
        const handleId = await readContract(wagmiConfig, {
          abi: tokenHandleRegistryAbi,
          address: tokenHandleRegistryAddress,
          functionName: "getDefaultHandle",
          args: [tokenId],
        });
        const handle = await readContract(wagmiConfig, {
          abi: lensHandlesAbi,
          address: lensHandlesAddress,
          functionName: "getLocalName",
          args: [handleId],
        });
        profiles.push({ id: tokenId, handle });
      }
      setProfiles(profiles);
    }
    fetchProfiles();
  }, [address, refreshCounter]);

  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      <h1>Profile Selector:</h1>
      {profiles.length > 0 && (
        <ul className="bg-secondary p-4 w-full">
          {profiles.map(profile => (
            <li
              key={profile.id}
              onClick={() => updateProfileId(profile.id)}
              className="cursor-pointer hover:bg-accent text-center"
            >
              {profile.handle}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfileSelector;
