// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import {Types} from "./libraries/Types.sol";
import {IPublicationActionModule} from "./interfaces/IPublicationActionModule.sol";
import {HubRestricted} from "./base/HubRestricted.sol";
import {IModuleRegistry} from "./interfaces/IModuleRegistry.sol";
import {LensModuleMetadata} from "./base/LensModuleMetadata.sol";
import {LensModuleRegistrant} from "./base/LensModuleRegistrant.sol";

/**
 * @title TipActionModule
 * @dev Open Action Module for tipping Lens publications.
 */
contract TipActionModule is
    IPublicationActionModule,
    Ownable,
    HubRestricted,
    LensModuleMetadata,
    LensModuleRegistrant,
    ReentrancyGuard
{
    using SafeERC20 for IERC20;

    error CurrencyNotWhitelisted();
    error TipAmountCannotBeZero();
    error TipReceiverNotProvided();
    error TipAmountNotApproved();

    event TipReceiverRegistered(
        uint256 indexed profileId,
        uint256 indexed pubId,
        address indexed tipReceiver
    );

    event TipCreated(
        address indexed transactionExecutor,
        address indexed tipReceiver,
        address indexed currency,
        uint256 tipAmount
    );

    /**
     * @dev Mapping of tip receivers for publications.
     */
    mapping(uint256 profileId => mapping(uint256 pubId => address tipReceiver))
        internal _tipReceivers;

    /**
     * @dev Initializes the TipActionModule contract.
     * @param hub Address of the LensHub contract.
     * @param moduleRegistry Address of the ModuleRegistry contract.
     */
    constructor(
        address hub,
        address moduleRegistry
    )
        Ownable()
        HubRestricted(hub)
        LensModuleMetadata()
        LensModuleRegistrant(moduleRegistry)
    {}

    /**
     * @dev Returns the tip receiver for a publication.
     * @param profileId ID of the profile.
     * @param pubId ID of the publication.
     * @return Address of the tip receiver.
     */
    function getTipReceiver(
        uint256 profileId,
        uint256 pubId
    ) public view returns (address) {
        return _tipReceivers[profileId][pubId];
    }

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
        address /* transactionExecutor */,
        bytes calldata data
    ) external override onlyHub returns (bytes memory) {
        address tipReceiver = abi.decode(data, (address));

        if (tipReceiver == address(0)) {
            revert TipReceiverNotProvided();
        }

        _tipReceivers[profileId][pubId] = tipReceiver;

        emit TipReceiverRegistered(profileId, pubId, tipReceiver);

        return data;
    }

    function processPublicationAction(
        Types.ProcessActionParams calldata params
    ) external override onlyHub nonReentrant returns (bytes memory) {
        (address currency, uint256 tipAmount) = abi.decode(
            params.actionModuleData,
            (address, uint256)
        );

        if (!MODULE_REGISTRY.isErc20CurrencyRegistered(currency)) {
            revert CurrencyNotWhitelisted();
        }

        if (tipAmount == 0) {
            revert TipAmountCannotBeZero();
        }

        address tipReceiver = _tipReceivers[params.publicationActedProfileId][
            params.publicationActedId
        ];

        IERC20 token = IERC20(currency);

        uint256 allowance = token.allowance(
            params.transactionExecutor,
            address(this)
        );

        if (allowance < tipAmount) {
            revert TipAmountNotApproved();
        }

        emit TipCreated(
            params.transactionExecutor,
            tipReceiver,
            currency,
            tipAmount
        );

        token.safeTransferFrom(
            params.transactionExecutor,
            tipReceiver,
            tipAmount
        );

        return abi.encode(tipReceiver, currency, tipAmount);
    }
}
