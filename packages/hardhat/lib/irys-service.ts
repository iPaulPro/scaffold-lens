import Irys from '@irys/sdk'
import {ModuleMetadata} from '@lens-protocol/metadata'

const getIrys = async () => {
    // Devnet RPC URLs change often, use a recent one from https://chainlist.org/chain/80001
    const providerUrl = "https://endpoints.omniatech.io/v1/matic/mumbai/public";

    const irys = new Irys({
        url: "https://devnet.irys.xyz",
        token: "matic",
        key: process.env.DEPLOYER_PRIVATE_KEY,
        config: { providerUrl }, // Optional provider URL, only required when using Devnet
    });
    return irys;
};

export const uploadMetadata = async (metadata: ModuleMetadata) => {
    const irys = await getIrys();
    const dataToUpload = JSON.stringify(metadata);
    const receipt = await irys.upload(dataToUpload, {
        tags: [{ name: 'Content-Type', value: 'application/json' }],
    });
    return `https://gateway.irys.xyz/${receipt.id}`;
};