import { HardhatRuntimeEnvironment } from "hardhat/types";
import { ContractType, loadAddressBook, saveContractToAddressBook } from "../lib/lens/lensUtils";
import { action } from "@lens-protocol/metadata";
import { immutable, StorageClient } from "@lens-chain/storage-client";
import { lensDeployments } from "lens-modules/deployments";
import { deployContract } from "../lib/utils";

const CONTRACT_NAME = "PinPostAccountAction";

const metadata = action({
  name: CONTRACT_NAME,
  description:
    "An account action that allows users to pin and unpin posts. Pinned posts are stored on-chain. " +
    "Only post authors can pin their posts, and they can only have one pinned post at a time. " +
    "If a user pins a new post, the previous pinned post will be unpinned automatically. " +
    "Users can also unpin their currently pinned post by calling the action with the same post ID.",
  authors: ["paul@paulburke.co"],
  source: "https://github.com/iPaulPro/scaffold-lens/tree/feat/pinned-posts",
  configureParams: [],
  executeParams: [
    {
      key: "0xa9393259e39523bbb903f0ba2a379b4b186e37f9b5eb6e010422b9d3c078ed99",
      name: "lens.param.postId",
      type: "uint256",
    },
    {
      key: "0xbe03c9c5920f7e47c5ff7b8626411717c31c9a3bb26a54cfcf05d31673c6de65",
      name: "lens.param.feed",
      type: "address",
    },
  ],
});

const deployPinPostAccountAction = async function (hre: HardhatRuntimeEnvironment) {
  const addressBook = loadAddressBook();

  const lensActionHubAddress =
    hre.network.config.chainId === 232
      ? lensDeployments.mainnet.ActionHub.address
      : hre.network.config.chainId === 37111
        ? lensDeployments.testnet.ActionHub.address
        : addressBook["ActionHub"]?.address;

  const wallet = await hre.deployer.getWallet(0);

  let metadataUri: string;
  if (hre.network.config.verifyURL && hre.network.config.chainId) {
    const storageClient = StorageClient.create();
    const acl = immutable(hre.network.config.chainId);
    const { uri } = await storageClient.uploadAsJson(metadata, { acl });
    console.log(`${CONTRACT_NAME} metadata uploaded to:`, uri);
    metadataUri = uri;
  } else {
    metadataUri = JSON.stringify(metadata);
  }

  const constructorArguments = [lensActionHubAddress, wallet.address, metadataUri];
  const contract = await deployContract(CONTRACT_NAME, constructorArguments, {
    hre,
    verify: true,
  });
  const address = await contract.getAddress();

  saveContractToAddressBook({
    contractName: CONTRACT_NAME,
    address,
    contractType: ContractType.Misc,
  });

  return address;
};

export default deployPinPostAccountAction;

deployPinPostAccountAction.tags = [CONTRACT_NAME];
