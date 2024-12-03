// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.0;

import {IAccessControl} from "./../../core/interfaces/IAccessControl.sol";
import {Group} from "./../../core/primitives/group/Group.sol";
import {RoleBasedAccessControl} from "./../../core/access/RoleBasedAccessControl.sol";
import {RuleChange, DataElement} from "./../../core/types/Types.sol";

contract GroupFactory {
    event Lens_GroupFactory_Deployment(address indexed group, string metadataURI);

    IAccessControl internal immutable _factoryOwnedAccessControl;

    constructor() {
        _factoryOwnedAccessControl = new RoleBasedAccessControl({owner: address(this)});
    }

    function deployGroup(
        string memory metadataURI,
        IAccessControl accessControl,
        RuleChange[] calldata rules,
        DataElement[] calldata extraData
    ) external returns (address) {
        Group group = new Group(metadataURI, _factoryOwnedAccessControl);
        group.changeGroupRules(rules);
        group.setExtraData(extraData);
        group.setAccessControl(accessControl);
        emit Lens_GroupFactory_Deployment(address(group), metadataURI);
        return address(group);
    }
}
