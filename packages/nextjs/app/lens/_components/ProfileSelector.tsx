"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { readContract } from "@wagmi/core";
import { useAccount } from "wagmi";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useDeployedContractInfo, useOutsideClick } from "~~/hooks/scaffold-eth";
import { Profile, useOwnedTokens, useProfile } from "~~/hooks/scaffold-lens";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";

export const ProfileSelector: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const { data: lensHub } = useDeployedContractInfo("LensHub");
  const { data: lensHandles } = useDeployedContractInfo("LensHandles");
  const { data: tokenHandleRegistry } = useDeployedContractInfo("TokenHandleRegistry");

  const { address } = useAccount();
  const { profileId, updateProfileId } = useProfile();
  const { ownedTokens } = useOwnedTokens(address, lensHub?.address, lensHub?.abi);

  const currentProfile = profiles.find(profile => profile.id === profileId);

  const getHandle = useCallback(
    async (tokenId: bigint) => {
      if (!lensHandles || !tokenHandleRegistry) return;
      const handleId = await readContract(wagmiConfig, {
        abi: tokenHandleRegistry.abi,
        address: tokenHandleRegistry.address,
        functionName: "getDefaultHandle",
        args: [tokenId],
      });

      return await readContract(wagmiConfig, {
        abi: lensHandles.abi,
        address: lensHandles.address,
        functionName: "getLocalName",
        args: [handleId],
      });
    },
    [lensHandles, tokenHandleRegistry],
  );

  useEffect(() => {
    async function fetchProfiles() {
      const profiles: Profile[] = [];
      for (const tokenId of ownedTokens) {
        if (tokenId) {
          const handle = await getHandle(tokenId);
          if (handle) {
            profiles.push({ id: tokenId, handle });
          }
        }
      }
      setProfiles(profiles);
    }
    fetchProfiles();
  }, [ownedTokens, getHandle]);

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
            <span className="pr-2">{currentProfile?.handle || "No Profile"}</span>
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
