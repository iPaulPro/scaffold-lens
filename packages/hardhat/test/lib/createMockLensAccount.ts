import hre from "hardhat";
import { Wallet } from "zksync-ethers";
import { AddressBook } from "../../lib/lens/lensUtils";
import {
  CreateAccountParamsStruct,
  CreateUsernameParamsStruct,
  SourceStampStruct,
} from "../../typechain-types/contracts/lens/extensions/factories/LensFactory";
import { ZeroAddress } from "ethers";

export const createMockLensAccount = async (
  deployerWallet: Wallet,
  addressBook: AddressBook,
  ownerWallet: Wallet = deployerWallet,
  managerWallet: Wallet = deployerWallet,
  username = "fameish-user" + Math.floor(Math.random() * 1000000),
) => {
  const lensFactoryAddress = addressBook["LensFactory"]?.address;
  if (!lensFactoryAddress) {
    throw new Error("LensFactory address not found in address book");
  }
  const namespaceAddress = addressBook["LensGlobalNamespace"]?.address;
  if (!namespaceAddress) {
    throw new Error("LensGlobalNamespace address not found in address book");
  }
  const lensFactory = await hre.ethers.getContractAt("LensFactory", lensFactoryAddress);

  const accountCreationSourceStamp: SourceStampStruct = {
    source: ZeroAddress,
    originalMsgSender: ZeroAddress,
    validator: ZeroAddress,
    nonce: 0n,
    deadline: 0n,
    signature: "0x" as `0x${string}`,
  };

  const createAccountParams: CreateAccountParamsStruct = {
    metadataURI: "lens://nothing",
    owner: ownerWallet.address,
    accountManagers: [managerWallet],
    accountManagersPermissions: [
      {
        canExecuteTransactions: true,
        canTransferTokens: false,
        canTransferNative: false,
        canSetMetadataURI: false,
      },
    ],
    accountCreationSourceStamp,
    accountExtraData: [],
  };

  const createUsernameParams: CreateUsernameParamsStruct = {
    username,
    createUsernameCustomParams: [],
    createUsernameRuleProcessingParams: [],
    assignUsernameCustomParams: [],
    assignRuleProcessingParams: [],
    usernameExtraData: [],
    unassignAccountRuleProcessingParams: [],
  };

  const accountAddress = await lensFactory.createAccountWithUsernameFree.staticCall(
    namespaceAddress,
    createAccountParams,
    createUsernameParams,
  );

  const createTx = await lensFactory
    .connect(deployerWallet)
    .createAccountWithUsernameFree(namespaceAddress, createAccountParams, createUsernameParams);
  await createTx.wait();

  return accountAddress;
};
