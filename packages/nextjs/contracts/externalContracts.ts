import * as abis from "lens-modules/abis";
import { lensDeployments } from "lens-modules/deployments";
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
  232: {
    AccessControlFactory: {
      address: lensDeployments.mainnet.AccessControlFactory.address,
      abi: abis.accessControlFactoryAbi,
    },
    AccountBlockingRule: {
      address: lensDeployments.mainnet.AccountBlockingRule.address,
      abi: abis.accountBlockingRuleAbi,
    },
    AccountFactory: {
      address: lensDeployments.mainnet.AccountFactory.address,
      abi: abis.accountFactoryAbi,
    },
    ActionHub: {
      address: lensDeployments.mainnet.ActionHub.address,
      abi: abis.actionHubAbi,
    },
    AdditionRemovalPidGroupRuleImpl: {
      address: lensDeployments.mainnet.AdditionRemovalPidGroupRuleImpl.address,
      abi: abis.additionRemovalPidGroupRuleAbi,
    },
    AppFactory: {
      address: lensDeployments.mainnet.AppFactory.address,
      abi: abis.appFactoryAbi,
    },
    BanMemberGroupRule: {
      address: lensDeployments.mainnet.BanMemberGroupRule.address,
      abi: abis.banMemberGroupRuleAbi,
    },
    FeedFactory: {
      address: lensDeployments.mainnet.FeedFactory.address,
      abi: abis.feedFactoryAbi,
    },
    FollowersOnlyPostRule: {
      address: lensDeployments.mainnet.FollowersOnlyPostRule.address,
      abi: abis.followersOnlyPostRuleAbi,
    },
    GraphFactory: {
      address: lensDeployments.mainnet.GraphFactory.address,
      abi: abis.graphFactoryAbi,
    },
    GroupFactory: {
      address: lensDeployments.mainnet.GroupFactory.address,
      abi: abis.groupFactoryAbi,
    },
    GroupGatedFeedRule: {
      address: lensDeployments.mainnet.GroupGatedFeedRule.address,
      abi: abis.groupGatedFeedRuleAbi,
    },
    GroupGatedGraphRule: {
      address: lensDeployments.mainnet.GroupGatedGraphRule.address,
      abi: abis.groupGatedGraphRuleAbi,
    },
    LensFactory: {
      address: lensDeployments.mainnet.LensFactory.address,
      abi: abis.lensFactoryAbi,
    },
    LensGlobalFeed: {
      address: lensDeployments.mainnet.LensGlobalFeed.address,
      abi: abis.feedAbi,
    },
    LensGlobalGraph: {
      address: lensDeployments.mainnet.LensGlobalGraph.address,
      abi: abis.graphAbi,
    },
    LensGlobalNamespace: {
      address: lensDeployments.mainnet.LensGlobalNamespace.address,
      abi: abis.namespaceAbi,
    },
    MembershipApprovalGroupRule: {
      address: lensDeployments.mainnet.MembershipApprovalGroupRule.address,
      abi: abis.membershipApprovalGroupRuleAbi,
    },
    NamespaceFactory: {
      address: lensDeployments.mainnet.NamespaceFactory.address,
      abi: abis.namespaceFactoryAbi,
    },
    SimpleCollectAction: {
      address: lensDeployments.mainnet.SimpleCollectAction.address,
      abi: abis.simpleCollectActionAbi,
    },
    SimplePaymentFeedRule: {
      address: lensDeployments.mainnet.SimplePaymentFeedRule.address,
      abi: abis.simplePaymentFeedRuleAbi,
    },
    SimplePaymentFollowRule: {
      address: lensDeployments.mainnet.SimplePaymentFollowRule.address,
      abi: abis.simplePaymentFollowRuleAbi,
    },
    SimplePaymentGroupRule: {
      address: lensDeployments.mainnet.SimplePaymentGroupRule.address,
      abi: abis.simplePaymentGroupRuleAbi,
    },
    TippingAccountAction: {
      address: lensDeployments.mainnet.TippingAccountAction.address,
      abi: abis.tippingAccountActionAbi,
    },
    TippingPostAction: {
      address: lensDeployments.mainnet.TippingPostAction.address,
      abi: abis.tippingPostActionAbi,
    },
    TokenGatedFeedRule: {
      address: lensDeployments.mainnet.TokenGatedFeedRule.address,
      abi: abis.tokenGatedFeedRuleAbi,
    },
    TokenGatedFollowRule: {
      address: lensDeployments.mainnet.TokenGatedFollowRule.address,
      abi: abis.tokenGatedFollowRuleAbi,
    },
    TokenGatedGraphRule: {
      address: lensDeployments.mainnet.TokenGatedGraphRule.address,
      abi: abis.tokenGatedGraphRuleAbi,
    },
    TokenGatedGroupRule: {
      address: lensDeployments.mainnet.TokenGatedGroupRule.address,
      abi: abis.tokenGatedGroupRuleAbi,
    },
    TokenGatedNamespaceRule: {
      address: lensDeployments.mainnet.TokenGatedNamespaceRule.address,
      abi: abis.tokenGatedNamespaceRuleAbi,
    },
    UsernameLengthNamespaceRule: {
      address: lensDeployments.mainnet.UsernameLengthNamespaceRule.address,
      abi: abis.usernameLengthNamespaceRuleAbi,
    },
    UsernamePricePerLengthNamespaceRule: {
      address: lensDeployments.mainnet.UsernamePricePerLengthNamespaceRule.address,
      abi: abis.usernamePricePerLengthNamespaceRuleAbi,
    },
    UsernameReservedNamespaceRule: {
      address: lensDeployments.mainnet.UsernameReservedNamespaceRule.address,
      abi: abis.usernameReservedNamespaceRuleAbi,
    },
    UsernameSimpleCharsetNamespaceRule: {
      address: lensDeployments.mainnet.UsernameSimpleCharsetNamespaceRule.address,
      abi: abis.usernameSimpleCharsetNamespaceRuleAbi,
    },
  },
  37111: {
    AccessControlFactory: {
      address: lensDeployments.testnet.AccessControlFactory.address,
      abi: abis.accessControlFactoryAbi,
    },
    AccountBlockingRule: {
      address: lensDeployments.testnet.AccountBlockingRule.address,
      abi: abis.accountBlockingRuleAbi,
    },
    AccountFactory: {
      address: lensDeployments.testnet.AccountFactory.address,
      abi: abis.accountFactoryAbi,
    },
    Account: {
      address: lensDeployments.testnet.AccountImpl.address,
      abi: abis.accountAbi,
    },
    ActionHub: {
      address: lensDeployments.testnet.ActionHub.address,
      abi: abis.actionHubAbi,
    },
    AdditionRemovalPidGroupRuleImpl: {
      address: lensDeployments.testnet.AdditionRemovalPidGroupRuleImpl.address,
      abi: abis.additionRemovalPidGroupRuleAbi,
    },
    AppFactory: {
      address: lensDeployments.testnet.AppFactory.address,
      abi: abis.appFactoryAbi,
    },
    BanMemberGroupRule: {
      address: lensDeployments.testnet.BanMemberGroupRule.address,
      abi: abis.banMemberGroupRuleAbi,
    },
    FeedFactory: {
      address: lensDeployments.testnet.FeedFactory.address,
      abi: abis.feedFactoryAbi,
    },
    FollowersOnlyPostRule: {
      address: lensDeployments.testnet.FollowersOnlyPostRule.address,
      abi: abis.followersOnlyPostRuleAbi,
    },
    GraphFactory: {
      address: lensDeployments.testnet.GraphFactory.address,
      abi: abis.graphFactoryAbi,
    },
    GroupFactory: {
      address: lensDeployments.testnet.GroupFactory.address,
      abi: abis.groupFactoryAbi,
    },
    GroupGatedFeedRule: {
      address: lensDeployments.testnet.GroupGatedFeedRule.address,
      abi: abis.groupGatedFeedRuleAbi,
    },
    GroupGatedGraphRule: {
      address: lensDeployments.testnet.GroupGatedGraphRule.address,
      abi: abis.groupGatedGraphRuleAbi,
    },
    Group: {
      address: lensDeployments.testnet.GroupImpl.address,
      abi: abis.groupAbi,
    },
    LensFactory: {
      address: lensDeployments.testnet.LensFactory.address,
      abi: abis.lensFactoryAbi,
    },
    LensGlobalApp: {
      address: lensDeployments.testnet.LensGlobalApp.address,
      abi: abis.appAbi,
    },
    LensGlobalFeed: {
      address: lensDeployments.testnet.LensGlobalFeed.address,
      abi: abis.feedAbi,
    },
    LensGlobalGraph: {
      address: lensDeployments.testnet.LensGlobalGraph.address,
      abi: abis.graphAbi,
    },
    LensGlobalNamespace: {
      address: lensDeployments.testnet.LensGlobalNamespace.address,
      abi: abis.namespaceAbi,
    },
    MembershipApprovalGroupRule: {
      address: lensDeployments.testnet.MembershipApprovalGroupRule.address,
      abi: abis.membershipApprovalGroupRuleAbi,
    },
    NamespaceFactory: {
      address: lensDeployments.testnet.NamespaceFactory.address,
      abi: abis.namespaceFactoryAbi,
    },
    OwnerAdminOnlyAccessControl: {
      address: lensDeployments.testnet.OwnerAdminOnlyAccessControl.address,
      abi: abis.ownerAdminOnlyAccessControlAbi,
    },
    SimpleCollectAction: {
      address: lensDeployments.testnet.SimpleCollectAction.address,
      abi: abis.simpleCollectActionAbi,
    },
    SimplePaymentFeedRule: {
      address: lensDeployments.testnet.SimplePaymentFeedRule.address,
      abi: abis.simplePaymentFeedRuleAbi,
    },
    SimplePaymentFollowRule: {
      address: lensDeployments.testnet.SimplePaymentFollowRule.address,
      abi: abis.simplePaymentFollowRuleAbi,
    },
    SimplePaymentGroupRule: {
      address: lensDeployments.testnet.SimplePaymentGroupRule.address,
      abi: abis.simplePaymentGroupRuleAbi,
    },
    TippingAccountAction: {
      address: lensDeployments.testnet.TippingAccountAction.address,
      abi: abis.tippingAccountActionAbi,
    },
    TippingPostAction: {
      address: lensDeployments.testnet.TippingPostAction.address,
      abi: abis.tippingPostActionAbi,
    },
    TokenGatedFeedRule: {
      address: lensDeployments.testnet.TokenGatedFeedRule.address,
      abi: abis.tokenGatedFeedRuleAbi,
    },
    TokenGatedFollowRule: {
      address: lensDeployments.testnet.TokenGatedFollowRule.address,
      abi: abis.tokenGatedFollowRuleAbi,
    },
    TokenGatedGraphRule: {
      address: lensDeployments.testnet.TokenGatedGraphRule.address,
      abi: abis.tokenGatedGraphRuleAbi,
    },
    TokenGatedGroupRule: {
      address: lensDeployments.testnet.TokenGatedGroupRule.address,
      abi: abis.tokenGatedGroupRuleAbi,
    },
    TokenGatedNamespaceRule: {
      address: lensDeployments.testnet.TokenGatedNamespaceRule.address,
      abi: abis.tokenGatedNamespaceRuleAbi,
    },
    UsernameLengthNamespaceRule: {
      address: lensDeployments.testnet.UsernameLengthNamespaceRule.address,
      abi: abis.usernameLengthNamespaceRuleAbi,
    },
    UsernamePricePerLengthNamespaceRule: {
      address: lensDeployments.testnet.UsernamePricePerLengthNamespaceRule.address,
      abi: abis.usernamePricePerLengthNamespaceRuleAbi,
    },
    UsernameReservedNamespaceRule: {
      address: lensDeployments.testnet.UsernameReservedNamespaceRule.address,
      abi: abis.usernameReservedNamespaceRuleAbi,
    },
    UsernameSimpleCharsetNamespaceRule: {
      address: lensDeployments.testnet.UsernameSimpleCharsetNamespaceRule.address,
      abi: abis.usernameSimpleCharsetNamespaceRuleAbi,
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
