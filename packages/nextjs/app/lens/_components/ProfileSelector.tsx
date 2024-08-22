"use client";

import React, { useEffect, useState } from "react";
import { hardhat } from "viem/chains";
import { useAccount } from "wagmi";
import deployedContracts from "~~/contracts/deployedContracts";
import { useOwnedTokens, useProfile } from "~~/hooks/scaffold-lens";

interface ChildProps {
  refreshCounter: number;
}

const ProfileSelector: React.FC<ChildProps> = ({ refreshCounter }: ChildProps) => {
  const [ownedTokens, setOwnedTokens] = useState<bigint[]>([]);

  const { address: contractAddress, abi } = deployedContracts[hardhat.id].LensHub;
  const { address } = useAccount();
  const { updateProfileId } = useProfile();
  const { getOwnedTokens } = useOwnedTokens(address, contractAddress, abi);

  useEffect(() => {
    console.log("Account:", address);
    async function fetchTokens() {
      const ownedTokens = await getOwnedTokens();
      console.log("Owned Tokens:", ownedTokens);
      setOwnedTokens(ownedTokens);
    }
    fetchTokens();
  }, [address, refreshCounter]);

  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      <h1>Profile Selector:</h1>
      {ownedTokens.length > 0 && (
        <ul className="bg-secondary p-4 w-full">
          {ownedTokens.map(tokenId => (
            <li
              key={tokenId}
              onClick={() => updateProfileId(tokenId)}
              className="cursor-pointer hover:bg-accent text-center"
            >
              {tokenId.toString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfileSelector;
