// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.0;

import {UsernameCore as Core} from "./UsernameCore.sol";
import {IUsername} from "./../../interfaces/IUsername.sol";
import {IAccessControl} from "./../../interfaces/IAccessControl.sol";
import {
    DataElement,
    RuleExecutionData,
    RuleOperation,
    RuleChange,
    RuleConfiguration,
    SourceStamp
} from "./../../types/Types.sol";
import {RuleBasedUsername} from "./RuleBasedUsername.sol";
import {AccessControlled} from "./../../access/AccessControlled.sol";
import {IAccessControl} from "./../../interfaces/IAccessControl.sol";
import {Events} from "./../../types/Events.sol";
import {LensERC721} from "./../../base/LensERC721.sol";
import {ITokenURIProvider} from "./../../interfaces/ITokenURIProvider.sol";
import {ISource} from "./../../interfaces/ISource.sol";

contract Username is IUsername, LensERC721, RuleBasedUsername, AccessControlled {
    event Lens_Username_Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

    // TODO: Do we want more granular resources here? Like add/update/remove PIDs? Or are we OK with the multi-purpose?
    uint256 constant SET_RULES_PID = uint256(keccak256("SET_RULES"));
    uint256 constant SET_METADATA_PID = uint256(keccak256("SET_METADATA"));
    uint256 constant SET_EXTRA_DATA_PID = uint256(keccak256("SET_EXTRA_DATA"));
    uint256 constant SET_TOKEN_URI_PROVIDER_PID = uint256(keccak256("SET_TOKEN_URI_PROVIDER"));

    mapping(uint256 => string) private _idToUsername; // TODO: Move to computed storage

    // TODO: We need initializer for all primitives to make them upgradeable
    constructor(
        string memory namespace,
        string memory metadataURI,
        IAccessControl accessControl,
        string memory nftName,
        string memory nftSymbol,
        ITokenURIProvider tokenURIProvider
    ) LensERC721(nftName, nftSymbol, tokenURIProvider) AccessControlled(accessControl) {
        Core.$storage().namespace = namespace;
        Core.$storage().metadataURI = metadataURI;
        emit Lens_Username_MetadataURISet(metadataURI);
        _emitPIDs();
        emit Events.Lens_Contract_Deployed("username", "lens.username", "username", "lens.username");
    }

    function _emitPIDs() internal override {
        super._emitPIDs();
        emit Events.Lens_PermissionId_Available(SET_RULES_PID, "SET_RULES");
        emit Events.Lens_PermissionId_Available(SET_METADATA_PID, "SET_METADATA");
        emit Events.Lens_PermissionId_Available(SET_EXTRA_DATA_PID, "SET_EXTRA_DATA");
        emit Events.Lens_PermissionId_Available(SET_TOKEN_URI_PROVIDER_PID, "SET_TOKEN_URI_PROVIDER");
    }

    function _beforeTokenURIProviderSet(ITokenURIProvider /* tokenURIProvider */ ) internal view override {
        _requireAccess(msg.sender, SET_TOKEN_URI_PROVIDER_PID);
    }

    // Access Controlled functions

    function setMetadataURI(string calldata metadataURI) external override {
        _requireAccess(msg.sender, SET_METADATA_PID);
        Core.$storage().metadataURI = metadataURI;
        emit Lens_Username_MetadataURISet(metadataURI);
    }

    function changeUsernameRules(RuleChange[] calldata ruleChanges) external override {
        _requireAccess(msg.sender, SET_RULES_PID);
        for (uint256 i = 0; i < ruleChanges.length; i++) {
            RuleConfiguration memory ruleConfig = ruleChanges[i].configuration;
            if (ruleChanges[i].operation == RuleOperation.ADD) {
                _addUsernameRule(ruleConfig);
                emit Lens_Username_RuleAdded(ruleConfig.ruleAddress, ruleConfig.configData, ruleConfig.isRequired);
            } else if (ruleChanges[i].operation == RuleOperation.UPDATE) {
                _updateUsernameRule(ruleConfig);
                emit Lens_Username_RuleUpdated(ruleConfig.ruleAddress, ruleConfig.configData, ruleConfig.isRequired);
            } else {
                _removeUsernameRule(ruleConfig.ruleAddress);
                emit Lens_Username_RuleRemoved(ruleConfig.ruleAddress);
            }
        }
    }

    // Permissionless functions

    function createAndAssignUsername(
        address account,
        string calldata username,
        RuleExecutionData calldata createData,
        RuleExecutionData calldata assignData,
        SourceStamp calldata sourceStamp
    ) external {
        require(msg.sender == account); // msg.sender must be the account
        uint256 id = _computeId(username);
        _safeMint(account, id);
        _idToUsername[id] = username;
        Core._createUsername(username);
        emit Lens_Username_Created(username, account, createData, sourceStamp.source);
        _unassignIfAssigned(account, sourceStamp.source);
        Core._assignUsername(account, username);
        emit Lens_Username_Assigned(username, account, assignData, sourceStamp.source);
        _processCreation(account, username, createData);
        _processAssigning(account, username, assignData);
        if (sourceStamp.source != address(0)) {
            ISource(sourceStamp.source).validateSource(sourceStamp);
        }
    }

    function createUsername(
        address account,
        string calldata username,
        RuleExecutionData calldata data,
        SourceStamp calldata sourceStamp
    ) external override {
        require(msg.sender == account); // msg.sender must be the account
        uint256 id = _computeId(username);
        _safeMint(account, id);
        _idToUsername[id] = username;
        Core._createUsername(username);
        _processCreation(account, username, data);
        emit Lens_Username_Created(username, account, data, sourceStamp.source);
        if (sourceStamp.source != address(0)) {
            ISource(sourceStamp.source).validateSource(sourceStamp);
        }
    }

    function removeUsername(string calldata username, SourceStamp calldata sourceStamp) external override {
        uint256 id = _computeId(username);
        address owner = _ownerOf(id);
        require(msg.sender == owner); // msg.sender must be the owner of the username
        _unassignIfAssigned(username, sourceStamp.source);
        _burn(id);
        Core._removeUsername(username);
        emit Lens_Username_Removed(username, owner, sourceStamp.source);
        if (sourceStamp.source != address(0)) {
            ISource(sourceStamp.source).validateSource(sourceStamp);
        }
    }

    function assignUsername(
        address account,
        string calldata username,
        RuleExecutionData calldata data,
        SourceStamp calldata sourceStamp
    ) external override {
        require(msg.sender == account); // msg.sender must be the account
        require(account == _ownerOf(_computeId(username))); // account should own the tokenized username
        _unassignIfAssigned(account, sourceStamp.source);
        _unassignIfAssigned(username, sourceStamp.source);
        Core._assignUsername(account, username);
        _processAssigning(account, username, data);
        emit Lens_Username_Assigned(username, account, data, sourceStamp.source);
        if (sourceStamp.source != address(0)) {
            ISource(sourceStamp.source).validateSource(sourceStamp);
        }
    }

    function unassignUsername(string calldata username, SourceStamp calldata sourceStamp) external override {
        address account = Core.$storage().usernameToAccount[username];
        require(msg.sender == account || msg.sender == _ownerOf(_computeId(username)));
        Core._unassignUsername(username);
        emit Lens_Username_Unassigned(username, account, sourceStamp.source);
        if (sourceStamp.source != address(0)) {
            ISource(sourceStamp.source).validateSource(sourceStamp);
        }
    }

    function setExtraData(DataElement[] calldata extraDataToSet) external override {
        _requireAccess(msg.sender, SET_EXTRA_DATA_PID);
        for (uint256 i = 0; i < extraDataToSet.length; i++) {
            bool hadAValueSetBefore = Core._setExtraData(extraDataToSet[i]);
            bool isNewValueEmpty = extraDataToSet[i].value.length == 0;
            if (hadAValueSetBefore) {
                if (isNewValueEmpty) {
                    emit Lens_Username_ExtraDataRemoved(extraDataToSet[i].key);
                } else {
                    emit Lens_Username_ExtraDataUpdated(
                        extraDataToSet[i].key, extraDataToSet[i].value, extraDataToSet[i].value
                    );
                }
            } else if (!isNewValueEmpty) {
                emit Lens_Username_ExtraDataAdded(
                    extraDataToSet[i].key, extraDataToSet[i].value, extraDataToSet[i].value
                );
            }
        }
    }

    // Internal

    function _afterTokenTransfer(address from, address to, uint256 tokenId) internal virtual override {
        emit Lens_Username_Transfer(from, to, tokenId);
    }

    function _computeId(string memory username) internal pure virtual returns (uint256) {
        return uint256(keccak256(bytes(username)));
    }

    function _unassignIfAssigned(string memory username, address source) internal virtual {
        address assignedAccount = Core.$storage().usernameToAccount[username];
        if (assignedAccount != address(0)) {
            Core._unassignUsername(username);
            emit Lens_Username_Unassigned(username, assignedAccount, source);
        }
    }

    function _unassignIfAssigned(address account, address source) internal virtual {
        string memory assignedUsername = Core.$storage().accountToUsername[account];
        if (bytes(assignedUsername).length != 0) {
            Core._unassignUsername(assignedUsername);
            emit Lens_Username_Unassigned(assignedUsername, account, source);
        }
    }

    // Getters

    function usernameOf(address user) external view returns (string memory) {
        return Core.$storage().accountToUsername[user];
    }

    function accountOf(string memory name) external view returns (address) {
        return Core.$storage().usernameToAccount[name];
    }

    function getNamespace() external view returns (string memory) {
        return Core.$storage().namespace;
    }

    function getExtraData(bytes32 key) external view override returns (bytes memory) {
        return Core.$storage().extraData[key];
    }

    function getUsernameRules(bool isRequired) external view override returns (address[] memory) {
        return _getUsernameRules(isRequired);
    }

    function getMetadataURI() external view override returns (string memory) {
        return Core.$storage().metadataURI;
    }
}
