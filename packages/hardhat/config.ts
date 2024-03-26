import { LensContracts } from "lens-modules";

export const isMainnet = process.env.NETWORK === "polygon";
export const isLocalHost = process.env.NETWORK === "localhost";

export const LENS_HUB = isLocalHost
  ? "0x0DF39c234Cc8212C76f0405Fdb8BaaF9f039963e" // <-- the burner wallet from the nextjs project
  : isMainnet
  ? LensContracts.mainnet.LensHubProxy
  : LensContracts.testnet.LensHubProxy;

export const MODULE_REGISTRY = isMainnet ? LensContracts.mainnet.ModuleRegistry : LensContracts.testnet.ModuleRegistry;

export const COLLECT_NFT = isMainnet ? LensContracts.mainnet.CollectNFT : LensContracts.testnet.CollectNFT;

export const COLLECT_PUBLICATION_ACTION = isMainnet
  ? LensContracts.mainnet.Modules.act.find(a => a.name === "CollectPublicationAction")?.address
  : LensContracts.testnet.Modules.act.find(a => a.name === "CollectPublicationAction")?.address;
