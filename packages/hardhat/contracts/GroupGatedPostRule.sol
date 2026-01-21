// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {IPostRuleValidation} from "./helpers/IPostRuleValidation.sol";
import {IPostRule} from "lens-modules/contracts/core/interfaces/IPostRule.sol";
import {IGroup} from "lens-modules/contracts/core/interfaces/IGroup.sol";
import {IFeed, CreatePostParams, EditPostParams} from "lens-modules/contracts/core/interfaces/IFeed.sol";
import {KeyValue} from "lens-modules/contracts/core/types/Types.sol";
import {OwnableMetadataBasedRule} from "lens-modules/contracts/rules/base/OwnableMetadataBasedRule.sol";
import {Errors} from "lens-modules/contracts/core/types/Errors.sol";

/**
 * @title GroupGatedPostRule
 * @author Paul Burke
 *
 * @dev A post rule that only allows users to reply to a post if they are members of a Group.
 *      The rule requires a group address to check if an author is a member.
 */
contract GroupGatedPostRule is
    IPostRule,
    OwnableMetadataBasedRule,
    IPostRuleValidation
{
    mapping(address feed => mapping(uint256 postId => address group))
        internal _configuration;

    constructor(
        address owner,
        string memory metadataURI
    ) OwnableMetadataBasedRule(owner, metadataURI) {}

    function configure(
        bytes32 /* configSalt */,
        uint256 postId,
        KeyValue[] calldata ruleParams
    ) external override {
        address group = abi.decode(ruleParams[0].value, (address));
        IGroup(group).isMember(address(this)); // Verifies the provided address is a group
        _configuration[msg.sender][postId] = group;
    }

    function processCreatePost(
        bytes32 /* configSalt */,
        uint256 rootPostId,
        uint256 postId,
        CreatePostParams calldata /* postParams */,
        KeyValue[] calldata /* primitiveParams */,
        KeyValue[] calldata /* ruleParams */
    ) external view override {
        address groupAddress = _configuration[msg.sender][rootPostId];
        if (groupAddress != address(0)) {
            IFeed feed = IFeed(msg.sender);
            IGroup group = IGroup(groupAddress);
            address newPostAuthor = feed.getPostAuthor(postId);
            require(group.isMember(newPostAuthor), Errors.NotAMember());
        }
    }

    function processEditPost(
        bytes32 /* configSalt */,
        uint256 /* rootPostId */,
        uint256 /* postId */,
        EditPostParams calldata /* postParams */,
        KeyValue[] calldata /* primitiveParams */,
        KeyValue[] calldata /* ruleParams */
    ) external pure override {
        revert Errors.NotImplemented();
    }

    function getGroupGate(
        address feed,
        uint256 postId
    ) external view returns (address) {
        return _configuration[feed][postId];
    }

    function validateCanReply(
        address feed,
        uint256 postId,
        address account
    ) external view returns (bool) {
        return isAuthorGroupMember(feed, postId, account);
    }

    function validateCanRepost(
        address feed,
        uint256 postId,
        address account
    ) external view returns (bool) {
        return isAuthorGroupMember(feed, postId, account);
    }

    function validateCanQuote(
        address feed,
        uint256 postId,
        address account
    ) external view returns (bool) {
        return isAuthorGroupMember(feed, postId, account);
    }

    function isAuthorGroupMember(
        address feed,
        uint256 postId,
        address account
    ) internal view returns (bool) {
        IFeed feedContract = IFeed(feed);
        uint256 rootPostId = feedContract.getPost(postId).rootPostId;
        address rootPostAuthor = feedContract.getPostAuthor(rootPostId);
        if (rootPostAuthor == account) {
            return true;
        }
        address groupAddress = _configuration[feed][rootPostId];
        if (groupAddress == address(0)) {
            return true;
        }
        IGroup group = IGroup(groupAddress);
        return group.isMember(account);
    }
}
