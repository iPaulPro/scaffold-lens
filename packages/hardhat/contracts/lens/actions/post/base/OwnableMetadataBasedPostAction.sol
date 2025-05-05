// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.26;

import {Ownable} from "contracts/lens/core/access/Ownable.sol";
import {MetadataBased} from "contracts/lens/core/base/MetadataBased.sol";
import {BasePostAction} from "contracts/lens/actions/post/base/BasePostAction.sol";

abstract contract OwnableMetadataBasedPostAction is BasePostAction, Ownable, MetadataBased {
    event Lens_PostAction_MetadataURISet(string metadataURI);

    constructor(address actionHub, address owner, string memory metadataURI) BasePostAction(actionHub) {
        _transferOwnership(owner);
        _setMetadataURI(metadataURI);
    }

    function _emitMetadataURISet(string memory metadataURI, address /* source */ ) internal virtual override {
        emit Lens_PostAction_MetadataURISet(metadataURI);
    }

    function _beforeMetadataURIUpdate(string memory /* metadataURI */ ) internal virtual override onlyOwner {
        return;
    }
}
