// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.26;

import {IAccessControl} from "contracts/lens/core/interfaces/IAccessControl.sol";
import {Namespace} from "contracts/lens/core/primitives/namespace/Namespace.sol";
import {RuleChange, KeyValue} from "contracts/lens/core/types/Types.sol";
import {ITokenURIProvider} from "contracts/lens/core/interfaces/ITokenURIProvider.sol";
import {BeaconProxy} from "contracts/lens/core/upgradeability/BeaconProxy.sol";
import {ProxyAdmin} from "contracts/lens/core/upgradeability/ProxyAdmin.sol";
import {PrimitiveFactory} from "contracts/lens/extensions/factories/PrimitiveFactory.sol";

contract NamespaceFactory is PrimitiveFactory {
    event Lens_NamespaceFactory_Deployment(address indexed namespaceAddress, string namespace, string metadataURI);

    constructor(address primitiveBeacon, address proxyAdminLock) PrimitiveFactory(primitiveBeacon, proxyAdminLock) {}

    function deployNamespace(
        string memory namespace,
        string memory metadataURI,
        IAccessControl accessControl,
        address proxyAdminOwner,
        RuleChange[] calldata ruleChanges,
        KeyValue[] calldata extraData,
        string memory nftName,
        string memory nftSymbol,
        ITokenURIProvider tokenURIProvider
    ) external returns (address) {
        address proxyAdmin = address(new ProxyAdmin(proxyAdminOwner, PROXY_ADMIN_LOCK));
        Namespace namespacePrimitive = Namespace(address(new BeaconProxy(proxyAdmin, PRIMITIVE_BEACON)));
        namespacePrimitive.initialize(
            namespace, metadataURI, nftName, nftSymbol, tokenURIProvider, TEMPORARY_ACCESS_CONTROL
        );
        namespacePrimitive.changeNamespaceRules(ruleChanges);
        namespacePrimitive.setExtraData(extraData);
        namespacePrimitive.setAccessControl(accessControl);
        emit Lens_NamespaceFactory_Deployment(address(namespacePrimitive), namespace, metadataURI);
        return address(namespacePrimitive);
    }
}
