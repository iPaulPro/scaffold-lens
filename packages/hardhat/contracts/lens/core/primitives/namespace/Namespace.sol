// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.26;

import {NamespaceCore as Core} from "contracts/lens/core/primitives/namespace/NamespaceCore.sol";
import {IERC721Namespace} from "contracts/lens/core/interfaces/IERC721Namespace.sol";
import {IAccessControl} from "contracts/lens/core/interfaces/IAccessControl.sol";
import {RuleChange, RuleProcessingParams, KeyValue} from "contracts/lens/core/types/Types.sol";
import {RuleBasedNamespace} from "contracts/lens/core/primitives/namespace/RuleBasedNamespace.sol";
import {AccessControlled} from "contracts/lens/core/access/AccessControlled.sol";
import {ExtraStorageBased} from "contracts/lens/core/base/ExtraStorageBased.sol";
import {IAccessControl} from "contracts/lens/core/interfaces/IAccessControl.sol";
import {Events} from "contracts/lens/core/types/Events.sol";
import {LensERC721} from "contracts/lens/core/base/LensERC721.sol";
import {ITokenURIProvider} from "contracts/lens/core/interfaces/ITokenURIProvider.sol";
import {SourceStampBased} from "contracts/lens/core/base/SourceStampBased.sol";
import {MetadataBased} from "contracts/lens/core/base/MetadataBased.sol";
import {Initializable} from "contracts/lens/core/upgradeability/Initializable.sol";
import {Errors} from "contracts/lens/core/types/Errors.sol";

contract Namespace is
    IERC721Namespace,
    Initializable,
    LensERC721,
    RuleBasedNamespace,
    AccessControlled,
    ExtraStorageBased,
    SourceStampBased,
    MetadataBased
{
    /// @custom:keccak lens.permission.SetMetadata
    uint256 constant PID__SET_METADATA = uint256(0xe40fdb273cda3c78f0d9b6d20f5378755989e26c60c89696e5eea644d84eefea);
    /// @custom:keccak lens.permission.ChangeRules
    uint256 constant PID__CHANGE_RULES = uint256(0x550b12ef6572134aefc5804fd2b13ab3d8451e067ad453f67afe134cffebd977);
    /// @custom:keccak lens.permission.SetExtraData
    uint256 constant PID__SET_EXTRA_DATA = uint256(0x9b4afa2e6d7162f878076bb1210736928cd607a384b985eca0dba5e94790e72a);
    /// @custom:keccak lens.permission.SetTokenURIProvider
    uint256 constant PID__SET_TOKEN_URI_PROVIDER =
        uint256(0x32b3651aa4f96bc363c3045558bf6accc2b6027323bee86f6b4a570142cbd469);

    /// @custom:keccak lens.storage.Namespace
    uint256 constant STORAGE__NAMESPACE = 0x643a2517af0a90463c06865bbd358f4e5d1271f6ad1b8352aca5bb2e89b867f6;

    struct NamespaceStorage {
        mapping(uint256 => string) idToUsername;
    }

    function $storage() internal pure returns (NamespaceStorage storage _storage) {
        assembly {
            _storage.slot := STORAGE__NAMESPACE
        }
    }

    constructor() {
        _disableInitializers();
    }

    function initialize(
        string memory namespace,
        string memory metadataURI,
        string memory nftName,
        string memory nftSymbol,
        ITokenURIProvider tokenURIProvider,
        IAccessControl accessControl
    ) external override initializer {
        _initialize(namespace, metadataURI);
        AccessControlled._initialize(accessControl);
        LensERC721._initialize(nftName, nftSymbol, tokenURIProvider);
    }

    function _initialize(string memory namespace, string memory metadataURI) internal {
        Core.$storage().namespace = namespace;
        _setMetadataURI(metadataURI);
        _emitPIDs();
        emit Events.Lens_Contract_Deployed({
            contractType: "lens.contract.Namespace",
            flavour: "lens.contract.Namespace.ERC721Namespace"
        });
    }

    function _emitMetadataURISet(string memory metadataURI, address /* source */ ) internal override {
        emit Lens_Namespace_MetadataURISet(metadataURI);
    }

    function _emitPIDs() internal override {
        super._emitPIDs();
        emit Events.Lens_PermissionId_Available(PID__CHANGE_RULES, "lens.permission.ChangeRules");
        emit Events.Lens_PermissionId_Available(PID__SET_METADATA, "lens.permission.SetMetadata");
        emit Events.Lens_PermissionId_Available(PID__SET_EXTRA_DATA, "lens.permission.SetExtraData");
        emit Events.Lens_PermissionId_Available(PID__SET_TOKEN_URI_PROVIDER, "lens.permission.SetTokenURIProvider");
    }

    // Access Controlled functions

    function _beforeMetadataURIUpdate(string memory /* metadataURI */ ) internal view override {
        _requireAccess(msg.sender, PID__SET_METADATA);
    }

    function _beforeTokenURIProviderSet(ITokenURIProvider /* tokenURIProvider */ ) internal view virtual override {
        _requireAccess(msg.sender, PID__SET_TOKEN_URI_PROVIDER);
    }

    function _beforeChangePrimitiveRules(RuleChange[] memory /* ruleChanges */ ) internal view virtual override {
        _requireAccess(msg.sender, PID__CHANGE_RULES);
    }

    function _beforeChangeEntityRules(uint256 entityId, RuleChange[] memory ruleChanges)
        internal
        pure
        virtual
        override
    {}

    // Permissionless functions

    function createAndAssignUsername(
        address account,
        string memory username,
        KeyValue[] calldata customParams,
        RuleProcessingParams[] calldata unassigningProcessingParams,
        RuleProcessingParams[] calldata creationProcessingParams,
        RuleProcessingParams[] calldata assigningProcessingParams,
        KeyValue[] memory extraData
    ) external virtual {
        require(msg.sender == account, Errors.InvalidMsgSender());
        uint256 id = _computeId(username);
        _safeMint(account, id);
        $storage().idToUsername[id] = username;
        Core._createUsername(username);
        address source = _processSourceStamp(id, customParams);
        _decodeAndSetUsernameExtraData(id, extraData);
        emit Lens_Username_Created(username, account, customParams, creationProcessingParams, source, extraData);
        _unassignIfAssigned(account, customParams, unassigningProcessingParams, source);
        Core._assignUsername(account, username);
        emit Lens_Username_Assigned(username, account, customParams, assigningProcessingParams, source);
        _processCreation(msg.sender, account, username, customParams, creationProcessingParams);
        _processAssigning(msg.sender, account, username, customParams, assigningProcessingParams);
    }

    function createUsername(
        address account,
        string calldata username,
        KeyValue[] calldata customParams,
        RuleProcessingParams[] calldata ruleProcessingParams,
        KeyValue[] calldata extraData
    ) external virtual override {
        uint256 id = _computeId(username);
        _safeMint(account, id);
        $storage().idToUsername[id] = username;
        Core._createUsername(username);
        _processCreation(msg.sender, account, username, customParams, ruleProcessingParams);
        address source = _processSourceStamp(id, customParams);
        _decodeAndSetUsernameExtraData(id, extraData);
        emit Lens_Username_Created(username, account, customParams, ruleProcessingParams, source, extraData);
    }

    function removeUsername(
        string calldata username,
        KeyValue[] calldata customParams,
        RuleProcessingParams[] calldata unassigningRuleProcessingParams,
        RuleProcessingParams[] calldata removalRuleProcessingParams
    ) external virtual override {
        uint256 id = _computeId(username);
        address owner = ownerOf(id);
        require(msg.sender == owner, Errors.InvalidMsgSender()); // msg.sender must be the owner of the username
        _processRemoval(msg.sender, username, customParams, removalRuleProcessingParams);
        address source = _processSourceStamp(id, customParams);
        _unassignIfAssigned(username, customParams, unassigningRuleProcessingParams, source);
        _burn(id);
        Core._removeUsername(username);
        emit Lens_Username_Removed(username, owner, customParams, removalRuleProcessingParams, source);
    }

    function assignUsername(
        address account,
        string calldata username,
        KeyValue[] calldata customParams,
        RuleProcessingParams[] calldata unassignAccountRuleProcessingParams,
        RuleProcessingParams[] calldata unassignUsernameRuleProcessingParams,
        RuleProcessingParams[] calldata assignRuleProcessingParams
    ) external virtual override {
        uint256 id = _computeId(username);
        // account should own the tokenized username and be the msg.sender
        require(msg.sender == ownerOf(id) && msg.sender == account, Errors.InvalidMsgSender());
        // Check if username is not already assigned to this account
        require(account != Core.$storage().usernameToAccount[username], Errors.RedundantStateChange());
        address source = _processSourceStamp(id, customParams);
        _unassignIfAssigned(account, customParams, unassignAccountRuleProcessingParams, source);
        _unassignIfAssigned(username, customParams, unassignUsernameRuleProcessingParams, source);
        Core._assignUsername(account, username);
        _processAssigning(msg.sender, account, username, customParams, assignRuleProcessingParams);
        emit Lens_Username_Assigned(username, account, customParams, assignRuleProcessingParams, source);
    }

    function unassignUsername(
        string calldata username,
        KeyValue[] calldata customParams,
        RuleProcessingParams[] calldata ruleProcessingParams
    ) external virtual override {
        address account = Core.$storage().usernameToAccount[username];
        uint256 id = _computeId(username);
        require(msg.sender == ownerOf(id) || msg.sender == account, Errors.InvalidMsgSender());
        Core._unassignUsername(username);
        _processUnassigning(msg.sender, account, username, customParams, ruleProcessingParams);
        address source = _processSourceStamp(id, customParams);
        emit Lens_Username_Unassigned(username, account, customParams, ruleProcessingParams, source);
    }

    function setExtraData(KeyValue[] calldata extraDataToSet) external override {
        _requireAccess(msg.sender, PID__SET_EXTRA_DATA);
        for (uint256 i = 0; i < extraDataToSet.length; i++) {
            bool hadAValueSetBefore = _setExtraStorage_Self(extraDataToSet[i]);
            bool isNewValueEmpty = extraDataToSet[i].value.length == 0;
            if (hadAValueSetBefore) {
                if (isNewValueEmpty) {
                    emit Lens_Namespace_ExtraDataRemoved(extraDataToSet[i].key);
                } else {
                    emit Lens_Namespace_ExtraDataUpdated(
                        extraDataToSet[i].key, extraDataToSet[i].value, extraDataToSet[i].value
                    );
                }
            } else if (!isNewValueEmpty) {
                emit Lens_Namespace_ExtraDataAdded(
                    extraDataToSet[i].key, extraDataToSet[i].value, extraDataToSet[i].value
                );
            }
        }
    }

    function setUsernameExtraData(string calldata username, KeyValue[] calldata extraDataToSet) external {
        uint256 id = _computeId(username);
        address owner = _ownerOf(id);
        require(msg.sender == owner, Errors.InvalidMsgSender());
        _decodeAndSetUsernameExtraData(id, extraDataToSet);
    }

    // Internal

    function _decodeAndSetUsernameExtraData(uint256 tokenId, KeyValue[] memory extraDataToSet) internal virtual {
        for (uint256 i = 0; i < extraDataToSet.length; i++) {
            bool hadAValueSetBefore = _setEntityExtraStorage_Account(tokenId, extraDataToSet[i]);
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

    function _afterTokenTransfer(address from, address to, uint256 tokenId) internal virtual override {
        emit Lens_Username_Transfer(from, to, tokenId);
    }

    function _computeId(string memory username) internal pure virtual returns (uint256) {
        return uint256(keccak256(bytes(username)));
    }

    function _unassignIfAssigned(
        string memory username,
        KeyValue[] calldata customParams,
        RuleProcessingParams[] calldata ruleProcessingParams,
        address source
    ) internal virtual {
        address assignedAccount = Core.$storage().usernameToAccount[username];
        if (assignedAccount != address(0)) {
            Core._unassignUsername(username);
            _processUnassigning(msg.sender, assignedAccount, username, customParams, ruleProcessingParams);
            emit Lens_Username_Unassigned(username, assignedAccount, customParams, ruleProcessingParams, source);
        }
    }

    function _unassignIfAssigned(
        address account,
        KeyValue[] calldata customParams,
        RuleProcessingParams[] calldata ruleProcessingParams,
        address source
    ) internal virtual {
        string memory assignedUsername = Core.$storage().accountToUsername[account];
        if (bytes(assignedUsername).length != 0) {
            Core._unassignUsername(assignedUsername);
            _processUnassigning(msg.sender, account, assignedUsername, customParams, ruleProcessingParams);
            emit Lens_Username_Unassigned(assignedUsername, account, customParams, ruleProcessingParams, source);
        }
    }

    // Getters

    function usernameOf(address user) external view returns (string memory) {
        string memory username = Core.$storage().accountToUsername[user];
        require(bytes(username).length != 0, Errors.DoesNotExist());
        return username;
    }

    // Assigned to
    function accountOf(string memory username) external view returns (address) {
        uint256 tokenId = _computeId(username);
        require(_exists(tokenId), Errors.DoesNotExist());
        return Core.$storage().usernameToAccount[username];
    }

    // Owner of the username
    function ownerOf(string memory username) external view returns (address) {
        uint256 tokenId = _computeId(username);
        require(_exists(tokenId), Errors.DoesNotExist());
        return _ownerOf(tokenId);
    }

    function getNamespace() external view returns (string memory) {
        return Core.$storage().namespace;
    }

    function getExtraData(bytes32 key) external view override returns (bytes memory) {
        return _getExtraStorage_Self(key);
    }

    function getUsernameExtraData(string calldata username, bytes32 key) external view override returns (bytes memory) {
        uint256 tokenId = _computeId(username);
        address owner = ownerOf(tokenId);
        return _getEntityExtraStorage_Account(owner, tokenId, key);
    }

    function exists(string calldata username) external view override returns (bool) {
        uint256 tokenId = _computeId(username);
        return _exists(tokenId);
    }

    function exists(uint256 tokenId) external view override returns (bool) {
        return _exists(tokenId);
    }

    function getTokenIdByUsername(string calldata username) external pure override returns (uint256) {
        return _computeId(username);
    }

    function getUsernameByTokenId(uint256 tokenId) external view override returns (string memory) {
        require(_exists(tokenId), Errors.DoesNotExist());
        return $storage().idToUsername[tokenId];
    }
}
