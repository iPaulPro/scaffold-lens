import { ethers, deployments, artifacts } from "hardhat";
import { expect } from "chai";
import {
  ContractTransactionResponse,
  encodeBytes32String,
  EventLog,
  Log,
  ZeroAddress,
  parseUnits,
  ZeroHash,
} from "ethers";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import {
  FlexCollectModule,
  FlexCollectPublicationAction,
  LensHandles,
  LensHub,
  SimpleFlexCollectModule,
  TestToken,
  TokenHandleRegistry,
  BulkMintFlexCollectModule,
} from "../typechain-types";

type CollectModule = FlexCollectModule | SimpleFlexCollectModule | BulkMintFlexCollectModule;

const isEventLog = (log: EventLog | Log): log is EventLog => {
  return "eventName" in log;
};

const createProfileWithHandle = async (
  lensHub: LensHub,
  lensHandles: LensHandles,
  tokenHandleRegistry: TokenHandleRegistry,
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
    ?.filter(isEventLog)
    .find(log => log.eventName === "Transfer");
  const profileId = createProfileEventLog?.args?.[2];

  const mintHandle = await lensHandles.mintHandle(signer.address, handle);
  const mintHandleReceipt = await mintHandle.wait();
  const mintHandleEventLog = mintHandleReceipt?.logs?.filter(isEventLog).find(log => log.eventName === "Transfer");
  const handleId = mintHandleEventLog?.args?.[2];

  const ownerConnection = tokenHandleRegistry.connect(signer);
  await ownerConnection.link(handleId, profileId);

  return { profileId, handleId };
};

const getModuleMetadata = async (module: CollectModule) => {
  const metadataUri = await module.getModuleMetadataURI();
  const metadataRes = await fetch(metadataUri.replace("ar://", "https://gateway.irys.xyz/"));
  return metadataRes.json();
};

interface CreatePostParams {
  lensHub: LensHub;
  author: HardhatEthersSigner;
  profileId: bigint;
  actionModule: FlexCollectPublicationAction;
  collectModule: CollectModule;
  collectInitValues: any[];
  collectNFT?: string;
  tokenName?: string;
  tokenSymbol?: string;
  tokenRoyalty?: number;
  tokenContentURI?: string;
  postContentURI?: string;
}

const createPost = async ({
  lensHub,
  author,
  profileId,
  collectModule,
  collectInitValues,
  actionModule,
  collectNFT = ZeroAddress,
  postContentURI = "testing",
}: CreatePostParams): Promise<bigint> => {
  const metadata = await getModuleMetadata(collectModule);
  const abi = JSON.parse(metadata.initializeCalldataABI);

  const collectInitData = ethers.AbiCoder.defaultAbiCoder().encode(abi, collectInitValues);

  const actionInitData = ethers.AbiCoder.defaultAbiCoder().encode(
    ["address", "bytes", "address"],
    [await collectModule.getAddress(), collectInitData, collectNFT],
  );

  const postParams = {
    profileId: profileId,
    contentURI: postContentURI,
    actionModules: [await actionModule.getAddress()],
    actionModulesInitDatas: [actionInitData as `0x${string}`],
    referenceModule: ZeroAddress,
    referenceModuleInitData: "0x",
  };

  const postId = await lensHub.connect(author).post.staticCall(postParams);
  await lensHub.connect(author).post(postParams);
  return postId;
};

const mintTokens = async (testToken: TestToken, collectorAddress: string) => {
  const decimals = await testToken.decimals();
  await testToken.mint(collectorAddress, parseUnits("10", decimals));
};

describe("FlexCollectPublicationAction", () => {
  let author: HardhatEthersSigner;
  let collector: HardhatEthersSigner;
  let shareRecipient: HardhatEthersSigner;
  let lensHub: LensHub;
  let lensHandles: LensHandles;
  let tokenHandleRegistry: TokenHandleRegistry;
  let testToken: TestToken;
  let actionModule: FlexCollectPublicationAction;
  let simpleFlexCollectModule: SimpleFlexCollectModule;
  let flexCollectModule: FlexCollectModule;
  let bulkMintFlexCollectModule: BulkMintFlexCollectModule;

  let testTokenAddress: string;
  let authorProfileId: bigint;
  let collectorProfileId: bigint;

  const createAndActOnPaidPost = async (value: bigint, recipients: any[][]) => {
    const collectInitValues = [
      value,
      "0",
      testTokenAddress,
      "0",
      false,
      "0",
      recipients,
      ethers.ZeroHash,
      ethers.ZeroHash,
      0,
      ethers.ZeroHash,
    ];
    const postId = await createPost({
      lensHub,
      author,
      profileId: authorProfileId,
      actionModule,
      collectModule: flexCollectModule,
      collectInitValues,
    });

    await mintTokens(testToken, collector.address);
    await testToken.connect(collector).approve(flexCollectModule, value * 10n);

    const metadata = await getModuleMetadata(flexCollectModule);
    const abi = JSON.parse(metadata.processCalldataABI);

    const actionModuleAddress = await actionModule.getAddress();

    const processCollectData = ethers.AbiCoder.defaultAbiCoder().encode(abi, [testTokenAddress, value]);
    const processActionData = ethers.AbiCoder.defaultAbiCoder().encode(
      ["address", "bytes"],
      [collector.address, processCollectData],
    );

    const collectTx = await lensHub.connect(collector).act({
      publicationActedProfileId: authorProfileId,
      publicationActedId: postId,
      actorProfileId: collectorProfileId,
      referrerProfileIds: [],
      referrerPubIds: [],
      actionModuleAddress: actionModuleAddress,
      actionModuleData: processActionData,
    });

    const collectData = await actionModule.getCollectData(authorProfileId, postId);

    return { collectTx, collectData, value };
  };

  describe("SimpleFlexCollectModule", () => {
    const createAndActOnFreePost = async () => {
      const collectInitValues = ["0", "0", ZeroAddress, "0", false, "0", author.address];
      const postId = await createPost({
        lensHub,
        author,
        profileId: authorProfileId,
        actionModule,
        collectModule: simpleFlexCollectModule,
        collectInitValues,
      });

      const metadata = await getModuleMetadata(simpleFlexCollectModule);
      const abi = JSON.parse(metadata.processCalldataABI);

      const actionModuleAddress = await actionModule.getAddress();

      const processCollectData = ethers.AbiCoder.defaultAbiCoder().encode(abi, [ZeroAddress, "0"]);
      const processActionData = ethers.AbiCoder.defaultAbiCoder().encode(
        ["address", "bytes"],
        [collector.address, processCollectData],
      );

      const collectTx = await lensHub.connect(collector).act({
        publicationActedProfileId: authorProfileId,
        publicationActedId: postId,
        actorProfileId: collectorProfileId,
        referrerProfileIds: [],
        referrerPubIds: [],
        actionModuleAddress: actionModuleAddress,
        actionModuleData: processActionData,
      });

      const collectData = await actionModule.getCollectData(authorProfileId, postId);

      return { collectTx, collectData };
    };

    beforeEach(async () => {
      [, author, collector] = await ethers.getSigners();

      await deployments.fixture([
        "LensHub",
        "TestToken",
        "FlexCollectNFT",
        "FlexCollectPublicationAction",
        "SimpleFlexCollectModule",
      ]);

      lensHub = await ethers.getContract("LensHub");
      lensHandles = await ethers.getContract("LensHandles");
      tokenHandleRegistry = await ethers.getContract("TokenHandleRegistry");
      testToken = await ethers.getContract("TestToken");
      testTokenAddress = await testToken.getAddress();
      actionModule = await ethers.getContract("FlexCollectPublicationAction");
      simpleFlexCollectModule = await ethers.getContract("SimpleFlexCollectModule");

      const { profileId: authorId } = await createProfileWithHandle(
        lensHub,
        lensHandles,
        tokenHandleRegistry,
        author,
        "author",
      );
      authorProfileId = authorId;

      const { profileId: collectorId } = await createProfileWithHandle(
        lensHub,
        lensHandles,
        tokenHandleRegistry,
        collector,
        "collector",
      );
      collectorProfileId = collectorId;
    });

    it("Should initialize a publication with SimpleFlexCollectModule", async () => {
      const collectInitValues = ["0", "0", ZeroAddress, "0", false, "0", author.address];
      const postId = await createPost({
        lensHub,
        author,
        profileId: authorProfileId,
        actionModule,
        collectModule: simpleFlexCollectModule,
        collectInitValues,
      });

      const actionModuleAddress = await actionModule.getAddress();
      expect(await lensHub.isActionModuleEnabledInPublication(authorProfileId, postId, actionModuleAddress)).to.equal(
        true,
      );

      const collectData = await actionModule.getCollectData(authorProfileId, postId);
      const collectModuleAddress = await simpleFlexCollectModule.getAddress();
      expect(collectData.collectModule).to.equal(collectModuleAddress);
    });

    it("Should initialize a FREE collect with SimpleFlexCollectModule", async () => {
      const collectInitValues = ["0", "0", ZeroAddress, "0", false, "0", author.address];
      const postId = await createPost({
        lensHub,
        author,
        profileId: authorProfileId,
        actionModule,
        collectModule: simpleFlexCollectModule,
        collectInitValues,
      });

      expect(await simpleFlexCollectModule.calculateFee(authorProfileId, postId)).to.equal(0);
    });

    it("Should initialize a PAID collect publication with SimpleFlexCollectModule", async () => {
      const collectInitValues = [parseUnits(".001", 18), "0", testTokenAddress, "0", false, "0", author.address];
      const postId = await createPost({
        lensHub,
        author,
        profileId: authorProfileId,
        actionModule,
        collectModule: simpleFlexCollectModule,
        collectInitValues,
      });

      expect(await simpleFlexCollectModule.calculateFee(authorProfileId, postId)).to.equal(parseUnits(".001", 18));
    });

    it("Should allow FREE minting of NFTs with SimpleFlexCollectModule", async () => {
      const { collectTx, collectData } = await createAndActOnFreePost();

      const collectNFTImpl = await artifacts.readArtifact("FlexCollectNFT");
      const collectNFT = new ethers.Contract(collectData.collectNFT, collectNFTImpl.abi, collector);

      expect(collectTx).to.emit(lensHub, "Acted");
      expect(await collectNFT.balanceOf(collector.address)).to.equal(1);
    });

    it("Should allow PAID minting of NFTs with SimpleFlexCollectModule", async () => {
      const value = parseUnits("0.01", 18);
      const collectInitValues = [value, "0", testTokenAddress, "0", false, "0", author.address];
      const postId = await createPost({
        lensHub,
        author,
        profileId: authorProfileId,
        actionModule,
        collectModule: simpleFlexCollectModule,
        collectInitValues,
      });

      await mintTokens(testToken, collector.address);
      await testToken.connect(collector).approve(simpleFlexCollectModule, value);

      const metadata = await getModuleMetadata(simpleFlexCollectModule);
      const abi = JSON.parse(metadata.processCalldataABI);

      const actionModuleAddress = await actionModule.getAddress();

      const processCollectData = ethers.AbiCoder.defaultAbiCoder().encode(abi, [testTokenAddress, value]);
      const processActionData = ethers.AbiCoder.defaultAbiCoder().encode(
        ["address", "bytes"],
        [collector.address, processCollectData],
      );

      const collectTx = await lensHub.connect(collector).act({
        publicationActedProfileId: authorProfileId,
        publicationActedId: postId,
        actorProfileId: collectorProfileId,
        referrerProfileIds: [],
        referrerPubIds: [],
        actionModuleAddress: actionModuleAddress,
        actionModuleData: processActionData,
      });

      const collectData = await actionModule.getCollectData(authorProfileId, postId);

      const collectNFTImpl = await artifacts.readArtifact("FlexCollectNFT");
      const collectNFT = new ethers.Contract(collectData.collectNFT, collectNFTImpl.abi, collector);

      expect(collectTx).to.emit(lensHub, "Acted");
      expect(await collectNFT.balanceOf(collector.address)).to.equal(1);
    });

    it("Should allow adding a new post to existing CollectNFT with SimpleFlexCollectModule", async () => {
      const { collectData } = await createAndActOnFreePost();

      const collectNFTImpl = await artifacts.readArtifact("FlexCollectNFT");
      const collectNFT = new ethers.Contract(collectData.collectNFT, collectNFTImpl.abi, collector);

      const collectInitValues = ["0", "0", ZeroAddress, "0", false, "0", author.address];
      const postContentURI = "testing2";
      const postId = await createPost({
        lensHub,
        author,
        profileId: authorProfileId,
        actionModule,
        collectModule: simpleFlexCollectModule,
        collectInitValues,
        collectNFT: await collectNFT.getAddress(),
        postContentURI,
      });

      const actionModuleAddress = await actionModule.getAddress();
      expect(await lensHub.isActionModuleEnabledInPublication(authorProfileId, postId, actionModuleAddress)).to.equal(
        true,
      );

      const newCollectData = await actionModule.getCollectData(authorProfileId, postId);
      expect(newCollectData.collectNFT).to.equal(await collectNFT.getAddress());

      const metadata = await getModuleMetadata(simpleFlexCollectModule);
      const abi = JSON.parse(metadata.processCalldataABI);

      const processCollectData = ethers.AbiCoder.defaultAbiCoder().encode(abi, [ZeroAddress, "0"]);
      const processActionData = ethers.AbiCoder.defaultAbiCoder().encode(
        ["address", "bytes"],
        [collector.address, processCollectData],
      );

      const collectTx = await lensHub.connect(collector).act({
        publicationActedProfileId: authorProfileId,
        publicationActedId: postId,
        actorProfileId: collectorProfileId,
        referrerProfileIds: [],
        referrerPubIds: [],
        actionModuleAddress: actionModuleAddress,
        actionModuleData: processActionData,
      });

      expect(collectTx).to.emit(lensHub, "Acted");
      // Should have 2 NFTs now
      expect(await collectNFT.balanceOf(collector.address)).to.equal(2);
      expect(await collectNFT.tokenURI(2)).to.equal(postContentURI);
    });
  });

  describe("FlexCollectModule", () => {
    beforeEach(async () => {
      [, author, collector, shareRecipient] = await ethers.getSigners();

      await deployments.fixture([
        "LensHub",
        "TestToken",
        "FlexCollectNFT",
        "FlexCollectPublicationAction",
        "FlexCollectModule",
      ]);

      lensHub = await ethers.getContract("LensHub");
      lensHandles = await ethers.getContract("LensHandles");
      tokenHandleRegistry = await ethers.getContract("TokenHandleRegistry");
      testToken = await ethers.getContract("TestToken");
      testTokenAddress = await testToken.getAddress();
      actionModule = await ethers.getContract("FlexCollectPublicationAction");
      flexCollectModule = await ethers.getContract("FlexCollectModule");

      const { profileId: authorId } = await createProfileWithHandle(
        lensHub,
        lensHandles,
        tokenHandleRegistry,
        author,
        "author",
      );
      authorProfileId = authorId;

      const { profileId: collectorId } = await createProfileWithHandle(
        lensHub,
        lensHandles,
        tokenHandleRegistry,
        collector,
        "collector",
      );
      collectorProfileId = collectorId;
    });

    it("Should initialize a publication with FlexCollectModule", async () => {
      const tokenName = "Test NFT";
      const tokenSymbol = "TST";
      const tokenRoyalty = 1000;
      const tokenContentURI = "https://fake.uri";

      const collectInitValues = [
        parseUnits(".01", 18),
        "0",
        testTokenAddress,
        "0",
        false,
        "0",
        [[author.address, "10000"]],
        encodeBytes32String(tokenName),
        encodeBytes32String(tokenSymbol),
        tokenRoyalty,
        encodeBytes32String(tokenContentURI),
      ];
      const postId = await createPost({
        lensHub,
        author,
        profileId: authorProfileId,
        actionModule,
        collectModule: flexCollectModule,
        collectInitValues,
      });

      const tokenData = await flexCollectModule.getTokenData(authorProfileId, postId);
      expect(tokenData.name).to.equal(encodeBytes32String(tokenName));
      expect(tokenData.symbol).to.equal(encodeBytes32String(tokenSymbol));
      expect(tokenData.royalty).to.equal(tokenRoyalty);
      expect(tokenData.contractURI).to.equal(encodeBytes32String(tokenContentURI));

      const actionModuleAddress = await actionModule.getAddress();
      expect(await lensHub.isActionModuleEnabledInPublication(authorProfileId, postId, actionModuleAddress)).to.equal(
        true,
      );
    });

    it("Should initialize a PAID collect with FlexCollectModule", async () => {
      const value = parseUnits("0.01", 18);
      const collectInitValues = [
        value,
        "0",
        testTokenAddress,
        "0",
        false,
        "0",
        [[author.address, "10000"]],
        ethers.ZeroHash,
        ethers.ZeroHash,
        0,
        ethers.ZeroHash,
      ];
      const postId = await createPost({
        lensHub,
        author,
        profileId: authorProfileId,
        actionModule,
        collectModule: flexCollectModule,
        collectInitValues,
      });

      expect(await flexCollectModule.calculateFee(authorProfileId, postId)).to.equal(value);
    });

    it("Should allow PAID minting of NFTs with FlexCollectModule and a single recipient", async () => {
      const value = parseUnits("0.01", 18);
      const { collectTx, collectData } = await createAndActOnPaidPost(value, [[author.address, "10000"]]);

      const collectNFTImpl = await artifacts.readArtifact("FlexCollectNFT");
      const collectNFT = new ethers.Contract(collectData.collectNFT, collectNFTImpl.abi, collector);

      const treasury = await lensHub.getTreasury();
      const treasuryFee = await lensHub.getTreasuryFee();
      const treasuryAmount = (value * treasuryFee) / 10000n;

      expect(collectTx).to.emit(lensHub, "Acted");
      expect(await testToken.balanceOf(treasury)).to.equal(treasuryAmount);
      expect(await testToken.balanceOf(author.address)).to.equal(value - treasuryAmount);
      expect(await collectNFT.balanceOf(collector.address)).to.equal(1);
    });

    it("Should allow PAID minting of NFTs with FlexCollectModule and a multiple recipients", async () => {
      const value = parseUnits("0.01", 18);
      const { collectTx, collectData } = await createAndActOnPaidPost(value, [
        [author.address, "5000"],
        [shareRecipient.address, "5000"],
      ]);

      const collectNFTImpl = await artifacts.readArtifact("FlexCollectNFT");
      const collectNFT = new ethers.Contract(collectData.collectNFT, collectNFTImpl.abi, collector);

      const treasury = await lensHub.getTreasury();
      const treasuryFee = await lensHub.getTreasuryFee();
      const treasuryAmount = (value * treasuryFee) / 10000n;
      const recipientShare = (value - treasuryAmount) / 2n;

      expect(collectTx).to.emit(lensHub, "Acted");
      expect(await testToken.balanceOf(treasury)).to.equal(treasuryAmount);
      expect(await testToken.balanceOf(author.address)).to.equal(recipientShare);
      expect(await testToken.balanceOf(shareRecipient.address)).to.equal(recipientShare);
      expect(await collectNFT.balanceOf(collector.address)).to.equal(1);
    });

    it("Should allow adding a new post to existing CollectNFT with FlexCollectModule", async () => {
      const value = parseUnits("0.01", 18);
      const recipients = [[author.address, "10000"]];
      const { collectData } = await createAndActOnPaidPost(value, recipients);

      const collectNFTImpl = await artifacts.readArtifact("FlexCollectNFT");
      const collectNFT = new ethers.Contract(collectData.collectNFT, collectNFTImpl.abi, collector);

      const collectInitValues = [
        value,
        "0",
        testTokenAddress,
        "0",
        false,
        "0",
        recipients,
        ZeroHash,
        ZeroHash,
        0,
        ZeroHash,
      ];
      const postContentURI = "testing2";
      const postId = await createPost({
        lensHub,
        author,
        profileId: authorProfileId,
        actionModule,
        collectModule: flexCollectModule,
        collectInitValues,
        collectNFT: await collectNFT.getAddress(),
        postContentURI,
      });

      const actionModuleAddress = await actionModule.getAddress();
      expect(await lensHub.isActionModuleEnabledInPublication(authorProfileId, postId, actionModuleAddress)).to.equal(
        true,
      );

      const newCollectData = await actionModule.getCollectData(authorProfileId, postId);
      expect(newCollectData.collectNFT).to.equal(await collectNFT.getAddress());

      const metadata = await getModuleMetadata(flexCollectModule);
      const abi = JSON.parse(metadata.processCalldataABI);

      const processCollectData = ethers.AbiCoder.defaultAbiCoder().encode(abi, [testTokenAddress, value]);
      const processActionData = ethers.AbiCoder.defaultAbiCoder().encode(
        ["address", "bytes"],
        [collector.address, processCollectData],
      );

      const collectTx = await lensHub.connect(collector).act({
        publicationActedProfileId: authorProfileId,
        publicationActedId: postId,
        actorProfileId: collectorProfileId,
        referrerProfileIds: [],
        referrerPubIds: [],
        actionModuleAddress: actionModuleAddress,
        actionModuleData: processActionData,
      });

      expect(collectTx).to.emit(lensHub, "Acted");
      // Should have 2 NFTs now
      expect(await collectNFT.balanceOf(collector.address)).to.equal(2);
      expect(await collectNFT.tokenURI(2)).to.equal(postContentURI);
    });
  });

  describe("BulkMintFlexCollectModule", () => {
    beforeEach(async () => {
      [, author, collector, shareRecipient] = await ethers.getSigners();

      await deployments.fixture([
        "LensHub",
        "TestToken",
        "FlexCollectNFT",
        "FlexCollectPublicationAction",
        "BulkMintFlexCollectModule",
      ]);

      lensHub = await ethers.getContract("LensHub");
      lensHandles = await ethers.getContract("LensHandles");
      tokenHandleRegistry = await ethers.getContract("TokenHandleRegistry");
      testToken = await ethers.getContract("TestToken");
      testTokenAddress = await testToken.getAddress();
      actionModule = await ethers.getContract("FlexCollectPublicationAction");
      bulkMintFlexCollectModule = await ethers.getContract("BulkMintFlexCollectModule");

      const { profileId: authorId } = await createProfileWithHandle(
        lensHub,
        lensHandles,
        tokenHandleRegistry,
        author,
        "author",
      );
      authorProfileId = authorId;

      const { profileId: collectorId } = await createProfileWithHandle(
        lensHub,
        lensHandles,
        tokenHandleRegistry,
        collector,
        "collector",
      );
      collectorProfileId = collectorId;
    });

    it("Should initialize a publication with BulkMintFlexCollectModule", async () => {
      const tokenName = "Test NFT";
      const tokenSymbol = "TST";
      const tokenRoyalty = 1000;
      const tokenContentURI = "https://fake.uri";

      const collectInitValues = [
        parseUnits(".01", 18),
        "0",
        testTokenAddress,
        "0",
        false,
        "0",
        [[author.address, "10000"]],
        encodeBytes32String(tokenName),
        encodeBytes32String(tokenSymbol),
        tokenRoyalty,
        encodeBytes32String(tokenContentURI),
      ];
      const postId = await createPost({
        lensHub,
        author,
        profileId: authorProfileId,
        actionModule,
        collectModule: bulkMintFlexCollectModule,
        collectInitValues,
        collectNFT: ZeroAddress,
      });

      const actionModuleAddress = await actionModule.getAddress();
      expect(await lensHub.isActionModuleEnabledInPublication(authorProfileId, postId, actionModuleAddress)).to.equal(
        true,
      );

      const tokenData = await bulkMintFlexCollectModule.getTokenData(authorProfileId, postId);
      expect(tokenData.name).to.equal(encodeBytes32String(tokenName));
      expect(tokenData.symbol).to.equal(encodeBytes32String(tokenSymbol));
      expect(tokenData.royalty).to.equal(tokenRoyalty);
      expect(tokenData.contractURI).to.equal(encodeBytes32String(tokenContentURI));

      const collectData = await actionModule.getCollectData(authorProfileId, postId);
      const collectModuleAddress = await bulkMintFlexCollectModule.getAddress();
      expect(collectData.collectModule).to.equal(collectModuleAddress);
    });

    it("Should initialize a PAID collect publication with BulkMintFlexCollectModule", async () => {
      const value = parseUnits(".01", 18);
      const collectInitValues = [
        value,
        "0",
        testTokenAddress,
        "0",
        false,
        "0",
        [[author.address, "10000"]],
        ZeroHash,
        ZeroHash,
        0,
        ZeroHash,
      ];
      const postId = await createPost({
        lensHub,
        author,
        profileId: authorProfileId,
        actionModule,
        collectModule: bulkMintFlexCollectModule,
        collectInitValues,
      });

      expect(await bulkMintFlexCollectModule.calculateFee(authorProfileId, postId)).to.equal(value);
    });

    it("Should allow PAID minting of a SINGLE NFT with BulkMintFlexCollectModule", async () => {
      const value = parseUnits("0.01", 18);
      const collectInitValues = [
        value,
        "0",
        testTokenAddress,
        "0",
        false,
        "0",
        [[author.address, "10000"]],
        ZeroHash,
        ZeroHash,
        0,
        ZeroHash,
      ];
      const postId = await createPost({
        lensHub,
        author,
        profileId: authorProfileId,
        actionModule,
        collectModule: bulkMintFlexCollectModule,
        collectInitValues,
      });

      await mintTokens(testToken, collector.address);
      await testToken.connect(collector).approve(bulkMintFlexCollectModule, value);

      const metadata = await getModuleMetadata(bulkMintFlexCollectModule);
      const abi = JSON.parse(metadata.processCalldataABI);

      const actionModuleAddress = await actionModule.getAddress();

      const processCollectData = ethers.AbiCoder.defaultAbiCoder().encode(abi, [testTokenAddress, value, 1]);
      const processActionData = ethers.AbiCoder.defaultAbiCoder().encode(
        ["address", "bytes"],
        [collector.address, processCollectData],
      );

      const collectTx = await lensHub.connect(collector).act({
        publicationActedProfileId: authorProfileId,
        publicationActedId: postId,
        actorProfileId: collectorProfileId,
        referrerProfileIds: [],
        referrerPubIds: [],
        actionModuleAddress: actionModuleAddress,
        actionModuleData: processActionData,
      });

      const collectData = await actionModule.getCollectData(authorProfileId, postId);

      const collectNFTImpl = await artifacts.readArtifact("FlexCollectNFT");
      const collectNFT = new ethers.Contract(collectData.collectNFT, collectNFTImpl.abi, collector);

      expect(collectTx).to.emit(lensHub, "Acted");
      expect(await collectNFT.balanceOf(collector.address)).to.equal(1);
    });

    it("Should allow PAID minting of MULTIPLE NFTs with BulkMintFlexCollectModule", async () => {
      const value = parseUnits("0.01", 18);
      const collectInitValues = [
        value,
        "0",
        testTokenAddress,
        "0",
        false,
        "0",
        [[author.address, "10000"]],
        ZeroHash,
        ZeroHash,
        0,
        ZeroHash,
      ];
      const postId = await createPost({
        lensHub,
        author,
        profileId: authorProfileId,
        actionModule,
        collectModule: bulkMintFlexCollectModule,
        collectInitValues,
      });

      await mintTokens(testToken, collector.address);
      await testToken.connect(collector).approve(bulkMintFlexCollectModule, value * 10n);

      const metadata = await getModuleMetadata(bulkMintFlexCollectModule);
      const abi = JSON.parse(metadata.processCalldataABI);

      const actionModuleAddress = await actionModule.getAddress();

      const processCollectData = ethers.AbiCoder.defaultAbiCoder().encode(abi, [testTokenAddress, value * 10n, 10]);
      const processActionData = ethers.AbiCoder.defaultAbiCoder().encode(
        ["address", "bytes"],
        [collector.address, processCollectData],
      );

      const collectTx = await lensHub.connect(collector).act({
        publicationActedProfileId: authorProfileId,
        publicationActedId: postId,
        actorProfileId: collectorProfileId,
        referrerProfileIds: [],
        referrerPubIds: [],
        actionModuleAddress: actionModuleAddress,
        actionModuleData: processActionData,
      });

      const collectData = await actionModule.getCollectData(authorProfileId, postId);

      const collectNFTImpl = await artifacts.readArtifact("FlexCollectNFT");
      const collectNFT = new ethers.Contract(collectData.collectNFT, collectNFTImpl.abi, collector);

      expect(collectTx).to.emit(lensHub, "Acted");
      expect(await collectNFT.balanceOf(collector.address)).to.equal(10);
    });
  });
});
