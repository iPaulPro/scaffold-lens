// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.0;

import {RuleChange} from "./../types/Types.sol";

interface IGraphRule {
    function configure(bytes calldata data) external;

    function processFollow(address followerAccount, address accountToFollow, bytes calldata data)
        external
        returns (bool);

    function processFollowRuleChanges(address account, RuleChange[] calldata ruleChanges, bytes calldata data)
        external
        returns (bool);
}
