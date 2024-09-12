"use client";

import React, { useState } from "react";
import { getTransactionReceipt } from "@wagmi/core";
import { parseEventLogs } from "viem";
import { useAccount } from "wagmi";
import { useDeployedContractInfo, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { useProfile } from "~~/hooks/scaffold-lens";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import { ZERO_ADDRESS } from "~~/utils/scaffold-eth/common";

export const CreateProfile: React.FC = () => {
  const [handle, setHandle] = useState<string>("");
  const [modalOpen, setModalOpen] = useState(false);

  const { address } = useAccount();
  const { writeContractAsync } = useScaffoldWriteContract("ProfileCreationProxy");
  const { updateProfileId } = useProfile();
  const { data: lensHub } = useDeployedContractInfo("LensHub");

  const onProfileCreated = async (hash: `0x${string}`) => {
    if (!lensHub) return;

    const receipt = await getTransactionReceipt(wagmiConfig, { hash });
    const logs = parseEventLogs({
      abi: lensHub.abi,
      eventName: "Transfer",
      logs: receipt.logs,
    });
    const profileId = logs[0]?.args?.tokenId;
    if (profileId) {
      updateProfileId(profileId);
    }
  };

  const createProfile = async () => {
    if (!address || !handle) return;

    const createTxHash = await writeContractAsync({
      functionName: "proxyCreateProfileWithHandle",
      args: [{ to: address, followModule: ZERO_ADDRESS, followModuleInitData: "0x" }, handle],
    });

    setHandle("");
    setModalOpen(false);

    if (createTxHash) {
      await onProfileCreated(createTxHash);
    }
  };

  return (
    <>
      <button className="w-full btn btn-secondary btn-sm" onClick={() => setModalOpen(true)}>
        Add Profile 👤
      </button>
      <dialog id="create_profile_modal" className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create Profile</h3>
          <p className="py-4">Create a profile to interact with Lens Modules.</p>
          <input
            type="text"
            value={handle}
            onChange={e => setHandle(e.target.value)}
            placeholder="Enter handle"
            className="border border-accent rounded p-2"
          />
          <button onClick={createProfile} className="bg-accent text-neutral p-2 rounded mt-2">
            Create Profile
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setModalOpen(false)}>close</button>
        </form>
      </dialog>
    </>
  );
};
