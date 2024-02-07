// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

struct QuestionDataV2 {
    /// @notice Request timestamp, set when a request is made to the Optimistic Oracle
    /// @dev Used to identify the request and NOT used by the DVM to determine validity
    uint256 requestTimestamp;
    /// @notice Reward offered to a successful proposer
    uint256 reward;
    /// @notice Additional bond required by Optimistic oracle proposers/disputers
    uint256 proposalBond;
    /// @notice Emergency resolution timestamp, set when a market is flagged for emergency resolution
    uint256 emergencyResolutionTimestamp;
    /// @notice Flag marking whether a question is resolved
    bool resolved;
    /// @notice Flag marking whether a question is paused
    bool paused;
    /// @notice Flag marking whether a question has been reset. A question can only be reset once
    bool reset;
    /// @notice ERC20 token address used for payment of rewards, proposal bonds and fees
    address rewardToken;
    /// @notice The address of the question creator
    address creator;
    /// @notice Data used to resolve a condition
    bytes ancillaryData;
}

interface IUmaCtfAdapterEE {
    error NotInitialized();
    error NotFlagged();
    error NotReadyToResolve();
    error Resolved();
    error Initialized();
    error UnsupportedToken();
    error Flagged();
    error Paused();
    error SafetyPeriodNotPassed();
    error PriceNotAvailable();
    error InvalidAncillaryData();
    error NotOptimisticOracle();
    error InvalidOOPrice();
    error InvalidPayouts();

    /// @notice Emitted when a questionID is initialized
    event QuestionInitialized(
        bytes32 indexed questionID,
        uint256 indexed requestTimestamp,
        address indexed creator,
        bytes ancillaryData,
        address rewardToken,
        uint256 reward,
        uint256 proposalBond
    );

    /// @notice Emitted when a question is paused by an authorized user
    event QuestionPaused(bytes32 indexed questionID);

    /// @notice Emitted when a question is unpaused by an authorized user
    event QuestionUnpaused(bytes32 indexed questionID);

    /// @notice Emitted when a question is flagged by an admin for emergency resolution
    event QuestionFlagged(bytes32 indexed questionID);

    /// @notice Emitted when a question is reset
    event QuestionReset(bytes32 indexed questionID);

    /// @notice Emitted when a question is resolved
    event QuestionResolved(
        bytes32 indexed questionID,
        int256 indexed settledPrice,
        uint256[] payouts
    );

    /// @notice Emitted when a question is emergency resolved
    event QuestionEmergencyResolved(
        bytes32 indexed questionID,
        uint256[] payouts
    );
}

interface IUmaCtfAdapterV2 is IUmaCtfAdapterEE {
    /// @notice Initializes a question
    /// Atomically adds the question to the Adapter, prepares it on the ConditionalTokens Framework and requests a price from the OO.
    /// If a reward is provided, the caller must have approved the Adapter as spender and have enough rewardToken
    /// to pay for the price request.
    /// Prepares the condition using the Adapter as the oracle and a fixed outcome slot count = 2.
    /// @param ancillaryData - Data used to resolve a question
    /// @param rewardToken   - ERC20 token address used for payment of rewards and fees
    /// @param reward        - Reward offered to a successful proposer
    /// @param proposalBond  - Bond required to be posted by OO proposers/disputers. If 0, the default OO bond is used.
    function initialize(
        bytes memory ancillaryData,
        address rewardToken,
        uint256 reward,
        uint256 proposalBond
    ) external returns (bytes32);

    /// @notice Resolves a question
    /// Pulls price information from the OO and resolves the underlying CTF market.
    /// Reverts if price is not available on the OO
    /// Resets the question if the price returned by the OO is the Ignore price
    /// @param questionID - The unique questionID of the question
    function resolve(bytes32 questionID) external;

    /// @notice Flags a market for emergency resolution
    /// @param questionID - The unique questionID of the question
    function flag(bytes32 questionID) external;

    /// @notice Allows an admin to reset a question, sending out a new price request to the OO.
    /// Failsafe to be used if the priceDisputed callback reverts during execution.
    /// @param questionID - The unique questionID
    function reset(bytes32 questionID) external;

    /// @notice Allows an admin to pause market resolution in an emergency
    /// @param questionID - The unique questionID of the question
    function pause(bytes32 questionID) external;

    /// @notice Allows an admin to unpause market resolution in an emergency
    /// @param questionID - The unique questionID of the question
    function unpause(bytes32 questionID) external;

    /// @notice Gets the QuestionData for the given questionID
    /// @param questionID - The unique questionID
    function getQuestion(
        bytes32 questionID
    ) external returns (QuestionDataV2 memory);

    /// @notice Checks whether a questionID is ready to be resolved
    /// @param questionID - The unique questionID
    function ready(bytes32 questionID) external view returns (bool);
}
