// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import {ISchemaResolver} from "@ethereum-attestation-service/eas-contracts/contracts/resolver/ISchemaResolver.sol";

import {EMPTY_UID} from "@ethereum-attestation-service/eas-contracts/contracts/Common.sol";
import {Semver} from "@ethereum-attestation-service/eas-contracts/contracts/Semver.sol";
import {ISchemaRegistry, SchemaRecord} from "@ethereum-attestation-service/eas-contracts/contracts/ISchemaRegistry.sol";

/// @title MockSchemaRegistry
/// @notice The global schema registry.
contract MockSchemaRegistry is ISchemaRegistry, Semver {
    error AlreadyExists();

    // The global mapping between schema records and their IDs.
    mapping(bytes32 uid => SchemaRecord schemaRecord) private _registry;

    /// @dev Creates a new MockSchemaRegistry instance.
    constructor() Semver(1, 3, 0) {}

    /// @inheritdoc ISchemaRegistry
    function register(
        string calldata schema,
        ISchemaResolver resolver,
        bool revocable
    ) external returns (bytes32) {
        SchemaRecord memory schemaRecord = SchemaRecord({
            uid: EMPTY_UID,
            schema: schema,
            resolver: resolver,
            revocable: revocable
        });

        bytes32 uid = _getUID(schemaRecord);
        if (_registry[uid].uid != EMPTY_UID) {
            revert AlreadyExists();
        }

        schemaRecord.uid = uid;
        _registry[uid] = schemaRecord;

        emit Registered(uid, msg.sender, schemaRecord);

        return uid;
    }

    /// @inheritdoc ISchemaRegistry
    function getSchema(
        bytes32 uid
    ) external view returns (SchemaRecord memory) {
        return _registry[uid];
    }

    /// @dev Calculates a UID for a given schema.
    /// @param schemaRecord The input schema.
    /// @return schema UID.
    function _getUID(
        SchemaRecord memory schemaRecord
    ) private pure returns (bytes32) {
        return
            keccak256(
                abi.encodePacked(
                    schemaRecord.schema,
                    schemaRecord.resolver,
                    schemaRecord.revocable
                )
            );
    }
}
