import { AbiParameter } from "abitype";

export const collectPublicationAddressInitABI: AbiParameter[] = [
  { type: "address", name: "collectModule" },
  { type: "bytes", name: "collectModuleInitData" },
];

export const collectPublicationAddressProcessABI: AbiParameter[] = [
  { type: "address", name: "collectNftRecipient" },
  { type: "bytes", name: "collectData" },
];
