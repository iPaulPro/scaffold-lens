"use client";

import { encodeData } from "@lens-protocol/client";
import { NextPage } from "next";
import { parseUnits } from "viem";
import { useScaffoldContract } from "~~/hooks/scaffold-eth";

const RECIPIENT = "0xdaA5EBe0d75cD16558baE6145644EDdFcbA1e868";

const Collect: NextPage = () => {
  const { data: collectModule } = useScaffoldContract({
    contractName: "PayWhatYouWantCollectModule",
  });

  const { data: testToken } = useScaffoldContract({
    contractName: "TestToken",
  });

  async function init() {
    if (!collectModule) {
      return null;
    }
    const collectInitData = encodeData(
      [
        { type: "uint96", name: "collectLimit" },
        { type: "uint16", name: "referralFee" },
        { type: "bool", name: "followerOnly" },
        { type: "uint72", name: "endTimestamp" },
        { type: "address", name: "recipient" },
      ],
      ["100", "10", false, "0", RECIPIENT],
    );
    const actionInitData = encodeData(
      [
        { type: "address", name: "collectModule" },
        { type: "bytes", name: "collectModuleInitData" },
      ],
      [collectModule.address, collectInitData],
    );
    console.log("init: actionInitData", actionInitData);
  }

  async function process() {
    if (!testToken) {
      return null;
    }
    const processCollectData = encodeData(
      [
        { type: "address", name: "currency" },
        { type: "uint256", name: "amount" },
      ],
      [testToken.address, parseUnits("1", 18).toString()],
    );
    const processActionData = encodeData(
      [
        { type: "address", name: "collectNftRecipient" },
        { type: "bytes", name: "collectData" },
      ],
      [RECIPIENT, processCollectData],
    );
    console.log("process: processActionData", processActionData);
  }

  return (
    <>
      <h1>Collect</h1>
      <button onClick={init}>Init</button>
      <button onClick={process}>Process</button>
    </>
  );
};

export default Collect;
