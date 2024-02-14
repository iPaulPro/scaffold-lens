// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {Types} from "lens-modules/contracts/libraries/constants/Types.sol";
import {IPublicationActionModule} from "lens-modules/contracts/interfaces/IPublicationActionModule.sol";
import {HubRestricted} from "lens-modules/contracts/base/HubRestricted.sol";
import {LensModuleMetadata} from "lens-modules/contracts/modules/LensModuleMetadata.sol";
import {IModuleRegistry} from "lens-modules/contracts/interfaces/IModuleRegistry.sol";
import {LensModuleRegistrant} from "lens-modules/contracts/modules/base/LensModuleRegistrant.sol";

import {Order, OrderStatus} from "./libraries/OrderStructs.sol";
import {ICtfExchange} from "./interfaces/ICtfExchange.sol";
import {IConditionalTokens} from "./interfaces/IConditionalTokens.sol";
import {QuestionDataV2, IUmaCtfAdapterV2} from "./interfaces/IUmaCtfAdapterV2.sol";
import {IRegistry} from "./interfaces/IRegistry.sol";

/**
 * @title PolymarketAttestActionModule
 * @author Paul Burke
 *
 * @dev Open Action Module that verifies Polymarket trades that happen in Lens Protocol publications.
 */
contract PolymarketAttestActionModule is
    IPublicationActionModule,
    HubRestricted,
    LensModuleMetadata,
    LensModuleRegistrant
{
    /**
     * @dev Emitted when a Polymarket market is registered.
     * @param publicationActedProfileId Profile ID of the publication to act on.
     * @param publicationActedId Publication ID of the publication to act on.
     * @param oracle Address of the CTF Oracle contract.
     * @param questionId The Polymarket CTF questionID.
     * @param conditionId Polymarket Market Condition ID.
     * @param tokenIds Array of the CTF Position IDs (Binary Outcome Token IDs).
     */
    event MarketRegistered(
        uint256 indexed publicationActedProfileId,
        uint256 indexed publicationActedId,
        address oracle,
        bytes32 questionId,
        bytes32 indexed conditionId,
        uint256[2] tokenIds
    );

    /**
     * @dev Emitted when a Polymarket market order is verified.
     * @param publicationActedProfileId Profile ID of the publication acted on.
     * @param publicationActedId Publication ID of the publication acted on.
     * @param actorProfileId Profile ID of the actor.
     * @param actorProfileOwner Address of the owner of the actor profile.
     * @param oracle Address of the CTF Oracle contract.
     * @param questionId The Polymarket CTF questionID.
     * @param conditionId Polymarket Market Condition ID.
     * @param order A Polymarket Order.
     */
    event OrderVerified(
        uint256 indexed publicationActedProfileId,
        uint256 indexed publicationActedId,
        uint256 actorProfileId,
        address indexed actorProfileOwner,
        address oracle,
        bytes32 questionId,
        bytes32 conditionId,
        Order order
    );

    error OracleMustBeProvided();
    error OracleNotSupported();
    error QuestionIdMustBeProvided();
    error QuestionNotFound();
    error MarketNotFound();
    error OrderMustBeProvided();
    error BinaryOutcomesInvalid();
    error ConditionIdDoesNotMatch();
    error OrderNotSignedByActor();
    error OrderInvalid();

    /**
     * @dev Number of outcome slots for a Polymarket market. Always 2 for binary outcomes.
     */
    uint8 public constant OUTCOME_SLOT_COUNT = 2;

    /**
     * @dev Registry for associating Polymarket markets with publications.
     */
    mapping(uint256 profileId => mapping(uint256 pubId => bytes32 questionId))
        internal _questionIds;

    /**
     * @dev Mapping of Polymarket Market orders for publications.
     */
    mapping(uint256 profileId => mapping(uint256 pubId => Order[] orders))
        internal _orders;

    /**
     * @dev Polymarket CTF Exchange contract.
     */
    ICtfExchange internal immutable _exchange;

    /**
     * @dev Polymarket Conditional Tokens Framework (CTF) contract.
     */
    IConditionalTokens internal immutable _conditionalTokens;

    /**
     * @dev The collateral token for the CTF.
     */
    IERC20 internal immutable _collateralToken;

    IUmaCtfAdapterV2 internal immutable _umaCtfAdapterV2;

    constructor(
        address lensHub,
        IModuleRegistry lensModuleRegistry,
        ICtfExchange exchange,
        IERC20 collateralToken,
        IConditionalTokens conditionalTokens,
        IUmaCtfAdapterV2 umaCtfAdapterV2
    )
        Ownable(msg.sender)
        HubRestricted(lensHub)
        LensModuleMetadata()
        LensModuleRegistrant(lensModuleRegistry)
    {
        _exchange = exchange;
        _collateralToken = collateralToken;
        _conditionalTokens = conditionalTokens;
        _umaCtfAdapterV2 = umaCtfAdapterV2;
    }

    function getExchange() external view returns (address) {
        return address(_exchange);
    }

    function getCollateralToken() external view returns (address) {
        return address(_collateralToken);
    }

    function getConditionalTokens() external view returns (address) {
        return address(_conditionalTokens);
    }

    function getOracle() public view returns (address) {
        return address(_umaCtfAdapterV2);
    }

    /**
     * @dev Returns the Polymarket Market Data for a publication.
     * @param profileId ID of the profile.
     * @param pubId ID of the publication.
     * @return The questionId for the Polymarket Market.
     */
    function getQuestionId(
        uint256 profileId,
        uint256 pubId
    ) external view returns (bytes32) {
        return _questionIds[profileId][pubId];
    }

    /**
     * @dev Returns the Polymarket Market Condition ID for a publication.
     * @param profileId ID of the profile.
     * @param pubId ID of the publication.
     * @return Polymarket Market Condition ID.
     */
    function getConditionId(
        uint256 profileId,
        uint256 pubId
    ) public view returns (bytes32) {
        bytes32 questionId = _questionIds[profileId][pubId];
        bytes32 conditionId = _conditionalTokens.getConditionId(
            getOracle(),
            questionId,
            OUTCOME_SLOT_COUNT
        );
        return conditionId;
    }

    /**
     * @dev Returns the Polymarket order count for a publication.
     * @param profileId ID of the profile.
     * @param pubId ID of the publication.
     * @return Polymarket order count.
     */
    function getTotalOrderCount(
        uint256 profileId,
        uint256 pubId
    ) external view returns (uint256) {
        return _orders[profileId][pubId].length;
    }

    /**
     * @dev Returns the Polymarket order at an index for a publication.
     * @param profileId ID of the profile.
     * @param pubId ID of the publication.
     * @param index Index of the order.
     * @return Polymarket order.
     */
    function getOrderAtIndex(
        uint256 profileId,
        uint256 pubId,
        uint256 index
    ) external view returns (Order memory) {
        return _orders[profileId][pubId][index];
    }

    /**
     * @dev Returns the Polymarket order count for a position index (1 for "YES", 2 for "NO") for a publication.
     * @param profileId ID of the profile.
     * @param pubId ID of the publication.
     * @param positionIndex Index of the positionID.
     * @return Polymarket order count for the position index.
     */
    function getOrderCountForPositionIndex(
        uint256 profileId,
        uint256 pubId,
        uint256 positionIndex
    ) external view returns (uint256) {
        bytes32 conditionId = getConditionId(profileId, pubId);
        bytes32 collectionId = _conditionalTokens.getCollectionId(
            bytes32(0),
            conditionId,
            positionIndex
        );
        uint256 tokenId = _conditionalTokens.getPositionId(
            _collateralToken,
            collectionId
        );

        uint256 count = 0;
        for (uint256 i = 0; i < _orders[profileId][pubId].length; i++) {
            if (_orders[profileId][pubId][i].tokenId == tokenId) {
                count++;
            }
        }
        return count;
    }

    function supportsInterface(
        bytes4 interfaceID
    ) public pure virtual override returns (bool) {
        return
            interfaceID == type(IPublicationActionModule).interfaceId ||
            super.supportsInterface(interfaceID);
    }

    /**
     * @dev Returns the Gnosis PositionId for a Polymarket Market Condition ID and index.
     * @param conditionId Polymarket Market Condition ID.
     * @param index Index of the outcome.
     * @return Position ID.
     */
    function getPositionIdFromCondition(
        bytes32 conditionId,
        uint8 index
    ) internal view returns (uint256) {
        bytes32 collectionId = _conditionalTokens.getCollectionId(
            bytes32(0),
            conditionId,
            index
        );
        return _conditionalTokens.getPositionId(_collateralToken, collectionId);
    }

    /**
     * @dev Returns the ancillary question data for a market.
     * @param questionId The CTF questionID.
     * @return Ancillary question data for the Polymarket market.
     */
    function getQuestionData(
        bytes32 questionId
    ) internal returns (bytes memory) {
        QuestionDataV2 memory question = _umaCtfAdapterV2.getQuestion(
            questionId
        );
        return question.ancillaryData;
    }

    /**
     * @dev Initializes the module. The initialization calldata is the CTF questionID.
     * @param profileId ID of the profile.
     * @param pubId ID of the publication.
     * @param data Initialization calldata.
     * @return The Condition ID, the question ancillary data, and an array of the CTF Position IDs (Binary Outcome Token IDs).
     */
    function initializePublicationAction(
        uint256 profileId,
        uint256 pubId,
        address /* transactionExecutor */,
        bytes calldata data
    ) external override onlyHub returns (bytes memory) {
        bytes32 questionId = abi.decode(data, (bytes32));
        address oracle = getOracle();

        if (questionId == 0) {
            revert QuestionIdMustBeProvided();
        }

        bytes memory questionData = getQuestionData(questionId);
        if (questionData.length == 0) {
            revert QuestionNotFound();
        }

        bytes32 conditionId = _conditionalTokens.getConditionId(
            oracle,
            questionId,
            OUTCOME_SLOT_COUNT
        );

        if (conditionId == 0) {
            revert MarketNotFound();
        }

        // Get the token IDs (positionIds) for the binary outcomes
        uint256 yesTokenId = getPositionIdFromCondition(conditionId, 1);
        uint256 noTokenId = getPositionIdFromCondition(conditionId, 2);

        if (yesTokenId == 0 || noTokenId == 0) {
            revert BinaryOutcomesInvalid();
        }

        // Register the question ID
        _questionIds[profileId][pubId] = questionId;

        emit MarketRegistered(
            profileId,
            pubId,
            oracle,
            questionId,
            conditionId,
            [yesTokenId, noTokenId]
        );

        return abi.encode(conditionId, questionData, [yesTokenId, noTokenId]);
    }

    /**
     * @dev Ensures that the order token matches the registered market for the publication,
     * the signer of  the order is the same as the actor, and the order is valid.
     * @param params Parameters for the action module including the Order tuple.
     * @return The Order hash.
     */
    function processPublicationAction(
        Types.ProcessActionParams calldata params
    ) external override onlyHub returns (bytes memory) {
        Order memory order = abi.decode(params.actionModuleData, (Order));
        if (order.tokenId == 0) {
            revert OrderMustBeProvided();
        }

        uint256 profileId = params.publicationActedProfileId;
        uint256 pubId = params.publicationActedId;

        // Ensure the market is registered for this publication
        bytes32 conditionId = getConditionId(profileId, pubId);
        if (conditionId == 0) {
            revert MarketNotFound();
        }

        // Check that the registered conditionId matches the order
        bytes32 conditionIdFromToken = _exchange.getConditionId(order.tokenId);
        if (conditionId != conditionIdFromToken) {
            revert ConditionIdDoesNotMatch();
        }

        // Ensure the order is signed by the actor
        if (order.signer != params.actorProfileOwner) {
            revert OrderNotSignedByActor();
        }

        bytes32 orderHash = _exchange.hashOrder(order);

        // Ensure the order is valid
        OrderStatus memory status = _exchange.getOrderStatus(orderHash);
        if (!status.isFilledOrCancelled && status.remaining == 0) {
            revert OrderInvalid();
        }

        bytes32 questionId = _questionIds[profileId][pubId];

        _orders[profileId][pubId].push(order);

        emit OrderVerified(
            profileId,
            pubId,
            params.actorProfileId,
            params.actorProfileOwner,
            getOracle(),
            questionId,
            conditionId,
            order
        );

        return abi.encode(conditionId, orderHash);
    }
}
