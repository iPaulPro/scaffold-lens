// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IModuleRegistry} from "../interfaces/IModuleRegistry.sol";

contract MockModuleRegistry is IModuleRegistry {
    mapping(address => uint256) internal moduleTypes;
    mapping(address => bool) internal modules;
    mapping(address => bool) internal erc20Currencies;

    function verifyModule(
        address moduleAddress,
        uint256 moduleType
    ) external view override returns (bool) {
        return moduleTypes[moduleAddress] == moduleType;
    }

    function registerModule(
        address moduleAddress,
        uint256 moduleType
    ) external override returns (bool) {
        moduleTypes[moduleAddress] = moduleType;
        modules[moduleAddress] = true;
        return true;
    }

    function getModuleTypes(
        address moduleAddress
    ) external view override returns (uint256) {
        return moduleTypes[moduleAddress];
    }

    function isModuleRegistered(
        address moduleAddress
    ) external view override returns (bool) {
        return modules[moduleAddress];
    }

    function isModuleRegisteredAs(
        address moduleAddress,
        uint256 moduleType
    ) external view override returns (bool) {
        return
            modules[moduleAddress] && moduleTypes[moduleAddress] == moduleType;
    }

    function emitModuleMetadataRefresh(
        address moduleAddress
    ) external override {}

    function verifyErc20Currency(
        address currencyAddress
    ) external view override returns (bool) {
        return erc20Currencies[currencyAddress];
    }

    function registerErc20Currency(
        address currencyAddress
    ) external override returns (bool) {
        erc20Currencies[currencyAddress] = true;
        return true;
    }

    function isErc20CurrencyRegistered(
        address currencyAddress
    ) external view override returns (bool) {
        return erc20Currencies[currencyAddress];
    }
}
