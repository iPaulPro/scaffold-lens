import { defineChain } from "viem";
import * as chains from "viem/chains";
import { chainConfig } from "viem/zksync";

export const inMemoryNode = defineChain({
  ...chains.zksyncInMemoryNode,
  contracts: {
    multicall3: {
      address: "0x07De5CBeaB32e6b86ae6b993A62B4a1759c66217", // replace with local deployed address
    },
  },
});

export const lensTestnet = defineChain({
  ...chainConfig,
  id: 37111,
  name: "Lens Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "GRASS",
    symbol: "GRASS",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.lens.xyz"],
      webSocket: ["wss://rpc.testnet.lens.xyz/ws"],
    },
  },
  blockExplorers: {
    default: {
      name: "Lens Testnet Block Explorer",
      url: "https://explorer.testnet.lens.xyz/",
    },
  },
  contracts: {
    multicall3: {
      address: "0x8A44EDE8a6843a997bC0Cc4659e4dB1Da8f91116",
    },
    wrappedGasToken: {
      address: "0xeee5a340Cdc9c179Db25dea45AcfD5FE8d4d3eB8",
    },
  },
  testnet: true,
});

export const lens = defineChain({
  ...chainConfig,
  id: 232,
  name: "Lens",
  nativeCurrency: {
    decimals: 18,
    name: "GHO",
    symbol: "GHO",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.lens.xyz"],
      webSocket: ["wss://rpc.lens.xyz/ws"],
    },
  },
  blockExplorers: {
    default: {
      name: "Lens Testnet Block Explorer",
      url: "https://explorer.lens.xyz/",
    },
  },
  contracts: {
    multicall3: {
      address: "0x6b6dEa4D80e3077D076733A04c48F63c3BA49320",
    },
    wrappedGasToken: {
      address: "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F",
    },
  },
  testnet: false,
});
