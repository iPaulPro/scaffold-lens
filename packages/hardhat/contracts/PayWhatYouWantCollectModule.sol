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
import {IBaseFeeCollectModule, BaseFeeCollectModuleInitData} from "lens-modules/contracts/modules/interfaces/IBaseFeeCollectModule.sol";
import {ModuleTypes} from "lens-modules/contracts/modules/libraries/constants/ModuleTypes.sol";
import {LensModule} from "lens-modules/contracts/modules/LensModule.sol";

contract PayWhatYouWantCollectModule is
    BaseFeeCollectModule,
    LensModuleMetadata
{
    using SafeERC20 for IERC20;

    /**
     * @notice A struct containing the necessary data to initialize this module.
     *
     * @param collectLimit The maximum number of collects for this publication. 0 for no limit.
     * @param referralFee The referral fee associated with this publication.
     * @param followerOnly True if only followers of publisher may collect the post.
     * @param endTimestamp The end timestamp after which collecting is impossible. 0 for no expiry.
     * @param recipient Recipient of collect fees.
     */
    struct PayWhatYouWantCollectModuleInitData {
        uint96 collectLimit;
        uint16 referralFee;
        bool followerOnly;
        uint72 endTimestamp;
        address recipient;
    }

    error InitParamsInvalid();

    constructor(
        address hub,
        address actionModule,
        address moduleRegistry
    )
        Ownable()
        BaseFeeCollectModule(hub, actionModule, moduleRegistry)
        LensModuleMetadata()
    {}

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
            initData.referralFee > BPS_MAX ||
            (initData.endTimestamp != 0 &&
                initData.endTimestamp < block.timestamp)
        ) {
            revert InitParamsInvalid();
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
        _validateInitData(initData);
        BaseFeeCollectModuleInitData
            memory baseInitData = BaseFeeCollectModuleInitData({
                amount: 0,
                collectLimit: initData.collectLimit,
                currency: address(0),
                referralFee: initData.referralFee,
                followerOnly: initData.followerOnly,
                endTimestamp: initData.endTimestamp,
                recipient: initData.recipient
            });
        _storeBasePublicationCollectParameters(profileId, pubId, baseInitData);
        return data;
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
        (address currency, uint256 amount) = abi.decode(
            processCollectParams.data,
            (address, uint256)
        );

        // free collect
        if (amount == 0) {
            return;
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
