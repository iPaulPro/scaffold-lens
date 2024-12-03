// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.0;

import {Events} from "./../../core/types/Events.sol";
import {RoleBasedAccessControl} from "./../../core/access/RoleBasedAccessControl.sol";
import {Access} from "./../../core/interfaces/IRoleBasedAccessControl.sol";

contract OwnerAdminOnlyAccessControl is RoleBasedAccessControl {
    uint256 constant ADMIN_ROLE_ID = uint256(keccak256("ADMIN"));

    constructor(address owner) RoleBasedAccessControl(owner) {
        _setAccess(ADMIN_ROLE_ID, ANY_CONTRACT_ADDRESS, ANY_PERMISSION_ID, Access.GRANTED);
    }

    function _beforeGrantingRole(address account, uint256 roleId) internal virtual override {
        require(roleId == ADMIN_ROLE_ID, "You cannot grant other roles than ADMIN");
        super._beforeGrantingRole(account, roleId);
    }

    function _beforeSettingAccess(
        uint256, /*roleId*/
        address, /*contractAddress*/
        uint256, /*permissionId*/
        Access /*access*/
    ) internal virtual override {
        revert();
    }

    function getType() external pure virtual override returns (bytes32) {
        return keccak256("lens.access-control.owner-admin-only-access-control");
    }

    function _emitLensContractDeployedEvent() internal virtual override {
        emit Events.Lens_Contract_Deployed(
            "access-control",
            "lens.access-control.owner-admin-only-access-control",
            "access-control",
            "lens.access-control.owner-admin-only-access-control"
        );
    }
}
