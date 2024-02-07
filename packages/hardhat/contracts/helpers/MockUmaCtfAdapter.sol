// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IUmaCtfAdapterV2, QuestionDataV2} from "../interfaces/IUmaCtfAdapterV2.sol";
import {AncillaryDataLib} from "../libraries/AncillaryDataLib.sol";

contract MockUmaCtfAdapter is IUmaCtfAdapterV2 {
    /// @notice Mapping of questionID to QuestionData
    mapping(bytes32 => QuestionDataV2) public questions;

    /// @notice Maximum ancillary data length
    uint256 public constant maxAncillaryData = 8139;

    /// @notice Override the creator address to test for known results
    address internal immutable _creator;

    constructor(address creator) {
        _creator = creator;
    }

    function initialize(
        bytes memory ancillaryData,
        address rewardToken,
        uint256 reward,
        uint256 proposalBond
    ) external override returns (bytes32) {
        bytes memory data = AncillaryDataLib._appendAncillaryData(
            _creator,
            ancillaryData
        );
        if (ancillaryData.length == 0 || data.length > maxAncillaryData)
            revert InvalidAncillaryData();

        bytes32 questionID = keccak256(data);

        uint256 timestamp = block.timestamp;

        // Persist the question parameters in storage
        _saveQuestion(
            _creator,
            questionID,
            data,
            timestamp,
            rewardToken,
            reward,
            proposalBond
        );

        return questionID;
    }

    function _saveQuestion(
        address creator,
        bytes32 questionID,
        bytes memory ancillaryData,
        uint256 requestTimestamp,
        address rewardToken,
        uint256 reward,
        uint256 proposalBond
    ) internal {
        questions[questionID] = QuestionDataV2({
            requestTimestamp: requestTimestamp,
            reward: reward,
            proposalBond: proposalBond,
            emergencyResolutionTimestamp: 0,
            resolved: false,
            paused: false,
            reset: false,
            rewardToken: rewardToken,
            creator: creator,
            ancillaryData: ancillaryData
        });
    }

    function ready(bytes32 questionID) public pure override returns (bool) {
        return true;
    }

    function resolve(bytes32 questionID) public pure override {
        return;
    }

    function flag(bytes32 questionID) public pure override {
        return;
    }

    function reset(bytes32 questionID) public pure override {
        return;
    }

    function pause(bytes32 questionID) public pure override {
        return;
    }

    function unpause(bytes32 questionID) public pure override {
        return;
    }

    function getQuestion(
        bytes32 questionID
    ) public view override returns (QuestionDataV2 memory) {
        return questions[questionID];
    }
}
