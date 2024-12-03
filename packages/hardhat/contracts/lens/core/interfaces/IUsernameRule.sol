// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.0;

interface IUsernameRule {
    function configure(bytes calldata data) external;

    function processCreation(address account, string calldata username, bytes calldata data) external returns (bool);

    function processAssigning(address account, string calldata username, bytes calldata data) external returns (bool);
}
