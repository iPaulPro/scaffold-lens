// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import {IFlexCollectModule} from "./IFlexCollectModule.sol";
import {ProcessCollectParams} from "./IFlexCollectModule.sol";

/**
 * @notice A struct containing the necessary data to execute collect actions on a publication.
 *
 * @param amount The collecting cost associated with this publication. 0 for free collect.
 * @param collectLimit The maximum number of collects for this publication. 0 for no limit.
 * @param currency The currency associated with this publication.
 * @param currentCollects The current number of collects for this publication.
 * @param referralFee The referral fee associated with this publication.
 * @param followerOnly True if only followers of publisher may collect the post.
 * @param endTimestamp The end timestamp after which collecting is impossible. 0 for no expiry.
 * @param recipient Recipient of collect fees.
 */
struct BaseProfilePublicationData {
    uint160 amount;
    uint96 collectLimit;
    address currency;
    uint96 currentCollects;
    address recipient;
    uint16 referralFee;
    bool followerOnly;
    uint72 endTimestamp;
}

/**
 * @notice A struct containing the necessary data to initialize this Base Collect Module.
 *
 * @param amount The collecting cost for a single mint. 0 for free collect.
 * @param collectLimit The maximum number of collects for this publication. 0 for no limit.
 * @param currency The currency associated with this publication.
 * @param referralFee The referral fee associated with this publication.
 * @param followerOnly True if only followers of publisher may collect the post.
 * @param endTimestamp The end timestamp after which collecting is impossible. 0 for no expiry.
 * @param recipient Recipient of collect fees.
 */
struct BaseFeeFlexCollectModuleInitData {
    uint160 amount;
    uint96 collectLimit;
    address currency;
    uint16 referralFee;
    bool followerOnly;
    uint72 endTimestamp;
    address recipient;
}

interface IBaseFeeFlexCollectModule is IFlexCollectModule {
    /**
     * @notice Returns the Base publication data for a given publication, or an empty struct if that publication was not
     * initialized with this module.
     *
     * @param profileId The token ID of the profile mapped to the publication to query.
     * @param pubId The publication ID of the publication to query.
     *
     * @return The BaseProfilePublicationData struct mapped to that publication.
     */
    function getBasePublicationData(
        uint256 profileId,
        uint256 pubId
    ) external view returns (BaseProfilePublicationData memory);

    /**
     * @notice Calculates and returns the collect fee of a publication.
     * @dev Override this function to use a different formula for the fee.
     *
     * @return The collect fee of the specified publication.
     */
    function calculateFee(
        ProcessCollectParams calldata processCollectParams
    ) external view returns (uint256);
}
