// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

import {ICollectModule} from "lens-modules/contracts/modules/interfaces/ICollectModule.sol";
import {Types} from "lens-modules/contracts/libraries/constants/Types.sol";

interface IFlexCollectModule is ICollectModule {
    function isMintAction(bytes calldata collectData) external returns (bool);

    function processPublicationAction(
        Types.ProcessActionParams calldata processActionParams
    ) external returns (bytes memory);
}
