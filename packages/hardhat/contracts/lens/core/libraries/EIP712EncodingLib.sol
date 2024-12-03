// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.17;

library EIP712EncodingLib {
    function encodeForEIP712(bytes[] memory bytesArray) internal pure returns (bytes32) {
        bytes32[] memory bytesArrayEncodedElements = new bytes32[](bytesArray.length);
        uint256 i;
        while (i < bytesArray.length) {
            // A `bytes` type is encoded as its keccak256 hash.
            bytesArrayEncodedElements[i] = encodeForEIP712(bytesArray[i]);
            unchecked {
                ++i;
            }
        }
        // An array is encoded as the keccak256 hash of the concatenation of their encoded elements.
        return encodeForEIP712(bytesArrayEncodedElements);
    }

    function encodeForEIP712(bool[] memory boolArray) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(boolArray));
    }

    function encodeForEIP712(address[] memory addressArray) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(addressArray));
    }

    function encodeForEIP712(uint256[] memory uint256Array) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(uint256Array));
    }

    function encodeForEIP712(bytes32[] memory bytes32Array) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(bytes32Array));
    }

    function encodeForEIP712(string memory stringValue) internal pure returns (bytes32) {
        return keccak256(bytes(stringValue));
    }

    function encodeForEIP712(bytes memory bytesValue) internal pure returns (bytes32) {
        return keccak256(bytesValue);
    }
}
