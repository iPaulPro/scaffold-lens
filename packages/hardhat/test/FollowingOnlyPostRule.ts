import hre from "hardhat";
import { expect } from "chai";
import deployLensProtocol from "../deploy/00_deploy_lens_protocol";
import { AddressBook, clearAddressBook, loadAddressBook } from "../lib/lens/lensUtils";
import { Wallet } from "zksync-ethers";
import deployFollowingOnlyPostRule from "../deploy/03_deploy_post_rule";
import { createMockLensAccount } from "./lib/createMockLensAccount";
import { Account, Feed, FollowingOnlyPostRule, Graph } from "../typechain-types";
import { KeyValueStruct, RuleChangeStruct } from "../typechain-types/contracts/lens/core/interfaces/IFeed";
import { keccak256, toUtf8Bytes, AbiCoder, ZeroHash } from "ethers";

let addressBook: AddressBook;
let deployerWallet: Wallet;

let authorAccountAddress: string | undefined;
let friendAccountAddress: string | undefined;
let lensGraphAddress: string | undefined;
let lensFeedAddress: string | undefined;
let postRuleAddress: string | undefined;

let authorAccount: Account;
let friendAccount: Account;
let postRule: FollowingOnlyPostRule;
let lensGraph: Graph;
let lensFeed: Feed;
let postId: string | undefined;
let ruleParams: KeyValueStruct[] = [];

describe("Given a FollowingOnlyPostRule", async () => {
  before(async () => {
    clearAddressBook();
    await deployLensProtocol(hre);

    addressBook = loadAddressBook();

    lensGraphAddress = addressBook["LensGlobalGraph"]?.address;
    if (!lensGraphAddress) {
      throw new Error("LensGlobalGraph address not found in address book");
    }
    lensGraph = await hre.ethers.getContractAt("Graph", lensGraphAddress);

    lensFeedAddress = addressBook["LensGlobalFeed"]?.address;
    if (!lensFeedAddress) {
      throw new Error("LensGlobalFeed address not found in address book");
    }
    lensFeed = await hre.ethers.getContractAt("Feed", lensFeedAddress);

    ruleParams = [
      {
        key: keccak256(toUtf8Bytes("lens.param.graph")),
        value: AbiCoder.defaultAbiCoder().encode(["address"], [lensGraphAddress]),
      },
      {
        key: keccak256(toUtf8Bytes("lens.param.repliesRestricted")),
        value: AbiCoder.defaultAbiCoder().encode(["bool"], [true]),
      },
      {
        key: keccak256(toUtf8Bytes("lens.param.repostsRestricted")),
        value: AbiCoder.defaultAbiCoder().encode(["bool"], [true]),
      },
      {
        key: keccak256(toUtf8Bytes("lens.param.quotesRestricted")),
        value: AbiCoder.defaultAbiCoder().encode(["bool"], [true]),
      },
    ];

    deployerWallet = await hre.deployer.getWallet(0);

    try {
      const account = await createMockLensAccount(deployerWallet, addressBook, deployerWallet);
      if (!account) {
        throw new Error("Failed to create author account");
      }
      authorAccountAddress = account;
      authorAccount = await hre.ethers.getContractAt("Account", authorAccountAddress);

      const friend = await createMockLensAccount(deployerWallet, addressBook, deployerWallet);
      if (!friend) {
        throw new Error("Failed to create friend account");
      }
      friendAccountAddress = friend;
      friendAccount = await hre.ethers.getContractAt("Account", friendAccountAddress);
    } catch (e) {
      console.error("Error creating mock Lens accounts:", e);
      throw e;
    }
  });

  it("should deploy successfully", async () => {
    postRuleAddress = await deployFollowingOnlyPostRule(hre);
    postRule = await hre.ethers.getContractAt("FollowingOnlyPostRule", postRuleAddress);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(postRule).to.exist;
  });

  it("should be possible to create a post with the rule", async () => {
    if (!postRuleAddress) {
      throw new Error("FollowingOnlyPostRule address is undefined");
    }
    if (!lensGraphAddress) {
      throw new Error("LensGlobalGraph address is undefined");
    }
    if (!authorAccountAddress) {
      throw new Error("Author account address is undefined");
    }
    if (!lensFeedAddress) {
      throw new Error("LensFeed address is undefined");
    }

    const contentURI = "lens://content";
    const ruleChanges: RuleChangeStruct[] = [
      {
        ruleAddress: postRuleAddress,
        configSalt: ZeroHash,
        configurationChanges: {
          configure: true,
          ruleParams,
        },
        selectorChanges: [
          {
            ruleSelector: postRule.interface.getFunction("processCreatePost").selector,
            isRequired: true,
            enabled: true,
          },
        ],
      },
    ];
    const createPostData = lensFeed.interface.encodeFunctionData("createPost", [
      {
        author: authorAccountAddress,
        contentURI,
        repostedPostId: 0n,
        quotedPostId: 0n,
        repliedPostId: 0n,
        ruleChanges,
        extraData: [],
      },
      [], // customParams
      [], // feedRulesParams
      [], // rootPostRulesParams
      [], // quotedPostRulesParams
    ]);

    postId = await authorAccount
      .connect(deployerWallet)
      .executeTransaction.staticCall(lensFeedAddress, 0n, createPostData);

    const createPostTx = authorAccount.connect(deployerWallet).executeTransaction(lensFeedAddress, 0n, createPostData);

    await expect(createPostTx).to.not.be.reverted;

    const processCreatePostSelector = postRule.interface.getFunction("processCreatePost").selector;
    const requiredRules = await lensFeed.getPostRules(processCreatePostSelector, postId, true);

    expect(requiredRules[0][0]).to.eq(postRuleAddress);
  });

  it("should restrict a comment if the author is not followed by the root author", async () => {
    if (!postId) {
      throw new Error("Post ID is undefined");
    }
    if (!lensFeedAddress) {
      throw new Error("LensFeed address is undefined");
    }
    if (!authorAccountAddress) {
      throw new Error("Author account address is undefined");
    }
    if (!friendAccountAddress) {
      throw new Error("Friend account address is undefined");
    }

    const contentURI = "lens://reply-content";
    const ruleChanges: RuleChangeStruct[] = [];
    const createReplyData = lensFeed.interface.encodeFunctionData("createPost", [
      {
        author: friendAccountAddress,
        contentURI,
        repostedPostId: 0n,
        quotedPostId: 0n,
        repliedPostId: postId,
        ruleChanges,
        extraData: [],
      },
      [], // customParams
      [], // feedRulesParams
      [{ ruleAddress: postRuleAddress as `0x${string}`, configSalt: ZeroHash, ruleParams }], // rootPostRulesParams
      [], // quotedPostRulesParams
    ]);

    const createPostTx = friendAccount.connect(deployerWallet).executeTransaction(lensFeedAddress, 0n, createReplyData);

    await expect(createPostTx).to.be.reverted;
  });

  it("should allow a comment if the author is followed by the root author", async () => {
    if (!postId) {
      throw new Error("Post ID is undefined");
    }
    if (!lensFeedAddress) {
      throw new Error("LensFeed address is undefined");
    }
    if (!lensGraphAddress) {
      throw new Error("LensGlobalGraph address is undefined");
    }
    if (!authorAccountAddress) {
      throw new Error("Author account address is undefined");
    }
    if (!friendAccountAddress) {
      throw new Error("Friend account address is undefined");
    }

    const followData = lensGraph.interface.encodeFunctionData("follow", [
      authorAccountAddress,
      friendAccountAddress,
      [], // customParams
      [], // graphRulesProcessingParams
      [], // followRulesProcessingParams
      [], // extraData
    ]);
    const followTx = authorAccount.connect(deployerWallet).executeTransaction(lensGraphAddress, 0n, followData);
    await expect(followTx).to.not.be.reverted;

    const contentURI = "lens://reply-content";
    const ruleChanges: RuleChangeStruct[] = [];
    const createCommentData = lensFeed.interface.encodeFunctionData("createPost", [
      {
        author: friendAccountAddress,
        contentURI,
        repostedPostId: 0n,
        quotedPostId: 0n,
        repliedPostId: postId,
        ruleChanges,
        extraData: [],
      },
      [], // customParams
      [], // feedRulesParams
      [{ ruleAddress: postRuleAddress as `0x${string}`, configSalt: ZeroHash, ruleParams }], // rootPostRulesParams
      [], // quotedPostRulesParams
    ]);

    const createPostTx = friendAccount
      .connect(deployerWallet)
      .executeTransaction(lensFeedAddress, 0n, createCommentData);

    await expect(createPostTx).to.not.be.reverted;
  });
});
