// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

import {Types} from "lens-modules/contracts/libraries/constants/Types.sol";
import {IPublicationActionModule} from "lens-modules/contracts/interfaces/IPublicationActionModule.sol";
import {HubRestricted} from "lens-modules/contracts/base/HubRestricted.sol";
import {IModuleRegistry} from "lens-modules/contracts/interfaces/IModuleRegistry.sol";
import {LensModuleMetadata} from "lens-modules/contracts/modules/LensModuleMetadata.sol";
import {LensModuleRegistrant} from "lens-modules/contracts/modules/base/LensModuleRegistrant.sol";

contract YourActionModule is
    IPublicationActionModule,
    HubRestricted,
    LensModuleMetadata,
    LensModuleRegistrant
{
    event InitializedPublicationAction(
        uint256 profileId,
        uint256 pubId,
        address transactionExecutor,
        bytes data
    );

    event ProcessedPublicationAction(
        uint256 profileId,
        uint256 pubId,
        address transactionExecutor,
        bytes data
    );

    constructor(
        address hub,
        IModuleRegistry moduleRegistry
    )
        Ownable()
        HubRestricted(hub)
        LensModuleMetadata()
        LensModuleRegistrant(moduleRegistry)
    {}

    function supportsInterface(
        bytes4 interfaceID
    ) public pure virtual override returns (bool) {
        return
            interfaceID == type(IPublicationActionModule).interfaceId ||
            super.supportsInterface(interfaceID);
    }

    function initializePublicationAction(
        uint256 profileId,
        uint256 pubId,
        address transactionExecutor,
        bytes calldata data
    ) external override onlyHub returns (bytes memory) {
        emit InitializedPublicationAction(
            profileId,
            pubId,
            transactionExecutor,
            data
        );
        return data;
    }

    function processPublicationAction(
        Types.ProcessActionParams calldata params
    ) external override onlyHub returns (bytes memory) {
        emit ProcessedPublicationAction(
            params.publicationActedProfileId,
            params.publicationActedId,
            params.transactionExecutor,
            params.actionModuleData
        );
        return params.actionModuleData;
    }
}
