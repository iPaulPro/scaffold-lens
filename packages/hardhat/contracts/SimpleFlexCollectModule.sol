// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import {IFlexCollectModule} from "./interfaces/IFlexCollectModule.sol";
import {BaseFeeFlexCollectModule} from "./base/BaseFeeFlexCollectModule.sol";
import {BaseFeeFlexCollectModuleInitData, BaseProfilePublicationData} from "./interfaces/IBaseFeeFlexCollectModule.sol";

import {LensModuleMetadataInitializable} from "lens-modules/contracts/modules/LensModuleMetadataInitializable.sol";
import {LensModule} from "lens-modules/contracts/modules/LensModule.sol";

contract SimpleFlexCollectModule is
    BaseFeeFlexCollectModule,
    LensModuleMetadataInitializable
{
    constructor(
        address hub,
        address actionModule,
        address moduleRegistry,
        address moduleOwner
    )
        BaseFeeFlexCollectModule(hub, actionModule, moduleRegistry)
        LensModuleMetadataInitializable(moduleOwner)
    {}

    // @inheritdoc IFlexCollectModule
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
        return "";
    }

    /**
     * @notice Returns the publication data for a given publication, or an empty struct if that publication was not
     * initialized with this module.
     *
     * @param profileId The token ID of the profile mapped to the publication to query.
     * @param pubId The publication ID of the publication to query.
     *
     * @return The BaseProfilePublicationData struct mapped to that publication.
     */
    function getPublicationData(
        uint256 profileId,
        uint256 pubId
    ) external view virtual returns (BaseProfilePublicationData memory) {
        return getBasePublicationData(profileId, pubId);
    }

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
}
