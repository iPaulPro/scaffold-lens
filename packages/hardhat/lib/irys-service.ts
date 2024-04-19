import Irys from "@irys/sdk";
import { ModuleMetadata } from "@lens-protocol/metadata";

const getIrys = async () => {
  // Devnet RPC URLs change often, use a recent one from https://chainlist.org/chain/80002
  const providerUrl = "https://polygon-amoy-bor-rpc.publicnode.com";
  const isMainnet = process.env.NETWORK === "polygon";

  const irys = new Irys({
    url: isMainnet ? "https://node2.irys.xyz" : "https://devnet.irys.xyz",
    token: "matic",
    key: process.env.DEPLOYER_PRIVATE_KEY ?? "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
    ...(!isMainnet && {
      config: { providerUrl }, // Optional provider URL, only required when using Devnet
    }),
  });
  return irys;
};

export const uploadMetadata = async (metadata: ModuleMetadata) => {
  const irys = await getIrys();
  const dataToUpload = JSON.stringify(metadata);
  const receipt = await irys.upload(dataToUpload, {
    tags: [{ name: "Content-Type", value: "application/json" }],
  });
  return `https://gateway.irys.xyz/${receipt.id}`;
};
