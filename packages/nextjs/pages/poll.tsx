import { EAS, NO_EXPIRATION, SchemaEncoder, ZERO_BYTES32 } from "@ethereum-attestation-service/eas-sdk";
import { encodeData } from "@lens-protocol/client";
import { AbiCoder, BrowserProvider, ethers } from "ethers";
import { NextPage } from "next";

const eas = new EAS("0xaEF4103A04090071165F78D45D83A0C0782c2B2a");
const schemaEncoder = new SchemaEncoder(
  "uint256 publicationProfileId,uint256 publicationId,uint256 actorProfileId,address actorProfileOwner,uint8 option,uint40 timestamp",
);

// EAS_ADDRESS=0xaEF4103A04090071165F78D45D83A0C0782c2B2a
// EAS_SCHEMA=0xfab18e898a2f81c630cb962ca6743b967c005d84ca139c45f76e8a4d8cdde6be
async function createDerivedAttestation() {
  const [account] = await window.ethereum!.request({ method: "eth_requestAccounts" });
  console.log("createDerivedAttestation: account", account);
  const provider = new BrowserProvider(window.ethereum!, "any");
  const signer = await provider.getSigner();
  eas.connect(signer);
  console.log("createDerivedAttestation: connected to EAS");

  const timestamp = Math.floor(Date.now() / 1000);
  const encodedData = schemaEncoder.encodeData([
    { name: "publicationProfileId", value: 216, type: "uint256" },
    { name: "publicationId", value: 207, type: "uint256" },
    { name: "actorProfileId", value: 216, type: "uint256" },
    { name: "actorProfileOwner", value: "0xdaA5EBe0d75cD16558baE6145644EDdFcbA1e868", type: "address" },
    { name: "option", value: 1, type: "uint8" },
    { name: "timestamp", value: timestamp, type: "uint40" },
  ]);
  console.log("createDerivedAttestation: encodedData", encodedData);

  const delegated = await eas.getDelegated();
  console.log("createDerivedAttestation: delegated", delegated);
  const nonce = await eas.getNonce(account);
  console.log("createDerivedAttestation: nonce", nonce.toString());
  const response = await delegated.signDelegatedAttestation(
    {
      schema: "0xfab18e898a2f81c630cb962ca6743b967c005d84ca139c45f76e8a4d8cdde6be",
      data: encodedData,
      nonce: nonce,
      revocable: true,
      recipient: "0x75ac369d5c6a4fa8386a6dfcb07a1ceaa2277fef",
      expirationTime: NO_EXPIRATION,
      refUID: ZERO_BYTES32,
      value: 0n,
      deadline: NO_EXPIRATION,
    },
    signer,
  );

  console.log("createDerivedAttestation: response", response);
  const signature = response.signature;

  const calldata = encodeData(
    [
      {
        type: "tuple(uint256,uint256,uint256,address,uint8,uint40)",
        components: [
          { type: "uint256", name: "publicationProfileId" },
          { type: "uint256", name: "publicationId" },
          { type: "uint256", name: "actorProfileId" },
          { type: "address", name: "actorProfileOwner" },
          { type: "uint8", name: "option" },
          { type: "uint40", name: "timestamp" },
        ],
        name: "vote",
      },
      {
        type: "tuple(uint8,bytes32,bytes32)",
        components: [
          { type: "uint8", name: "v" },
          { type: "bytes32", name: "r" },
          { type: "bytes32", name: "s" },
        ],
        name: "signature",
      },
      { type: "uint64", name: "deadline" },
    ],
    [
      ["216", "207", "216", "0xdaA5EBe0d75cD16558baE6145644EDdFcbA1e868", "1", timestamp.toString()],
      [signature.v.toString(), signature.r, signature.s],
      "0",
    ],
  );

  console.log("createDerivedAttestation: created calldata", calldata);
}

async function createPoll() {
  const poll = {
    options: ["Option A", "Option B", "Option C", "Option D"],
    followerOnly: false,
    endTimestamp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 14, // 14 days from now
  };

  const calldata = new AbiCoder().encode(
    ["bytes32[4]", "bool", "uint40"],
    [poll.options.map(ethers.encodeBytes32String), poll.followerOnly, poll.endTimestamp],
  );

  console.log("createPoll: created poll calldata", calldata);
}

const Poll: NextPage = () => {
  return (
    <>
      <h1>Poll</h1>
      <button onClick={createPoll}>Create Poll</button>
      <button onClick={createDerivedAttestation}>Create Derived Attestation</button>
    </>
  );
};

export default Poll;
