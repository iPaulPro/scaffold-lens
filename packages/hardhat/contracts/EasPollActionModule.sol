// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

import {IEAS, Attestation, DelegatedAttestationRequest, AttestationRequestData, Signature} from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
import {NO_EXPIRATION_TIME, EMPTY_UID} from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";

import {Types} from "lens-modules/contracts/libraries/constants/Types.sol";
import {IPublicationActionModule} from "lens-modules/contracts/interfaces/IPublicationActionModule.sol";
import {HubRestricted} from "lens-modules/contracts/base/HubRestricted.sol";
import {IModuleRegistry} from "lens-modules/contracts/interfaces/IModuleRegistry.sol";
import {LensModuleMetadata} from "lens-modules/contracts/modules/LensModuleMetadata.sol";
import {FollowValidationLib} from "lens-modules/contracts/modules/libraries/FollowValidationLib.sol";
import {LensModuleMetadata} from "lens-modules/contracts/modules/LensModuleMetadata.sol";

import {LensModuleRegistrant} from "./base/LensModuleRegistrant.sol";

contract EasPollActionModule is
    IPublicationActionModule,
    HubRestricted,
    LensModuleMetadata,
    LensModuleRegistrant
{
    struct Poll {
        bytes32[4] options;
        bool followerOnly;
        uint40 endTimestamp;
    }

    struct Vote {
        uint256 publicationProfileId;
        uint256 publicationId;
        uint256 actorProfileId;
        address actorProfileOwner;
        uint8 option;
        uint40 timestamp;
    }

    struct AttestedVote {
        bytes32 attestation;
        address attester;
        Signature signature;
    }

    event PollCreated(
        uint256 indexed profileId,
        uint256 indexed pubId,
        Poll poll
    );

    event VoteAttestationCreated(
        uint256 indexed profileId,
        uint256 indexed pubId,
        AttestedVote attestedVote
    );

    error PollEnded();
    error PollDoesNotExist();
    error PollInvalid();
    error PollAlreadyExists();
    error VotedAlready();
    error VoteInvalid();

    IEAS public immutable EAS;

    bytes32 public immutable SCHEMA;

    mapping(uint256 profileId => mapping(uint256 pubId => Poll poll))
        internal _polls;

    mapping(uint256 profileId => mapping(uint256 pubId => mapping(address attester => AttestedVote attestedVote)))
        internal _attestedVotes;

    constructor(
        address hub,
        IModuleRegistry moduleRegistry,
        IEAS eas,
        bytes32 schema
    )
        Ownable()
        HubRestricted(hub)
        LensModuleMetadata()
        LensModuleRegistrant(moduleRegistry)
    {
        EAS = eas;
        SCHEMA = schema;
    }

    function getPoll(
        uint256 profileId,
        uint256 pubId
    ) external view returns (Poll memory) {
        return _polls[profileId][pubId];
    }

    function getVote(
        uint256 profileId,
        uint256 pubId,
        address attester
    ) external view returns (AttestedVote memory) {
        return _attestedVotes[profileId][pubId][attester];
    }

    function getAttestation(
        uint256 profileId,
        uint256 pubId,
        address attester
    ) external view returns (Attestation memory) {
        AttestedVote memory vote = _attestedVotes[profileId][pubId][attester];
        return EAS.getAttestation(vote.attestation);
    }

    function initializePublicationAction(
        uint256 profileId,
        uint256 pubId,
        address /* transactionExecutor */,
        bytes calldata data
    ) external returns (bytes memory) {
        Poll memory poll = abi.decode(data, (Poll));

        if (poll.endTimestamp <= block.timestamp || poll.options.length < 2) {
            revert PollInvalid();
        }

        if (_polls[profileId][pubId].endTimestamp > 0) {
            revert PollAlreadyExists();
        }

        _polls[profileId][pubId] = poll;

        emit PollCreated(profileId, pubId, poll);

        return abi.encode(poll, address(EAS), SCHEMA);
    }

    function processPublicationAction(
        Types.ProcessActionParams calldata processActionParams
    ) external returns (bytes memory) {
        uint256 profileId = processActionParams.publicationActedProfileId;
        uint256 pubId = processActionParams.publicationActedId;
        address transactionExecutor = processActionParams.transactionExecutor;

        AttestedVote memory existingVote = _attestedVotes[profileId][pubId][
            transactionExecutor
        ];
        if (existingVote.attester == transactionExecutor) revert VotedAlready();

        (Vote memory vote, Signature memory signature, uint64 deadline) = abi
            .decode(
                processActionParams.actionModuleData,
                (Vote, Signature, uint64)
            );

        if (
            vote.publicationProfileId != profileId ||
            vote.publicationId != pubId ||
            vote.actorProfileId != processActionParams.actorProfileId ||
            vote.actorProfileOwner != processActionParams.actorProfileOwner
        ) {
            revert VoteInvalid();
        }

        Poll memory poll = _polls[profileId][pubId];

        if (poll.options.length == 0) revert PollDoesNotExist();

        if (block.timestamp > poll.endTimestamp) revert PollEnded();

        if (poll.followerOnly) {
            FollowValidationLib.validateIsFollowingOrSelf(
                HUB,
                processActionParams.actorProfileId,
                profileId
            );
        }

        bytes memory encodedData = abi.encode(vote);

        AttestationRequestData
            memory attestationRequestData = AttestationRequestData({
                data: encodedData,
                recipient: address(this),
                expirationTime: NO_EXPIRATION_TIME,
                revocable: true,
                refUID: EMPTY_UID,
                value: 0
            });

        DelegatedAttestationRequest
            memory request = DelegatedAttestationRequest({
                schema: SCHEMA,
                data: attestationRequestData,
                signature: signature,
                attester: transactionExecutor,
                deadline: deadline
            });

        bytes32 uid = EAS.attestByDelegation(request);

        AttestedVote memory attestedVote = AttestedVote({
            attestation: uid,
            attester: transactionExecutor,
            signature: signature
        });

        _attestedVotes[profileId][pubId][transactionExecutor] = attestedVote;

        emit VoteAttestationCreated(profileId, pubId, attestedVote);

        return abi.encode(attestedVote);
    }
}
