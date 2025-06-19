import { HardhatRuntimeEnvironment } from "hardhat/types";
import { ContractType, loadAddressBook, saveContractToAddressBook } from "../lib/lens/lensUtils";
import { action } from "@lens-protocol/metadata";
import { immutable, StorageClient } from "@lens-chain/storage-client";
import { lensDeployments } from "lens-modules/deployments";
import { deployContract } from "../lib/utils";

const CONTRACT_NAME = "AccountVerificationAction";

const metadata = action({
  name: CONTRACT_NAME,
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

export default deployAccountVerificationAction;

deployAccountVerificationAction.tags = [CONTRACT_NAME];
