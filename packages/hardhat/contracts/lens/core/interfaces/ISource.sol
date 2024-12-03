// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.17;

import {SourceStamp} from "./../types/Types.sol";

interface ISource {
    function getTreasury() external view returns (address);

    function validateSource(SourceStamp calldata sourceStamp) external;
}
