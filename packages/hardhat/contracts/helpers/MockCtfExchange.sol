// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {ICtfExchange} from "../interfaces/ICtfExchange.sol";
import {Registry} from "../libraries/Registry.sol";
import {Order, OrderStatus, ORDER_TYPEHASH} from "../libraries/OrderStructs.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";

contract MockCtfExchange is ICtfExchange, EIP712 {
    error MakingGtRemaining();

    mapping(bytes32 => OrderStatus) public orderStatus;

    constructor() EIP712("Polymarket CTF Exchange", "1") {}

    function registerToken(
        uint256 token0,
        uint256 token1,
        bytes32 conditionId
    ) external {
        _registerToken(token0, token1, conditionId);
    }

    function hashOrder(
        Order memory order
    ) public view override returns (bytes32) {
        return
            _hashTypedDataV4(
                keccak256(
                    abi.encode(
                        ORDER_TYPEHASH,
                        order.salt,
                        order.maker,
                        order.signer,
                        order.taker,
                        order.tokenId,
                        order.makerAmount,
                        order.takerAmount,
                        order.expiration,
                        order.nonce,
                        order.feeRateBps,
                        order.side,
                        order.signatureType
                    )
                )
            );
    }

    function getOrderStatus(
        bytes32 orderHash
    ) external view override returns (OrderStatus memory) {
        return orderStatus[orderHash];
    }

    function _updateOrderStatus(
        bytes32 orderHash,
        Order memory order,
        uint256 makingAmount
    ) internal returns (uint256 remaining) {
        OrderStatus storage status = orderStatus[orderHash];
        // Fetch remaining amount from storage
        remaining = status.remaining;

        // Update remaining if the order is new/has not been filled
        remaining = remaining == 0 ? order.makerAmount : remaining;

        // Throw if the makingAmount(amount to be filled) is greater than the amount available
        if (makingAmount > remaining) revert MakingGtRemaining();

        // Update remaining using the makingAmount
        remaining = remaining - makingAmount;

        // If order is completely filled, update isFilledOrCancelled in storage
        if (remaining == 0) status.isFilledOrCancelled = true;

        // Update remaining in storage
        status.remaining = remaining;
    }
}
