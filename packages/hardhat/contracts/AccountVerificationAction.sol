// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {OwnableMetadataBasedAccountAction} from "lens-modules/contracts/actions/account/base/OwnableMetadataBasedAccountAction.sol";
import {KeyValue} from "lens-modules/contracts/core/types/Types.sol";

/**
 * @title AccountVerificationAction
 * @author Paul Burke
 *
 * @dev An account action that allows users to verify other accounts. Verifications are stored on-chain.
 *      Users can add or remove verifications for other accounts, but cannot verify themselves.
 */
contract AccountVerificationAction is OwnableMetadataBasedAccountAction {
    /// @custom:keccak lens.param.verify
    bytes32 constant PARAM_VERIFY =
        0x9b8ec5ac6a057082411c3af019905162d7a163931f117b2539e5b51b353a27fd;

    // Mapping to store verifications
    mapping(address => address[]) private verifications;

    // Mapping to track indices for efficient deletion
    mapping(address => mapping(address => uint256)) private verificationIndex;

    event AccountVerified(address indexed verifier, address indexed verified);
    event AccountUnverified(address indexed verifier, address indexed verified);

    error SelfVerificationNotAllowed();
    error AlreadyVerified();
    error VerificationDoesNotExist();

    constructor(
        address actionHub,
        address owner,
        string memory metadataURI
    ) OwnableMetadataBasedAccountAction(actionHub, owner, metadataURI) {}

    function getVerifications(
        address verifier
    ) external view returns (address[] memory) {
        return verifications[verifier];
    }

    function getVerificationCount(
        address verifier
    ) external view returns (uint256) {
        return verifications[verifier].length;
    }

    function isVerified(
        address verifier,
        address verified
    ) public view returns (bool) {
        return verificationIndex[verifier][verified] > 0;
    }

    function _execute(
        address originalMsgSender,
        address account,
        KeyValue[] calldata params
    ) internal override returns (bytes memory) {
        bool verify;
        for (uint256 i = 0; i < params.length; i++) {
            if (params[i].key == PARAM_VERIFY) {
                verify = abi.decode(params[i].value, (bool));
            }
        }

        if (verify) {
            _addVerification(originalMsgSender, account);
        } else {
            _removeVerification(originalMsgSender, account);
        }
        return "";
    }

    function _addVerification(address verifier, address verified) internal {
        if (verifier == verified) revert SelfVerificationNotAllowed();
        if (isVerified(verifier, verified)) revert AlreadyVerified();

        // Add verified address to the list
        verifications[verifier].push(verified);

        // Store the index in the mapping (index + 1 to differentiate from default 0)
        verificationIndex[verifier][verified] = verifications[verifier].length; // 1-based index

        emit AccountVerified(verifier, verified);
    }

    function _removeVerification(address verifier, address verified) internal {
        if (!isVerified(verifier, verified)) revert VerificationDoesNotExist();

        // Get the index of the item to delete
        uint256 index = verificationIndex[verifier][verified] - 1; // Convert to 0-based index
        uint256 lastIndex = verifications[verifier].length - 1;

        if (index != lastIndex) {
            // Swap the item with the last one in the array
            address lastAddress = verifications[verifier][lastIndex];
            verifications[verifier][index] = lastAddress;
            verificationIndex[verifier][lastAddress] = index + 1; // Update index
        }

        // Remove the last item
        verifications[verifier].pop();

        // Clean up the index mapping
        delete verificationIndex[verifier][verified];

        emit AccountUnverified(verifier, verified);
    }
}
