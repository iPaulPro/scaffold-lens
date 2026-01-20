// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

interface IPostRuleValidation {
    function validateCanReply(
        address feed,
        uint256 postId,
        address account
    ) external view returns (bool);
    function validateCanRepost(
        address feed,
        uint256 postId,
        address account
    ) external view returns (bool);
    function validateCanQuote(
        address feed,
        uint256 postId,
        address account
    ) external view returns (bool);
}
