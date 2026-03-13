// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {OwnableMetadataBasedAccountAction} from "lens-modules/contracts/actions/account/base/OwnableMetadataBasedAccountAction.sol";
import {KeyValue} from "lens-modules/contracts/core/types/Types.sol";
import {IAccount} from "lens-modules/contracts/extensions/account/IAccount.sol";
import {IFeed} from "lens-modules/contracts/core/interfaces/IFeed.sol";

/**
 * @title PinPostAccountAction
 * @author Paul Burke
 *
 * @dev An account action that allows users to pin and unpin posts. Pinned posts are stored on-chain.
 */
contract PinPostAccountAction is OwnableMetadataBasedAccountAction {
    /**
     * @dev The Lens API requires configuration before execution, but in this case, we don't need to
     * store any configuration data. The `isConfigured` mapping is used to track whether an account
     * has been configured or not, but it doesn't store any specific configuration values.
     */
    mapping(address account => bool configured) public isConfigured;

    mapping(address account => uint256 postId) public pinnedPosts;

    event PostPinned(address indexed account, uint256 indexed postId);
    event PostUnpinned(address indexed account, uint256 indexed postId);

    error InvalidPostId();
    error InvalidFeedAddress();
    error PostNotFound();
    error Unauthorized();

    constructor(
        address actionHub,
        address owner,
        string memory metadataURI
    ) OwnableMetadataBasedAccountAction(actionHub, owner, metadataURI) {}

    function _configure(
        address /* originalMsgSender */,
        address account,
        KeyValue[] calldata /* params */
    ) internal virtual override returns (bytes memory) {
        isConfigured[account] = true;
        return "";
    }

    function _execute(
        address originalMsgSender,
        address account,
        KeyValue[] calldata params
    ) internal override returns (bytes memory) {
        uint256 postId;
        address feedAddress;
        for (uint256 i = 0; i < params.length; i++) {
            if (params[i].key == keccak256("lens.param.postId")) {
                postId = abi.decode(params[i].value, (uint256));
            } else if (params[i].key == keccak256("lens.param.feed")) {
                feedAddress = abi.decode(params[i].value, (address));
            }
        }

        if (postId == 0) {
            revert InvalidPostId();
        }
        if (feedAddress == address(0)) {
            revert InvalidFeedAddress();
        }
        if (originalMsgSender != account) {
            revert Unauthorized();
        }

        bool isPinned = pinnedPosts[account] == postId;
        if (isPinned) {
            pinnedPosts[account] = 0;
            emit PostUnpinned(account, postId);
        } else {
            IFeed feed = IFeed(feedAddress);
            if (!feed.postExists(postId)) {
                revert PostNotFound();
            }
            if (feed.getPostAuthor(postId) != account) {
                revert Unauthorized();
            }
            pinnedPosts[account] = postId;
            emit PostPinned(account, postId);
        }

        return abi.encode(postId, !isPinned);
    }
}
