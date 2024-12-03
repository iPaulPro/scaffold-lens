// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.0;

interface IAccountAction {
    event Lens_AccountAction_Configured(address indexed account, bytes data);

    event Lens_AccountAction_Executed(address indexed account, bytes data);

    function configure(address account, bytes calldata data) external returns (bytes memory);

    function execute(address account, bytes calldata data) external returns (bytes memory);
}
