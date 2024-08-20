// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import {Errors} from "lens-modules/contracts/modules/constants/Errors.sol";

import {FlexCollectModule} from "./FlexCollectModule.sol";
import {BaseProfilePublicationData} from "./interfaces/IBaseFeeFlexCollectModule.sol";

contract BulkMintFlexCollectModule is FlexCollectModule {
    error InvalidProcessData();

    constructor(
        address hub,
        address actionModule,
        address moduleRegistry,
        address moduleOwner
    ) FlexCollectModule(hub, actionModule, moduleRegistry, moduleOwner) {}

    function mintsAllowed(
        uint256 publicationCollectedProfileId,
        uint256 publicationCollectedId,
        bytes calldata collectData
    ) external view virtual override onlyActionModule returns (uint96) {
        (, uint256 decodedAmount, uint96 mintsRequested) = abi.decode(
            collectData,
            (address, uint256, uint96)
        );

        BaseProfilePublicationData storage data = _dataByPublicationByProfile[
            publicationCollectedProfileId
        ][publicationCollectedId];

        if (decodedAmount < (data.amount * mintsRequested)) {
            revert InvalidProcessData();
        }

        return mintsRequested;
    }

    function _validateDataIsExpected(
        bytes calldata data,
        address currency,
        uint256 amount
    ) internal pure virtual override {
        (
            address decodedCurrency,
            uint256 decodedAmount,
            uint96 mintsRequested
        ) = abi.decode(data, (address, uint256, uint96));
        if (
            decodedAmount < (amount * mintsRequested) ||
            decodedCurrency != currency
        ) {
            revert Errors.ModuleDataMismatch();
        }
    }
}
