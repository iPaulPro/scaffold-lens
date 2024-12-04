// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import "./lens/core/interfaces/IPostRule.sol";

contract LimitedRepliesPostRule is IPostRule {
    mapping(address => mapping(uint256 => uint256)) internal _repliesLimit;
    mapping(address => mapping(uint256 => uint256)) internal _repliesCounter;

    function configure(uint256 postId, bytes calldata data) external override {
        _repliesLimit[msg.sender][postId] = abi.decode(data, (uint256));
    }

    function processReply(
        uint256 rootPostId,
        uint256 /* repliedPostId */,
        uint256 /* postId */,
        bytes calldata /* data */
    ) external override returns (bool) {
        _repliesCounter[msg.sender][rootPostId]++;
        require(
            _repliesCounter[msg.sender][rootPostId] <=
                _repliesLimit[msg.sender][rootPostId]
        );
        return true;
    }

    function processQuote(
        uint256 /* rootPostId */,
        uint256 /* quotedPostId */,
        uint256 /* postId */,
        bytes calldata /* data */
    ) external pure override returns (bool) {
        return false;
    }

    function processRepost(
        uint256 /* rootPostId */,
        uint256 /* repostedPostId */,
        uint256 /* postId */,
        bytes calldata /* data */
    ) external pure override returns (bool) {
        return false;
    }
}
