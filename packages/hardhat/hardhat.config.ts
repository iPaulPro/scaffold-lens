import * as dotenv from "dotenv";
import path from "path";

const envFileName = process.env.NODE_ENV === "production" ? ".env" : `.env.${process.env.NODE_ENV}`;
const envFile = path.resolve(process.cwd(), envFileName);
dotenv.config({ path: envFile });

import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nomicfoundation/hardhat-verify";
import "hardhat-dependency-compiler";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "@openzeppelin/hardhat-upgrades";

import { HardhatUserConfig } from "hardhat/config";

// If not set, it uses ours Alchemy's default API key.
// You can get your own at https://dashboard.alchemyapi.io
const providerApiKey = process.env.ALCHEMY_API_KEY || "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF";
// If not set, it uses the hardhat account 0 private key.
const deployerPrivateKey =
  process.env.DEPLOYER_PRIVATE_KEY ?? "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
// If not set, it uses ours Etherscan default API key.
const etherscanApiKey = process.env.ETHERSCAN_API_KEY || "DNXJA8RX2Q3VZ4URQIWP7Z68CJXQZSC6AW";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.23",
    settings: {
      optimizer: {
        enabled: true,
        // https://docs.soliditylang.org/en/latest/using-the-compiler.html#optimizer-options
        runs: 200,
      },
      viaIR: true, // required to compile LensHubInitializable
    },
  },
  dependencyCompiler: {
    paths: [
      "lens-modules/contracts/LensHub.sol",
      "lens-modules/contracts/FollowNFT.sol",
      "lens-modules/contracts/misc/ModuleRegistry.sol",
      "lens-modules/contracts/misc/LegacyCollectNFT.sol",
      "lens-modules/contracts/misc/LensHubInitializable.sol",
      "lens-modules/contracts/misc/PermissionlessCreator.sol",
      "lens-modules/contracts/misc/ProfileCreationProxy.sol",
      "lens-modules/contracts/misc/PublicActProxy.sol",
      "lens-modules/contracts/misc/PublicActProxy_MetaTx.sol",
      "lens-modules/contracts/misc/access/LitAccessControl.sol",
      "lens-modules/contracts/misc/token-uris/FollowTokenURI.sol",
      "lens-modules/contracts/misc/token-uris/HandleTokenURI.sol",
      "lens-modules/contracts/misc/token-uris/SimpleProfileTokenURI.sol",
      "lens-modules/contracts/modules/act/collect/CollectPublicationAction.sol",
      "lens-modules/contracts/modules/act/collect/CollectNFT.sol",
      "lens-modules/contracts/modules/act/collect/MultirecipientFeeCollectModule.sol",
      "lens-modules/contracts/modules/act/collect/SimpleFeeCollectModule.sol",
      "lens-modules/contracts/modules/follow/FeeFollowModule.sol",
      "lens-modules/contracts/modules/follow/RevertFollowModule.sol",
      "lens-modules/contracts/modules/reference/DegreesOfSeparationReferenceModule.sol",
      "lens-modules/contracts/modules/reference/FollowerOnlyReferenceModule.sol",
      "lens-modules/contracts/libraries/ActionLib.sol",
      "lens-modules/contracts/libraries/FollowLib.sol",
      "lens-modules/contracts/libraries/GovernanceLib.sol",
      "lens-modules/contracts/libraries/LegacyCollectLib.sol",
      "lens-modules/contracts/libraries/MetaTxLib.sol",
      "lens-modules/contracts/libraries/ProfileLib.sol",
      "lens-modules/contracts/libraries/PublicationLib.sol",
      "lens-modules/contracts/libraries/StorageLib.sol",
      "lens-modules/contracts/libraries/constants/Types.sol",
      "lens-modules/contracts/libraries/constants/Events.sol",
      "lens-modules/contracts/libraries/svgs/Follow/FollowSVG.sol",
      "lens-modules/contracts/libraries/svgs/Handle/GintoNordFontSVG.sol",
      "lens-modules/contracts/libraries/svgs/Handle/HandleSVG.sol",
      "lens-modules/contracts/libraries/svgs/Profile/SimpleProfileSVG.sol",
      "lens-modules/contracts/libraries/ValidationLib.sol",
      "lens-modules/contracts/namespaces/LensHandles.sol",
      "lens-modules/contracts/namespaces/TokenHandleRegistry.sol",
    ],
    keep: true,
  },
  defaultNetwork: "localhost",
  namedAccounts: {
    deployer: {
      // By default, it will take the first Hardhat account as the deployer
      default: 0,
    },
  },
  networks: {
    // View the networks that are pre-configured.
    // If the network you are looking for is not here you can add new network settings
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${providerApiKey}`,
        enabled: process.env.MAINNET_FORKING_ENABLED === "true",
      },
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    arbitrum: {
      url: `https://arb-mainnet.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    arbitrumSepolia: {
      url: `https://arb-sepolia.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    optimism: {
      url: `https://opt-mainnet.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    optimismSepolia: {
      url: `https://opt-sepolia.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    polygonMumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    polygonAmoy: {
      url: `https://polygon-amoy.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    polygonZkEvm: {
      url: `https://polygonzkevm-mainnet.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    polygonZkEvmTestnet: {
      url: `https://polygonzkevm-testnet.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    zkSyncTestnet: {
      url: "https://testnet.era.zksync.dev",
      zksync: true,
      accounts: [deployerPrivateKey],
    },
    zkSync: {
      url: "https://mainnet.era.zksync.io",
      zksync: true,
      accounts: [deployerPrivateKey],
    },
    gnosis: {
      url: "https://rpc.gnosischain.com",
      accounts: [deployerPrivateKey],
    },
    chiado: {
      url: "https://rpc.chiadochain.net",
      accounts: [deployerPrivateKey],
    },
    base: {
      url: "https://mainnet.base.org",
      accounts: [deployerPrivateKey],
    },
    baseSepolia: {
      url: "https://sepolia.base.org",
      accounts: [deployerPrivateKey],
    },
    scrollSepolia: {
      url: "https://sepolia-rpc.scroll.io",
      accounts: [deployerPrivateKey],
    },
    scroll: {
      url: "https://rpc.scroll.io",
      accounts: [deployerPrivateKey],
    },
    pgn: {
      url: "https://rpc.publicgoods.network",
      accounts: [deployerPrivateKey],
    },
    pgnTestnet: {
      url: "https://sepolia.publicgoods.network",
      accounts: [deployerPrivateKey],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: `${etherscanApiKey}`,
    },
  },
};

export default config;
