import { HardhatRuntimeEnvironment } from "hardhat/types";
import { ContractType, saveContractToAddressBook } from "../lib/lens/lensUtils";
import { postRule } from "@lens-protocol/metadata";
import { immutable, StorageClient } from "@lens-chain/storage-client";
import { deployContract } from "../lib/utils";

const CONTRACT_NAME = "GroupGatedPostRule";

const metadata = postRule({
  name: CONTRACT_NAME,
  description: "Only allows users to reply if they are a member of a specific group.",
  authors: ["paul@paulburke.co"],
  source: "https://github.com/iPaulPro/scaffold-lens",
  configureParams: [
    {
      key: "0xa92ea569d1a9f915f96759ba7cea5f135d011c442b0508dbef76a309e55f4458",
      name: "lens.param.group",
      type: "address",
    },
  ],
  processCreatePostParams: [],
  processEditPostParams: [],
});

const deployGroupGatedPostRule = async function (hre: HardhatRuntimeEnvironment) {
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

  const constructorArguments = [wallet.address, metadataUri];
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

export default deployGroupGatedPostRule;

deployGroupGatedPostRule.tags = [CONTRACT_NAME];
