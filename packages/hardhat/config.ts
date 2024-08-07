import { LensContracts } from "lens-modules";

const isMainnet = process.env.NETWORK === "polygon";

export const LENS_HUB = isMainnet ? LensContracts.mainnet.LensHubProxy : LensContracts.testnet.LensHubProxy;

export const MODULE_REGISTRY = isMainnet ? LensContracts.mainnet.ModuleRegistry : LensContracts.testnet.ModuleRegistry;

export const COLLECT_NFT = isMainnet ? LensContracts.mainnet.CollectNFT : LensContracts.testnet.CollectNFT;

export const COLLECT_PUBLICATION_ACTION = isMainnet
  ? LensContracts.mainnet.Modules.act.find(a => a.name === "CollectPublicationAction")?.address
  : LensContracts.testnet.Modules.act.find(a => a.name === "CollectPublicationAction")?.address;
