import { AbiParameter } from "abitype";
import { hardhat } from "viem/chains";
import deployedContracts from "~~/contracts/deployedContracts";

export const multirecipientFeeCollectModule = deployedContracts[hardhat.id].MultirecipientFeeCollectModule.address;

export const multirecipientFeeCollectModuleInitABI: AbiParameter[] = [
  { type: "uint160", name: "amount" },
  { type: "uint96", name: "collectLimit" },
  { type: "address", name: "currency" },
  { type: "uint16", name: "referralFee" },
  { type: "bool", name: "followerOnly" },
  { type: "uint72", name: "endTimestamp" },
  {
    type: "tuple(address,uint16)[]",
    name: "recipients",
    components: [
      { type: "address", name: "recipient" },
      { type: "uint16", name: "split" },
    ],
  },
];

export const multirecipientFeeCollectModuleProcessABI: AbiParameter[] = [
  { type: "address", name: "currency" },
  { type: "uint256", name: "amount" },
];
