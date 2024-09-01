// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import {ILensImplGetters} from '../interfaces/ILensImplGetters.sol';

contract LensImplGetters is ILensImplGetters {
    address internal immutable FOLLOW_NFT_IMPL;
    address internal immutable MODULE_REGISTRY;

    constructor(address followNFTImpl, address moduleRegistry) {
        FOLLOW_NFT_IMPL = followNFTImpl;
        MODULE_REGISTRY = moduleRegistry;
    }

    /// @inheritdoc ILensImplGetters
    function getFollowNFTImpl() external view override returns (address) {
        return FOLLOW_NFT_IMPL;
    }

    /// @inheritdoc ILensImplGetters
    function getModuleRegistry() external view override returns (address) {
        return MODULE_REGISTRY;
    }
}
