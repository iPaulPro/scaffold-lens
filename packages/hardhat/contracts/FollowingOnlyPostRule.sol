// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {IPostRuleValidation} from "./helpers/IPostRuleValidation.sol";
import {Errors} from "lens-modules/contracts/core/types/Errors.sol";
import {IFeed, CreatePostParams, EditPostParams} from "lens-modules/contracts/core/interfaces/IFeed.sol";
import {IGraph} from "lens-modules/contracts/core/interfaces/IGraph.sol";
import {IPostRule} from "lens-modules/contracts/core/interfaces/IPostRule.sol";
import {KeyValue} from "lens-modules/contracts/core/types/Types.sol";
import {OwnableMetadataBasedRule} from "lens-modules/contracts/rules/base/OwnableMetadataBasedRule.sol";

/**
 * @title FollowingOnlyPostRule
 * @author Paul Burke
 *
 * @dev A post rule that only allows users to reply, repost or quote a post if they are followed by the author of the root post.
 *      The rule can be configured to restrict replies, reposts and/or quotes.
 *      The rule requires a graph contract to check if an author is following another user.
 */
contract FollowingOnlyPostRule is
    IPostRule,
    OwnableMetadataBasedRule,
    IPostRuleValidation
{
    struct Configuration {
        address graph;
        bool repliesRestricted;
        bool repostsRestricted;
        bool quotesRestricted;
    }

    /// @custom:keccak lens.param.graph
    bytes32 private constant PARAM_GRAPH =
        0x7d50408405f482949cd317ab452b66f1104c85a1708ae5be893385b1c898c6d9;
    /// @custom:keccak lens.param.repliesRestricted
    bytes32 private constant PARAM_REPLIES_RESTRICTED =
        0x4ce0155a596c1a9d5bcefb32cdbf357c849ac621a9b91d222b367cf53fe79a6f;
    /// @custom:keccak lens.param.repostsRestricted
    bytes32 private constant PARAM_REPOSTS_RESTRICTED =
        0x4888fd5474d5999daba89bdcba85aa57b7a2ed60bdcccee0a949f2da51050bbd;
    /// @custom:keccak lens.param.quotesRestricted
    bytes32 private constant PARAM_QUOTES_RESTRICTED =
        0x323cbd3bdd5537df3af23e8d4c6c6bb31c9fa33346759abf247f998a32cda0a2;

    mapping(address feed => mapping(uint256 postId => Configuration config))
        internal _configuration;

    constructor(
        address owner,
        string memory metadataURI
    ) OwnableMetadataBasedRule(owner, metadataURI) {}

    function configure(
        bytes32 /* configSalt */,
        uint256 postId,
        KeyValue[] calldata ruleParams
    ) external override {
        Configuration memory configuration;
        for (uint256 i = 0; i < ruleParams.length; i++) {
            if (ruleParams[i].key == PARAM_GRAPH) {
                configuration.graph = abi.decode(
                    ruleParams[i].value,
                    (address)
                );
            } else if (ruleParams[i].key == PARAM_REPLIES_RESTRICTED) {
                configuration.repliesRestricted = abi.decode(
                    ruleParams[i].value,
                    (bool)
                );
            } else if (ruleParams[i].key == PARAM_REPOSTS_RESTRICTED) {
                configuration.repostsRestricted = abi.decode(
                    ruleParams[i].value,
                    (bool)
                );
            } else if (ruleParams[i].key == PARAM_QUOTES_RESTRICTED) {
                configuration.quotesRestricted = abi.decode(
                    ruleParams[i].value,
                    (bool)
                );
            }
        }
        IGraph(configuration.graph).isFollowing(address(this), msg.sender); // Verifies the provided address is a graph
        require(
            configuration.repliesRestricted ||
                configuration.repostsRestricted ||
                configuration.quotesRestricted,
            Errors.InvalidParameter()
        );
        _configuration[msg.sender][postId] = configuration;
    }

    function processCreatePost(
        bytes32 /* configSalt */,
        uint256 rootPostId,
        uint256 postId,
        CreatePostParams calldata postParams,
        KeyValue[] calldata /* primitiveParams */,
        KeyValue[] calldata /* ruleParams */
    ) external view override {
        Configuration memory configuration = _configuration[msg.sender][
            rootPostId
        ];
        if (
            _shouldRestrictionBeApplied(configuration, rootPostId, postParams)
        ) {
            IFeed feed = IFeed(msg.sender);
            IGraph graph = IGraph(configuration.graph);
            address rootPostAuthor = feed.getPostAuthor(rootPostId);
            address newPostAuthor = feed.getPostAuthor(postId);
            require(
                graph.isFollowing(rootPostAuthor, newPostAuthor),
                Errors.NotFollowing()
            );
        }
    }

    function processEditPost(
        bytes32 /* configSalt */,
        uint256 /* rootPostId */,
        uint256 /* postId */,
        EditPostParams calldata /* postParams */,
        KeyValue[] calldata /* primitiveParams */,
        KeyValue[] calldata /* ruleParams */
    ) external pure override {
        revert Errors.NotImplemented();
    }

    function getConfiguration(
        address feed,
        uint256 postId
    ) external view returns (Configuration memory) {
        return _configuration[feed][postId];
    }

    function validateCanReply(
        address feed,
        uint256 postId,
        address account
    ) external view returns (bool) {
        IFeed feedContract = IFeed(feed);
        uint256 rootPostId = feedContract.getPost(postId).rootPostId;
        Configuration memory configuration = _configuration[feed][rootPostId];
        if (!configuration.repliesRestricted) {
            return true;
        }
        return isAuthorFollowing(feed, rootPostId, account);
    }

    function validateCanRepost(
        address feed,
        uint256 postId,
        address account
    ) external view returns (bool) {
        IFeed feedContract = IFeed(feed);
        uint256 rootPostId = feedContract.getPost(postId).rootPostId;
        Configuration memory configuration = _configuration[feed][rootPostId];
        if (!configuration.repostsRestricted) {
            return true;
        }
        return isAuthorFollowing(feed, rootPostId, account);
    }

    function validateCanQuote(
        address feed,
        uint256 postId,
        address account
    ) external view returns (bool) {
        IFeed feedContract = IFeed(feed);
        uint256 rootPostId = feedContract.getPost(postId).rootPostId;
        Configuration memory configuration = _configuration[feed][rootPostId];
        if (!configuration.quotesRestricted) {
            return true;
        }
        return isAuthorFollowing(feed, rootPostId, account);
    }

    function _shouldRestrictionBeApplied(
        Configuration memory configuration,
        uint256 rootPostId,
        CreatePostParams calldata postParams
    ) internal view returns (bool) {
        IFeed feed = IFeed(msg.sender);
        if (feed.getPostAuthor(rootPostId) == postParams.author) {
            // Author can always reply, repost or quote their own posts.
            return false;
        }
        if (configuration.repliesRestricted && postParams.repliedPostId != 0) {
            uint256 repliedPostRootId = feed
                .getPost(postParams.repliedPostId)
                .rootPostId;
            if (repliedPostRootId == rootPostId) {
                return true;
            }
        }
        if (configuration.repostsRestricted && postParams.repostedPostId != 0) {
            uint256 repostedPostRootId = feed
                .getPost(postParams.repostedPostId)
                .rootPostId;
            if (repostedPostRootId == rootPostId) {
                return true;
            }
        }
        if (configuration.quotesRestricted && postParams.quotedPostId != 0) {
            uint256 quotedPostRootId = feed
                .getPost(postParams.quotedPostId)
                .rootPostId;
            if (quotedPostRootId == rootPostId) {
                return true;
            }
        }
        return false;
    }

    function isAuthorFollowing(
        address feedAddress,
        uint256 rootPostId,
        address account
    ) private view returns (bool) {
        IFeed feed = IFeed(feedAddress);
        Configuration memory configuration = _configuration[feedAddress][
            rootPostId
        ];
        address rootPostAuthor = feed.getPostAuthor(rootPostId);
        if (rootPostAuthor == account) {
            return true;
        }
        IGraph graph = IGraph(configuration.graph);
        return graph.isFollowing(rootPostAuthor, account);
    }
}
