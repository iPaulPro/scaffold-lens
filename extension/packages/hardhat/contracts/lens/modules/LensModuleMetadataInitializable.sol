// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {Ownable} from '@openzeppelin/contracts/access/Ownable.sol';
import {LensModuleMetadata} from './LensModuleMetadata.sol';

contract LensModuleMetadataInitializable is Ownable, LensModuleMetadata {
    constructor(address owner_) Ownable() LensModuleMetadata() {
        _transferOwnership(owner_);
    }

    function initialize(address moduleOwner) external virtual {
        if (owner() != address(0) || moduleOwner == address(0)) {
            revert();
        }
        _transferOwnership(moduleOwner);
    }
}
