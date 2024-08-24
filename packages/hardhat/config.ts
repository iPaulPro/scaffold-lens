import { LensContracts } from "lens-modules";

const isMainnet = process.env.NETWORK === "polygon";
export const isLocalHost = process.env.NETWORK === "localhost";

export const LENS_HUB = isMainnet ? LensContracts.mainnet.LensHubProxy : LensContracts.testnet.LensHubProxy;

export const MODULE_REGISTRY = isMainnet ? LensContracts.mainnet.ModuleRegistry : LensContracts.testnet.ModuleRegistry;

export const COLLECT_PUBLICATION_ACTION = isMainnet
  ? LensContracts.mainnet.Modules.act.find(a => a.name === "CollectPublicationAction")?.address
  : LensContracts.testnet.Modules.act.find(a => a.name === "CollectPublicationAction")?.address;

export const BURNER_PUBLIC_KEY = process.env.BURNER_PUBLIC_KEY || "0xCcF81EA786Eb3DfB66EF87862e23D6b1426be65c";
