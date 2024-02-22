import { OpenActionModuleInput } from "@lens-protocol/client";
import {
  type EasPoll,
  EasVote,
  createPollActionModuleInput,
  createVoteActionRequest,
  createVoteCountForOptionQueryVariables,
  createVoteCountQueryVariables,
  getVoteCount,
  getVoteCountForOption,
} from "eas-poll-action-module";
import { BrowserProvider } from "ethers";
import { NextPage } from "next";

const EXECUTOR = "0xdaA5EBe0d75cD16558baE6145644EDdFcbA1e868";
const ACTOR = "0x10E1DEB36F41b4Fad35d10d0aB870a4dc52Dbb2c";

async function createDerivedAttestation() {
  const provider = new BrowserProvider(window.ethereum!, "any");
  const signer = await provider.getSigner();

  const vote: EasVote = {
    publicationId: "0x01-0x02",
    actorProfileId: "0x02",
    actorProfileOwner: ACTOR,
    transactionExecutor: EXECUTOR,
    optionIndex: 1,
  };

  const req = await createVoteActionRequest(vote, signer);
  console.log("createDerivedAttestation: created request", req);
}

async function createPoll() {
  const poll: EasPoll = {
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    followersOnly: false,
    endTimestamp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 14, // 14 days
    signatureRequired: true,
  };

  const pollAction: OpenActionModuleInput = createPollActionModuleInput(poll);
  console.log("createPoll: created poll action", pollAction);
}

async function voteCount() {
  const variables = createVoteCountQueryVariables("0xfa-0x04", true);
  const voteCountResponse = await getVoteCount(variables, true);
  console.log("voteCount: vote count response", voteCountResponse);

  const v = createVoteCountForOptionQueryVariables("0xfa-0x04", 1, true);
  const optionVoteCountResponse = await getVoteCountForOption(v, true);
  console.log("voteCount: option vote count response", optionVoteCountResponse);
}

const Poll: NextPage = () => {
  return (
    <>
      <h1>Poll</h1>
      <button onClick={createPoll}>Create Poll</button>
      <button onClick={createDerivedAttestation}>Create Derived Attestation</button>
      <button onClick={voteCount}>Vote Count</button>
    </>
  );
};

export default Poll;
