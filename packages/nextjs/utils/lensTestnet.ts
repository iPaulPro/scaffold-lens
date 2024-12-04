import { defineChain } from "viem";

export const lensTestnet = defineChain({
  id: 37111,
  name: "Lens Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "GRASS",
    symbol: "GRASS",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.lens.dev"],
      webSocket: ["wss://rpc.testnet.lens.dev/ws"],
    },
  },
  blockExplorers: {
    default: {
      name: "Lens Testnet Block Explorer",
      url: "https://block-explorer.testnet.lens.dev/",
    },
  },
  contracts: {
    multicall3: {
      address: "0x8A44EDE8a6843a997bC0Cc4659e4dB1Da8f91116",
    },
  },
  testnet: true,
});
