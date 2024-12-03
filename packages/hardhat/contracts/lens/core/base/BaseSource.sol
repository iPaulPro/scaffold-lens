// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.0;

import {ISource} from "./../interfaces/ISource.sol";
import {SourceStamp} from "./../types/Types.sol";

abstract contract BaseSource is ISource {
    mapping(uint256 => bool) internal _wasSourceStampNonceUsed;

    function validateSource(SourceStamp calldata sourceStamp) external virtual override {
        _validateSource(sourceStamp);
    }

    function _validateSource(SourceStamp calldata sourceStamp) internal virtual {
        require(!_wasSourceStampNonceUsed[sourceStamp.nonce]);
        require(sourceStamp.deadline >= block.timestamp);
        require(sourceStamp.source == address(this));
        require(sourceStamp.signature.length == 65);
        _wasSourceStampNonceUsed[sourceStamp.nonce] = true;
        bytes32 sourceStampHash = keccak256(abi.encode(sourceStamp.source, sourceStamp.nonce, sourceStamp.deadline));
        bytes32 r;
        bytes32 s;
        uint8 v;
        bytes memory signature = sourceStamp.signature;
        assembly {
            r := mload(add(signature, 0x20))
            s := mload(add(signature, 0x40))
            v := byte(0, mload(add(signature, 0x60)))
        }
        address signer = ecrecover(sourceStampHash, v, r, s);
        require(_isValidSourceStampSigner(signer));
    }

    function _isValidSourceStampSigner(address signer) internal virtual returns (bool);
}
