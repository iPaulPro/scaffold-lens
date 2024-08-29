"use client";

import React, { useState } from "react";
import { useAccount } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { ZERO_ADDRESS } from "~~/utils/scaffold-eth/common";

export const CreateProfile: React.FC = () => {
  const [handle, setHandle] = useState<string>("");
  const [modalOpen, setModalOpen] = useState(false);

  const { address } = useAccount();
  const { writeContractAsync } = useScaffoldWriteContract("ProfileCreationProxy");

  async function createProfile() {
    if (!address || !handle) return;
    await writeContractAsync({
      functionName: "proxyCreateProfileWithHandle",
      args: [{ to: address, followModule: ZERO_ADDRESS, followModuleInitData: "0x" }, handle],
    });
    setHandle("");
    setModalOpen(false);
  }

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
