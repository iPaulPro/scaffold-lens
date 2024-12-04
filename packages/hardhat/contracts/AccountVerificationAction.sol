// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import "./lens/core/interfaces/IAccountAction.sol";

/**
 * @title AccountVerificationAction
 * @author Paul Burke
 *
 * @dev An account action that allows users to verify other accounts.
 */
contract AccountVerificationAction is IAccountAction {
    // Mapping to store verifications
    mapping(address => address[]) private verifications;

    // Mapping to track indices for efficient deletion
    mapping(address => mapping(address => uint256)) private verificationIndex;

    function configure(
        address /* account */ ,
        bytes calldata /* data */
    ) external pure override returns (bytes memory) {
        revert(); // Configuration not needed for tipping.
    }

    function execute(
        address account,
        bytes calldata data
    ) external override returns (bytes memory) {
        bool verify = abi.decode(data, (bool));
        if (verify) {
            _addVerification(msg.sender, account);
        } else {
            _removeVerification(msg.sender, account);
        }
        emit Lens_AccountAction_Executed(account, data);
        return "";
    }

    function isVerified(
        address verifier,
        address verified
    ) public view returns (bool) {
        return verificationIndex[verifier][verified] > 0;
    }

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

    function _addVerification(address verifier, address verified) internal {
        require(verifier != verified, "Cannot verify self");
        require(!isVerified(verifier, verified), "Already verified");

        // Add verified address to the list
        verifications[verifier].push(verified);

        // Store the index in the mapping (index + 1 to differentiate from default 0)
        verificationIndex[verifier][verified] = verifications[verifier].length; // 1-based index
    }

    function _removeVerification(address verifier, address verified) internal {
        require(isVerified(verifier, verified), "Verification does not exist");

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
    }
}
