// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.17;

library Events {
    event Lens_Contract_Deployed(
        string indexed indexedContractType, string indexed indexedFlavour, string contractType, string flavour
    );

    event Lens_PermissionId_Available(uint256 indexed permissionId, string name);
}
