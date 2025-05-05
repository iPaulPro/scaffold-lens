// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.26;

import {IFeed, Post, EditPostParams, CreatePostParams} from "contracts/lens/core/interfaces/IFeed.sol";
import {FeedCore as Core} from "contracts/lens/core/primitives/feed/FeedCore.sol";
import {IAccessControl} from "contracts/lens/core/interfaces/IAccessControl.sol";
import {RuleBasedFeed} from "contracts/lens/core/primitives/feed/RuleBasedFeed.sol";
import {AccessControlled} from "contracts/lens/core/access/AccessControlled.sol";
import {ExtraStorageBased} from "contracts/lens/core/base/ExtraStorageBased.sol";
import {RuleChange, RuleProcessingParams, KeyValue} from "contracts/lens/core/types/Types.sol";
import {Events} from "contracts/lens/core/types/Events.sol";
import {SourceStampBased} from "contracts/lens/core/base/SourceStampBased.sol";
import {MetadataBased} from "contracts/lens/core/base/MetadataBased.sol";
import {Initializable} from "contracts/lens/core/upgradeability/Initializable.sol";
import {Errors} from "contracts/lens/core/types/Errors.sol";

contract Feed is
    IFeed,
    Initializable,
    RuleBasedFeed,
    AccessControlled,
    ExtraStorageBased,
    SourceStampBased,
    MetadataBased
{
    /// @custom:keccak lens.permission.SetMetadata
    uint256 constant PID__SET_METADATA = uint256(0xe40fdb273cda3c78f0d9b6d20f5378755989e26c60c89696e5eea644d84eefea);
    /// @custom:keccak lens.permission.ChangeRules
    uint256 constant PID__CHANGE_RULES = uint256(0x550b12ef6572134aefc5804fd2b13ab3d8451e067ad453f67afe134cffebd977);
    /// @custom:keccak lens.permission.SetExtraData
    uint256 constant PID__SET_EXTRA_DATA = uint256(0x9b4afa2e6d7162f878076bb1210736928cd607a384b985eca0dba5e94790e72a);
    /// @custom:keccak lens.permission.RemovePost
    uint256 constant PID__REMOVE_POST = uint256(0x25b86c749bcf827bec85b3f107e1d65771462eb329e68ff158d50a2f4b301c89);

    /// @custom:keccak lens.param.expectedPostId
    bytes32 constant PARAM__EXPECTED_POST_ID = 0x5c421319b1e3c75e7c7239e8e44abd0f35e3e7f7fcc9a98fdbbcbd19deb4202e;

    /// @custom:keccak lens.data.lastUpdatedSource
    bytes32 constant DATA__LAST_UPDATED_SOURCE = 0x3cd0f450c58e5572a9f19a4af172d526fb9645ba11a751c1e6fe7f53c4d956eb;

    constructor() {
        _disableInitializers();
    }

    function initialize(string memory metadataURI, IAccessControl accessControl) external override initializer {
        _initialize(metadataURI);
        AccessControlled._initialize(accessControl);
    }

    function _initialize(string memory metadataURI) internal {
        _setMetadataURI(metadataURI);
        _emitPIDs();
        emit Events.Lens_Contract_Deployed({contractType: "lens.contract.Feed", flavour: "lens.contract.Feed"});
    }

    function _emitMetadataURISet(string memory metadataURI, address /* source */ ) internal override {
        emit Lens_Feed_MetadataURISet(metadataURI);
    }

    function _emitPIDs() internal override {
        super._emitPIDs();
        emit Events.Lens_PermissionId_Available(PID__CHANGE_RULES, "lens.permission.ChangeRules");
        emit Events.Lens_PermissionId_Available(PID__SET_METADATA, "lens.permission.SetMetadata");
        emit Events.Lens_PermissionId_Available(PID__SET_EXTRA_DATA, "lens.permission.SetExtraData");
        emit Events.Lens_PermissionId_Available(PID__REMOVE_POST, "lens.permission.RemovePost");
    }

    // Access Controlled functions

    function _beforeMetadataURIUpdate(string memory /* metadataURI */ ) internal view virtual override {
        _requireAccess(msg.sender, PID__SET_METADATA);
    }

    function _beforeChangePrimitiveRules(RuleChange[] memory /* ruleChanges */ ) internal view virtual override {
        _requireAccess(msg.sender, PID__CHANGE_RULES);
    }

    function _beforeChangeEntityRules(uint256 entityId, RuleChange[] memory /* ruleChanges */ )
        internal
        view
        virtual
        override
    {
        require(msg.sender == Core.$storage().posts[entityId].author, Errors.InvalidMsgSender());
        require(entityId == Core.$storage().posts[entityId].rootPostId, Errors.CannotHaveRules());
    }

    // Public user functions

    function createPost(
        CreatePostParams memory postParams,
        KeyValue[] memory customParams,
        RuleProcessingParams[] memory feedRulesParams,
        RuleProcessingParams[] memory rootPostRulesParams,
        RuleProcessingParams[] memory quotedPostRulesParams
    ) external virtual override returns (uint256) {
        require(msg.sender == postParams.author, Errors.InvalidMsgSender());
        (uint256 postId, uint256 localSequentialId, uint256 rootPostId) = Core._createPost(postParams);
        _validateExpectedPostIdIfPresent(customParams, postId);
        address source = _processSourceStamp(postId, customParams);
        _setEntityExtraStorage(postId, KeyValue(DATA__LAST_UPDATED_SOURCE, abi.encode(source)));
        _processPostCreationOnFeed(postId, postParams, customParams, feedRulesParams);
        // Process rules of the Quote (if quoting)
        if (postParams.quotedPostId != 0) {
            // Just a thought: Maybe quotes shouldn't be limited by rules... Like quotations in real life.
            uint256 rootOfQuotedPost = Core.$storage().posts[postParams.quotedPostId].rootPostId;
            if (rootOfQuotedPost != rootPostId) {
                _processPostCreationOnRootPost(rootOfQuotedPost, postId, postParams, customParams, quotedPostRulesParams);
            }
        }
        if (postId != rootPostId) {
            require(postParams.ruleChanges.length == 0, Errors.CannotHaveRules());
            // This covers the Reply or Repost cases
            _processPostCreationOnRootPost(rootPostId, postId, postParams, customParams, rootPostRulesParams);
        } else {
            _addPostRulesAtCreation(postId, postParams, feedRulesParams);
        }
        emit Lens_Feed_PostCreated(
            postId,
            postParams.author,
            localSequentialId,
            rootPostId,
            postParams,
            customParams,
            feedRulesParams,
            rootPostRulesParams,
            quotedPostRulesParams,
            source
        );
        for (uint256 i = 0; i < postParams.extraData.length; i++) {
            _setEntityExtraStorage_Account(postId, postParams.extraData[i]);
            emit Lens_Feed_Post_ExtraDataAdded(
                postId, postParams.extraData[i].key, postParams.extraData[i].value, postParams.extraData[i].value
            );
        }
        return postId;
    }

    function editPost(
        uint256 postId,
        EditPostParams calldata postParams,
        KeyValue[] memory customParams,
        RuleProcessingParams[] memory feedRulesParams,
        RuleProcessingParams[] memory rootPostRulesParams,
        RuleProcessingParams[] memory quotedPostRulesParams
    ) external virtual override {
        require(Core._postExists(postId), Errors.DoesNotExist());
        address author = Core.$storage().posts[postId].author;
        // You can have this if you want to allow moderator editing:
        // require(msg.sender == author || _hasAccess(msg.sender, EDIT_POST_PID));
        require(msg.sender == author, Errors.InvalidMsgSender());

        Core._editPost(postId, postParams);

        bool[] memory wereExtraDataValuesSet = new bool[](postParams.extraData.length);
        for (uint256 i = 0; i < postParams.extraData.length; i++) {
            wereExtraDataValuesSet[i] = _setEntityExtraStorage_Account(postId, postParams.extraData[i]);
        }

        _processPostEditingOnFeed(postId, postParams, customParams, feedRulesParams);
        uint256 quotedPostId = Core.$storage().posts[postId].quotedPostId;
        if (quotedPostId != 0) {
            uint256 rootOfQuotedPost = Core.$storage().posts[quotedPostId].rootPostId;
            _processPostEditingOnRootPost(rootOfQuotedPost, postId, postParams, customParams, quotedPostRulesParams);
        }
        uint256 rootPostId = Core.$storage().posts[postId].rootPostId;
        if (postId != rootPostId) {
            _processPostEditingOnRootPost(rootPostId, postId, postParams, customParams, rootPostRulesParams);
        }
        address source = _processSourceStamp({
            key: DATA__LAST_UPDATED_SOURCE,
            entityId: postId,
            customParams: customParams,
            storeSource: true
        });
        emit Lens_Feed_PostEdited(
            postId, author, postParams, customParams, feedRulesParams, rootPostRulesParams, quotedPostRulesParams, source
        );
        for (uint256 i = 0; i < postParams.extraData.length; i++) {
            if (wereExtraDataValuesSet[i]) {
                emit Lens_Feed_Post_ExtraDataUpdated(
                    postId, postParams.extraData[i].key, postParams.extraData[i].value, postParams.extraData[i].value
                );
            } else {
                emit Lens_Feed_Post_ExtraDataAdded(
                    postId, postParams.extraData[i].key, postParams.extraData[i].value, postParams.extraData[i].value
                );
            }
        }
    }

    function deletePost(
        uint256 postId,
        KeyValue[] calldata customParams,
        RuleProcessingParams[] calldata feedRulesParams
    ) external virtual override {
        require(Core._postExists(postId), Errors.DoesNotExist());
        address author = Core.$storage().posts[postId].author;
        require(msg.sender == author || _hasAccess(msg.sender, PID__REMOVE_POST), Errors.InvalidMsgSender());
        Core._removePost(postId);
        _processPostDeletion(postId, customParams, feedRulesParams);
        address source = _processSourceStamp(postId, customParams);
        emit Lens_Feed_PostDeleted(postId, author, customParams, source);
    }

    function setExtraData(KeyValue[] calldata extraDataToSet) external override {
        _requireAccess(msg.sender, PID__SET_EXTRA_DATA);
        for (uint256 i = 0; i < extraDataToSet.length; i++) {
            bool hadAValueSetBefore = _setExtraStorage_Self(extraDataToSet[i]);
            bool isNewValueEmpty = extraDataToSet[i].value.length == 0;
            if (hadAValueSetBefore) {
                if (isNewValueEmpty) {
                    emit Lens_Feed_ExtraDataRemoved(extraDataToSet[i].key);
                } else {
                    emit Lens_Feed_ExtraDataUpdated(
                        extraDataToSet[i].key, extraDataToSet[i].value, extraDataToSet[i].value
                    );
                }
            } else if (!isNewValueEmpty) {
                emit Lens_Feed_ExtraDataAdded(extraDataToSet[i].key, extraDataToSet[i].value, extraDataToSet[i].value);
            }
        }
    }

    // Getters

    function getPost(uint256 postId) external view override returns (Post memory) {
        require(Core._postExists(postId), Errors.DoesNotExist());
        return Post({
            author: Core.$storage().posts[postId].author,
            authorPostSequentialId: Core.$storage().posts[postId].authorPostSequentialId,
            postSequentialId: Core.$storage().posts[postId].postSequentialId,
            contentURI: Core.$storage().posts[postId].contentURI,
            rootPostId: Core.$storage().posts[postId].rootPostId,
            repostedPostId: Core.$storage().posts[postId].repostedPostId,
            quotedPostId: Core.$storage().posts[postId].quotedPostId,
            repliedPostId: Core.$storage().posts[postId].repliedPostId,
            creationTimestamp: Core.$storage().posts[postId].creationTimestamp,
            creationSource: _getSource(postId),
            lastUpdatedTimestamp: Core.$storage().posts[postId].lastUpdatedTimestamp,
            lastUpdateSource: _getSource(DATA__LAST_UPDATED_SOURCE, postId)
        });
    }

    function postExists(uint256 postId) external view override returns (bool) {
        return Core._postExists(postId);
    }

    function getPostAuthor(uint256 postId) external view override returns (address) {
        require(Core._postExists(postId), Errors.DoesNotExist());
        return Core.$storage().posts[postId].author;
    }

    function getPostCount() external view override returns (uint256) {
        return Core.$storage().postCount;
    }

    function getPostCount(address author) external view override returns (uint256) {
        return Core.$storage().authorPostCount[author];
    }

    function getPostExtraData(uint256 postId, bytes32 key) external view override returns (bytes memory) {
        require(Core._postExists(postId), Errors.DoesNotExist());
        address postAuthor = Core.$storage().posts[postId].author;
        return _getEntityExtraStorage_Account(postAuthor, postId, key);
    }

    function getExtraData(bytes32 key) external view override returns (bytes memory) {
        return _getExtraStorage_Self(key);
    }

    function getPostSequentialId(uint256 postId) external view override returns (uint256) {
        require(Core._postExists(postId), Errors.DoesNotExist());
        return Core.$storage().posts[postId].postSequentialId;
    }

    function getAuthorPostSequentialId(uint256 postId) external view override returns (uint256) {
        require(Core._postExists(postId), Errors.DoesNotExist());
        return Core.$storage().posts[postId].authorPostSequentialId;
    }

    function getNextPostId(address author) external view returns (uint256) {
        return Core._generatePostId(author, Core.$storage().authorPostCount[author] + 1);
    }

    function _validateExpectedPostIdIfPresent(KeyValue[] memory customParams, uint256 postId) internal pure {
        for (uint256 i = 0; i < customParams.length; i++) {
            if (customParams[i].key == PARAM__EXPECTED_POST_ID) {
                require(postId == abi.decode(customParams[i].value, (uint256)), Errors.UnexpectedValue());
                return;
            }
        }
    }
}
