"use client";

import { encodeData } from "@lens-protocol/client";
import { NextPage } from "next";
import { encodeAbiParameters, parseUnits } from "viem";
import { useAccount } from "wagmi";
import { useScaffoldContract, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const RECIPIENT: `0x${string}` = "0xdaA5EBe0d75cD16558baE6145644EDdFcbA1e868";
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

const Collect: NextPage = () => {
  const { data: collectModule } = useScaffoldContract({
    contractName: "PayWhatYouWantCollectModule",
  });

  const { data: testToken } = useScaffoldContract({
    contractName: "TestToken",
  });

  const { address: burnerAddress } = useAccount();

  const { writeAsync: initializePublicationAction } = useScaffoldContractWrite({
    contractName: "CollectPublicationAction",
    functionName: "initializePublicationAction",
    blockConfirmations: 1,
    onBlockConfirmation: txnReceipt => {
      console.log("initializePublicationAction: Transaction success! hash=", txnReceipt.blockHash);
    },
  });

  const { writeAsync: processPublicationAction } = useScaffoldContractWrite({
    contractName: "CollectPublicationAction",
    functionName: "processPublicationAction",
    blockConfirmations: 1,
    onBlockConfirmation: txnReceipt => {
      console.log("processPublicationAction: Transaction success! hash=", txnReceipt.blockHash);
    },
  });

  async function init() {
    if (!collectModule) {
      return null;
    }
    const collectInitData = encodeData(
      [
        { type: "uint160", name: "amountFloor" },
        { type: "uint96", name: "collectLimit" },
        { type: "address", name: "currency" },
        { type: "uint16", name: "referralFee" },
        { type: "bool", name: "followerOnly" },
        { type: "uint72", name: "endTimestamp" },
        {
          type: "tuple[]",
          name: "recipients",
          components: [
            { type: "address", name: "recipient" },
            { type: "uint16", name: "split" },
          ],
        },
      ],
      ["0", "100", ZERO_ADDRESS, "10", false, "0", [[RECIPIENT, "10000"]]],
    );
    const actionInitData = encodeData(
      [
        { type: "address", name: "collectModule" },
        { type: "bytes", name: "collectModuleInitData" },
      ],
      [collectModule.address, collectInitData],
    );
    console.log("init: actionInitData", actionInitData);

    await initializePublicationAction({ args: [1n, 1n, ZERO_ADDRESS, actionInitData as `0x${string}`] });
  }

  async function initMulti() {
    if (!collectModule || !testToken || !burnerAddress) {
      return null;
    }

    const data = encodeAbiParameters(
      [
        { type: "uint160", name: "amountFloor" },
        { type: "uint96", name: "collectLimit" },
        { type: "address", name: "currency" },
        { type: "uint16", name: "referralFee" },
        { type: "bool", name: "followerOnly" },
        { type: "uint72", name: "endTimestamp" },
        {
          type: "tuple[]",
          name: "recipients",
          components: [
            { type: "address", name: "recipient" },
            { type: "uint16", name: "split" },
          ],
        },
      ],
      [
        parseUnits("0.1", 18),
        100n,
        testToken.address,
        10,
        false,
        0n,
        [
          { recipient: RECIPIENT, split: 5000 },
          { recipient: burnerAddress, split: 5000 },
        ],
      ],
    );

    console.log("initMulti: collectModuleInitData", data);

    const calldata = encodeAbiParameters(
      [
        { type: "address", name: "collectModule" },
        { type: "bytes", name: "collectModuleInitData" },
      ],
      [collectModule.address, data],
    );

    // const collectInitData = encodeData(
    //   [
    //     { type: "uint160", name: "amountFloor" },
    //     { type: "uint96", name: "collectLimit" },
    //     { type: "address", name: "currency" },
    //     { type: "uint16", name: "referralFee" },
    //     { type: "bool", name: "followerOnly" },
    //     { type: "uint72", name: "endTimestamp" },
    //     {
    //       type: "tuple(address,uint16)[]",
    //       name: "recipients",
    //       components: [
    //         { type: "address", name: "recipient" },
    //         { type: "uint16", name: "split" },
    //       ],
    //     },
    //   ],
    //   ["100000", "100", testToken.address, "10", false, "0", []],
    // );
    // const calldata = encodeData(
    //   [
    //     { type: "address", name: "collectModule" },
    //     { type: "bytes", name: "collectModuleInitData" },
    //   ],
    //   [collectModule.address, collectInitData],
    // );

    // const data = ethers.utils.defaultAbiCoder.encode(
    //   ["uint160", "uint96", "address", "uint16", "bool", "uint72", "tuple(address recipient,uint16 split)[]"],
    //   [
    //     ethers.utils.parseUnits("0.1", 18),
    //     100,
    //     testToken.address,
    //     10,
    //     false,
    //     0,
    //     [
    //       { recipient: RECIPIENT, split: 5000 },
    //       { recipient: burnerAddress, split: 5000 },
    //     ],
    //   ],
    // );
    //
    // const calldata = ethers.utils.defaultAbiCoder.encode(["address", "bytes"], [collectModule.address, data]);

    console.log("initMulti: data", calldata);

    console.log("initMulti: encoding data with token address", testToken?.address);

    await initializePublicationAction({
      args: [1n, 2n, ZERO_ADDRESS, calldata as `0x${string}`],
    });
  }

  async function process() {
    if (!testToken || !burnerAddress) {
      return null;
    }
    const processCollectData = encodeData(
      [
        { type: "address", name: "currency" },
        { type: "uint256", name: "amount" },
      ],
      [testToken.address, parseUnits(".01", 18).toString()],
    );
    const processActionData = encodeData(
      [
        { type: "address", name: "collectNftRecipient" },
        { type: "bytes", name: "collectData" },
      ],
      [RECIPIENT, processCollectData],
    );
    console.log("process: processActionData", processActionData);

    await processPublicationAction({
      args: [
        {
          publicationActedProfileId: 1n,
          publicationActedId: 1n,
          actorProfileId: 2n,
          actorProfileOwner: RECIPIENT,
          transactionExecutor: burnerAddress,
          referrerProfileIds: [],
          referrerPubIds: [],
          referrerPubTypes: [],
          actionModuleData: processActionData as `0x${string}`,
        },
      ],
    });
  }

  return (
    <>
      <h1>Collect</h1>
      <button onClick={init}>Init</button>
      <button onClick={initMulti}>Init Multiple Recipients</button>
      <button onClick={process}>Process</button>
    </>
  );
};

export default Collect;
