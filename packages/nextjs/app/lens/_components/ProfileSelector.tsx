"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { readContract } from "@wagmi/core";
import { hardhat } from "viem/chains";
import { useAccount } from "wagmi";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import deployedContracts from "~~/contracts/deployedContracts";
import { useOutsideClick } from "~~/hooks/scaffold-eth";
import { useOwnedTokens, useProfile } from "~~/hooks/scaffold-lens";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";

interface Profile {
  id: bigint;
  handle: string;
}

const ProfileSelector: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const { address: lensHubAddress, abi: lensHubAbi } = deployedContracts[hardhat.id].LensHub;
  const { address: tokenHandleRegistryAddress, abi: tokenHandleRegistryAbi } =
    deployedContracts[hardhat.id].TokenHandleRegistry;
  const { address: lensHandlesAddress, abi: lensHandlesAbi } = deployedContracts[hardhat.id].LensHandles;

  const { address } = useAccount();
  const { profileId, updateProfileId } = useProfile();
  const { ownedTokens } = useOwnedTokens(address, lensHubAddress, lensHubAbi);

  const getHandleId = useCallback(
    async (tokenId: bigint) => {
      return await readContract(wagmiConfig, {
        abi: tokenHandleRegistryAbi,
        address: tokenHandleRegistryAddress,
        functionName: "getDefaultHandle",
        args: [tokenId],
      });
    },
    [tokenHandleRegistryAbi, tokenHandleRegistryAddress],
  );

  const getHandle = useCallback(
    async (handleId: bigint) => {
      return await readContract(wagmiConfig, {
        abi: lensHandlesAbi,
        address: lensHandlesAddress,
        functionName: "getLocalName",
        args: [handleId],
      });
    },
    [lensHandlesAbi, lensHandlesAddress],
  );

  useEffect(() => {
    async function fetchProfiles() {
      const profiles = [];
      for (const tokenId of ownedTokens) {
        const handleId = await getHandleId(tokenId);
        const handle = await getHandle(handleId);
        profiles.push({ id: tokenId, handle });
      }
      setProfiles(profiles);
    }
    fetchProfiles();
  }, [ownedTokens, getHandle, getHandleId]);

  const getCurrentProfile = (): Profile | undefined => {
    if (!profiles.length) return undefined;
    return profiles.find(profile => profile.id === profileId);
  };

  const dropdownRef = useRef<HTMLDetailsElement>(null);
  const closeDropdown = () => {
    dropdownRef.current?.removeAttribute("open");
  };
  useOutsideClick(dropdownRef, closeDropdown);

  const onProfileClick = (profileId: bigint) => {
    updateProfileId(profileId);
    closeDropdown();
  };

  return (
    <>
      <div className="w-full flex flex-col gap-y-2 py-4 justify-center items-center">
        <details ref={dropdownRef} className="w-full dropdown dropdown-end leading-3">
          <summary
            tabIndex={0}
            className="w-full flex justify-between btn btn-secondary btn-sm shadow-md dropdown-toggle gap-0 !h-auto"
          >
            <span className="pr-2">{profileId ? getCurrentProfile()?.handle : "No Profile"}</span>
            <ChevronDownIcon className="h-6 w-4 ml-2 sm:ml-0" />
          </summary>
          {profiles.length > 0 && (
            <ul
              tabIndex={0}
              className="w-full dropdown-content menu z-[2] p-2 mt-2 shadow-center shadow-accent bg-base-200 rounded-box gap-1 max-h-44 overflow-y-scroll block"
            >
              {profiles.map(profile => (
                <li
                  key={profile.id}
                  onClick={() => onProfileClick(profile.id)}
                  className={`w-full cursor-pointer hover:bg-accent p-2 rounded-box ${profile.id === profileId ? "bg-accent" : ""}`}
                >
                  {profile.handle}
                </li>
              ))}
            </ul>
          )}
        </details>
      </div>
    </>
  );
};

export default ProfileSelector;
