import { AbiParameter } from "abitype";
import { hardhat } from "viem/chains";
import deployedContracts from "~~/contracts/deployedContracts";

export const collectPublicationAddress = deployedContracts[hardhat.id].CollectPublicationAction.address;

export const collectPublicationAddressInitABI: AbiParameter[] = [
  { type: "address", name: "collectModule" },
  { type: "bytes", name: "collectModuleInitData" },
];

export const collectPublicationAddressProcessABI: AbiParameter[] = [
  { type: "address", name: "collectNftRecipient" },
  { type: "bytes", name: "collectData" },
];
