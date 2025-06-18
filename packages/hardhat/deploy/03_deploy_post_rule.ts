import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync";
import { ContractType, saveContractToAddressBook } from "../lib/lens/lensUtils";
import { verifyZkDeployedContract } from "../lib/lens/utils";
import { postRule } from "@lens-protocol/metadata";
import { immutable, StorageClient } from "@lens-chain/storage-client";

const metadata = postRule({
  name: "FollowingOnlyPostRule",
  description: "Restricts users to reply, repost or quote a post if they are followed by the author of the root post",
  authors: ["paul@paulburke.co"],
  source: "https://github.com/iPaulPro/scaffold-lens",
  configureParams: [
    {
      key: "0x7d50408405f482949cd317ab452b66f1104c85a1708ae5be893385b1c898c6d9",
      name: "graph",
      type: "address",
    },
    {
      key: "0x4ce0155a596c1a9d5bcefb32cdbf357c849ac621a9b91d222b367cf53fe79a6f",
      name: "repliesRestricted",
      type: "bool",
    },
    {
      key: "0x4888fd5474d5999daba89bdcba85aa57b7a2ed60bdcccee0a949f2da51050bbd",
      name: "repostsRestricted",
      type: "bool",
    },
    {
      key: "0x323cbd3bdd5537df3af23e8d4c6c6bb31c9fa33346759abf247f998a32cda0a2",
      name: "quotesRestricted",
      type: "bool",
    },
  ],
  processCreatePostParams: [],
  processEditPostParams: [],
});

const deployFollowingOnlyPostRule = async function (hre: HardhatRuntimeEnvironment) {
  const wallet = await hre.deployer.getWallet(0);
  const deployer = new Deployer(hre, wallet);

  let metadataUri: string;
  if (hre.network.verifyURL && hre.network.config.chainId) {
    const storageClient = StorageClient.create();
    const acl = immutable(hre.network.config.chainId);
    const { uri } = await storageClient.uploadAsJson(metadata, { acl });
    console.log("Metadata uploaded to:", uri);
    metadataUri = uri;
  } else {
    metadataUri = JSON.stringify(metadata);
  }

  const constructorArguments = [wallet.address, metadataUri];
  const artifact = await deployer.loadArtifact("FollowingOnlyPostRule");
  const contract = await deployer.deploy(artifact, constructorArguments);
  const address = await contract.getAddress();
  console.log("FollowingOnlyPostRule deployed to:", address);

  saveContractToAddressBook({
    contractName: "FollowingOnlyPostRule",
    address,
    contractType: ContractType.Misc,
  });

  await contract.waitForDeployment();

  if (hre.network.verifyURL) {
    await verifyZkDeployedContract(hre, { address, artifact, constructorArguments });
  }

  return address;
};

export default deployFollowingOnlyPostRule;

deployFollowingOnlyPostRule.tags = ["FollowingOnlyPostRule"];
