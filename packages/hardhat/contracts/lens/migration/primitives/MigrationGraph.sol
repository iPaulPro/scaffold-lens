// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.26;

import {GraphCore as Core} from "contracts/lens/core/primitives/graph/GraphCore.sol";
import {Graph} from "contracts/lens/core/primitives/graph/Graph.sol";
import {RuleProcessingParams, KeyValue} from "contracts/lens/core/types/Types.sol";
import {Follow} from "contracts/lens/core/interfaces/IGraph.sol";
import {Errors} from "contracts/lens/core/types/Errors.sol";
import {WHITELISTED_MULTICALL_ADDRESS} from "contracts/lens/migration/WhitelistedMulticall.sol";

/**
 * Special Graph implementation to allow data migrations from Lens V2 to Lens V3
 */
contract MigrationGraph is Graph {
    modifier onlyWhitelistedMulticall() {
        require(msg.sender == WHITELISTED_MULTICALL_ADDRESS, Errors.InvalidMsgSender());
        _;
    }

    function follow(
        address followerAccount,
        address accountToFollow,
        KeyValue[] calldata customParams,
        RuleProcessingParams[] calldata graphRulesProcessingParams,
        RuleProcessingParams[] calldata followRulesProcessingParams,
        KeyValue[] calldata extraData
    ) external override onlyWhitelistedMulticall returns (uint256) {
        require(customParams.length > 0, Errors.InvalidParameter());
        (uint256 followId, uint256 timestamp) = abi.decode(customParams[0].value, (uint256, uint256));
        _migrateFollow(followerAccount, accountToFollow, followId, timestamp);
        emit Lens_Graph_Followed(
            followerAccount,
            accountToFollow,
            followId,
            customParams,
            graphRulesProcessingParams,
            followRulesProcessingParams,
            address(0),
            extraData
        );
        return followId;
    }

    function _migrateFollow(address followerAccount, address accountToFollow, uint256 followId, uint256 timestamp)
        internal
    {
        require(followerAccount != accountToFollow, Errors.ActionOnSelf());
        require(followId != 0, Errors.InvalidParameter());
        require(followerAccount != address(0), Errors.InvalidParameter());
        require(accountToFollow != address(0), Errors.InvalidParameter());
        require(Core.$storage().follows[followerAccount][accountToFollow].id == 0, Errors.CannotFollowAgain());
        require(Core.$storage().followers[accountToFollow][followId] == address(0), Errors.AlreadyExists());
        if (Core.$storage().lastFollowIdAssigned[accountToFollow] < followId) {
            Core.$storage().lastFollowIdAssigned[accountToFollow] = followId;
        }
        Core.$storage().follows[followerAccount][accountToFollow] = Follow({id: followId, timestamp: timestamp});
        Core.$storage().followers[accountToFollow][followId] = followerAccount;
        Core.$storage().followersCount[accountToFollow]++;
        Core.$storage().followingCount[followerAccount]++;
    }

    function unfollow(
        address followerAccount,
        address accountToUnfollow,
        KeyValue[] calldata customParams,
        RuleProcessingParams[] calldata graphRulesProcessingParams
    ) external override onlyWhitelistedMulticall returns (uint256) {
        // !!! MIGRATION ONLY
        // require(msg.sender == followerAccount, Errors.InvalidMsgSender());
        uint256 followId = Core._unfollow(followerAccount, accountToUnfollow);
        address source = _processSourceStamp(followId, customParams);
        // !!! MIGRATION ONLY
        // _graphProcessUnfollow(msg.sender, followerAccount, accountToUnfollow, customParams, graphRulesProcessingParams);
        emit Lens_Graph_Unfollowed(
            followerAccount, accountToUnfollow, followId, customParams, graphRulesProcessingParams, source
        );
        return followId;
    }
}
