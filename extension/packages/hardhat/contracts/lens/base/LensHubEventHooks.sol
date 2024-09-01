// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import {ILensHubEventHooks} from '../interfaces/ILensHubEventHooks.sol';
import {Errors} from '../libraries/constants/Errors.sol';
import {StorageLib} from '../libraries/StorageLib.sol';
import {Events} from '../libraries/constants/Events.sol';

abstract contract LensHubEventHooks is ILensHubEventHooks {
    /// @inheritdoc ILensHubEventHooks
    function emitUnfollowedEvent(
        uint256 unfollowerProfileId,
        uint256 idOfProfileUnfollowed,
        address transactionExecutor
    ) external override {
        address expectedFollowNFT = StorageLib.getProfile(idOfProfileUnfollowed).followNFT;
        if (msg.sender != expectedFollowNFT) {
            revert Errors.CallerNotFollowNFT();
        }
        emit Events.Unfollowed(unfollowerProfileId, idOfProfileUnfollowed, transactionExecutor, block.timestamp);
    }
}
