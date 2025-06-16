import * as dotenv from "dotenv";
import path from "path";

const envFileName =
  !process.env.NODE_ENV || process.env.NODE_ENV === "production" ? ".env" : `.env.${process.env.NODE_ENV}`;
const envFile = path.resolve(process.cwd(), envFileName);
dotenv.config({ path: envFile });

import "@nomicfoundation/hardhat-chai-matchers";
import "@typechain/hardhat";
import "hardhat-dependency-compiler";
import "@matterlabs/hardhat-zksync";

import { HardhatUserConfig } from "hardhat/config";

// If not set, it uses the hardhat account 0 private key.
const deployerPrivateKey =
  process.env.DEPLOYER_PRIVATE_KEY ?? "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
  },
  zksolc: {
    version: "latest",
    settings: {},
  },
  defaultNetwork: "localhost",
  networks: {
    // View the networks that are pre-configured.
    // If the network you are looking for is not here you can add new network settings
    hardhat: {
      zksync: true,
    },
    localhost: {
      url: "http://127.0.0.1:8011",
      ethNetwork: "localhost", // in-memory node doesn't support eth node; removing this line will cause an error
      zksync: true,
      accounts: [deployerPrivateKey, deployerPrivateKey],
    },
    lensTestnet: {
      chainId: 37111,
      ethNetwork: "sepolia",
      url: "https://rpc.testnet.lens.xyz",
      verifyURL: "https://api-explorer-verify.staging.lens.zksync.dev/contract_verification",
      zksync: true,
      accounts: [deployerPrivateKey],
    },
    lensMainnet: {
      chainId: 232,
      url: "https://rpc.lens.xyz/",
      ethNetwork: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      verifyURL: "https://verify.lens.xyz/contract_verification",
      zksync: true,
      accounts: [deployerPrivateKey],
    },
  },
  dependencyCompiler: {
    paths: ["@openzeppelin/contracts-hardhat-zksync-upgradable/proxy/transparent/TransparentUpgradeableProxy.sol"],
  },
  mocha: {
    timeout: 120000,
  },
};

export default config;
