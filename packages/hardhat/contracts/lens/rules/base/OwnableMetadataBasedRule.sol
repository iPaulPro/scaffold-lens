// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.26;

import {Ownable} from "contracts/lens/core/access/Ownable.sol";
import {MetadataBased} from "contracts/lens/core/base/MetadataBased.sol";

abstract contract OwnableMetadataBasedRule is Ownable, MetadataBased {
    event Lens_Rule_MetadataURISet(string metadataURI);

    constructor(address owner, string memory metadataURI) {
        _transferOwnership(owner);
        _setMetadataURI(metadataURI);
    }

    function _emitMetadataURISet(string memory metadataURI, address /* source */ ) internal virtual override {
        emit Lens_Rule_MetadataURISet(metadataURI);
    }

    function _beforeMetadataURIUpdate(string memory /* metadataURI */ ) internal virtual override onlyOwner {
        return;
    }
}
