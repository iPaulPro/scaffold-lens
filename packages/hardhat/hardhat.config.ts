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
    version: "1.5.15",
    settings: {
      // find all available options in the official documentation
      // https://docs.zksync.io/build/tooling/hardhat/hardhat-zksync-solc#configuration
      optimizer: {
        mode: "1", // optional. 3 by default, z to optimize bytecode size
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: "none",
      },
      codegen: "yul",
    },
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
      enableVerifyURL: true,
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
    paths: [
      "@openzeppelin/contracts-hardhat-zksync-upgradable/proxy/transparent/TransparentUpgradeableProxy.sol",
      "lens-modules/contracts/actions/account/TippingAccountAction.sol",
      "lens-modules/contracts/actions/post/TippingPostAction.sol",
      "lens-modules/contracts/actions/post/collect/SimpleCollectAction.sol",
      "lens-modules/contracts/core/primitives/feed/Feed.sol",
      "lens-modules/contracts/core/primitives/graph/Graph.sol",
      "lens-modules/contracts/core/primitives/group/Group.sol",
      "lens-modules/contracts/core/primitives/namespace/Namespace.sol",
      "lens-modules/contracts/core/upgradeability/Beacon.sol",
      "lens-modules/contracts/core/upgradeability/Lock.sol",
      "lens-modules/contracts/extensions/account/Account.sol",
      "lens-modules/contracts/extensions/actions/ActionHub.sol",
      "lens-modules/contracts/extensions/factories/AccessControlFactory.sol",
      "lens-modules/contracts/extensions/factories/AccountFactory.sol",
      "lens-modules/contracts/extensions/factories/AppFactory.sol",
      "lens-modules/contracts/extensions/factories/FeedFactory.sol",
      "lens-modules/contracts/extensions/factories/GraphFactory.sol",
      "lens-modules/contracts/extensions/factories/GroupFactory.sol",
      "lens-modules/contracts/extensions/factories/LensFactory.sol",
      "lens-modules/contracts/extensions/factories/NamespaceFactory.sol",
      "lens-modules/contracts/extensions/primitives/app/App.sol",
      "lens-modules/contracts/rules/AccountBlockingRule.sol",
      "lens-modules/contracts/rules/feed/GroupGatedFeedRule.sol",
      "lens-modules/contracts/rules/feed/RestrictedSignersFeedRule.sol",
      "lens-modules/contracts/rules/feed/SimplePaymentFeedRule.sol",
      "lens-modules/contracts/rules/feed/TokenGatedFeedRule.sol",
      "lens-modules/contracts/rules/post/FollowersOnlyPostRule.sol",
      "lens-modules/contracts/rules/graph/GroupGatedGraphRule.sol",
      "lens-modules/contracts/rules/graph/RestrictedSignersGraphRule.sol",
      "lens-modules/contracts/rules/graph/TokenGatedGraphRule.sol",
      "lens-modules/contracts/rules/follow/SimplePaymentFollowRule.sol",
      "lens-modules/contracts/rules/follow/TokenGatedFollowRule.sol",
      "lens-modules/contracts/rules/group/BanMemberGroupRule.sol",
      "lens-modules/contracts/rules/group/MembershipApprovalGroupRule.sol",
      "lens-modules/contracts/rules/group/SimplePaymentGroupRule.sol",
      "lens-modules/contracts/rules/group/TokenGatedGroupRule.sol",
      "lens-modules/contracts/rules/namespace/TokenGatedNamespaceRule.sol",
      "lens-modules/contracts/rules/namespace/UsernameLengthNamespaceRule.sol",
      "lens-modules/contracts/rules/namespace/UsernameReservedNamespaceRule.sol",
      "lens-modules/contracts/rules/namespace/UsernameSimpleCharsetNamespaceRule.sol",
      "lens-modules/contracts/rules/namespace/UsernamePricePerLengthNamespaceRule.sol",
    ],
  },
  mocha: {
    timeout: 120000,
  },
};

export default config;
