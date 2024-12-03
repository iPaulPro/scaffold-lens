// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.0;

interface IPostAction {
    event Lens_PostAction_Configured(address indexed feed, uint256 indexed postId, bytes data);

    event Lens_PostAction_Executed(address indexed feed, uint256 indexed postId, bytes data);

    function configure(address feed, uint256 postId, bytes calldata data) external returns (bytes memory);

    function execute(address feed, uint256 postId, bytes calldata data) external returns (bytes memory);
}
