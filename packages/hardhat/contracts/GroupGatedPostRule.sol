// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

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
contract GroupGatedPostRule is IPostRule, OwnableMetadataBasedRule {
    /// @custom:keccak lens.param.group
    bytes32 private constant PARAM_GROUP =
        0xa92ea569d1a9f915f96759ba7cea5f135d011c442b0508dbef76a309e55f4458;

    mapping(address => mapping(bytes32 => mapping(uint256 => address)))
        internal _configuration;

    constructor(
        address owner,
        string memory metadataURI
    ) OwnableMetadataBasedRule(owner, metadataURI) {}

    function configure(
        bytes32 configSalt,
        uint256 postId,
        KeyValue[] calldata ruleParams
    ) external override {
        address group;
        for (uint256 i = 0; i < ruleParams.length; i++) {
            if (ruleParams[i].key == PARAM_GROUP) {
                group = abi.decode(ruleParams[i].value, (address));
            }
        }
        IGroup(group).isMember(address(this)); // Aims to verify the provided address is a valid group
        _configuration[msg.sender][configSalt][postId] = group;
    }

    function processCreatePost(
        bytes32 configSalt,
        uint256 rootPostId,
        uint256 postId,
        CreatePostParams calldata postParams,
        KeyValue[] calldata /* primitiveParams */,
        KeyValue[] calldata /* ruleParams */
    ) external view override {
        address groupAddress = _configuration[msg.sender][configSalt][
            rootPostId
        ];
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
}
