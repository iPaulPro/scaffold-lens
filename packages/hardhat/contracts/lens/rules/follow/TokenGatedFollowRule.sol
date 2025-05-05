// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.26;

import {IFollowRule} from "contracts/lens/core/interfaces/IFollowRule.sol";
import {TokenGatedRule} from "contracts/lens/rules/base/TokenGatedRule.sol";
import {KeyValue} from "contracts/lens/core/types/Types.sol";
import {Errors} from "contracts/lens/core/types/Errors.sol";

contract TokenGatedFollowRule is TokenGatedRule, IFollowRule {
    mapping(address => mapping(address => mapping(bytes32 => TokenGateConfiguration))) internal _tokenGateConfig;

    constructor(address owner, string memory metadataURI) TokenGatedRule(owner, metadataURI) {}

    function configure(bytes32 configSalt, address account, KeyValue[] calldata ruleParams) external override {
        TokenGateConfiguration memory tokenGateConfig = _extractConfigurationFromParams(ruleParams);
        _validateTokenGateConfiguration(tokenGateConfig);
        _tokenGateConfig[msg.sender][account][configSalt] = tokenGateConfig;
    }

    function processFollow(
        bytes32 configSalt,
        address, /* originalMsgSender */
        address followerAccount,
        address accountToFollow,
        KeyValue[] calldata, /* primitiveParams */
        KeyValue[] calldata /* ruleParams */
    ) external view override {
        _validateTokenBalance(_tokenGateConfig[msg.sender][accountToFollow][configSalt], followerAccount);
    }

    function _extractConfigurationFromParams(KeyValue[] calldata params)
        internal
        pure
        returns (TokenGateConfiguration memory)
    {
        for (uint256 i = 0; i < params.length; i++) {
            if (params[i].key == PARAM__TOKEN_GATE) {
                return abi.decode(params[i].value, (TokenGateConfiguration));
            }
        }
        revert Errors.NotFound();
    }
}
