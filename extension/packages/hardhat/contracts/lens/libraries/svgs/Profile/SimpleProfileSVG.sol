// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library SimpleProfileSVG {
    function getProfileSVG(uint256 /* profileId */, bytes32 /* blockSeed */) public pure returns (string memory, string memory) {
        return ('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>', '');
    }
}