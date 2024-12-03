// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.0;

import {DataElement, RuleConfiguration, RuleChange, RuleExecutionData, SourceStamp} from "./../types/Types.sol";
import {IMetadataBased} from "./../interfaces/IMetadataBased.sol";

// TODO: Discuss if there's a need for anything else to be added here
struct EditPostParams {
    string contentURI;
    DataElement[] extraData;
}

struct CreatePostParams {
    address author; // Multiple authors can be added in extraData
    string contentURI;
    uint256 repostedPostId;
    uint256 quotedPostId;
    uint256 repliedPostId;
    RuleConfiguration[] rules;
    RuleExecutionData feedRulesData;
    RuleExecutionData repostedPostRulesData;
    RuleExecutionData quotedPostRulesData;
    RuleExecutionData repliedPostRulesData;
    DataElement[] extraData;
}

// This is a return type (for getters)
struct Post {
    address author;
    uint256 localSequentialId;
    string contentURI;
    uint256 rootPostId;
    uint256 repostedPostId;
    uint256 quotedPostId;
    uint256 repliedPostId;
    address[] requiredRules;
    address[] anyOfRules;
    uint80 creationTimestamp;
    address creationSource;
    uint80 lastUpdatedTimestamp;
    address lastUpdateSource;
}

interface IFeed is IMetadataBased {
    event Lens_Feed_PostCreated(
        uint256 indexed postId,
        address indexed author,
        uint256 indexed localSequentialId,
        CreatePostParams postParams,
        uint256 rootPostId,
        address source
    );

    event Lens_Feed_PostEdited(
        uint256 indexed postId,
        address indexed author,
        EditPostParams newPostParams,
        RuleExecutionData feedRulesData,
        address source
    );

    event Lens_Feed_PostDeleted(
        uint256 indexed postId, address indexed author, RuleExecutionData feedRulesData, address source
    );

    event Lens_Feed_ExtraDataAdded(bytes32 indexed key, bytes value, bytes indexed valueIndexed);
    event Lens_Feed_ExtraDataUpdated(bytes32 indexed key, bytes value, bytes indexed valueIndexed);
    event Lens_Feed_ExtraDataRemoved(bytes32 indexed key);

    event Lens_Feed_RuleAdded(address indexed ruleAddress, bytes configData, bool indexed isRequired);
    event Lens_Feed_RuleUpdated(address indexed ruleAddress, bytes configData, bool indexed isRequired);
    event Lens_Feed_RuleRemoved(address indexed ruleAddress);

    event Lens_Feed_Post_RuleAdded(
        uint256 indexed postId, address indexed author, address indexed ruleAddress, bytes configData, bool isRequired
    );
    event Lens_Feed_Post_RuleUpdated(
        uint256 indexed postId, address indexed author, address indexed ruleAddress, bytes configData, bool isRequired
    );
    event Lens_Feed_Post_RuleRemoved(uint256 indexed postId, address indexed author, address indexed ruleAddress);

    event Lens_Feed_Post_ExtraDataAdded(
        uint256 indexed postId, bytes32 indexed key, bytes value, bytes indexed valueIndexed
    );
    event Lens_Feed_Post_ExtraDataUpdated(
        uint256 indexed postId, bytes32 indexed key, bytes value, bytes indexed valueIndexed
    );
    event Lens_Feed_Post_ExtraDataRemoved(uint256 indexed postId, bytes32 indexed key);

    event Lens_Feed_MetadataURISet(string metadataURI);

    function changeFeedRules(RuleChange[] calldata ruleChanges) external;

    function createPost(CreatePostParams calldata postParams, SourceStamp calldata source) external returns (uint256);

    function editPost(
        uint256 postId,
        EditPostParams calldata newPostParams,
        RuleExecutionData calldata editPostFeedRulesData,
        SourceStamp calldata source
    ) external;

    // "Delete" - u know u cannot delete stuff from the internet, right? :]
    // But this will at least remove it from the current state, so contracts accesing it will know.
    // TODO: Debate post deletion, soft vs. hard delete, extra data deletion, etc.
    function deletePost(
        uint256 postId,
        bytes32[] calldata extraDataKeysToDelete,
        RuleExecutionData calldata feedRulesData,
        SourceStamp calldata source
    ) external;

    function changePostRules(
        uint256 postId,
        RuleChange[] calldata ruleChanges,
        RuleExecutionData calldata feedRulesData
    ) external;

    function setExtraData(DataElement[] calldata extraDataToSet) external;

    // Getters

    function getPost(uint256 postId) external view returns (Post memory);

    function getPostAuthor(uint256 postId) external view returns (address);

    function getFeedRules(bool isRequired) external view returns (address[] memory);

    function getPostRules(uint256 postId, bool isRequired) external view returns (address[] memory);

    function getPostCount() external view returns (uint256);

    function getPostExtraData(uint256 postId, bytes32 key) external view returns (bytes memory);

    function getExtraData(bytes32 key) external view returns (bytes memory);
}
