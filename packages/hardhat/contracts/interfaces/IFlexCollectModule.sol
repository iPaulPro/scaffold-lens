// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

import {Types} from "lens-modules/contracts/libraries/constants/Types.sol";

struct ProcessCollectParams {
    uint256 publicationCollectedProfileId;
    uint256 publicationCollectedId;
    uint256 collectorProfileId;
    address collectorProfileOwner;
    address transactionExecutor;
    uint256[] referrerProfileIds;
    uint256[] referrerPubIds;
    Types.PublicationType[] referrerPubTypes;
    uint96 mintsAllowed;
    bytes data;
}

/**
 * @notice A struct containing the necessary data to create an ERC-721.
 *
 * @param name The name of the token.
 * @param symbol The symbol of the token.
 * @param royalty The royalty percentage in basis points.
 * @param contractURI The contract-level metadata URI.
 */
struct TokenData {
    bytes32 name;
    bytes32 symbol;
    uint16 royalty;
    bytes32 contractURI;
}

interface IFlexCollectModule {
    /**
     * @notice Initializes data for a given publication being published.
     * @custom:permissions ActionModule.
     *
     * @param profileId The token ID of the profile publishing the publication.
     * @param pubId The associated publication's LensHub publication ID.
     * @param transactionExecutor The owner or an approved delegated executor.
     * @param data Arbitrary data __passed from the user!__ to be decoded.
     *
     * @return bytes Any custom ABI-encoded data. This will be a LensHub event params that can be used by
     * indexers or UIs.
     */
    function initializePublicationCollectModule(
        uint256 profileId,
        uint256 pubId,
        address transactionExecutor,
        bytes calldata data
    ) external returns (bytes memory);

    /**
     * @notice Processes a collect action for a given publication.
     * @custom:permissions ActionModule.
     *
     * @param processCollectParams The parameters for the collect action.
     *
     * @return bytes Any custom ABI-encoded data. This will be a LensHub event params that can be used by
     * indexers or UIs.
     */
    function processCollect(
        ProcessCollectParams calldata processCollectParams
    ) external returns (bytes memory);

    /**
     * @notice Returns the number of mints allowed for a given collect. If zero, no mints
     * are allowed and processPublicationAction is called with the original action data.
     * @custom:permissions ActionModule.
     *
     * @param publicationCollectedProfileId The token ID of the profile mapped to the publication to query.
     * @param publicationCollectedId The publication ID of the publication to query.
     * @param collectData The collectData from the process action params.
     *
     * @return The number of mints allowed in the current transaction. If zero, no mints are allowed.
     */
    function mintsAllowed(
        uint256 publicationCollectedProfileId,
        uint256 publicationCollectedId,
        bytes calldata collectData
    ) external returns (uint96);

    /**
     * @notice Processes a publication action for a given publication. This is called when there are
     * zero mints allowed.
     * @custom:permissions ActionModule.
     *
     * @param processActionParams The parameters for the publication action.
     *
     * @return bytes Any custom ABI-encoded data. This will be a LensHub event params that can be used by
     * indexers or UIs.
     */
    function processPublicationAction(
        Types.ProcessActionParams calldata processActionParams
    ) external returns (bytes memory);

    function getTokenData(
        uint256 profileId,
        uint256 pubId
    ) external view returns (TokenData memory);
}
