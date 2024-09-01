import { AbiParameter } from "abitype";
import { hardhat } from "viem/chains";
import deployedContracts from "~~/contracts/deployedContracts";

export const simpleFeeCollectModule = deployedContracts[hardhat.id].SimpleFeeCollectModule.address;

export const simpleFeeCollectModuleInitABI: AbiParameter[] = [
  { type: "uint160", name: "amount" },
  { type: "uint96", name: "collectLimit" },
  { type: "address", name: "currency" },
  { type: "uint16", name: "referralFee" },
  { type: "bool", name: "followerOnly" },
  { type: "uint72", name: "endTimestamp" },
  { type: "address", name: "recipient" },
];

export const simpleFeeCollectModuleProcessABI: AbiParameter[] = [
  { type: "address", name: "currency" },
  { type: "uint256", name: "amount" },
];
