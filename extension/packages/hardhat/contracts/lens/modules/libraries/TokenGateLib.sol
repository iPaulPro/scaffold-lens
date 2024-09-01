// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

interface IToken {
    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);
}

library TokenGateLib {
    uint256 internal constant UINT256_BYTES = 32;

    /**
     * @notice A struct containing the necessary data to execute TokenGated actions.
     *
     * @param tokenAddress The address of ERC20/ERC721 token used for gating the action
     * @param minThreshold The minimum balance threshold of the gated token required to execute an action
     */
    struct GateParams {
        address tokenAddress;
        uint256 minThreshold;
    }

    error GateParamsInvalid();
    error NotEnoughBalance();

    /**
     * @dev Validates the gate parameters.
     * @dev Checks if the tokenAddress is a valid ERC20/ERC721 token and minThreshold is a valid uint256.
     */
    function validateGateParams(GateParams memory gateParams) internal view {
        // Checking if the tokenAddress resembles ERC20/ERC721 token (by calling balanceOf() function)
        (bool success, bytes memory result) = gateParams
            .tokenAddress
            .staticcall(
                abi.encodeWithSignature("balanceOf(address)", address(this))
            );
        // We don't check if the contract exists cause we expect the return data anyway
        if (
            gateParams.minThreshold == 0 ||
            !success ||
            result.length != UINT256_BYTES
        ) revert GateParamsInvalid();
    }

    /**
     * @dev Validates the profile's owner balance of gating token.
     * @dev Can work with both ERC20 and ERC721 as both interfaces support balanceOf() call
     */
    function validateTokenBalance(
        GateParams memory gateParams,
        address profileOwner
    ) internal view {
        if (
            IToken(gateParams.tokenAddress).balanceOf(profileOwner) <
            gateParams.minThreshold
        ) {
            revert NotEnoughBalance();
        }
    }

    /**
     * @dev Validates the profile's owner balance of gating token.
     * @dev Can work with both ERC20 and ERC721 as both interfaces support balanceOf() call
     */
    function validateTokenBalance(
        address hub,
        GateParams memory gateParams,
        uint256 profileId
    ) internal view {
        validateTokenBalance(gateParams, IERC721(hub).ownerOf(profileId));
    }
}
