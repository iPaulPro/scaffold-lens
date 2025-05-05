// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.26;

import {IRoleBasedAccessControl} from "contracts/lens/core/interfaces/IRoleBasedAccessControl.sol";
import {IAccessControl} from "contracts/lens/core/interfaces/IAccessControl.sol";
import {Group} from "contracts/lens/core/primitives/group/Group.sol";
import {PermissionlessAccessControl} from "contracts/lens/extensions/access/PermissionlessAccessControl.sol";
import {
    RuleChange,
    RuleProcessingParams,
    RuleSelectorChange,
    RuleConfigurationChange,
    KeyValue,
    SourceStamp
} from "contracts/lens/core/types/Types.sol";
import {GroupFactory} from "contracts/lens/extensions/factories/GroupFactory.sol";
import {FeedFactory} from "contracts/lens/extensions/factories/FeedFactory.sol";
import {GraphFactory} from "contracts/lens/extensions/factories/GraphFactory.sol";
import {NamespaceFactory} from "contracts/lens/extensions/factories/NamespaceFactory.sol";
import {AppFactory} from "contracts/lens/extensions/factories/AppFactory.sol";
import {AppInitialProperties} from "contracts/lens/extensions/primitives/app/App.sol";
import {AccessControlFactory} from "contracts/lens/extensions/factories/AccessControlFactory.sol";
import {AccountFactory} from "contracts/lens/extensions/factories/AccountFactory.sol";
import {IAccount, AccountManagerPermissions} from "contracts/lens/extensions/account/IAccount.sol";
import {INamespace} from "contracts/lens/core/interfaces/INamespace.sol";
import {LensUsernameTokenURIProvider} from "contracts/lens/core/primitives/namespace/LensUsernameTokenURIProvider.sol";
import {BeaconProxy} from "contracts/lens/core/upgradeability/BeaconProxy.sol";
import {IOwnable} from "contracts/lens/core/interfaces/IOwnable.sol";

import {IFeedRule} from "contracts/lens/core/interfaces/IFeedRule.sol";
import {IGraphRule} from "contracts/lens/core/interfaces/IGraphRule.sol";
import {INamespaceRule} from "contracts/lens/core/interfaces/INamespaceRule.sol";

import {PARAM__GROUP} from "contracts/lens/rules/feed/GroupGatedFeedRule.sol";
import {AccessControlled} from "contracts/lens/core/access/AccessControlled.sol";
import {IGroup} from "contracts/lens/core/interfaces/IGroup.sol";
import {Errors} from "contracts/lens/core/types/Errors.sol";

/// @custom:keccak lens.data.groupFeed
bytes32 constant DATA__GROUP_LINKED_FEED = 0xfec1c12508813d27a0104e0d1f0ad007b92d4ee5701c6d20b721221326b94ae1;

/// @custom:keccak lens.param.accessControl
bytes32 constant PARAM__ACCESS_CONTROL = 0xcf3b0fab90208e4185bf857e0f943f6672abffb7d0898e0750beeeb991ae35fa;

struct CreateAccountParams {
    string metadataURI;
    address owner;
    address[] accountManagers;
    AccountManagerPermissions[] accountManagersPermissions;
    SourceStamp accountCreationSourceStamp;
    KeyValue[] accountExtraData;
}

struct CreateUsernameParams {
    string username;
    KeyValue[] createUsernameCustomParams;
    RuleProcessingParams[] createUsernameRuleProcessingParams;
    KeyValue[] assignUsernameCustomParams;
    RuleProcessingParams[] unassignAccountRuleProcessingParams;
    RuleProcessingParams[] assignRuleProcessingParams;
    KeyValue[] usernameExtraData;
}

contract LensFactory {
    AccessControlFactory internal immutable ACCESS_CONTROL_FACTORY;
    AccountFactory internal immutable ACCOUNT_FACTORY;
    AppFactory internal immutable APP_FACTORY;
    GroupFactory internal immutable GROUP_FACTORY;
    FeedFactory internal immutable FEED_FACTORY;
    GraphFactory internal immutable GRAPH_FACTORY;
    NamespaceFactory internal immutable NAMESPACE_FACTORY;
    IAccessControl internal immutable TEMPORARY_ACCESS_CONTROL;
    address internal immutable ACCOUNT_BLOCKING_RULE;
    address internal immutable GROUP_GATED_FEED_RULE;
    address internal immutable USERNAME_SIMPLE_CHARSET_RULE;

    constructor(
        AccessControlFactory accessControlFactory,
        AccountFactory accountFactory,
        AppFactory appFactory,
        GroupFactory groupFactory,
        FeedFactory feedFactory,
        GraphFactory graphFactory,
        NamespaceFactory namespaceFactory,
        address accountBlockingRule,
        address groupGatedFeedRule,
        address usernameSimpleCharsetRule
    ) {
        ACCESS_CONTROL_FACTORY = accessControlFactory;
        ACCOUNT_FACTORY = accountFactory;
        APP_FACTORY = appFactory;
        GROUP_FACTORY = groupFactory;
        FEED_FACTORY = feedFactory;
        GRAPH_FACTORY = graphFactory;
        NAMESPACE_FACTORY = namespaceFactory;
        TEMPORARY_ACCESS_CONTROL = new PermissionlessAccessControl();
        ACCOUNT_BLOCKING_RULE = accountBlockingRule;
        GROUP_GATED_FEED_RULE = groupGatedFeedRule;
        USERNAME_SIMPLE_CHARSET_RULE = usernameSimpleCharsetRule;
    }

    function createAccountWithUsernameFree(
        address namespacePrimitiveAddress,
        CreateAccountParams calldata accountParams,
        CreateUsernameParams calldata usernameParams
    ) external virtual returns (address) {
        address account = ACCOUNT_FACTORY.deployAccount(
            address(this),
            accountParams.metadataURI,
            accountParams.accountManagers,
            accountParams.accountManagersPermissions,
            accountParams.accountCreationSourceStamp,
            accountParams.accountExtraData
        );
        INamespace namespacePrimitive = INamespace(namespacePrimitiveAddress);
        bytes memory txData = abi.encodeCall(
            namespacePrimitive.createUsername,
            (
                account,
                usernameParams.username,
                usernameParams.createUsernameCustomParams,
                usernameParams.createUsernameRuleProcessingParams,
                usernameParams.usernameExtraData
            )
        );
        IAccount(payable(account)).executeTransaction(namespacePrimitiveAddress, uint256(0), txData);
        txData = abi.encodeCall(
            namespacePrimitive.assignUsername,
            (
                account,
                usernameParams.username,
                usernameParams.assignUsernameCustomParams,
                usernameParams.unassignAccountRuleProcessingParams,
                new RuleProcessingParams[](0),
                usernameParams.assignRuleProcessingParams
            )
        );
        IAccount(payable(account)).executeTransaction(namespacePrimitiveAddress, uint256(0), txData);
        IOwnable(account).transferOwnership(accountParams.owner);
        IOwnable(BeaconProxy(payable(account)).proxy__getProxyAdmin()).transferOwnership(accountParams.owner);
        return account;
    }

    struct CreateGroupWithFeedParams {
        address owner;
        address group;
        IRoleBasedAccessControl groupAccessControl;
        IRoleBasedAccessControl feedAccessControl;
        RuleChange[] modifiedFeedRules;
        string feedMetadataURI;
        RuleChange[] feedRules;
        KeyValue[] feedExtraData;
    }

    function createGroupWithFeed(
        address owner,
        address[] memory admins,
        string memory groupMetadataURI,
        RuleChange[] memory groupRules,
        KeyValue[] memory groupExtraData,
        address groupFoundingMember,
        KeyValue[] memory groupAddFoundingMemberCustomParams,
        string memory feedMetadataURI,
        RuleChange[] memory feedRules,
        KeyValue[] memory feedExtraData
    ) external returns (address, address) {
        CreateGroupWithFeedParams memory s;
        s.feedExtraData = feedExtraData;
        s.feedRules = feedRules;
        s.feedMetadataURI = feedMetadataURI;
        s.feedAccessControl = _deployAccessControl(owner, admins);
        {
            s.groupAccessControl = _deployAccessControl(owner, admins);
        }
        s.owner = owner;

        {
            s.group = GROUP_FACTORY.deployGroup(
                groupMetadataURI,
                TEMPORARY_ACCESS_CONTROL,
                s.owner,
                _injectRuleAccessControl(groupRules, address(s.groupAccessControl)),
                groupExtraData,
                groupFoundingMember,
                groupAddFoundingMemberCustomParams
            );
        }

        s.modifiedFeedRules = _injectRulesForFeedAndGroup(s.feedRules, s.feedAccessControl, s.group);

        address feed = FEED_FACTORY.deployFeed(
            s.feedMetadataURI, s.feedAccessControl, s.owner, s.modifiedFeedRules, s.feedExtraData
        );

        KeyValue[] memory groupExtraDataWithFeed = new KeyValue[](1);
        groupExtraDataWithFeed[0] = KeyValue({key: DATA__GROUP_LINKED_FEED, value: abi.encode(feed)});
        IGroup(s.group).setExtraData(groupExtraDataWithFeed);
        AccessControlled(s.group).setAccessControl(s.groupAccessControl);
        return (s.group, feed);
    }

    function deployAccount(
        string calldata metadataURI,
        address owner,
        address[] calldata accountManagers,
        AccountManagerPermissions[] calldata accountManagersPermissions,
        SourceStamp calldata sourceStamp,
        KeyValue[] calldata extraData
    ) external virtual returns (address) {
        return ACCOUNT_FACTORY.deployAccount(
            owner, metadataURI, accountManagers, accountManagersPermissions, sourceStamp, extraData
        );
    }

    function deployApp(
        string calldata metadataURI,
        bool sourceStampVerificationEnabled,
        address owner,
        address[] calldata admins,
        AppInitialProperties calldata initialProperties,
        KeyValue[] calldata extraData
    ) external returns (address) {
        return APP_FACTORY.deployApp(
            metadataURI,
            sourceStampVerificationEnabled,
            _deployAccessControl(owner, admins),
            owner,
            initialProperties,
            extraData
        );
    }

    function deployGroup(
        string calldata metadataURI,
        address owner,
        address[] calldata admins,
        RuleChange[] calldata rules,
        KeyValue[] calldata extraData,
        address foundingMember,
        KeyValue[] memory addFoundingMemberCustomParams
    ) external returns (address) {
        IRoleBasedAccessControl accessControl = _deployAccessControl(owner, admins);
        return GROUP_FACTORY.deployGroup(
            metadataURI,
            accessControl,
            owner,
            _injectRuleAccessControl(rules, address(accessControl)),
            extraData,
            foundingMember,
            addFoundingMemberCustomParams
        );
    }

    function deployFeed(
        string calldata metadataURI,
        address owner,
        address[] calldata admins,
        RuleChange[] calldata rules,
        KeyValue[] calldata extraData
    ) external returns (address) {
        IRoleBasedAccessControl accessControl = _deployAccessControl(owner, admins);
        return FEED_FACTORY.deployFeed(
            metadataURI,
            accessControl,
            owner,
            _prepareRules(rules, IFeedRule.processCreatePost.selector, address(accessControl)),
            extraData
        );
    }

    function deployGraph(
        string calldata metadataURI,
        address owner,
        address[] calldata admins,
        RuleChange[] calldata rules,
        KeyValue[] calldata extraData
    ) external returns (address) {
        IRoleBasedAccessControl accessControl = _deployAccessControl(owner, admins);
        return GRAPH_FACTORY.deployGraph(
            metadataURI,
            accessControl,
            owner,
            _prepareRules(rules, IGraphRule.processFollow.selector, address(accessControl)),
            extraData
        );
    }

    function deployNamespace(
        string memory namespace,
        string memory metadataURI,
        address owner,
        address[] memory admins,
        RuleChange[] calldata rules,
        KeyValue[] calldata extraData,
        string memory nftName,
        string memory nftSymbol
    ) external returns (address) {
        IRoleBasedAccessControl accessControl = _deployAccessControl(owner, admins);
        RuleChange[] memory modifiedRules = _injectRulesForNamespace(rules, address(accessControl));

        return NAMESPACE_FACTORY.deployNamespace(
            namespace,
            metadataURI,
            accessControl,
            owner,
            modifiedRules,
            extraData,
            nftName,
            nftSymbol,
            new LensUsernameTokenURIProvider()
        );
    }

    function _deployAccessControl(address owner, address[] memory admins)
        internal
        virtual
        returns (IRoleBasedAccessControl)
    {
        return ACCESS_CONTROL_FACTORY.deployOwnerAdminOnlyAccessControl(owner, admins);
    }

    function _injectRuleAccessControl(RuleChange memory rule, address accessControl)
        internal
        pure
        virtual
        returns (RuleChange memory)
    {
        bool found;
        if (rule.configurationChanges.configure) {
            for (uint256 i = 0; i < rule.configurationChanges.ruleParams.length; i++) {
                if (rule.configurationChanges.ruleParams[i].key == PARAM__ACCESS_CONTROL) {
                    require(!found, Errors.DuplicatedValue());
                    found = true;
                    require(rule.configurationChanges.ruleParams[i].value.length == 0, Errors.InvalidParameter());
                    rule.configurationChanges.ruleParams[i].value = abi.encode(accessControl);
                }
            }
        }
        return rule;
    }

    function _injectRuleAccessControl(RuleChange[] memory rules, address accessControl)
        internal
        pure
        virtual
        returns (RuleChange[] memory)
    {
        RuleChange[] memory modifiedRules = new RuleChange[](rules.length);
        for (uint256 i = 0; i < rules.length; i++) {
            modifiedRules[i] = _injectRuleAccessControl(rules[i], accessControl);
        }
        return modifiedRules;
    }

    function _prepareRules(RuleChange[] memory rules, bytes4 ruleSelector, address accessControl)
        internal
        view
        virtual
        returns (RuleChange[] memory)
    {
        RuleChange[] memory modifiedRules = new RuleChange[](rules.length + 1);
        RuleSelectorChange[] memory selectorChanges = new RuleSelectorChange[](1);
        selectorChanges[0] = RuleSelectorChange({ruleSelector: ruleSelector, isRequired: true, enabled: true});
        modifiedRules[0] = RuleChange({
            ruleAddress: ACCOUNT_BLOCKING_RULE,
            configSalt: bytes32(0),
            configurationChanges: RuleConfigurationChange({configure: true, ruleParams: new KeyValue[](0)}),
            selectorChanges: selectorChanges
        });
        for (uint256 i = 0; i < rules.length; i++) {
            require(rules[i].ruleAddress != ACCOUNT_BLOCKING_RULE, Errors.DuplicatedValue());
            modifiedRules[i + 1] = _injectRuleAccessControl(rules[i], accessControl);
        }
        return modifiedRules;
    }

    function _injectRulesForFeedAndGroup(
        RuleChange[] memory feedRules,
        IRoleBasedAccessControl feedAccessControl,
        address group
    ) internal view virtual returns (RuleChange[] memory) {
        RuleChange[] memory modifiedFeedRules = new RuleChange[](feedRules.length + 2);

        RuleSelectorChange[] memory selectorChanges = new RuleSelectorChange[](1);
        // Both rules only operate on IFeedRule.processCreatePost.selector (at least at the moment of writing this)
        selectorChanges[0] =
            RuleSelectorChange({ruleSelector: IFeedRule.processCreatePost.selector, isRequired: true, enabled: true});

        modifiedFeedRules[0] = RuleChange({
            ruleAddress: ACCOUNT_BLOCKING_RULE,
            configSalt: bytes32(0),
            configurationChanges: RuleConfigurationChange({configure: true, ruleParams: new KeyValue[](0)}),
            selectorChanges: selectorChanges
        });

        KeyValue[] memory groupGatedRuleParams = new KeyValue[](1);
        groupGatedRuleParams[0] = KeyValue({key: PARAM__GROUP, value: abi.encode(group)});

        modifiedFeedRules[1] = RuleChange({
            ruleAddress: GROUP_GATED_FEED_RULE,
            configSalt: bytes32(0),
            configurationChanges: RuleConfigurationChange({configure: true, ruleParams: groupGatedRuleParams}),
            selectorChanges: selectorChanges
        });

        for (uint256 i = 0; i < feedRules.length; i++) {
            require(feedRules[i].ruleAddress != ACCOUNT_BLOCKING_RULE, Errors.DuplicatedValue());
            require(feedRules[i].ruleAddress != GROUP_GATED_FEED_RULE, Errors.DuplicatedValue());
            modifiedFeedRules[i + 2] = _injectRuleAccessControl(feedRules[i], address(feedAccessControl));
        }

        return modifiedFeedRules;
    }

    function _injectRulesForNamespace(RuleChange[] memory rules, address accessControl)
        internal
        view
        virtual
        returns (RuleChange[] memory)
    {
        RuleChange[] memory modifiedRules = new RuleChange[](rules.length + 1);

        {
            RuleSelectorChange[] memory selectorChanges = new RuleSelectorChange[](1);
            selectorChanges[0] = RuleSelectorChange({
                ruleSelector: INamespaceRule.processCreation.selector,
                isRequired: true,
                enabled: true
            });
            modifiedRules[0] = RuleChange({
                ruleAddress: USERNAME_SIMPLE_CHARSET_RULE,
                configSalt: bytes32(0),
                configurationChanges: RuleConfigurationChange({configure: true, ruleParams: new KeyValue[](0)}),
                selectorChanges: selectorChanges
            });
            for (uint256 i = 0; i < rules.length; i++) {
                require(rules[i].ruleAddress != USERNAME_SIMPLE_CHARSET_RULE, Errors.DuplicatedValue());
                modifiedRules[i + 1] = _injectRuleAccessControl(rules[i], address(accessControl));
            }
        }

        return modifiedRules;
    }

    function getFactories() external view returns (address, address, address, address, address, address, address) {
        return (
            address(ACCESS_CONTROL_FACTORY),
            address(ACCOUNT_FACTORY),
            address(APP_FACTORY),
            address(FEED_FACTORY),
            address(GRAPH_FACTORY),
            address(GROUP_FACTORY),
            address(NAMESPACE_FACTORY)
        );
    }

    function getTemporaryAccessControl() external view returns (address) {
        return address(TEMPORARY_ACCESS_CONTROL);
    }

    function getRules() external view returns (address, address, address) {
        return (address(ACCOUNT_BLOCKING_RULE), address(GROUP_GATED_FEED_RULE), address(USERNAME_SIMPLE_CHARSET_RULE));
    }
}
