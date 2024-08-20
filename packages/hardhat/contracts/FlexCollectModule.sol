// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

import {LensModule} from "lens-modules/contracts/modules/LensModule.sol";
import {Errors} from "lens-modules/contracts/modules/constants/Errors.sol";
import {LensModuleMetadataInitializable} from "lens-modules/contracts/modules/LensModuleMetadataInitializable.sol";

import {BaseFeeFlexCollectModule} from "./base/BaseFeeFlexCollectModule.sol";
import {BaseProfilePublicationData, BaseFeeFlexCollectModuleInitData} from "./interfaces/IBaseFeeFlexCollectModule.sol";
import {ProcessCollectParams, IFlexCollectModule} from "./interfaces/IFlexCollectModule.sol";

struct RecipientData {
    address recipient;
    uint16 split; // fraction of BPS_MAX (10 000)
}

/**
 * @notice A struct containing the necessary data to initialize MultirecipientFeeCollectModule.
 *
 * @param amount The collecting cost associated with this publication. Cannot be 0.
 * @param collectLimit The maximum number of collects for this publication. 0 for no limit.
 * @param currency The currency associated with this publication.
 * @param referralFee The referral fee associated with this publication.
 * @param followerOnly True if only followers of publisher may collect the post.
 * @param endTimestamp The end timestamp after which collecting is impossible. 0 for no expiry.
 * @param recipients Array of RecipientData items to split collect fees across multiple recipients.
 */
struct FlexCollectModuleInitData {
    uint160 amount;
    uint96 collectLimit;
    address currency;
    uint16 referralFee;
    bool followerOnly;
    uint72 endTimestamp;
    RecipientData[] recipients;
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
 */
struct MultirecipientFeeCollectProfilePublicationData {
    uint160 amount;
    uint96 collectLimit;
    address currency;
    uint96 currentCollects;
    uint16 referralFee;
    bool followerOnly;
    uint72 endTimestamp;
    RecipientData[] recipients;
}

error TooManyRecipients();
error InvalidRecipientSplits();
error RecipientSplitCannotBeZero();

contract FlexCollectModule is
    Ownable,
    BaseFeeFlexCollectModule,
    LensModuleMetadataInitializable
{
    using SafeERC20 for IERC20;

    mapping(uint256 => mapping(uint256 => RecipientData[]))
        internal _recipientsByPublicationByProfile;

    constructor(
        address hub,
        address actionModule,
        address moduleRegistry,
        address moduleOwner
    )
        BaseFeeFlexCollectModule(hub, actionModule, moduleRegistry)
        LensModuleMetadataInitializable(moduleOwner)
    {}

    /**
     * @inheritdoc IFlexCollectModule
     */
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
            RecipientData[] memory recipients
        ) = abi.decode(
                data,
                (
                    uint160,
                    uint96,
                    address,
                    uint16,
                    bool,
                    uint72,
                    RecipientData[]
                )
            );

        BaseFeeFlexCollectModuleInitData
            memory baseInitData = BaseFeeFlexCollectModuleInitData({
                amount: amount,
                collectLimit: collectLimit,
                currency: currency,
                referralFee: referralFee,
                followerOnly: followerOnly,
                endTimestamp: endTimestamp,
                recipient: address(0)
            });

        // Zero amount for collect doesn't make sense here (in a module with 5 recipients)
        // Better use SimpleFeeCollect module instead which allows 0 amount
        if (baseInitData.amount == 0 || currency == address(0)) {
            revert Errors.InitParamsInvalid();
        }
        _validateBaseInitData(baseInitData);
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

        // Check number of recipients is supported
        if (len < 1) {
            revert Errors.InitParamsInvalid();
        }

        if (len > 5) {
            revert TooManyRecipients();
        }

        // Check recipient splits sum to 10 000 BPS (100%)
        uint256 totalSplits;
        uint256 i;
        while (i < len) {
            if (recipients[i].split == 0) revert RecipientSplitCannotBeZero();
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
     * @inheritdoc BaseFeeFlexCollectModule
     */
    function _transferToRecipients(
        ProcessCollectParams calldata processCollectParams,
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
    )
        external
        view
        returns (MultirecipientFeeCollectProfilePublicationData memory)
    {
        BaseProfilePublicationData memory baseData = getBasePublicationData(
            profileId,
            pubId
        );
        RecipientData[] memory recipients = _recipientsByPublicationByProfile[
            profileId
        ][pubId];
        return
            MultirecipientFeeCollectProfilePublicationData({
                amount: baseData.amount,
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
