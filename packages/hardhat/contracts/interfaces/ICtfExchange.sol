// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Order, OrderStatus} from "../libraries/OrderStructs.sol";
import {Registry} from "../libraries/Registry.sol";

/**
 * @title ICtfExchange
 * @dev Interface for the Polymarket CTF Exchange contract.
 */
abstract contract ICtfExchange is Registry {
    /**
     * @dev Computes the hash for an order.
     * @param order Order to be hashed.
     * @return Hash of the order.
     */
    function hashOrder(
        Order memory order
    ) external view virtual returns (bytes32);

    /**
     * @dev Gets the status of an order.
     * @param orderHash Hash of the order.
     * @return Order status.
     */
    function getOrderStatus(
        bytes32 orderHash
    ) external view virtual returns (OrderStatus memory);
}
