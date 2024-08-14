// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

import {ICollectModule} from "lens-modules/contracts/modules/interfaces/ICollectModule.sol";
import {LensModuleMetadata} from "lens-modules/contracts/modules/LensModuleMetadata.sol";
import {BaseFeeCollectModule} from "lens-modules/contracts/modules/act/collect/base/BaseFeeCollectModule.sol";
import {BaseFeeCollectModuleInitData, BaseProfilePublicationData} from "lens-modules/contracts/modules/interfaces/IBaseFeeCollectModule.sol";
import {ModuleTypes} from "lens-modules/contracts/modules/libraries/constants/ModuleTypes.sol";
import {LensModule} from "lens-modules/contracts/modules/LensModule.sol";
import {Errors} from "lens-modules/contracts/modules/constants/Errors.sol";

interface IToken {
    /**
     * @dev Returns the amount of ERC20/ERC721 tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);
}

/**
 * @notice A struct containing the recipient address and the fraction of the fee they should receive.
 *
 * @param recipient The address of the recipient.
 * @param split The fraction of the fee they should receive, as a fraction of BPS_MAX (10 000).
 */
struct RecipientData {
    address recipient;
    uint16 split; // fraction of BPS_MAX (10 000)
}

/**
 * @notice A struct containing the necessary data to execute TokenGated references.
 *
 * @param tokenAddress The address of ERC20/ERC721 token used for gating the collect.
 * @param minThreshold The minimum balance threshold of the gated token required to execute a collect.
 */
struct GateParams {
    address tokenAddress;
    uint256 minThreshold;
}

/**
 * @notice A struct containing the necessary data to execute collect actions on a publication.
 *
 * @param amount The collecting cost associated with this publication. Cannot be 0.
 * @param collectLimit The maximum number of collects for this publication. 0 for no limit.
 * @param currency The currency associated with this publication.
 * @param currentCollects The current number of collects for this publication.
 * @param referralFee The referral fee associated with this publication.
 * @param followerOnly True if only followers of publisher may collect the post.
 * @param endTimestamp The end timestamp after which collecting is impossible. 0 for no expiry.
 * @param recipients Array of RecipientData items to split collect fees across multiple recipients.
 * @param gateParams The GateParams struct containing the gating token address and minimum balance threshold.
 */
struct TokenGatedCollectPublicationData {
    uint160 amount;
    uint96 collectLimit;
    address currency;
    uint96 currentCollects;
    uint16 referralFee;
    bool followerOnly;
    uint72 endTimestamp;
    RecipientData[] recipients;
    GateParams gateParams;
}

error GateParamsInvalid();
error InvalidRecipientSplits();
error RecipientSplitCannotBeZero();
error NotEnoughBalance();

contract TokenGatedCollectModule is BaseFeeCollectModule, LensModuleMetadata {
    using SafeERC20 for IERC20;

    uint256 internal constant UINT256_BYTES = 32;

    event TokenGatedCollectCreated(
        uint256 indexed profileId,
        uint256 indexed pubId,
        address tokenAddress,
        uint256 minThreshold
    );

    event ModuleRegistered();

    mapping(uint256 profileId => mapping(uint256 pubId => GateParams gateParams))
        internal _gateParams;

    mapping(uint256 profileId => mapping(uint256 pubId => RecipientData[]))
        internal _recipients;

    constructor(
        address hub,
        address actionModule,
        address moduleRegistry,
        address moduleOwner
    )
        Ownable()
        BaseFeeCollectModule(hub, actionModule, moduleRegistry)
        LensModuleMetadata()
    {
        _transferOwnership(moduleOwner);
    }

    function initializePublicationCollectModule(
        uint256 profileId,
        uint256 pubId,
        address /* transactionExecutor */,
        bytes calldata data
    ) external override onlyActionModule returns (bytes memory) {
        (
            uint160 amount,
            uint96 collectLimit,
            address currency,
            uint16 referralFee,
            bool followerOnly,
            uint72 endTimestamp,
            RecipientData[] memory recipients,
            GateParams memory gateParams
        ) = abi.decode(
                data,
                (
                    uint160,
                    uint96,
                    address,
                    uint16,
                    bool,
                    uint72,
                    RecipientData[],
                    GateParams
                )
            );

        _validateGateParams(gateParams);
        _gateParams[profileId][pubId] = gateParams;

        BaseFeeCollectModuleInitData
            memory baseInitData = BaseFeeCollectModuleInitData({
                amount: amount,
                collectLimit: collectLimit,
                currency: currency,
                referralFee: referralFee,
                followerOnly: followerOnly,
                endTimestamp: endTimestamp,
                recipient: address(0)
            });

        // Zero amount for collect doesn't make sense if there are recipients
        if (
            recipients.length > 0 &&
            (baseInitData.amount == 0 || currency == address(0))
        ) {
            revert Errors.InitParamsInvalid();
        }

        _validateBaseInitData(baseInitData);
        _validateAndStoreRecipients(recipients, profileId, pubId);
        _storeBasePublicationCollectParameters(profileId, pubId, baseInitData);

        emit TokenGatedCollectCreated(
            profileId,
            pubId,
            gateParams.tokenAddress,
            gateParams.minThreshold
        );

        return data;
    }

    /**
     * @inheritdoc ICollectModule
     * @notice Processes a collect by:
     *  1. Validating that collect action meets all needed criteria
     *  2. Processing the collect action either with or without referral
     *
     * @param processCollectParams Collect action parameters (see ModuleTypes.ProcessCollectParams struct)
     */
    function processCollect(
        ModuleTypes.ProcessCollectParams calldata processCollectParams
    ) external override onlyActionModule returns (bytes memory) {
        _validateTokenBalance(
            processCollectParams.collectorProfileId,
            processCollectParams.publicationCollectedProfileId,
            processCollectParams.publicationCollectedId
        );
        _validateAndStoreCollect(processCollectParams);

        if (processCollectParams.referrerProfileIds.length == 0) {
            _processCollect(processCollectParams);
        } else {
            _processCollectWithReferral(processCollectParams);
        }

        return "";
    }

    function supportsInterface(
        bytes4 interfaceID
    ) public pure override(BaseFeeCollectModule, LensModule) returns (bool) {
        return
            BaseFeeCollectModule.supportsInterface(interfaceID) ||
            LensModule.supportsInterface(interfaceID);
    }

    /**
     * @notice Returns the publication data for a given publication, or an empty struct if that publication was not
     * initialized with this module.
     *
     * @param profileId The token ID of the profile mapped to the publication to query.
     * @param pubId The publication ID of the publication to query.
     *
     * @return The TokenGatedCollectPublicationData struct mapped to that publication.
     */
    function getPublicationData(
        uint256 profileId,
        uint256 pubId
    ) external view virtual returns (TokenGatedCollectPublicationData memory) {
        BaseProfilePublicationData memory baseData = getBasePublicationData(
            profileId,
            pubId
        );
        return
            TokenGatedCollectPublicationData({
                amount: baseData.amount,
                collectLimit: baseData.collectLimit,
                currency: baseData.currency,
                currentCollects: baseData.currentCollects,
                referralFee: baseData.referralFee,
                followerOnly: baseData.followerOnly,
                endTimestamp: baseData.endTimestamp,
                gateParams: _gateParams[profileId][pubId],
                recipients: _recipients[profileId][pubId]
            });
    }

    /**
     * @dev Validates the gate parameters passed during initialization.
     *
     * @param gateParams The GateParams struct containing the gating token address and minimum balance threshold.
     */
    function _validateGateParams(GateParams memory gateParams) internal view {
        // Checking if the tokenAddress resembles ERC20/ERC721 token (by calling balanceOf() function).
        (bool success, bytes memory result) = gateParams
            .tokenAddress
            .staticcall(
                abi.encodeWithSelector(IToken.balanceOf.selector, address(this))
            );
        // We don't check if the contract exists because we expect the return data anyway.
        if (
            gateParams.minThreshold == 0 ||
            !success ||
            result.length != UINT256_BYTES
        ) {
            revert GateParamsInvalid();
        }
    }

    /**
     * @dev Validates the profile's owner balance of gating token. It can work with both ERC20 and ERC721 as both
     * interfaces shares `balanceOf` function prototype.
     *
     * @param collectorProfileId The ID of the profile trying to collect.
     * @param publicationCollectedProfileId The ID of the publication's author.
     * @param publicationCollectedId The ID of the publication.
     *
     * @return uint256 The gate token balance of the profile trying to collect.
     */
    function _validateTokenBalance(
        uint256 collectorProfileId,
        uint256 publicationCollectedProfileId,
        uint256 publicationCollectedId
    ) internal view returns (uint256) {
        GateParams memory gateParams = _gateParams[
            publicationCollectedProfileId
        ][publicationCollectedId];
        uint256 balance = IToken(gateParams.tokenAddress).balanceOf(
            IERC721(HUB).ownerOf(collectorProfileId)
        );
        if (
            collectorProfileId != publicationCollectedProfileId &&
            balance < gateParams.minThreshold
        ) {
            revert NotEnoughBalance();
        }
        return balance;
    }

    /**
     * @dev Validates the recipients array and stores them to (a separate from Base) storage.
     *
     * @param recipients An array of recipients
     * @param profileId The profile ID who is publishing the publication.
     * @param pubId The associated publication's LensHub publication ID.
     */
    function _validateAndStoreRecipients(
        RecipientData[] memory recipients,
        uint256 profileId,
        uint256 pubId
    ) internal {
        uint256 len = recipients.length;

        if (len == 0) {
            return;
        }

        // Check recipient splits sum to 10 000 BPS (100%)
        uint256 totalSplits;
        uint256 i;
        while (i < len) {
            if (recipients[i].split == 0) revert RecipientSplitCannotBeZero();
            totalSplits += recipients[i].split;

            // Store each recipient while looping - avoids extra gas costs in successful cases
            _recipients[profileId][pubId].push(recipients[i]);

            unchecked {
                ++i;
            }
        }

        if (totalSplits != BPS_MAX) {
            revert InvalidRecipientSplits();
        }
    }

    /**
     * @dev Transfers the fee to multiple recipients.
     *
     * @inheritdoc BaseFeeCollectModule
     */
    function _transferToRecipients(
        ModuleTypes.ProcessCollectParams calldata processCollectParams,
        address currency,
        uint256 amount
    ) internal override {
        RecipientData[] memory recipients = _recipients[
            processCollectParams.publicationCollectedProfileId
        ][processCollectParams.publicationCollectedId];
        uint256 len = recipients.length;

        uint256 i;
        while (i < len) {
            uint256 amountForRecipient = (amount * recipients[i].split) /
                BPS_MAX;
            if (amountForRecipient != 0)
                IERC20(currency).safeTransferFrom(
                    processCollectParams.transactionExecutor,
                    recipients[i].recipient,
                    amountForRecipient
                );
            unchecked {
                ++i;
            }
        }
    }

    /**
     * @dev Internal processing of a collect:
     *  1. Calculation of fees
     *  2. Validation that fees are what collector expected
     *  3. Transfer of fees to recipient(-s) and treasury
     *
     * @param processCollectParams Parameters of the collect
     */
    function _processCollect(
        ModuleTypes.ProcessCollectParams calldata processCollectParams
    ) internal virtual override {
        uint256 amount = calculateFee(processCollectParams);
        if (amount == 0) {
            return;
        }

        address currency = _dataByPublicationByProfile[
            processCollectParams.publicationCollectedProfileId
        ][processCollectParams.publicationCollectedId].currency;
        _validateDataIsExpected(processCollectParams.data, currency, amount);

        (address treasury, uint16 treasuryFee) = _treasuryData();
        uint256 treasuryAmount = (amount * treasuryFee) / BPS_MAX;

        if (treasuryAmount > 0) {
            IERC20(currency).safeTransferFrom(
                processCollectParams.transactionExecutor,
                treasury,
                treasuryAmount
            );
        }

        // Send amount after treasury cut, to all recipients
        _transferToRecipients(
            processCollectParams,
            currency,
            amount - treasuryAmount
        );
    }

    /**
     * @dev Internal processing of a collect with a referrals (if any).
     *
     * Same as _processCollect, but also includes transfer to referrals (if any):
     *  1. Calculation of fees
     *  2. Validation that fees are what collector expected
     *  3. Transfer of fees to treasury, referrals (if any) and recipients
     *
     * @param processCollectParams Parameters of the collect
     */
    function _processCollectWithReferral(
        ModuleTypes.ProcessCollectParams calldata processCollectParams
    ) internal virtual override {
        uint256 amount = calculateFee(processCollectParams);
        if (amount == 0) {
            return;
        }

        address currency = _dataByPublicationByProfile[
            processCollectParams.publicationCollectedProfileId
        ][processCollectParams.publicationCollectedId].currency;

        _validateDataIsExpected(processCollectParams.data, currency, amount);

        (address treasury, uint16 treasuryFee) = _treasuryData();
        uint256 treasuryAmount = (amount * treasuryFee) / BPS_MAX;

        if (treasuryAmount > 0) {
            IERC20(currency).safeTransferFrom(
                processCollectParams.transactionExecutor,
                treasury,
                treasuryAmount
            );
        }

        uint256 amountAfterReferrals = _transferToReferrals(
            processCollectParams,
            currency,
            amount - treasuryAmount
        );

        _transferToRecipients(
            processCollectParams,
            currency,
            amountAfterReferrals
        );
    }
}
