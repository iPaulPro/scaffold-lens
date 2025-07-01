import hre from "hardhat";
import { expect } from "chai";
import deployLensProtocol from "../deploy/00_deploy_lens_protocol";
import { AddressBook, clearAddressBook, loadAddressBook } from "../lib/lens/lensUtils";
import { Wallet } from "zksync-ethers";
import deployFollowingOnlyPostRule from "../deploy/03_deploy_post_rule";
import { createMockLensAccount } from "./lib/createMockLensAccount";
import { Account, AccountVerificationAction, ActionHub, Feed, FollowingOnlyPostRule, Graph } from "../typechain-types";
import { KeyValueStruct, RuleChangeStruct } from "../typechain-types/lens-modules/contracts/core/interfaces/IFeed";
import { AbiCoder, keccak256, toUtf8Bytes, ZeroHash } from "ethers";
import deployAccountVerificationAction from "../deploy/04_deploy_account_action";

let addressBook: AddressBook;
let deployerWallet: Wallet;

let lensGraphAddress: string | undefined;
let lensFeedAddress: string | undefined;

let lensDeploymentSnapshotId: string | number | undefined;

describe("Given a FollowingOnlyPostRule contract", async () => {
  let authorAccountAddress: string | undefined;
  let friendAccountAddress: string | undefined;
  let postRuleAddress: string | undefined;

  let authorAccount: Account;
  let friendAccount: Account;
  let postRule: FollowingOnlyPostRule;
  let lensGraph: Graph;
  let lensFeed: Feed;
  let postId: string | undefined;
  let ruleParams: KeyValueStruct[] = [];

  before(async () => {
    clearAddressBook();
    await deployLensProtocol(hre);
    addressBook = loadAddressBook();

    lensDeploymentSnapshotId = await hre.network.provider.send("evm_snapshot");

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
      const account = await createMockLensAccount(deployerWallet, addressBook);
      if (!account) {
        throw new Error("Failed to create author account");
      }
      authorAccountAddress = account;
      authorAccount = await hre.ethers.getContractAt("Account", authorAccountAddress);

      const friend = await createMockLensAccount(deployerWallet, addressBook);
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

describe("Given an AccountVerificationAction contract", async () => {
  let accountActionAddress: string | undefined;
  let mainAccountAddress: string | undefined;
  let friendAccountAddress: string | undefined;
  let actionHubAddress: string | undefined;

  let accountAction: AccountVerificationAction;
  let mainAccount: Account;
  let friendAccount: Account;
  let actionHub: ActionHub;

  before(async () => {
    // Revert to the snapshot taken after Lens deployment
    await hre.network.provider.send("evm_revert", [lensDeploymentSnapshotId]);

    deployerWallet = await hre.deployer.getWallet(0);

    actionHubAddress = addressBook["ActionHub"]?.address;
    if (!actionHubAddress) {
      throw new Error("ActionHub address not found in address book");
    }
    actionHub = await hre.ethers.getContractAt("ActionHub", actionHubAddress);

    try {
      const account = await createMockLensAccount(deployerWallet, addressBook);
      if (!account) {
        throw new Error("Failed to create author account");
      }
      mainAccountAddress = account;
      mainAccount = await hre.ethers.getContractAt("Account", mainAccountAddress);

      const friend = await createMockLensAccount(deployerWallet, addressBook);
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

  it("should deploy the AccountVerificationAction contract", async () => {
    accountActionAddress = await deployAccountVerificationAction(hre);
    accountAction = await hre.ethers.getContractAt("AccountVerificationAction", accountActionAddress);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(accountAction).to.exist;
  });

  it("should be possible to configure the action", async () => {
    const configureTx = actionHub.configureAccountAction(
      accountActionAddress as `0x${string}`,
      mainAccountAddress as `0x${string}`,
      [],
    );

    expect(configureTx).to.emit(actionHub, "Lens_ActionHub_AccountAction_Configured");
  });

  it("should emit AccountVerified event when an account is verified", async () => {
    if (!accountActionAddress) {
      throw new Error("AccountAction address is undefined");
    }
    if (!actionHubAddress) {
      throw new Error("ActionHub address is undefined");
    }
    if (!mainAccountAddress) {
      throw new Error("Main account address is undefined");
    }
    const executeData = actionHub.interface.encodeFunctionData("executeAccountAction", [
      accountActionAddress as `0x${string}`,
      mainAccountAddress as `0x${string}`,
      [
        {
          key: keccak256(toUtf8Bytes("lens.param.verify")),
          value: AbiCoder.defaultAbiCoder().encode(["bool"], [true]),
        },
      ],
    ]);

    const executeTx = await friendAccount
      .connect(deployerWallet)
      .executeTransaction(actionHubAddress as `0x${string}`, 0n, executeData);

    await executeTx.wait();

    await expect(executeTx).to.emit(accountAction, "AccountVerified");
  });

  it("should return the verified status", async () => {
    if (!accountActionAddress) {
      throw new Error("AccountAction address is undefined");
    }
    if (!mainAccountAddress) {
      throw new Error("Main account address is undefined");
    }
    if (!friendAccountAddress) {
      throw new Error("Friend account address is undefined");
    }

    const isVerified = await accountAction.isVerified(
      friendAccountAddress as `0x${string}`,
      mainAccountAddress as `0x${string}`,
    );
    expect(isVerified).to.eq(true);
  });

  it("should emit AccountUnverified event when an account is unverified", async () => {
    if (!accountActionAddress) {
      throw new Error("AccountAction address is undefined");
    }
    if (!actionHubAddress) {
      throw new Error("ActionHub address is undefined");
    }
    if (!mainAccountAddress) {
      throw new Error("Main account address is undefined");
    }
    const executeData = actionHub.interface.encodeFunctionData("executeAccountAction", [
      accountActionAddress as `0x${string}`,
      mainAccountAddress as `0x${string}`,
      [
        {
          key: keccak256(toUtf8Bytes("lens.param.verify")),
          value: AbiCoder.defaultAbiCoder().encode(["bool"], [false]),
        },
      ],
    ]);

    const executeTx = friendAccount
      .connect(deployerWallet)
      .executeTransaction(actionHubAddress as `0x${string}`, 0n, executeData);

    await expect(executeTx).to.emit(accountAction, "AccountUnverified");
  });

  it("should return the unverified status", async () => {
    if (!accountActionAddress) {
      throw new Error("AccountAction address is undefined");
    }
    if (!mainAccountAddress) {
      throw new Error("Main account address is undefined");
    }
    if (!friendAccountAddress) {
      throw new Error("Friend account address is undefined");
    }

    const isVerified = await accountAction.isVerified(
      friendAccountAddress as `0x${string}`,
      mainAccountAddress as `0x${string}`,
    );
    expect(isVerified).to.eq(false);
  });

  it("should revert when trying to verify an already verified account", async () => {
    if (!accountActionAddress) {
      throw new Error("AccountAction address is undefined");
    }
    if (!actionHubAddress) {
      throw new Error("ActionHub address is undefined");
    }
    if (!mainAccountAddress) {
      throw new Error("Main account address is undefined");
    }
    const executeData = actionHub.interface.encodeFunctionData("executeAccountAction", [
      accountActionAddress as `0x${string}`,
      mainAccountAddress as `0x${string}`,
      [
        {
          key: keccak256(toUtf8Bytes("lens.param.verify")),
          value: AbiCoder.defaultAbiCoder().encode(["bool"], [true]),
        },
      ],
    ]);

    const executeTx1 = friendAccount
      .connect(deployerWallet)
      .executeTransaction(actionHubAddress as `0x${string}`, 0n, executeData);

    await expect(executeTx1).to.emit(accountAction, "AccountVerified");

    const executeTx2 = friendAccount
      .connect(deployerWallet)
      .executeTransaction(actionHubAddress as `0x${string}`, 0n, executeData);

    await expect(executeTx2).to.be.revertedWithCustomError(accountAction, "AlreadyVerified");
  });

  it("should revert when trying to unverify an already unverified account", async () => {
    if (!accountActionAddress) {
      throw new Error("AccountAction address is undefined");
    }
    if (!actionHubAddress) {
      throw new Error("ActionHub address is undefined");
    }
    if (!mainAccountAddress) {
      throw new Error("Main account address is undefined");
    }
    const executeData = actionHub.interface.encodeFunctionData("executeAccountAction", [
      accountActionAddress as `0x${string}`,
      mainAccountAddress as `0x${string}`,
      [
        {
          key: keccak256(toUtf8Bytes("lens.param.verify")),
          value: AbiCoder.defaultAbiCoder().encode(["bool"], [false]),
        },
      ],
    ]);

    const executeTx1 = friendAccount
      .connect(deployerWallet)
      .executeTransaction(actionHubAddress as `0x${string}`, 0n, executeData);

    await expect(executeTx1).to.emit(accountAction, "AccountUnverified");

    const executeTx2 = friendAccount
      .connect(deployerWallet)
      .executeTransaction(actionHubAddress as `0x${string}`, 0n, executeData);

    await expect(executeTx2).to.be.revertedWithCustomError(accountAction, "VerificationDoesNotExist");
  });

  it("should revert when an account tries to verify itself", async () => {
    if (!accountActionAddress) {
      throw new Error("AccountAction address is undefined");
    }
    if (!actionHubAddress) {
      throw new Error("ActionHub address is undefined");
    }
    if (!mainAccountAddress) {
      throw new Error("Main account address is undefined");
    }
    const executeData = actionHub.interface.encodeFunctionData("executeAccountAction", [
      accountActionAddress as `0x${string}`,
      mainAccountAddress as `0x${string}`,
      [
        {
          key: keccak256(toUtf8Bytes("lens.param.verify")),
          value: AbiCoder.defaultAbiCoder().encode(["bool"], [true]),
        },
      ],
    ]);

    const executeTx = mainAccount
      .connect(deployerWallet)
      .executeTransaction(actionHubAddress as `0x${string}`, 0n, executeData);

    await expect(executeTx).to.be.revertedWithCustomError(accountAction, "SelfVerificationNotAllowed");
  });
});
