"use client";

import React, { useCallback, useState } from "react";
import { CollectModuleProcessDataInput } from "~~/app/lens/_components/CollectModuleProcessDataInput";
import { OpenActionProcessDataInput } from "~~/app/lens/_components/OpenActionProcessDataInput";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { CollectModuleContract, Publication, useProfile } from "~~/hooks/scaffold-lens";
import { notification } from "~~/utils/scaffold-eth";

interface ActOnPostProps {
  publication: Publication;
  collectModule: CollectModuleContract | undefined;
}

export const ActOnPost: React.FC<ActOnPostProps> = ({ publication, collectModule }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [actionProcessData, setActionProcessData] = useState<`0x${string}`>();

  const { profileId } = useProfile();
  const { writeContractAsync } = useScaffoldWriteContract("LensHub");

  const submitAct = useCallback(async () => {
    if (!profileId) {
      notification.error("Profile ID not set.");
      return;
    }

    if (!actionProcessData) {
      notification.error("Action process data not set.");
      return;
    }

    const openActionModule = publication.openActions[0];

    try {
      await writeContractAsync({
        functionName: "act",
        args: [
          {
            publicationActedProfileId: publication.profileId,
            publicationActedId: publication.pubId,
            actorProfileId: profileId,
            referrerProfileIds: [],
            referrerPubIds: [],
            actionModuleAddress: openActionModule.contract.address,
            actionModuleData: actionProcessData,
          },
        ],
      });
    } catch (e) {
      notification.error("Transaction failed.");
      console.error("Error acting on publication", e);
      return;
    }

    setModalOpen(false);
  }, [profileId, actionProcessData, publication, writeContractAsync]);

  return (
    <>
      <button className="btn btn-primary dark:btn-secondary btn-sm w-fit px-6" onClick={() => setModalOpen(true)}>
        Act
      </button>
      <dialog id="act_on_post_modal" className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
          <h3>Act on post</h3>
          {modalOpen && (
            <div className="flex flex-col space-y-3 pt-2">
              {collectModule ? (
                <CollectModuleProcessDataInput
                  publication={publication}
                  actionModule={publication.openActions[0]}
                  collectModule={collectModule}
                  setActionProcessData={setActionProcessData}
                />
              ) : (
                <OpenActionProcessDataInput
                  actionModule={publication.openActions[0]}
                  setActionProcessData={setActionProcessData}
                />
              )}
              <button
                className="btn btn-primary dark:btn-secondary btn-sm w-fit px-6"
                onClick={submitAct}
                disabled={!actionProcessData}
              >
                Submit
              </button>
            </div>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setModalOpen(false)}>close</button>
        </form>
      </dialog>
    </>
  );
};
