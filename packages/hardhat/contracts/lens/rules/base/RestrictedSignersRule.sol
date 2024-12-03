// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.0;

import {EIP712EncodingLib} from "./../../core/libraries/EIP712EncodingLib.sol";
import {IERC1271} from "@openzeppelin/contracts/interfaces/IERC1271.sol";

// Move to types
struct EIP712Signature {
    address signer;
    uint8 v;
    bytes32 r;
    bytes32 s;
    uint256 nonce;
    uint256 deadline;
}

struct RestrictedSignerMessage {
    bytes4 functionSelector;
    bytes abiEncodedParams;
    uint256 nonce;
    uint256 deadline;
}

abstract contract RestrictedSignersRule {
    event Lens_RestrictedSignersRule_SignerAdded(address indexed signer, string label);
    event Lens_RestrictedSignersRule_SignerRemoved(address indexed signer);
    event Lens_RestrictedSignersRule_SignerNonceUsed(address indexed signer, uint256 indexed nonce);

    struct RuleStorage {
        mapping(address => InnerStorage) ruleStorage;
    }

    struct InnerStorage {
        mapping(address => bool) isWhitelistedSigner;
        mapping(address => mapping(uint256 => bool)) wasSignerNonceUsed;
    }

    // keccak256('lens.rule.restricted.storage')
    bytes32 constant RESTRICTED_RULE_STORAGE_SLOT = 0xcf6ecf8730d498cbf6701bc1140f2b12e988e1c416a85799d241dcfbb3ed90df;

    function $ruleStorage() private pure returns (mapping(address => InnerStorage) storage _storage) {
        assembly {
            _storage.slot := RESTRICTED_RULE_STORAGE_SLOT
        }
    }

    function $ruleStorage(address primitiveAddress) private view returns (InnerStorage storage) {
        mapping(address => InnerStorage) storage _ruleStorage = $ruleStorage();
        return _ruleStorage[primitiveAddress];
    }

    bytes4 constant EIP1271_MAGIC_VALUE = 0x1626ba7e;
    string constant EIP712_DOMAIN_VERSION = "1";
    bytes32 constant EIP712_DOMAIN_VERSION_HASH = keccak256(bytes(EIP712_DOMAIN_VERSION));
    bytes32 constant EIP712_DOMAIN_TYPEHASH =
        keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)");
    bytes32 constant RESTRICTED_SIGNER_MESSAGE_TYPEHASH = keccak256(
        "RestrictedSignerMessage(bytes4 functionSelector,bytes abiEncodedParams,uint256 nonce,uint256 deadline)"
    );

    function _configure(bytes calldata data) internal virtual {
        (address[] memory signers, string[] memory labels, bool[] memory isWhitelisted) =
            abi.decode(data, (address[], string[], bool[]));
        require(signers.length == isWhitelisted.length);
        require(signers.length == labels.length);
        for (uint256 i = 0; i < signers.length; i++) {
            bool wasWhitelisted = $ruleStorage(msg.sender).isWhitelistedSigner[signers[i]];
            if (wasWhitelisted == isWhitelisted[i]) {
                if (isWhitelisted[i]) {
                    // Signal removal and re-addition in order to update the label
                    emit Lens_RestrictedSignersRule_SignerRemoved(signers[i]);
                    emit Lens_RestrictedSignersRule_SignerAdded(signers[i], labels[i]);
                }
            } else {
                $ruleStorage(msg.sender).isWhitelistedSigner[signers[i]] = isWhitelisted[i];
                if (isWhitelisted[i]) {
                    emit Lens_RestrictedSignersRule_SignerAdded(signers[i], labels[i]);
                } else {
                    emit Lens_RestrictedSignersRule_SignerRemoved(signers[i]);
                }
            }
        }
    }

    function _validateRestrictedSignerMessage(
        bytes4 functionSelector,
        bytes memory abiEncodedFunctionParams,
        EIP712Signature memory signature
    ) internal {
        RestrictedSignerMessage memory message =
            RestrictedSignerMessage(functionSelector, abiEncodedFunctionParams, signature.nonce, signature.deadline);
        if (block.timestamp > signature.deadline) {
            revert("Errors.SignatureExpired()");
        }
        if ($ruleStorage(msg.sender).wasSignerNonceUsed[signature.signer][signature.nonce]) {
            revert("Errors.SignatureNonceUsed()");
        }
        $ruleStorage(msg.sender).wasSignerNonceUsed[signature.signer][signature.nonce] = true;
        emit Lens_RestrictedSignersRule_SignerNonceUsed(signature.signer, signature.nonce);
        if (!$ruleStorage(msg.sender).isWhitelistedSigner[signature.signer]) {
            revert("Errors.SignerNotWhitelisted()");
        }
        bytes32 hashStruct = _calculateMessageHashStruct(message);
        bytes32 digest = _calculateDigest(hashStruct);
        _validateRecoveredAddress(digest, signature);
    }

    function _calculateMessageHashStruct(RestrictedSignerMessage memory message) private pure returns (bytes32) {
        return keccak256(
            abi.encode(
                RESTRICTED_SIGNER_MESSAGE_TYPEHASH,
                message.functionSelector,
                EIP712EncodingLib.encodeForEIP712(message.abiEncodedParams),
                message.nonce,
                message.deadline
            )
        );
    }

    function _calculateDigest(bytes32 messageHashStruct) private view returns (bytes32) {
        return keccak256(abi.encodePacked("\x19\x01", _calculateDomainSeparatorHashStruct(), messageHashStruct));
    }

    function _calculateDomainSeparatorHashStruct() private view returns (bytes32) {
        return keccak256(
            abi.encode(
                EIP712_DOMAIN_TYPEHASH,
                keccak256("Lens Protocol Restricted Signer Rule"),
                EIP712_DOMAIN_VERSION_HASH,
                block.chainid,
                msg.sender // This is the address of the primitive, and we assume the primitive calls the rule
            )
        );
    }

    function _validateRecoveredAddress(bytes32 digest, EIP712Signature memory signature) private view {
        if (block.timestamp > signature.deadline) {
            revert("Errors.SignatureExpired()");
        }
        // If the expected address is a contract, check the signature there.
        if (signature.signer.code.length != 0) {
            bytes memory concatenatedSig = abi.encodePacked(signature.r, signature.s, signature.v);
            if (IERC1271(signature.signer).isValidSignature(digest, concatenatedSig) != EIP1271_MAGIC_VALUE) {
                revert("Errors.SignatureInvalid()");
            }
        } else {
            address recoveredAddress = ecrecover(digest, signature.v, signature.r, signature.s);
            if (recoveredAddress == address(0) || recoveredAddress != signature.signer) {
                revert("Errors.SignatureInvalid()");
            }
        }
    }
}
