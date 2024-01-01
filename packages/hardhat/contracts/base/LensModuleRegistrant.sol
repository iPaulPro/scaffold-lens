// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import {ILensModuleRegistrant} from "../interfaces/IModuleRegistrant.sol";
import {IModuleRegistry} from "../interfaces/IModuleRegistry.sol";
import {Types} from "../libraries/Types.sol";

abstract contract LensModuleRegistrant is ILensModuleRegistrant {
    event ModuleRegistered();

    error ModuleAlreadyRegistered();

    IModuleRegistry public immutable MODULE_REGISTRY;

    constructor(address moduleRegistry) {
        MODULE_REGISTRY = IModuleRegistry(moduleRegistry);
    }

    function isRegistered() public view override returns (bool) {
        return MODULE_REGISTRY.isModuleRegistered(address(this));
    }

    function registerModule() external override returns (bool) {
        if (isRegistered()) {
            revert ModuleAlreadyRegistered();
        }

        bool registered = MODULE_REGISTRY.registerModule(
            address(this),
            uint256(Types.ModuleType.PUBLICATION_ACTION_MODULE)
        );

        if (registered) {
            emit ModuleRegistered();
        }

        return registered;
    }
}
