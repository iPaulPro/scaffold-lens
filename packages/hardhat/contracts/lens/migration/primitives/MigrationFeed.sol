// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.26;

import {KeyValue, RuleProcessingParams} from "contracts/lens/core/types/Types.sol";
import {CreatePostParams, EditPostParams} from "contracts/lens/core/interfaces/IFeed.sol";
import {FeedCore as Core, PostStorage} from "contracts/lens/core/primitives/feed/FeedCore.sol";
import {Feed} from "contracts/lens/core/primitives/feed/Feed.sol";
import {Errors} from "contracts/lens/core/types/Errors.sol";
import {KeyValueStorageLib} from "contracts/lens/core/libraries/KeyValueStorageLib.sol";
import {WHITELISTED_MULTICALL_ADDRESS} from "contracts/lens/migration/WhitelistedMulticall.sol";

struct PostCreationParams {
    uint256 authorPostSequentialId;
    uint80 creationTimestamp;
    address source;
}

contract MigrationFeed is Feed {
    using KeyValueStorageLib for mapping(bytes32 => bytes);

    modifier onlyWhitelistedMulticall() {
        require(msg.sender == WHITELISTED_MULTICALL_ADDRESS, Errors.InvalidMsgSender());
        _;
    }

    function $migrationExtraStorage() private pure returns (ExtraStorage storage _storage) {
        assembly {
            _storage.slot := STORAGE__EXTRA_STORAGE
        }
    }

    function createPost(
        CreatePostParams memory postParams,
        KeyValue[] memory customParams,
        RuleProcessingParams[] memory feedRulesParams,
        RuleProcessingParams[] memory rootPostRulesParams,
        RuleProcessingParams[] memory quotedPostRulesParams
    ) external override onlyWhitelistedMulticall returns (uint256) {
        require(customParams.length > 0, Errors.InvalidParameter());
        PostCreationParams memory postCreationParams = abi.decode(customParams[0].value, (PostCreationParams));
        (uint256 postId, uint256 rootPostId) =
            _createPost(postParams, postCreationParams.authorPostSequentialId, postCreationParams.creationTimestamp);

        if (postCreationParams.source != address(0)) {
            // Trust the migrator, no source verification
            _setEntityExtraStorage(postId, KeyValue(DATA__SOURCE, abi.encode(postCreationParams.source)));
            _setEntityExtraStorage(postId, KeyValue(DATA__LAST_UPDATED_SOURCE, abi.encode(postCreationParams.source)));
        }

        emit Lens_Feed_PostCreated(
            postId,
            postParams.author,
            postCreationParams.authorPostSequentialId,
            rootPostId,
            postParams,
            customParams,
            feedRulesParams,
            rootPostRulesParams,
            quotedPostRulesParams,
            postCreationParams.source
        );

        for (uint256 i = 0; i < postParams.extraData.length; i++) {
            // Storing extra data in the native extra storage for data integrity
            _setEntityExtraStorage(postId, postParams.extraData[i]);
            // Forcing ExtraStorageBased::_setEntityExtraStorage_Account with injected addressScope
            _migration_force__setEntityExtraStorage_Account(postParams.author, postId, postParams.extraData[i]);
            emit Lens_Feed_Post_ExtraDataAdded(
                postId, postParams.extraData[i].key, postParams.extraData[i].value, postParams.extraData[i].value
            );
        }
        return postId;
    }

    function _migration_force__setEntityExtraStorage_Account(
        address addressScope,
        uint256 entityId,
        KeyValue memory extraDataToSet
    ) private {
        // In this release we always set the entityID to zero
        $migrationExtraStorage().slot[addressScope][0][entityId].set(extraDataToSet);
        emit Lens_ExtraStorageSet(addressScope, entityId, extraDataToSet.key, extraDataToSet.value);
    }

    // Overriding the FeedCore
    function _createPost(CreatePostParams memory postParams, uint256 authorPostSequentialId, uint80 creationTimestamp)
        internal
        returns (uint256, uint256)
    {
        require(authorPostSequentialId != 0, Errors.InvalidParameter());
        require(creationTimestamp != 0, Errors.InvalidParameter());

        uint256 postSequentialId = ++Core.$storage().postCount;

        if (Core.$storage().authorPostCount[postParams.author] < authorPostSequentialId) {
            Core.$storage().authorPostCount[postParams.author] = authorPostSequentialId;
        }

        uint256 postId = Core._generatePostId(postParams.author, authorPostSequentialId);
        require(Core._postExists(postId) == false, Errors.AlreadyExists());
        PostStorage storage _newPost = Core.$storage().posts[postId];

        _newPost.author = postParams.author;
        _newPost.authorPostSequentialId = authorPostSequentialId;
        _newPost.postSequentialId = postSequentialId;
        _newPost.contentURI = postParams.contentURI;

        uint256 rootPostId = postId;

        if (postParams.quotedPostId != 0) {
            require(Core._postExists(postParams.quotedPostId), Errors.DoesNotExist());
            _newPost.quotedPostId = postParams.quotedPostId;
        }
        if (postParams.repliedPostId != 0) {
            require(Core._postExists(postParams.repliedPostId), Errors.DoesNotExist());
            _newPost.repliedPostId = postParams.repliedPostId;
            rootPostId = Core.$storage().posts[postParams.repliedPostId].rootPostId;
        }
        if (postParams.repostedPostId != 0) {
            require(Core._postExists(postParams.repostedPostId), Errors.DoesNotExist());
            _newPost.repostedPostId = postParams.repostedPostId;
            rootPostId = Core.$storage().posts[postParams.repostedPostId].rootPostId;
            require(postParams.quotedPostId == 0 && postParams.repliedPostId == 0, Errors.InvalidParameter());
            require(bytes(postParams.contentURI).length == 0, Errors.InvalidParameter());
        }
        if (rootPostId != postId) {
            require(Core._postExists(rootPostId), Errors.DoesNotExist());
        }
        _newPost.rootPostId = rootPostId;
        _newPost.creationTimestamp = creationTimestamp;
        _newPost.lastUpdatedTimestamp = creationTimestamp;
        return (postId, rootPostId);
    }

    function _processPostEditingOnFeed(
        uint256 postId,
        EditPostParams memory postParams,
        KeyValue[] memory primitiveCustomParams,
        RuleProcessingParams[] memory feedRulesParams
    ) internal override onlyWhitelistedMulticall {
        super._processPostEditingOnFeed(postId, postParams, primitiveCustomParams, feedRulesParams);
    }

    function deletePost(
        uint256 postId,
        KeyValue[] calldata customParams,
        RuleProcessingParams[] calldata /* feedRulesParams */
    ) external override onlyWhitelistedMulticall {
        require(Core._postExists(postId), Errors.DoesNotExist());
        address author = Core.$storage().posts[postId].author;
        // !!! MIGRATION ONLY
        // require(msg.sender == author || _hasAccess(msg.sender, PID__REMOVE_POST), Errors.InvalidMsgSender());
        Core._removePost(postId);
        // !!! MIGRATION ONLY
        // _processPostDeletion(postId, customParams, feedRulesParams);
        address source = _processSourceStamp(postId, customParams);
        emit Lens_Feed_PostDeleted(postId, author, customParams, source);
    }

    function migration_force__setAuthorPostCount(address author, uint256 authorPostCount)
        external
        onlyWhitelistedMulticall
    {
        if (Core.$storage().authorPostCount[author] < authorPostCount) {
            require(Core._postExists(Core._generatePostId(author, authorPostCount)), Errors.DoesNotExist());
            require(
                Core._postExists(Core._generatePostId(author, authorPostCount + 1)) == false, Errors.InvalidParameter()
            );
            Core.$storage().authorPostCount[author] = authorPostCount;
        }
    }
}
