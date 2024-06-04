// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

import {LensModuleMetadata} from "lens-modules/contracts/modules/LensModuleMetadata.sol";
import {ModuleTypes} from "lens-modules/contracts/modules/libraries/constants/ModuleTypes.sol";
import {LensModule} from "lens-modules/contracts/modules/LensModule.sol";

import {BaseFeeFlexCollectModule} from "./base/BaseFeeFlexCollectModule.sol";
import {BaseFeeFlexCollectModuleInitData} from "./interfaces/IBaseFeeFlexCollectModule.sol";

contract FlexCollectModule is
    Ownable,
    BaseFeeFlexCollectModule,
    LensModuleMetadata
{
    using SafeERC20 for IERC20;

    constructor(
        address hub,
        address actionModule,
        address moduleRegistry
    )
        Ownable()
        BaseFeeFlexCollectModule(hub, actionModule, moduleRegistry)
        LensModuleMetadata()
    {}

    function supportsInterface(
        bytes4 interfaceID
    )
        public
        pure
        override(BaseFeeFlexCollectModule, LensModule)
        returns (bool)
    {
        return
            BaseFeeFlexCollectModule.supportsInterface(interfaceID) ||
            LensModule.supportsInterface(interfaceID);
    }

    function initializePublicationCollectModule(
        uint256 profileId,
        uint256 pubId,
        address /* transactionExecutor */,
        bytes calldata data
    ) external override onlyActionModule returns (bytes memory) {
        BaseFeeFlexCollectModuleInitData memory baseInitData = abi.decode(
            data,
            (BaseFeeFlexCollectModuleInitData)
        );
        _validateBaseInitData(baseInitData);
        _storeBasePublicationCollectParameters(profileId, pubId, baseInitData);
        return data;
    }

    function calculateFee(
        ModuleTypes.ProcessCollectParams calldata processCollectParams
    ) public view virtual override returns (uint160) {
        // Override calculateFee to add custom logic to calculate the fee
        return
            _dataByPublicationByProfile[
                processCollectParams.publicationCollectedProfileId
            ][processCollectParams.publicationCollectedId].amount;
    }

    function processCollect(
        ModuleTypes.ProcessCollectParams calldata processCollectParams
    ) external override returns (bytes memory) {
        _validateAndStoreCollect(processCollectParams);
        // Override processCollect to add custom logic for processing the collect
        if (processCollectParams.referrerProfileIds.length == 0) {
            _processCollect(processCollectParams);
        } else {
            _processCollectWithReferral(processCollectParams);
        }
        return processCollectParams.data;
    }
}
