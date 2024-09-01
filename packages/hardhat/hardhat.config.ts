import * as dotenv from "dotenv";
import path from "path";

const envFileName =
  !process.env.NODE_ENV || process.env.NODE_ENV === "production" ? ".env" : `.env.${process.env.NODE_ENV}`;
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
    },
  },
  dependencyCompiler: {
    paths: [
      "lens-modules/contracts/LensHub.sol",
      "lens-modules/contracts/FollowNFT.sol",
      "lens-modules/contracts/misc/ModuleRegistry.sol",
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
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${providerApiKey}`,
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
  },
  // configuration for harhdat-verify plugin
  etherscan: {
    apiKey: `${etherscanApiKey}`,
  },
  // configuration for etherscan-verify from hardhat-deploy plugin
  verify: {
    etherscan: {
      apiKey: `${etherscanApiKey}`,
    },
  },
};

export default config;
