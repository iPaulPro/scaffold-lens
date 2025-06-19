import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync";
import { ContractType, loadAddressBook, saveContractToAddressBook } from "../lib/lens/lensUtils";
import { verifyZkDeployedContract } from "../lib/lens/utils";
import { action } from "@lens-protocol/metadata";
import { immutable, StorageClient } from "@lens-chain/storage-client";
import { lensDeployments } from "lens-modules/deployments";

const metadata = action({
  name: "AccountVerificationAction",
  description: "Allows accounts to verify other accounts.",
  authors: ["paul@paulburke.co"],
  source: "https://github.com/iPaulPro/scaffold-lens",
  configureParams: [],
  executeParams: [
    {
      key: "0x9b8ec5ac6a057082411c3af019905162d7a163931f117b2539e5b51b353a27fd",
      name: "verify",
      type: "bool",
    },
  ],
});

const deployAccountVerificationAction = async function (hre: HardhatRuntimeEnvironment) {
  const addressBook = loadAddressBook();

  const lensActionHubAddress =
    addressBook["ActionHub"]?.address ??
    (hre.network.config.chainId === 232
      ? lensDeployments.mainnet.ActionHub.address
      : lensDeployments.testnet.ActionHub.address);

  const wallet = await hre.deployer.getWallet(0);
  const deployer = new Deployer(hre, wallet);

  let metadataUri: string;
  if (hre.network.config.verifyURL && hre.network.config.chainId) {
    const storageClient = StorageClient.create();
    const acl = immutable(hre.network.config.chainId);
    const { uri } = await storageClient.uploadAsJson(metadata, { acl });
    console.log("Metadata uploaded to:", uri);
    metadataUri = uri;
  } else {
    metadataUri = JSON.stringify(metadata);
  }

  const constructorArguments = [lensActionHubAddress, wallet.address, metadataUri];
  const artifact = await deployer.loadArtifact("AccountVerificationAction");
  const contract = await deployer.deploy(artifact, constructorArguments);
  const address = await contract.getAddress();
  console.log("AccountVerificationAction deployed to:", address);

  saveContractToAddressBook({
    contractName: "AccountVerificationAction",
    address,
    contractType: ContractType.Misc,
  });

  await contract.waitForDeployment();

  if (hre.network.config.verifyURL) {
    await verifyZkDeployedContract(hre, { address, artifact, constructorArguments });
  }

  return address;
};

export default deployAccountVerificationAction;

deployAccountVerificationAction.tags = ["AccountVerificationAction"];
