import { LensContracts } from "lens-modules";

const isMainnet = process.env.NETWORK === "polygon";

export const LENS_HUB = isMainnet ? LensContracts.mainnet.LensHubProxy : LensContracts.testnet.LensHubProxy;

export const MODULE_REGISTRY = isMainnet ? LensContracts.mainnet.ModuleRegistry : LensContracts.testnet.ModuleRegistry;
