// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

import {Types} from "lens-modules/contracts/libraries/constants/Types.sol";
import {IPublicationActionModule} from "lens-modules/contracts/interfaces/IPublicationActionModule.sol";
import {HubRestricted} from "lens-modules/contracts/base/HubRestricted.sol";
import {IModuleRegistry} from "lens-modules/contracts/interfaces/IModuleRegistry.sol";
import {LensModuleMetadata} from "lens-modules/contracts/modules/LensModuleMetadata.sol";
import {LensModuleRegistrant} from "lens-modules/contracts/modules/base/LensModuleRegistrant.sol";
import {ICollectModule} from "lens-modules/contracts/modules/interfaces/ICollectModule.sol";
import {BaseFeeCollectModule} from "lens-modules/contracts/modules/act/collect/base/BaseFeeCollectModule.sol";
import {IBaseFeeCollectModule, BaseFeeCollectModuleInitData, BaseProfilePublicationData} from "lens-modules/contracts/modules/interfaces/IBaseFeeCollectModule.sol";
import {ModuleTypes} from "lens-modules/contracts/modules/libraries/constants/ModuleTypes.sol";
import {LensModule} from "lens-modules/contracts/modules/LensModule.sol";

/**
 * @notice A struct containing the recipient address and the fraction of the fee they should receive.
 *
 * @param recipient The address of the recipient.
 * @param split The fraction of the fee they should receive, as a fraction of BPS_MAX (10 000).
 */
struct RecipientData {
    address recipient;
    uint16 split;
}

/**
 * @notice A struct containing the necessary data to initialize this module.
 *
 * @param amountFloor The minimum amount that can be collected. 0 for no floor.
 * @param collectLimit The maximum number of collects for this publication. 0 for no limit.
 * @param currency The optional currency to restrict collects to. address(0) for no restriction.
 * @param referralFee The referral fee associated with this publication.
 * @param followerOnly True if only followers of publisher may collect the post.
 * @param endTimestamp The end timestamp after which collecting is impossible. 0 for no expiry.
 * @param recipients Array of RecipientData items to split collect fees across multiple recipients.
 */
struct PayWhatYouWantCollectModuleInitData {
    uint160 amountFloor;
    uint96 collectLimit;
    address currency;
    uint16 referralFee;
    bool followerOnly;
    uint72 endTimestamp;
    RecipientData[5] recipients;
}

/**
 * @notice A struct containing the necessary data to initialize this module.
 *
 * @param amountFloor The minimum amount that can be collected. 0 for no floor.
 * @param collectLimit The maximum number of collects for this publication. 0 for no limit.
 * @param currency The optional currency to restrict collects to. address(0) for no restriction.
 * @param currentCollects The current number of collects for this publication.
 * @param referralFee The referral fee associated with this publication.
 * @param followerOnly True if only followers of publisher may collect the post.
 * @param endTimestamp The end timestamp after which collecting is impossible. 0 for no expiry.
 * @param recipients Array of RecipientData items to split collect fees across multiple recipients.
 */
struct PayWhatYouWantCollectProfilePublicationData {
    uint160 amountFloor;
    uint96 collectLimit;
    address currency;
    uint96 currentCollects;
    uint16 referralFee;
    bool followerOnly;
    uint72 endTimestamp;
    RecipientData[] recipients;
}

error InvalidInitParams();
error InvalidOffer();
error InvalidRecipientSplits();

contract PayWhatYouWantCollectModule is
    BaseFeeCollectModule,
    LensModuleMetadata
{
    using SafeERC20 for IERC20;

    mapping(uint256 => mapping(uint256 => RecipientData[]))
        internal _recipientsByPublicationByProfile;

    constructor(
        address hub,
        address actionModule,
        address moduleRegistry
    )
        Ownable()
        BaseFeeCollectModule(hub, actionModule, moduleRegistry)
        LensModuleMetadata()
    {}

    /**
     * @notice Returns the publication data for a given publication, or an empty struct if that publication was not
     * initialized with this module.
     *
     * @param profileId The token ID of the profile mapped to the publication to query.
     * @param pubId The publication ID of the publication to query.
     *
     * @return The PayWhatYouWantCollectProfilePublicationData struct mapped to that publication.
     */
    function getPublicationData(
        uint256 profileId,
        uint256 pubId
    )
        external
        view
        returns (PayWhatYouWantCollectProfilePublicationData memory)
    {
        BaseProfilePublicationData memory baseData = getBasePublicationData(
            profileId,
            pubId
        );
        RecipientData[] memory recipients = _recipientsByPublicationByProfile[
            profileId
        ][pubId];
        return
            PayWhatYouWantCollectProfilePublicationData({
                amountFloor: baseData.amount,
                collectLimit: baseData.collectLimit,
                currency: baseData.currency,
                currentCollects: baseData.currentCollects,
                referralFee: baseData.referralFee,
                followerOnly: baseData.followerOnly,
                endTimestamp: baseData.endTimestamp,
                recipients: recipients
            });
    }

    function supportsInterface(
        bytes4 interfaceID
    ) public pure override(BaseFeeCollectModule, LensModule) returns (bool) {
        return
            BaseFeeCollectModule.supportsInterface(interfaceID) ||
            LensModule.supportsInterface(interfaceID);
    }

    /**
     * @dev Validates the Base parameters like:
     * 1) Is the currency whitelisted
     * 2) Is the referralFee in valid range
     * 3) Is the end of collects timestamp in valid range
     *
     * This should be called during initializePublicationCollectModule()
     *
     * @param initData Module initialization data (see PayWhatYouWantCollectModuleInitData struct)
     */
    function _validateInitData(
        PayWhatYouWantCollectModuleInitData memory initData
    ) internal virtual {
        if (
            (initData.amountFloor != 0 && initData.currency == address(0)) ||
            initData.referralFee > BPS_MAX ||
            (initData.endTimestamp != 0 &&
                initData.endTimestamp < block.timestamp)
        ) {
            revert InvalidInitParams();
        }

        if (initData.currency != address(0)) {
            _verifyErc20Currency(initData.currency);
        }
    }

    /// @inheritdoc ICollectModule
    function initializePublicationCollectModule(
        uint256 profileId,
        uint256 pubId,
        address /* transactionExecutor */,
        bytes calldata data
    ) external override onlyActionModule returns (bytes memory) {
        PayWhatYouWantCollectModuleInitData memory initData = abi.decode(
            data,
            (PayWhatYouWantCollectModuleInitData)
        );

        BaseFeeCollectModuleInitData
            memory baseInitData = BaseFeeCollectModuleInitData({
                amount: initData.amountFloor,
                collectLimit: initData.collectLimit,
                currency: initData.currency,
                referralFee: initData.referralFee,
                followerOnly: initData.followerOnly,
                endTimestamp: initData.endTimestamp,
                recipient: address(0)
            });

        RecipientData[] memory recipients = new RecipientData[](
            initData.recipients.length
        );

        for (uint256 i = 0; i < initData.recipients.length; i++) {
            recipients[i] = initData.recipients[i];
        }

        _validateInitData(initData);
        _validateAndStoreRecipients(recipients, profileId, pubId);
        _storeBasePublicationCollectParameters(profileId, pubId, baseInitData);

        return data;
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
            revert InvalidInitParams();
        }

        // Check recipient splits sum to 10 000 BPS (100%)
        uint256 totalSplits;
        uint256 i;
        while (i < len) {
            if (
                recipients[i].recipient != address(0) &&
                recipients[i].split == 0
            ) {
                revert InvalidRecipientSplits();
            }

            totalSplits += recipients[i].split;

            // Store each recipient while looping - avoids extra gas costs in successful cases
            _recipientsByPublicationByProfile[profileId][pubId].push(
                recipients[i]
            );

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
        RecipientData[] memory recipients = _recipientsByPublicationByProfile[
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
        uint256 amountFloor = _dataByPublicationByProfile[
            processCollectParams.publicationCollectedProfileId
        ][processCollectParams.publicationCollectedId].amount;
        address acceptedCurrency = _dataByPublicationByProfile[
            processCollectParams.publicationCollectedProfileId
        ][processCollectParams.publicationCollectedId].currency;

        (address currency, uint256 amount) = abi.decode(
            processCollectParams.data,
            (address, uint256)
        );

        if (
            (acceptedCurrency != address(0) && acceptedCurrency != currency) ||
            amount < amountFloor
        ) {
            revert InvalidOffer();
        }

        _verifyErc20Currency(currency);

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
        (address currency, uint256 amount) = abi.decode(
            processCollectParams.data,
            (address, uint256)
        );

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
