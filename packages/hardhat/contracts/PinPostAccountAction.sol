// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {OwnableMetadataBasedAccountAction} from "lens-modules/contracts/actions/account/base/OwnableMetadataBasedAccountAction.sol";
import {KeyValue} from "lens-modules/contracts/core/types/Types.sol";
import {IFeed} from "lens-modules/contracts/core/interfaces/IFeed.sol";

/**
 * @title PinPostAccountAction
 * @author Paul Burke
 *
 * @dev An account action that allows users to pin and unpin posts. Pinned posts are stored on-chain.
 * Only post authors can pin their posts, and they can only have one pinned post at a time. If a user
 * pins a new post, the previous pinned post will be unpinned automatically. Users can also unpin their
 * currently pinned post by calling the action with the same post ID.
 */
contract PinPostAccountAction is OwnableMetadataBasedAccountAction {
    /// @custom:keccak lens.param.postId
    bytes32 private constant PARAM_POST_ID =
        0xa9393259e39523bbb903f0ba2a379b4b186e37f9b5eb6e010422b9d3c078ed99;

    /// @custom:keccak lens.param.feed
    bytes32 private constant PARAM_FEED =
        0xbe03c9c5920f7e47c5ff7b8626411717c31c9a3bb26a54cfcf05d31673c6de65;

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
    ) internal override returns (bytes memory) {
        // We don't need to store any specific configuration data for the account. We just mark
        // the account as configured. Any caller can configure the account since there's no
        // specific configuration data being stored, and the action's execution logic will handle
        // the necessary checks to ensure only authorized users can pin/unpin posts.
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
            if (params[i].key == PARAM_POST_ID) {
                postId = abi.decode(params[i].value, (uint256));
            } else if (params[i].key == PARAM_FEED) {
                feedAddress = abi.decode(params[i].value, (address));
            }
        }

        if (postId == 0) {
            revert InvalidPostId();
        }
        if (originalMsgSender != account) {
            revert Unauthorized();
        }

        bool isPinned = pinnedPosts[account] == postId;
        if (isPinned) {
            pinnedPosts[account] = 0;
            emit PostUnpinned(account, postId);
        } else {
            if (feedAddress == address(0)) {
                revert InvalidFeedAddress();
            }

            IFeed feed = IFeed(feedAddress);
            if (!feed.postExists(postId)) {
                revert PostNotFound();
            }
            if (feed.getPostAuthor(postId) != account) {
                revert Unauthorized();
            }

            uint256 previousPostId = pinnedPosts[account];
            if (previousPostId != 0) {
                emit PostUnpinned(account, previousPostId);
            }

            pinnedPosts[account] = postId;
            emit PostPinned(account, postId);
        }

        return abi.encode(postId, !isPinned);
    }
}
