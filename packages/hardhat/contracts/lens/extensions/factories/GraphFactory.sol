// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.26;

import {IAccessControl} from "contracts/lens/core/interfaces/IAccessControl.sol";
import {Graph} from "contracts/lens/core/primitives/graph/Graph.sol";
import {RuleChange, KeyValue} from "contracts/lens/core/types/Types.sol";
import {BeaconProxy} from "contracts/lens/core/upgradeability/BeaconProxy.sol";
import {ProxyAdmin} from "contracts/lens/core/upgradeability/ProxyAdmin.sol";
import {PrimitiveFactory} from "contracts/lens/extensions/factories/PrimitiveFactory.sol";

contract GraphFactory is PrimitiveFactory {
    event Lens_GraphFactory_Deployment(address indexed graph, string metadataURI);

    constructor(address primitiveBeacon, address proxyAdminLock) PrimitiveFactory(primitiveBeacon, proxyAdminLock) {}

    function deployGraph(
        string memory metadataURI,
        IAccessControl accessControl,
        address proxyAdminOwner,
        RuleChange[] calldata ruleChanges,
        KeyValue[] calldata extraData
    ) external returns (address) {
        address proxyAdmin = address(new ProxyAdmin(proxyAdminOwner, PROXY_ADMIN_LOCK));
        Graph graph = Graph(address(new BeaconProxy(proxyAdmin, PRIMITIVE_BEACON)));
        graph.initialize(metadataURI, TEMPORARY_ACCESS_CONTROL);
        graph.changeGraphRules(ruleChanges);
        graph.setExtraData(extraData);
        graph.setAccessControl(accessControl);
        emit Lens_GraphFactory_Deployment(address(graph), metadataURI);
        return address(graph);
    }
}
