// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IConditionalTokens} from "../interfaces/IConditionalTokens.sol";
import {CTHelpers} from "../libraries/CTHelpers.sol";

contract MockConditionalTokens is IConditionalTokens {
    function getConditionId(
        address oracle,
        bytes32 questionId,
        uint256 outcomeSlotCount
    ) external pure override returns (bytes32) {
        return
            CTHelpers.getConditionId(
                0x6A9D222616C90FcA5754cd1333cFD9b7fb6a4F74,
                questionId,
                outcomeSlotCount
            );
    }

    function getCollectionId(
        bytes32 parentCollectionId,
        bytes32 conditionId,
        uint indexSet
    ) external view returns (bytes32) {
        return
            CTHelpers.getCollectionId(
                parentCollectionId,
                conditionId,
                indexSet
            );
    }

    function getPositionId(
        IERC20 collateralToken,
        bytes32 collectionId
    ) external pure override returns (uint) {
        return
            CTHelpers.getPositionId(
                IERC20(0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174),
                collectionId
            );
    }
}
