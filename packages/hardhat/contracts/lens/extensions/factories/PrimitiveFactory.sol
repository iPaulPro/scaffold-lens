// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.26;

import {IAccessControl} from "contracts/lens/core/interfaces/IAccessControl.sol";
import {PermissionlessAccessControl} from "contracts/lens/extensions/access/PermissionlessAccessControl.sol";

contract PrimitiveFactory {
    IAccessControl internal immutable TEMPORARY_ACCESS_CONTROL;
    address internal immutable PRIMITIVE_BEACON;
    address internal immutable PROXY_ADMIN_LOCK;

    constructor(address primitiveBeacon, address proxyAdminLock) {
        TEMPORARY_ACCESS_CONTROL = new PermissionlessAccessControl();
        PRIMITIVE_BEACON = primitiveBeacon;
        PROXY_ADMIN_LOCK = proxyAdminLock;
    }
}
