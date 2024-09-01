// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library GintoNordFontSVG {
    function getFontStyle() external pure returns (string memory) {
        return
            '<style>@font-face{font-family:"Ginto Nord Medium";src:url(data:application/font-woff;charset=utf-8;base64,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) format("woff"); font-weight:normal;font-style:normal;}</style>';
    }
}