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

contract EasPollActionModule is
    IPublicationActionModule,
    HubRestricted,
    LensModuleMetadata,
    LensModuleRegistrant,
    SchemaResolver
{
    struct Poll {
        bytes32[4] options;
        bool followerOnly;
        uint40 endTimestamp;
        bool signatureRequired;
    }

    struct Vote {
        uint256 publicationProfileId;
        uint256 publicationId;
        uint256 actorProfileId;
        address actorProfileOwner;
        address transactionExecutor;
        uint8 optionIndex;
        uint40 timestamp;
    }

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

    string public constant SCHEMA =
        "uint256 publicationProfileId,uint256 publicationId,uint256 actorProfileId,address actorProfileOwner,address transactionExecutor,uint8 optionIndex,uint40 timestamp";

    bytes32 public schemaUid;

    mapping(uint256 profileId => mapping(uint256 pubId => Poll poll))
        internal _polls;

    mapping(uint256 profileId => mapping(uint256 pubId => mapping(address attester => bytes32 attestationUid)))
        internal _attestations;

    mapping(uint256 profileId => mapping(uint256 pubId => address[] actors))
        internal _actors;

    constructor(
        address hub,
        IModuleRegistry moduleRegistry,
        IEAS eas
    )
        Ownable()
        HubRestricted(hub)
        LensModuleMetadata()
        LensModuleRegistrant(moduleRegistry)
        SchemaResolver(eas)
    {}

    function setSchemaUid(bytes32 _schemaUid) external onlyOwner {
        schemaUid = _schemaUid;
    }

    function getSchemaRecord() external view returns (SchemaRecord memory) {
        ISchemaRegistry registry = ISchemaRegistry(_eas.getSchemaRegistry());
        return registry.getSchema(schemaUid);
    }

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

    function getPoll(
        uint256 profileId,
        uint256 pubId
    ) external view returns (Poll memory) {
        return _polls[profileId][pubId];
    }

    function getAttestationCount(
        uint256 profileId,
        uint256 pubId
    ) external view returns (uint256) {
        return _actors[profileId][pubId].length;
    }

    function getAttestationUid(
        uint256 profileId,
        uint256 pubId,
        address actor
    ) external view returns (bytes32) {
        return _attestations[profileId][pubId][actor];
    }

    function getAttestation(
        uint256 profileId,
        uint256 pubId,
        address actor
    ) external view returns (Attestation memory) {
        bytes32 uid = _attestations[profileId][pubId][actor];
        return _eas.getAttestation(uid);
    }

    function getAttestationByIndex(
        uint256 profileId,
        uint256 pubId,
        uint256 index
    ) external view returns (bytes32) {
        address actor = _actors[profileId][pubId][index];
        return _attestations[profileId][pubId][actor];
    }

    function getVote(
        uint256 profileId,
        uint256 pubId,
        address actor
    ) external view returns (Vote memory) {
        bytes32 uid = _attestations[profileId][pubId][actor];
        return abi.decode(_eas.getAttestation(uid).data, (Vote));
    }

    function getVoteByIndex(
        uint256 profileId,
        uint256 pubId,
        uint256 index
    ) external view returns (Vote memory) {
        address actor = _actors[profileId][pubId][index];
        bytes32 uid = _attestations[profileId][pubId][actor];
        return abi.decode(_eas.getAttestation(uid).data, (Vote));
    }

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

    function _validatePoll(
        Poll memory poll,
        uint256 publicationProfileId,
        uint256 actorProfileId
    ) internal view {
        if (poll.options.length == 0) revert PollDoesNotExist();

        if (block.timestamp > poll.endTimestamp) revert PollEnded();

        if (poll.followerOnly) {
            FollowValidationLib.validateIsFollowingOrSelf(
                HUB,
                actorProfileId,
                publicationProfileId
            );
        }
    }

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

    function onAttest(
        Attestation calldata attestation,
        uint256 /*value*/
    ) internal override returns (bool) {
        Vote memory vote = abi.decode(attestation.data, (Vote));

        uint256 profileId = vote.publicationProfileId;
        uint256 pubId = vote.publicationId;

        Poll memory poll = _polls[profileId][pubId];

        _validatePoll(poll, profileId, vote.actorProfileId);

        if (
            poll.signatureRequired &&
            attestation.attester != vote.transactionExecutor
        ) {
            revert SignatureInvalid();
        }

        bytes32 existingAttestation = _attestations[profileId][pubId][
            vote.actorProfileOwner
        ];
        if (existingAttestation != bytes32(0)) revert VotedAlready();

        emit AttestationValidated(poll, vote, attestation.uid);

        return true;
    }

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
