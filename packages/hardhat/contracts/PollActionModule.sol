// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IEAS, Attestation, AttestationRequest, AttestationRequestData} from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
import {NO_EXPIRATION_TIME, EMPTY_UID} from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";

import {Types} from "lens-modules/contracts/libraries/constants/Types.sol";
import {IPublicationActionModule} from "lens-modules/contracts/interfaces/IPublicationActionModule.sol";
import {HubRestricted} from "lens-modules/contracts/base/HubRestricted.sol";
import {FollowValidationLib} from "lens-modules/contracts/modules/libraries/FollowValidationLib.sol";

contract PollActionModule is IPublicationActionModule, HubRestricted {
    struct Poll {
        bytes32[4] options;
        bool followerOnly;
        uint40 endTimestamp;
    }

    struct Vote {
        uint256 publicationActedProfileId;
        uint256 publicationActedId;
        uint256 actorProfileId;
        address actorProfileOwner;
        uint8 option;
        uint40 timestamp;
    }

    event PollCreated(
        uint256 indexed profileId,
        uint256 indexed pubId,
        bytes32[4] options,
        bool followerOnly,
        uint40 endTimestamp
    );

    error PollEnded();

    IEAS internal immutable _eas;

    bytes32 internal _schema;

    mapping(uint256 profileId => mapping(uint256 pubId => Poll poll))
        internal _polls;

    mapping(bytes32 fullPubId => mapping(address voter => bytes32 attestation))
        internal _attestations;

    constructor(address hub, IEAS eas, bytes32 schema) HubRestricted(hub) {
        _eas = eas;
        _schema = schema;
    }

    function initializePublicationAction(
        uint256 profileId,
        uint256 pubId,
        address /* transactionExecutor */,
        bytes calldata data
    ) external returns (bytes memory) {
        Poll memory poll = abi.decode(data, (Poll));

        _polls[profileId][pubId] = poll;

        emit PollCreated(
            profileId,
            pubId,
            poll.options,
            poll.followerOnly,
            poll.endTimestamp
        );

        return data;
    }

    function processPublicationAction(
        Types.ProcessActionParams calldata processActionParams
    ) external returns (bytes memory) {
        uint8 pollOption = abi.decode(
            processActionParams.actionModuleData,
            (uint8)
        );

        Poll memory poll = _polls[
            processActionParams.publicationActedProfileId
        ][processActionParams.publicationActedId];

        if (block.timestamp > poll.endTimestamp) revert PollEnded();

        if (poll.followerOnly) {
            FollowValidationLib.validateIsFollowingOrSelf(
                HUB,
                processActionParams.actorProfileId,
                processActionParams.publicationActedProfileId
            );
        }

        Vote memory vote = Vote({
            publicationActedProfileId: processActionParams
                .publicationActedProfileId,
            publicationActedId: processActionParams.publicationActedId,
            actorProfileId: processActionParams.actorProfileId,
            actorProfileOwner: processActionParams.actorProfileOwner,
            option: pollOption,
            timestamp: uint40(block.timestamp)
        });

        bytes memory encodedData = abi.encode(vote);

        AttestationRequest memory request = AttestationRequest({
            schema: _schema,
            data: AttestationRequestData({
                data: encodedData,
                recipient: processActionParams.transactionExecutor,
                expirationTime: NO_EXPIRATION_TIME,
                revocable: false,
                refUID: EMPTY_UID,
                value: 0
            })
        });

        bytes32 uid = _eas.attest(request);

        return abi.encode(uid);
    }
}
