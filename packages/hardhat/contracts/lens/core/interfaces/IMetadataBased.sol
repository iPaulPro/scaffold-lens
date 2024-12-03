// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.0;

interface IMetadataBased {
    function getMetadataURI() external view returns (string memory);
    function setMetadataURI(string memory metadata) external;
}
