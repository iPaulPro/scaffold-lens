// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.0;

import {Account, AccountManagerPermissions} from "./../account/Account.sol";
import {SourceStamp} from "./../../core/types/Types.sol";

contract AccountFactory {
    event Lens_AccountFactory_Deployment(
        address indexed account,
        address indexed owner,
        string metadataURI,
        address[] accountManagers,
        AccountManagerPermissions[] accountManagersPermissions,
        address source
    );

    function deployAccount(
        address owner,
        string calldata metadataURI,
        address[] calldata accountManagers,
        AccountManagerPermissions[] calldata accountManagersPermissions,
        SourceStamp calldata sourceStamp
    ) external returns (address) {
        // TODO: Make it a proxy
        Account account = new Account(owner, metadataURI, accountManagers, accountManagersPermissions, sourceStamp);
        emit Lens_AccountFactory_Deployment(
            address(account), owner, metadataURI, accountManagers, accountManagersPermissions, sourceStamp.source
        );
        return address(account);
    }
}
