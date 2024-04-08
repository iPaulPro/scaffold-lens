"use client";

import { ModuleParam, encodeData } from "@lens-protocol/client";
import { NextPage } from "next";
import { parseUnits } from "viem";
import { useAccount } from "wagmi";
import { useScaffoldContract, useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const RECIPIENT: `0x${string}` = "0xdaA5EBe0d75cD16558baE6145644EDdFcbA1e868";
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
const EMPTY_RECIPIENT = [ZERO_ADDRESS, "0"];

const Collect: NextPage = () => {
  const { data: collectModule } = useScaffoldContract({
    contractName: "PayWhatYouWantCollectModule",
  });

  const { data: collectModuleMetadataUri } = useScaffoldContractRead({
    contractName: "PayWhatYouWantCollectModule",
    functionName: "getModuleMetadataURI",
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

  const { writeAsync: approve } = useScaffoldContractWrite({
    contractName: "TestToken",
    functionName: "approve",
    blockConfirmations: 1,
    onBlockConfirmation: txnReceipt => {
      console.log("approve: Transaction success! hash=", txnReceipt.blockHash);
    },
  });

  const { writeAsync: mint } = useScaffoldContractWrite({
    contractName: "TestToken",
    functionName: "mint",
    blockConfirmations: 1,
    onBlockConfirmation: txnReceipt => {
      console.log("mint: Transaction success! hash=", txnReceipt.blockHash);
    },
  });

  async function getModuleMetadata() {
    if (!collectModuleMetadataUri) throw new Error("No metadata URI found");
    const metadataRes = await fetch(collectModuleMetadataUri);
    return metadataRes.json();
  }

  async function getInitDataABI(): Promise<ModuleParam[]> {
    const metadata = await getModuleMetadata();
    console.log("getInitDataABI: metadataRes", metadata);
    return JSON.parse(metadata.initializeCalldataABI);
  }

  async function init() {
    if (!collectModule || !collectModuleMetadataUri) {
      return null;
    }

    const abi = await getInitDataABI();
    const collectInitData = encodeData(abi, [
      "0",
      "100",
      ZERO_ADDRESS,
      "10",
      false,
      "0",
      [[RECIPIENT, "10000"], EMPTY_RECIPIENT, EMPTY_RECIPIENT, EMPTY_RECIPIENT, EMPTY_RECIPIENT],
    ]);
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
    if (!collectModule || !testToken || !burnerAddress || !collectModuleMetadataUri) {
      return null;
    }

    const abi = await getInitDataABI();
    const collectInitData = encodeData(abi, [
      parseUnits("0.1", 18).toString(),
      "100",
      testToken.address,
      "10",
      false,
      "0",
      [[RECIPIENT, "5000"], [burnerAddress, "5000"], EMPTY_RECIPIENT, EMPTY_RECIPIENT, EMPTY_RECIPIENT],
    ]);
    const calldata = encodeData(
      [
        { type: "address", name: "collectModule" },
        { type: "bytes", name: "collectModuleInitData" },
      ],
      [collectModule.address, collectInitData],
    );

    console.log("initMulti: data", calldata);

    console.log("initMulti: encoding data with token address", testToken?.address);

    await initializePublicationAction({
      args: [1n, 1n, ZERO_ADDRESS, calldata as `0x${string}`],
    });
  }

  async function process() {
    if (!testToken || !burnerAddress || !collectModuleMetadataUri) {
      return null;
    }

    await mint({
      args: [burnerAddress, parseUnits("10", 18)],
    });

    await approve({
      args: [collectModule!.address, parseUnits("10", 18)],
    });

    const metadataRes = await fetch(collectModuleMetadataUri);
    const metadata = await metadataRes.json();
    console.log("process: metadataRes", metadata.processCalldataABI);

    const processCollectData = encodeData(JSON.parse(metadata.processCalldataABI), [
      testToken.address,
      // parseUnits("1", 18).toString(),
      "0",
    ]);

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
      <button onClick={init}>Init Free Single</button>
      <button onClick={initMulti}>Init Paid Multiple</button>
      <button onClick={process}>Process</button>
    </>
  );
};

export default Collect;
