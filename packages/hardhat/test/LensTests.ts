import hre from "hardhat";
import { expect } from "chai";
import deployLensProtocol from "../deploy/00_deploy_lens_protocol";
import { AddressBook, clearAddressBook, loadAddressBook } from "../lib/lens/lensUtils";
import { Wallet } from "zksync-ethers";
import { createMockLensAccount } from "./lib/createMockLensAccount";
import { Account, ActionHub, Feed, PinPostAccountAction } from "../typechain-types";
import { AbiCoder, keccak256, toUtf8Bytes, ZeroAddress } from "ethers";
import deployPinPostAccountAction from "../deploy/02_deploy_account_action";

let addressBook: AddressBook;
let deployerWallet: Wallet;

let lensFeedAddress: string | undefined;

describe("Given an PinPostAccountAction contract", async () => {
  let accountActionAddress: string | undefined;
  let mainAccountAddress: string | undefined;
  let otherAccountAddress: string | undefined;
  let actionHubAddress: string | undefined;

  let accountAction: PinPostAccountAction;
  let lensFeed: Feed;
  let mainAccount: Account;
  let otherAccount: Account;
  let actionHub: ActionHub;
  let mainPostId: string | undefined;

  const createPostData = (author: string) => {
    const contentURI = "lens://content";
    return lensFeed.interface.encodeFunctionData("createPost", [
      {
        author,
        contentURI,
        repostedPostId: 0n,
        quotedPostId: 0n,
        repliedPostId: 0n,
        ruleChanges: [],
        extraData: [],
      },
      [], // customParams
      [], // feedRulesParams
      [], // rootPostRulesParams
      [], // quotedPostRulesParams
    ]);
  };

  before(async () => {
    clearAddressBook();
    await deployLensProtocol(hre);
    addressBook = loadAddressBook();

    deployerWallet = await hre.deployer.getWallet(0);

    actionHubAddress = addressBook["ActionHub"]?.address;
    if (!actionHubAddress) {
      throw new Error("ActionHub address not found in address book");
    }
    actionHub = await hre.ethers.getContractAt("ActionHub", actionHubAddress);

    lensFeedAddress = addressBook["LensGlobalFeed"]?.address;
    if (!lensFeedAddress) {
      throw new Error("LensGlobalFeed address not found in address book");
    }
    lensFeed = await hre.ethers.getContractAt("Feed", lensFeedAddress);

    try {
      const account = await createMockLensAccount(deployerWallet, addressBook);
      if (!account) {
        throw new Error("Failed to create author account");
      }
      mainAccountAddress = account;
      mainAccount = await hre.ethers.getContractAt("Account", mainAccountAddress);
    } catch (e) {
      console.error("Error creating mock Lens accounts:", e);
      throw e;
    }

    try {
      const account = await createMockLensAccount(deployerWallet, addressBook);
      if (!account) {
        throw new Error("Failed to create author account");
      }
      otherAccountAddress = account;
      otherAccount = await hre.ethers.getContractAt("Account", otherAccountAddress);
    } catch (e) {
      console.error("Error creating mock Lens accounts:", e);
      throw e;
    }

    const mainPostData = createPostData(mainAccountAddress);
    mainPostId = await mainAccount
      .connect(deployerWallet)
      .executeTransaction.staticCall(lensFeedAddress, 0n, mainPostData);

    const createMainPostTx = mainAccount.connect(deployerWallet).executeTransaction(lensFeedAddress, 0n, mainPostData);

    await expect(createMainPostTx).to.not.be.reverted;
  });

  it("should deploy the PinPostAccountAction contract", async () => {
    accountActionAddress = await deployPinPostAccountAction(hre);
    accountAction = await hre.ethers.getContractAt("PinPostAccountAction", accountActionAddress);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(accountAction).to.exist;
  });

  it("should return 0 ID for pinned post", async () => {
    if (!accountActionAddress) {
      throw new Error("AccountAction address is undefined");
    }
    if (!mainAccountAddress) {
      throw new Error("Main account address is undefined");
    }

    const pinnedPost = await accountAction.pinnedPosts(mainAccountAddress);
    expect(pinnedPost).to.eq(0n);
  });

  it("should emit PostPinned event when post is pinned", async () => {
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
          key: keccak256(toUtf8Bytes("lens.param.postId")),
          value: AbiCoder.defaultAbiCoder().encode(["uint256"], [mainPostId]),
        },
        {
          key: keccak256(toUtf8Bytes("lens.param.feed")),
          value: AbiCoder.defaultAbiCoder().encode(["address"], [lensFeedAddress]),
        },
      ],
    ]);

    const executeTx = await mainAccount
      .connect(deployerWallet)
      .executeTransaction(actionHubAddress as `0x${string}`, 0n, executeData);

    await executeTx.wait();

    await expect(executeTx).to.emit(accountAction, "PostPinned");
  });

  it("should return the pinned post", async () => {
    if (!accountActionAddress) {
      throw new Error("AccountAction address is undefined");
    }
    if (!mainAccountAddress) {
      throw new Error("Main account address is undefined");
    }
    if (!mainPostId) {
      throw new Error("postId is undefined");
    }

    const pinnedPost = await accountAction.pinnedPosts(mainAccountAddress);
    expect(pinnedPost).to.eq(BigInt(mainPostId));
  });

  it("should emit PostUnpinned event when post is unpinned", async () => {
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
          key: keccak256(toUtf8Bytes("lens.param.postId")),
          value: AbiCoder.defaultAbiCoder().encode(["uint256"], [mainPostId]),
        },
        {
          key: keccak256(toUtf8Bytes("lens.param.feed")),
          value: AbiCoder.defaultAbiCoder().encode(["address"], [lensFeedAddress]),
        },
      ],
    ]);

    const executeTx = mainAccount
      .connect(deployerWallet)
      .executeTransaction(actionHubAddress as `0x${string}`, 0n, executeData);

    await expect(executeTx).to.emit(accountAction, "PostUnpinned");
  });

  it("should revert when trying to pin an invalid post id", async () => {
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
          key: keccak256(toUtf8Bytes("lens.param.postId")),
          value: AbiCoder.defaultAbiCoder().encode(["uint256"], [0n]),
        },
        {
          key: keccak256(toUtf8Bytes("lens.param.feed")),
          value: AbiCoder.defaultAbiCoder().encode(["address"], [lensFeedAddress]),
        },
      ],
    ]);

    const executeTx = mainAccount
      .connect(deployerWallet)
      .executeTransaction(actionHubAddress as `0x${string}`, 0n, executeData);

    await expect(executeTx).to.be.revertedWithCustomError(accountAction, "InvalidPostId");
  });

  it("should revert when trying to pin an invalid feed address", async () => {
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
          key: keccak256(toUtf8Bytes("lens.param.postId")),
          value: AbiCoder.defaultAbiCoder().encode(["uint256"], [mainPostId]),
        },
        {
          key: keccak256(toUtf8Bytes("lens.param.feed")),
          value: AbiCoder.defaultAbiCoder().encode(["address"], [ZeroAddress]),
        },
      ],
    ]);

    const executeTx = mainAccount
      .connect(deployerWallet)
      .executeTransaction(actionHubAddress as `0x${string}`, 0n, executeData);

    await expect(executeTx).to.be.revertedWithCustomError(accountAction, "InvalidFeedAddress");
  });

  it("should revert when trying to pin a post from a different account", async () => {
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
          key: keccak256(toUtf8Bytes("lens.param.postId")),
          value: AbiCoder.defaultAbiCoder().encode(["uint256"], [mainPostId]),
        },
        {
          key: keccak256(toUtf8Bytes("lens.param.feed")),
          value: AbiCoder.defaultAbiCoder().encode(["address"], [lensFeedAddress]),
        },
      ],
    ]);

    const executeTx = otherAccount
      .connect(deployerWallet)
      .executeTransaction(actionHubAddress as `0x${string}`, 0n, executeData);

    await expect(executeTx).to.be.revertedWithCustomError(accountAction, "Unauthorized");
  });

  it("should revert when trying to pin a post from the account didn't author", async () => {
    if (!accountActionAddress) {
      throw new Error("AccountAction address is undefined");
    }
    if (!actionHubAddress) {
      throw new Error("ActionHub address is undefined");
    }
    if (!otherAccountAddress) {
      throw new Error("Main account address is undefined");
    }
    const executeData = actionHub.interface.encodeFunctionData("executeAccountAction", [
      accountActionAddress as `0x${string}`,
      otherAccountAddress as `0x${string}`,
      [
        {
          key: keccak256(toUtf8Bytes("lens.param.postId")),
          value: AbiCoder.defaultAbiCoder().encode(["uint256"], [mainPostId]),
        },
        {
          key: keccak256(toUtf8Bytes("lens.param.feed")),
          value: AbiCoder.defaultAbiCoder().encode(["address"], [lensFeedAddress]),
        },
      ],
    ]);

    const executeTx = otherAccount
      .connect(deployerWallet)
      .executeTransaction(actionHubAddress as `0x${string}`, 0n, executeData);

    await expect(executeTx).to.be.revertedWithCustomError(accountAction, "Unauthorized");
  });

  it("should revert when trying to pin a post that doesn't exist", async () => {
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
          key: keccak256(toUtf8Bytes("lens.param.postId")),
          value: AbiCoder.defaultAbiCoder().encode(["uint256"], [123n]),
        },
        {
          key: keccak256(toUtf8Bytes("lens.param.feed")),
          value: AbiCoder.defaultAbiCoder().encode(["address"], [lensFeedAddress]),
        },
      ],
    ]);

    const executeTx = mainAccount
      .connect(deployerWallet)
      .executeTransaction(actionHubAddress as `0x${string}`, 0n, executeData);

    await expect(executeTx).to.be.revertedWithCustomError(accountAction, "PostNotFound");
  });

  it("should revert when trying to pin a deleted post", async () => {
    if (!accountActionAddress) {
      throw new Error("AccountAction address is undefined");
    }
    if (!actionHubAddress) {
      throw new Error("ActionHub address is undefined");
    }
    if (!mainAccountAddress) {
      throw new Error("Main account address is undefined");
    }
    if (!mainPostId) {
      throw new Error("postId is undefined");
    }

    const executeDeleteData = lensFeed.interface.encodeFunctionData("deletePost", [mainPostId, [], []]);
    const deletePostTx = mainAccount
      .connect(deployerWallet)
      .executeTransaction(lensFeedAddress as `0x${string}`, 0n, executeDeleteData);
    await expect(deletePostTx).to.not.be.reverted;

    const executeData = actionHub.interface.encodeFunctionData("executeAccountAction", [
      accountActionAddress as `0x${string}`,
      mainAccountAddress as `0x${string}`,
      [
        {
          key: keccak256(toUtf8Bytes("lens.param.postId")),
          value: AbiCoder.defaultAbiCoder().encode(["uint256"], [mainPostId]),
        },
        {
          key: keccak256(toUtf8Bytes("lens.param.feed")),
          value: AbiCoder.defaultAbiCoder().encode(["address"], [lensFeedAddress]),
        },
      ],
    ]);

    const executeTx = mainAccount
      .connect(deployerWallet)
      .executeTransaction(actionHubAddress as `0x${string}`, 0n, executeData);

    await expect(executeTx).to.be.revertedWithCustomError(accountAction, "PostNotFound");
  });
});
