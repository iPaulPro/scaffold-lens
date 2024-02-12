// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

// prettier-ignore
import {
    IEAS,
    Attestation,
    AttestationRequest,
    DelegatedAttestationRequest,
    AttestationRequestData,
    Signature
} from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";
import {NO_EXPIRATION_TIME, EMPTY_UID} from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";
import {SchemaResolver} from "@ethereum-attestation-service/eas-contracts/contracts/resolver/SchemaResolver.sol";
import {ISchemaRegistry, SchemaRecord} from "@ethereum-attestation-service/eas-contracts/contracts/ISchemaRegistry.sol";

import {Types} from "lens-modules/contracts/libraries/constants/Types.sol";
import {IPublicationActionModule} from "lens-modules/contracts/interfaces/IPublicationActionModule.sol";
import {HubRestricted} from "lens-modules/contracts/base/HubRestricted.sol";
import {IModuleRegistry} from "lens-modules/contracts/interfaces/IModuleRegistry.sol";
import {LensModuleMetadata} from "lens-modules/contracts/modules/LensModuleMetadata.sol";
import {FollowValidationLib} from "lens-modules/contracts/modules/libraries/FollowValidationLib.sol";
import {LensModuleMetadata} from "lens-modules/contracts/modules/LensModuleMetadata.sol";

import {LensModuleRegistrant} from "./base/LensModuleRegistrant.sol";

/**
 * @title EasPollActionModule
 * @author Paul Burke
 *
 * @dev An Open Action Module for creating and voting on polls attached to
 * Lens Publications that uses the Ethereum Attestation Service (EAS) to
 * record votes.
 */
contract EasPollActionModule is
    IPublicationActionModule,
    HubRestricted,
    LensModuleMetadata,
    LensModuleRegistrant,
    SchemaResolver
{
    /**
     * @dev The init calldata poll struct.
     */
    struct Poll {
        /// @dev The options for the poll.
        bytes32[4] options;
        /// @dev Whether the poll is only for followers of the publication author.
        bool followersOnly;
        /// @dev The end timestamp for the poll since epoch in seconds.
        uint40 endTimestamp;
        /// @dev Whether a signature is required for the vote.
        bool signatureRequired;
    }

    /**
     * @dev The process calldata vote struct.
     */
    struct Vote {
        /// @dev The profile id of the publication author.
        uint256 publicationProfileId;
        /// @dev The publication id.
        uint256 publicationId;
        /// @dev The profile id of the actor.
        uint256 actorProfileId;
        /// @dev The address of the actor profile owner.
        address actorProfileOwner;
        /// @dev The address of the transaction executor.
        address transactionExecutor;
        /// @dev The index of the vote option.
        uint8 optionIndex;
        /// @dev The timestamp of the vote since epoch in seconds.
        uint40 timestamp;
    }

    /**
     * @dev The process action result.
     */
    struct AttestedVote {
        Vote vote;
        bytes32 attestationUid;
    }

    event SchemaRegistered(SchemaRecord schemaRecord);

    event PollCreated(
        uint256 indexed profileId,
        uint256 indexed pubId,
        Poll poll
    );

    event AttestationValidated(Poll poll, Vote vote, bytes32 attestationUid);
    event AttestationRevoked(bytes32 attestationUid);
    event AttestationCreated(Poll poll, AttestedVote attestedVote);

    error PollEnded();
    error PollDoesNotExist();
    error PollInvalid();
    error PollAlreadyExists();
    error VotedAlready();
    error VoteInvalid();
    error SignatureInvalid();
    error SchemaNotRegistered();
    error SchemaInvalid();

    /**
     * @dev The EAS Schema for the poll action.
     */
    string public constant SCHEMA =
        "uint256 publicationProfileId,uint256 publicationId,uint256 actorProfileId,address actorProfileOwner,address transactionExecutor,uint8 optionIndex,uint40 timestamp";

    /**
     * @dev The EAS Schema UID for the poll action.
     */
    bytes32 public schemaUid;

    /**
     * @dev Mapping of polls for publications.
     */
    mapping(uint256 profileId => mapping(uint256 pubId => Poll poll))
        internal _polls;

    /**
     * @dev Mapping of vote attestations for polls.
     */
    mapping(uint256 profileId => mapping(uint256 pubId => mapping(address attester => bytes32 attestationUid)))
        internal _attestations;

    /**
     * @dev Mapping of actors of votes for publications.
     */
    mapping(uint256 profileId => mapping(uint256 pubId => address[] actors))
        internal _actors;

    constructor(
        address lensHub,
        IModuleRegistry moduleRegistry,
        IEAS eas
    )
        Ownable()
        HubRestricted(lensHub)
        LensModuleMetadata()
        LensModuleRegistrant(moduleRegistry)
        SchemaResolver(eas)
    {}

    function setSchemaUid(bytes32 _schemaUid) external onlyOwner {
        ISchemaRegistry registry = ISchemaRegistry(_eas.getSchemaRegistry());
        SchemaRecord memory record = registry.getSchema(_schemaUid);
        if (
            record.resolver != this ||
            keccak256(abi.encodePacked(record.schema)) !=
            keccak256(abi.encodePacked(SCHEMA))
        ) {
            revert SchemaInvalid();
        }
        schemaUid = _schemaUid;
    }

    /**
     * @dev Get the EAS Schema record used for attestations.
     * @return The full schema record
     */
    function getSchemaRecord() external view returns (SchemaRecord memory) {
        ISchemaRegistry registry = ISchemaRegistry(_eas.getSchemaRegistry());
        return registry.getSchema(schemaUid);
    }

    /**
     * @dev Registers the EAS Schema to use for attestations using {SCHEMA} and this contract as the Resolver.
     */
    function registerSchema() external onlyOwner {
        ISchemaRegistry registry = _eas.getSchemaRegistry();
        schemaUid = registry.register(SCHEMA, this, true);
        emit SchemaRegistered(
            SchemaRecord({
                uid: schemaUid,
                resolver: this,
                revocable: true,
                schema: SCHEMA
            })
        );
    }

    /**
     * @dev Get the poll for a publication.
     * @param profileId The profile id of the publication author
     * @param pubId The publication id
     * @return The poll
     */
    function getPoll(
        uint256 profileId,
        uint256 pubId
    ) external view returns (Poll memory) {
        return _polls[profileId][pubId];
    }

    /**
     * @dev Get the number of votes/attestations for a publication.
     * @param profileId The profile id of the publication author
     * @param pubId The publication id
     * @return The number of attestations
     */
    function getAttestationCount(
        uint256 profileId,
        uint256 pubId
    ) external view returns (uint256) {
        return _actors[profileId][pubId].length;
    }

    /**
     * @dev Get the attestation uid for an vote.
     * @param profileId The profile id of the publication author
     * @param pubId The publication id
     * @param actor The actor address
     * @return The attestation uid
     */
    function getAttestationUid(
        uint256 profileId,
        uint256 pubId,
        address actor
    ) external view returns (bytes32) {
        return _attestations[profileId][pubId][actor];
    }

    /**
     * @dev Get the attestation for an vote.
     * @param profileId The profile id of the publication author
     * @param pubId The publication id
     * @param actor The actor address
     * @return The attestation
     */
    function getAttestation(
        uint256 profileId,
        uint256 pubId,
        address actor
    ) external view returns (Attestation memory) {
        bytes32 uid = _attestations[profileId][pubId][actor];
        return _eas.getAttestation(uid);
    }

    /**
     * @dev Get the attestation for a vote at a specific index.
     * @param profileId The profile id of the publication author
     * @param pubId The publication id
     * @param index The index of the vote
     * @return The vote
     */
    function getAttestationByIndex(
        uint256 profileId,
        uint256 pubId,
        uint256 index
    ) external view returns (bytes32) {
        address actor = _actors[profileId][pubId][index];
        return _attestations[profileId][pubId][actor];
    }

    /**
     * @dev Get the attested vote for an actor.
     * @param profileId The profile id of the publication author
     * @param pubId The publication id
     * @param actor The actor address
     * @return The vote
     */
    function getVote(
        uint256 profileId,
        uint256 pubId,
        address actor
    ) external view returns (Vote memory) {
        bytes32 uid = _attestations[profileId][pubId][actor];
        return abi.decode(_eas.getAttestation(uid).data, (Vote));
    }

    /**
     * @dev Get the attestation for a vote at a specific index.
     * @param profileId The profile id of the publication author
     * @param pubId The publication id
     * @param index The index of the vote
     * @return The vote
     */
    function getVoteByIndex(
        uint256 profileId,
        uint256 pubId,
        uint256 index
    ) external view returns (Vote memory) {
        address actor = _actors[profileId][pubId][index];
        bytes32 uid = _attestations[profileId][pubId][actor];
        return abi.decode(_eas.getAttestation(uid).data, (Vote));
    }

    /// @inheritdoc IPublicationActionModule
    function initializePublicationAction(
        uint256 profileId,
        uint256 pubId,
        address /* transactionExecutor */,
        bytes calldata data
    ) external override onlyHub returns (bytes memory) {
        Poll memory poll = abi.decode(data, (Poll));

        if (poll.endTimestamp <= block.timestamp || poll.options.length < 2) {
            revert PollInvalid();
        }

        if (_polls[profileId][pubId].endTimestamp > 0) {
            revert PollAlreadyExists();
        }

        _polls[profileId][pubId] = poll;

        emit PollCreated(profileId, pubId, poll);

        return abi.encode(poll, address(_eas), schemaUid);
    }

    /**
     * @dev Validate a poll exists, hasn't ended, and the actor is allowed to vote.
     * @param poll The poll
     * @param publicationProfileId The profile id of the publication author
     * @param actorProfileId The profile id of the actor
     * @param attester The attester address
     * @param transactionExecutor The transaction executor address
     */
    function _validatePoll(
        Poll memory poll,
        uint256 publicationProfileId,
        uint256 actorProfileId,
        address attester,
        address transactionExecutor
    ) internal view {
        if (poll.options.length == 0) revert PollDoesNotExist();

        if (block.timestamp > poll.endTimestamp) revert PollEnded();

        if (poll.followersOnly) {
            FollowValidationLib.validateIsFollowingOrSelf(
                HUB,
                actorProfileId,
                publicationProfileId
            );
        }

        if (poll.signatureRequired && attester != transactionExecutor) {
            revert SignatureInvalid();
        }
    }

    /**
     * @dev Validate a signed vote params matches the action params.
     * @param vote The vote
     * @param params The process action params
     */
    function _validateVote(
        Vote memory vote,
        Types.ProcessActionParams calldata params
    ) internal pure {
        if (
            vote.publicationProfileId != params.publicationActedProfileId ||
            vote.publicationId != params.publicationActedId ||
            vote.actorProfileId != params.actorProfileId ||
            vote.actorProfileOwner != params.actorProfileOwner
        ) {
            revert VoteInvalid();
        }
    }

    /**
     * @dev Build an attestation request for a vote.
     * @param vote The vote
     * @return The attestation request data
     */
    function _buildAttestationRequest(
        Vote memory vote
    ) internal view returns (AttestationRequestData memory) {
        bytes memory encodedData = abi.encode(vote);
        return
            AttestationRequestData({
                data: encodedData,
                recipient: address(this),
                expirationTime: NO_EXPIRATION_TIME,
                revocable: true,
                refUID: EMPTY_UID,
                value: 0
            });
    }

    /**
     * @dev Creates an attestation from an unsigned vote.
     * @param params The process action params
     * @return The attested vote
     */
    function _processVote(
        Types.ProcessActionParams calldata params
    ) internal returns (AttestedVote memory) {
        Vote memory vote = abi.decode(params.actionModuleData, (Vote));

        _validateVote(vote, params);

        AttestationRequestData
            memory attestationRequestData = _buildAttestationRequest(vote);

        AttestationRequest memory request = AttestationRequest({
            schema: schemaUid,
            data: attestationRequestData
        });

        bytes32 uid = _eas.attest(request);

        return AttestedVote({vote: vote, attestationUid: uid});
    }

    /**
     * @dev Creates an attestation from a signed vote.
     * @param params The process action params
     * @return The attested signed vote
     */
    function _processSignedVote(
        Types.ProcessActionParams calldata params
    ) internal returns (AttestedVote memory) {
        (Vote memory vote, Signature memory signature, uint64 deadline) = abi
            .decode(params.actionModuleData, (Vote, Signature, uint64));

        _validateVote(vote, params);

        AttestationRequestData
            memory attestationRequestData = _buildAttestationRequest(vote);

        DelegatedAttestationRequest
            memory request = DelegatedAttestationRequest({
                schema: schemaUid,
                data: attestationRequestData,
                signature: signature,
                attester: params.transactionExecutor,
                deadline: deadline
            });

        bytes32 uid = _eas.attestByDelegation(request);

        return AttestedVote({vote: vote, attestationUid: uid});
    }

    /// @inheritdoc IPublicationActionModule
    function processPublicationAction(
        Types.ProcessActionParams calldata processActionParams
    ) external override onlyHub returns (bytes memory) {
        uint256 profileId = processActionParams.publicationActedProfileId;
        uint256 pubId = processActionParams.publicationActedId;

        Poll memory poll = _polls[profileId][pubId];

        AttestedVote memory attestedVote;
        if (poll.signatureRequired) {
            attestedVote = _processSignedVote(processActionParams);
        } else {
            attestedVote = _processVote(processActionParams);
        }

        address actor = processActionParams.actorProfileOwner;
        _attestations[profileId][pubId][actor] = attestedVote.attestationUid;
        _actors[profileId][pubId].push(actor);

        emit AttestationCreated(poll, attestedVote);

        return abi.encode(poll, attestedVote);
    }

    /// @inheritdoc SchemaResolver
    function onAttest(
        Attestation calldata attestation,
        uint256 /*value*/
    ) internal override returns (bool) {
        Vote memory vote = abi.decode(attestation.data, (Vote));

        uint256 profileId = vote.publicationProfileId;
        uint256 pubId = vote.publicationId;

        Poll memory poll = _polls[profileId][pubId];

        _validatePoll(
            poll,
            profileId,
            vote.actorProfileId,
            attestation.attester,
            vote.transactionExecutor
        );

        bytes32 existingAttestation = _attestations[profileId][pubId][
            vote.actorProfileOwner
        ];
        if (existingAttestation != bytes32(0)) revert VotedAlready();

        emit AttestationValidated(poll, vote, attestation.uid);

        return true;
    }

    /// @inheritdoc SchemaResolver
    function onRevoke(
        Attestation calldata attestation,
        uint256 /*value*/
    ) internal override returns (bool) {
        Vote memory vote = abi.decode(attestation.data, (Vote));

        uint256 profileId = vote.publicationProfileId;
        uint256 pubId = vote.publicationId;
        address actor = vote.actorProfileOwner;

        delete _attestations[profileId][pubId][actor];

        address[] storage actors = _actors[profileId][pubId];
        uint256 index;

        for (uint i = 0; i < actors.length; i++) {
            if (actors[i] == actor) {
                index = i;
                break;
            }
        }

        actors[index] = actors[actors.length - 1];
        actors.pop();

        emit AttestationRevoked(attestation.uid);

        return true;
    }
}
