// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

import {IModuleRegistry} from "../../interfaces/IModuleRegistry.sol";
import {Types} from "../../libraries/constants/Types.sol";

import {ILensModuleRegistrant} from "../interfaces/IModuleRegistrant.sol";

/**
 * @title LensModuleRegistrant
 * @author Paul Burke
 *
 * @notice This abstract contract adds a public `MODULE_REGISTRY` immutable field, and provides functions
 * for registering a module in the registry and checking if a module is registered.
 */
abstract contract LensModuleRegistrant is ILensModuleRegistrant, Ownable {
    event ModuleRegistered();

    IModuleRegistry public immutable MODULE_REGISTRY;

    constructor(IModuleRegistry moduleRegistry) {
        MODULE_REGISTRY = moduleRegistry;
    }

    /// @inheritdoc ILensModuleRegistrant
    function isRegistered() public view override returns (bool) {
        return MODULE_REGISTRY.isModuleRegistered(address(this));
    }

    /// @inheritdoc ILensModuleRegistrant
    function registerModule() external override onlyOwner returns (bool) {
        if (isRegistered()) {
            return true;
        }

        bool registered = MODULE_REGISTRY.registerModule(
            address(this),
            uint256(IModuleRegistry.ModuleType.PUBLICATION_ACTION_MODULE)
        );

        if (registered) {
            emit ModuleRegistered();
        }

        return registered;
    }
}
