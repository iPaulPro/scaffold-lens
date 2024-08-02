import { ethers, deployments, artifacts } from "hardhat";
import { expect } from "chai";
import { ContractTransactionResponse, parseUnits, ZeroAddress } from "ethers";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";

import {
  CollectPublicationAction,
  LensHandles,
  LensHub,
  TestToken,
  TokenGatedCollectModule,
  TokenHandleRegistry,
} from "../typechain-types";

let author: HardhatEthersSigner;
let collector: HardhatEthersSigner;
let lensHub: LensHub;
let lensHandles: LensHandles;
let tokenHandleRegistry: TokenHandleRegistry;
let collectModule: TokenGatedCollectModule;
let testToken: TestToken;
let actionModule: CollectPublicationAction;

let testTokenAddress: string;

describe("TokenGatedCollectModule", () => {
  beforeEach(async () => {
    [, author, collector] = await ethers.getSigners();

    await deployments.fixture(["LensHub", "TokenGatedCollectModule", "TestToken"]);

    lensHub = await ethers.getContract("LensHub");
    lensHandles = await ethers.getContract("LensHandles");
    tokenHandleRegistry = await ethers.getContract("TokenHandleRegistry");
    collectModule = await ethers.getContract("TokenGatedCollectModule");
    testToken = await ethers.getContract("TestToken");
    testTokenAddress = await testToken.getAddress();
    actionModule = await ethers.getContract("CollectPublicationAction");
  });

  const createProfileWithHandle = async (
    signer: HardhatEthersSigner,
    handle: string,
  ): Promise<{ profileId: bigint; handleId: bigint }> => {
    const createTx: ContractTransactionResponse = await lensHub.createProfile({
      to: signer.address,
      followModule: ZeroAddress,
      followModuleInitData: "0x",
    });

    const createProfileReceipt = await createTx.wait();
    const createProfileEventLog = createProfileReceipt?.logs
      ?.filter(log => "eventName" in log)
      .find(log => log.eventName === "Transfer");
    const profileId = createProfileEventLog?.args?.[2];

    const mintHandle = await lensHandles.mintHandle(signer.address, handle);
    const mintHandleReceipt = await mintHandle.wait();
    const mintHandleEventLog = mintHandleReceipt?.logs
      ?.filter(log => "eventName" in log)
      .find(log => log.eventName === "Transfer");
    const handleId = mintHandleEventLog?.args?.[2];

    const ownerConnection = tokenHandleRegistry.connect(signer);
    await ownerConnection.link(handleId, profileId);

    return { profileId, handleId };
  };

  const getModuleMetadata = async () => {
    const metadataUri = await collectModule.getModuleMetadataURI();
    const metadataRes = await fetch(metadataUri.replace("ar://", "https://gateway.irys.xyz/"));
    return metadataRes.json();
  };

  const createPost = async (profileId: bigint, values: any[]) => {
    const metadata = await getModuleMetadata();
    const abi = JSON.parse(metadata.initializeCalldataABI);

    const collectInitData = ethers.AbiCoder.defaultAbiCoder().encode(abi, values);

    const actionInitData = ethers.AbiCoder.defaultAbiCoder().encode(
      ["address", "bytes"],
      [await collectModule.getAddress(), collectInitData],
    );

    return lensHub.connect(author).post({
      profileId: profileId,
      contentURI: "testing",
      actionModules: [await actionModule.getAddress()],
      actionModulesInitDatas: [actionInitData as `0x${string}`],
      referenceModule: ZeroAddress,
      referenceModuleInitData: "0x",
    });
  };

  const mintTokens = async () => {
    const decimals = await testToken.decimals();
    await testToken.mint(collector.address, parseUnits("10", decimals));
  };

  it("Should initialize a publication with collect module", async function () {
    const { profileId: authorProfileId } = await createProfileWithHandle(author, "test");
    const actionModuleAddress = await actionModule.getAddress();

    await createPost(authorProfileId, ["0", "100", ZeroAddress, "10", false, "0", [], [testTokenAddress, "1"]]);

    expect(await lensHub.isActionModuleEnabledInPublication(authorProfileId, 1n, actionModuleAddress)).to.equal(true);
  });

  it("Should not allow collect when token is not held", async function () {
    const { profileId: authorProfileId } = await createProfileWithHandle(author, "test");
    await createPost(authorProfileId, ["0", "100", ZeroAddress, "10", false, "0", [], [testTokenAddress, "1"]]);

    const metadata = await getModuleMetadata();
    const abi = JSON.parse(metadata.processCalldataABI);

    const actionModuleAddress = await actionModule.getAddress();
    const collectModuleAddress = await collectModule.getAddress();

    const processCollectData = ethers.AbiCoder.defaultAbiCoder().encode(abi, [ZeroAddress, "0"]);
    const processActionData = ethers.AbiCoder.defaultAbiCoder().encode(
      ["address", "bytes"],
      [collectModuleAddress, processCollectData],
    );

    expect(
      await lensHub.connect(author).act({
        publicationActedProfileId: authorProfileId,
        publicationActedId: 1n,
        actorProfileId: authorProfileId,
        referrerProfileIds: [],
        referrerPubIds: [],
        actionModuleAddress: actionModuleAddress,
        actionModuleData: processActionData,
      }),
    ).to.be.revertedWithCustomError(collectModule, "NotEnoughBalance");
  });

  it("Should collect a free publication when token held", async function () {
    const { profileId: authorProfileId } = await createProfileWithHandle(author, "author");
    const { profileId: collectorProfileId } = await createProfileWithHandle(collector, "collector");
    await createPost(authorProfileId, ["0", "100", ZeroAddress, "10", false, "0", [], [testTokenAddress, "1"]]);

    const metadata = await getModuleMetadata();
    const abi = JSON.parse(metadata.processCalldataABI);

    const actionModuleAddress = await actionModule.getAddress();
    const collectModuleAddress = await collectModule.getAddress();
    const decimals = await testToken.decimals();

    await mintTokens();
    const approve = await testToken.connect(collector).approve(collectModuleAddress, parseUnits("10", decimals));
    expect(approve).to.emit(testToken, "Approval");

    const processCollectData = ethers.AbiCoder.defaultAbiCoder().encode(abi, [ZeroAddress, "0"]);
    const processActionData = ethers.AbiCoder.defaultAbiCoder().encode(
      ["address", "bytes"],
      [collectModuleAddress, processCollectData],
    );

    const collectTx = await lensHub.connect(collector).act({
      publicationActedProfileId: authorProfileId,
      publicationActedId: 1n,
      actorProfileId: collectorProfileId,
      referrerProfileIds: [],
      referrerPubIds: [],
      actionModuleAddress: actionModuleAddress,
      actionModuleData: processActionData,
    });

    expect(collectTx).to.emit(lensHub, "Acted");
  });

  it("Should collect a paid publication when token held", async function () {
    const { profileId: authorProfileId } = await createProfileWithHandle(author, "author");
    const { profileId: collectorProfileId } = await createProfileWithHandle(collector, "collector");
    const amount = parseUnits("1", await testToken.decimals());
    await createPost(authorProfileId, [
      amount,
      "100",
      testTokenAddress,
      "10",
      false,
      "0",
      [[author.address, "10000"]],
      [testTokenAddress, "1"],
    ]);

    const metadata = await getModuleMetadata();
    const abi = JSON.parse(metadata.processCalldataABI);

    const actionModuleAddress = await actionModule.getAddress();
    const collectModuleAddress = await collectModule.getAddress();
    const decimals = await testToken.decimals();

    await mintTokens();
    const approve = await testToken.connect(collector).approve(collectModuleAddress, parseUnits("10", decimals));
    expect(approve).to.emit(testToken, "Approval");

    const processCollectData = ethers.AbiCoder.defaultAbiCoder().encode(abi, [testTokenAddress, amount]);
    const processActionData = ethers.AbiCoder.defaultAbiCoder().encode(
      ["address", "bytes"],
      [collector.address, processCollectData],
    );

    const collectTx = await lensHub.connect(collector).act({
      publicationActedProfileId: authorProfileId,
      publicationActedId: 1n,
      actorProfileId: collectorProfileId,
      referrerProfileIds: [],
      referrerPubIds: [],
      actionModuleAddress: actionModuleAddress,
      actionModuleData: processActionData,
    });

    const treasury = await lensHub.getTreasury();
    const treasuryFee = await lensHub.getTreasuryFee();
    const treasuryAmount = (amount * treasuryFee) / 10000n;
    const collectData = await actionModule.getCollectData(authorProfileId, 1n);
    const collectNFTImpl = await artifacts.readArtifact("CollectNFT");
    const collectNFT = new ethers.Contract(collectData.collectNFT, collectNFTImpl.abi, collector);
    console.log("collectNFT address", await collectNFT.getAddress(), await collectNFT.totalSupply());

    expect(collectTx).to.emit(lensHub, "Acted");
    expect(await testToken.balanceOf(treasury)).to.equal(treasuryAmount);
    expect(await testToken.balanceOf(author.address)).to.equal(amount - treasuryAmount);
    expect(await collectNFT.balanceOf(collector.address)).to.equal(1);
  });
});
