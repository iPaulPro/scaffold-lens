// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import {Clones} from "@openzeppelin/contracts/proxy/Clones.sol";

import {IPublicationActionModule} from "lens-modules/contracts/interfaces/IPublicationActionModule.sol";
import {Types} from "lens-modules/contracts/libraries/constants/Types.sol";
import {Errors} from "lens-modules/contracts/modules/constants/Errors.sol";
import {HubRestricted} from "lens-modules/contracts/base/HubRestricted.sol";
import {ILensModule} from "lens-modules/contracts/modules/interfaces/ILensModule.sol";
import {LensModuleMetadataInitializable} from "lens-modules/contracts/modules/LensModuleMetadataInitializable.sol";
import {LensModuleRegistrant} from "lens-modules/contracts/modules/base/LensModuleRegistrant.sol";
import {IModuleRegistry} from "lens-modules/contracts/interfaces/IModuleRegistry.sol";

import {IFlexCollectModule} from "./interfaces/IFlexCollectModule.sol";
import {ProcessCollectParams} from "./interfaces/IFlexCollectModule.sol";
import {IFlexCollectNFT} from "./interfaces/IFlexCollectNFT.sol";

/**
 * @notice A struct containing the necessary data to create an ERC-721.
 *
 * @param name The name of the token.
 * @param symbol The symbol of the token.
 * @param royalty The royalty percentage in basis points.
 */
struct TokenData {
    bytes32 name;
    bytes32 symbol;
    uint16 royalty;
}

/**
 * @title FlexCollectPublicationAction
 * @author Paul Burke
 * @notice An Publication Action module that allows users to collect publications minted as part of a collection.
 */
contract FlexCollectPublicationAction is
    LensModuleMetadataInitializable,
    HubRestricted,
    IPublicationActionModule,
    LensModuleRegistrant
{
    struct CollectData {
        address collectModule;
        address collectNFT;
        bytes32 contractURI;
        TokenData tokenData;
    }

    event CollectModuleRegistered(
        address collectModule,
        string metadata,
        uint256 timestamp
    );

    /**
     * @dev Emitted when a collectNFT clone is deployed using a lazy deployment pattern.
     *
     * @param profileId The publisher's profile token ID.
     * @param pubId The publication associated with the newly deployed collectNFT clone's ID.
     * @param collectNFT The address of the newly deployed collectNFT clone.
     * @param timestamp The current block timestamp.
     */
    event CollectNFTDeployed(
        uint256 indexed profileId,
        uint256 indexed pubId,
        address indexed collectNFT,
        uint256 timestamp
    );

    /**
     * @dev Emitted upon a successful collect action.
     *
     * @param collectedProfileId The token ID of the profile that published the collected publication.
     * @param collectedPubId The ID of the collected publication.
     * @param collectorProfileId The token ID of the profile that collected the publication.
     * @param nftRecipient The address that received the collect NFT.
     * @param collectActionData The custom data passed to the collect module, if any.
     * @param collectActionResult The data returned from the collect module's collect action. This is ABI-encoded
     * and depends on the collect module chosen.
     * @param collectNFT The address of the NFT collection where the minted collect NFT belongs to.
     * @param tokenIds The array of token IDs of the collect NFT that was minted as a collect of the publication.
     * @param transactionExecutor The address of the account that executed this operation.
     * @param timestamp The current block timestamp.
     */
    event Collected(
        uint256 indexed collectedProfileId,
        uint256 indexed collectedPubId,
        uint256 indexed collectorProfileId,
        address nftRecipient,
        bytes collectActionData,
        bytes collectActionResult,
        address collectNFT,
        uint256[] tokenIds,
        address transactionExecutor,
        uint256 timestamp
    );

    error NotCollectModule();
    error NotFlexCollectNFT();
    error NotCollectNFTContractOwner();

    address public immutable COLLECT_NFT_IMPL;

    mapping(address collectModule => bool isWhitelisted)
        internal _collectModuleRegistered;
    mapping(uint256 profileId => mapping(uint256 pubId => CollectData collectData))
        internal _collectDataByPub;

    constructor(
        address hub,
        IModuleRegistry moduleRegistry,
        address collectNFTImpl,
        address moduleOwner
    )
        HubRestricted(hub)
        LensModuleMetadataInitializable(moduleOwner)
        LensModuleRegistrant(moduleRegistry)
    {
        COLLECT_NFT_IMPL = collectNFTImpl;
    }

    function supportsInterface(
        bytes4 interfaceID
    ) public pure override returns (bool) {
        return
            interfaceID == type(IPublicationActionModule).interfaceId ||
            super.supportsInterface(interfaceID);
    }

    function verifyCollectModule(address collectModule) public returns (bool) {
        registerCollectModule(collectModule);
        return true;
    }

    function registerCollectModule(
        address collectModule
    ) public returns (bool) {
        if (_collectModuleRegistered[collectModule]) {
            return false;
        } else {
            if (
                !ILensModule(collectModule).supportsInterface(
                    type(IFlexCollectModule).interfaceId
                )
            ) {
                revert NotCollectModule();
            }

            string memory metadata = ILensModule(collectModule)
                .getModuleMetadataURI();
            emit CollectModuleRegistered(
                collectModule,
                metadata,
                block.timestamp
            );
            _collectModuleRegistered[collectModule] = true;
            return true;
        }
    }

    function initializePublicationAction(
        uint256 profileId,
        uint256 pubId,
        address transactionExecutor,
        bytes calldata data
    ) external override onlyHub returns (bytes memory) {
        (
            address collectModule,
            bytes memory collectModuleInitData,
            address collectNFT,
            bytes32 tokenName,
            bytes32 tokenSymbol,
            uint16 tokenRoyalty,
            bytes32 contractURI
        ) = abi.decode(
                data,
                (address, bytes, address, bytes32, bytes32, uint16, bytes32)
            );
        if (_collectDataByPub[profileId][pubId].collectModule != address(0)) {
            revert Errors.AlreadyInitialized();
        }
        verifyCollectModule(collectModule);
        _collectDataByPub[profileId][pubId].collectModule = collectModule;
        if (collectNFT != address(0)) {
            _verifyIsFlexCollectNFT(collectNFT);
            _verifyCollectNFTOwnership(profileId, collectNFT);
            _collectDataByPub[profileId][pubId].collectNFT = collectNFT;
        }
        _collectDataByPub[profileId][pubId].contractURI = contractURI;
        _collectDataByPub[profileId][pubId].tokenData = TokenData({
            name: tokenName,
            symbol: tokenSymbol,
            royalty: tokenRoyalty
        });
        return
            IFlexCollectModule(collectModule)
                .initializePublicationCollectModule(
                    profileId,
                    pubId,
                    transactionExecutor,
                    collectModuleInitData
                );
    }

    function processPublicationAction(
        Types.ProcessActionParams calldata processActionParams
    ) external override onlyHub returns (bytes memory) {
        address collectModule = _collectDataByPub[
            processActionParams.publicationActedProfileId
        ][processActionParams.publicationActedId].collectModule;
        if (collectModule == address(0)) {
            revert Errors.CollectNotAllowed();
        }
        (address collectNftRecipient, bytes memory collectData) = abi.decode(
            processActionParams.actionModuleData,
            (address, bytes)
        );
        uint256 mintsAllowed = IFlexCollectModule(collectModule).mintsAllowed(
            processActionParams.publicationActedProfileId,
            processActionParams.publicationActedId,
            collectData
        );
        if (mintsAllowed == 0) {
            return
                IFlexCollectModule(collectModule).processPublicationAction(
                    processActionParams
                );
        }
        address collectNFT = _getOrDeployCollectNFT({
            publicationCollectedProfileId: processActionParams
                .publicationActedProfileId,
            publicationCollectedId: processActionParams.publicationActedId,
            collectNFTImpl: COLLECT_NFT_IMPL
        });

        uint256[] memory tokenIds = new uint256[](mintsAllowed);

        for (uint256 i = 0; i < mintsAllowed; ) {
            uint256 tokenId = IFlexCollectNFT(collectNFT).mint(
                processActionParams.publicationActedId,
                collectNftRecipient
            );
            tokenIds[i] = tokenId;
            unchecked {
                ++i;
            }
        }

        bytes memory collectActionResult = _processCollect(
            collectModule,
            collectData,
            processActionParams,
            mintsAllowed
        );
        _emitCollectedEvent(
            processActionParams,
            collectNftRecipient,
            collectData,
            collectActionResult,
            collectNFT,
            tokenIds
        );
        return
            abi.encode(
                collectNFT,
                tokenIds,
                collectModule,
                collectActionResult
            );
    }

    function getCollectData(
        uint256 profileId,
        uint256 pubId
    ) external view returns (CollectData memory) {
        return _collectDataByPub[profileId][pubId];
    }

    function isCollectModuleRegistered(
        address collectModule
    ) external view returns (bool) {
        return _collectModuleRegistered[collectModule];
    }

    function _verifyCollectNFTOwnership(
        uint256 profileId,
        address collectNFT
    ) internal view returns (bool) {
        (uint256 ownerProfileId, ) = IFlexCollectNFT(collectNFT)
            .getSourcePublicationPointer(1);
        if (ownerProfileId != profileId) {
            revert NotCollectNFTContractOwner();
        }
        return true;
    }

    function _verifyIsFlexCollectNFT(
        address collectNFT
    ) internal view returns (bool) {
        if (
            !IFlexCollectNFT(collectNFT).supportsInterface(
                type(IFlexCollectNFT).interfaceId
            )
        ) {
            revert NotFlexCollectNFT();
        }
        return true;
    }

    function _emitCollectedEvent(
        Types.ProcessActionParams calldata processActionParams,
        address collectNftRecipient,
        bytes memory collectData,
        bytes memory collectActionResult,
        address collectNFT,
        uint256[] memory tokenIds
    ) private {
        emit Collected(
            processActionParams.publicationActedProfileId,
            processActionParams.publicationActedId,
            processActionParams.actorProfileId,
            collectNftRecipient,
            collectData,
            collectActionResult,
            collectNFT,
            tokenIds,
            processActionParams.transactionExecutor,
            block.timestamp
        );
    }

    function _bytes32ToString(
        bytes32 _bytes32
    ) private pure returns (string memory) {
        bytes memory bytesArray = new bytes(32);
        for (uint256 i; i < 32; i++) {
            bytesArray[i] = _bytes32[i];
        }
        return string(bytesArray);
    }

    function _getOrDeployCollectNFT(
        uint256 publicationCollectedProfileId,
        uint256 publicationCollectedId,
        address collectNFTImpl
    ) private returns (address) {
        CollectData storage collectData = _collectDataByPub[
            publicationCollectedProfileId
        ][publicationCollectedId];
        address collectNFT = collectData.collectNFT;
        if (collectNFT == address(0)) {
            collectNFT = _deployCollectNFT(
                publicationCollectedProfileId,
                publicationCollectedId,
                _bytes32ToString(collectData.tokenData.name),
                _bytes32ToString(collectData.tokenData.symbol),
                _bytes32ToString(collectData.contractURI),
                collectData.tokenData.royalty,
                collectNFTImpl
            );
            _collectDataByPub[publicationCollectedProfileId][
                publicationCollectedId
            ].collectNFT = collectNFT;
        }
        return collectNFT;
    }

    function _processCollect(
        address collectModule,
        bytes memory collectData,
        Types.ProcessActionParams calldata processActionParams,
        uint256 mintsAllowed
    ) private returns (bytes memory) {
        return
            IFlexCollectModule(collectModule).processCollect(
                ProcessCollectParams({
                    publicationCollectedProfileId: processActionParams
                        .publicationActedProfileId,
                    publicationCollectedId: processActionParams
                        .publicationActedId,
                    collectorProfileId: processActionParams.actorProfileId,
                    collectorProfileOwner: processActionParams
                        .actorProfileOwner,
                    transactionExecutor: processActionParams
                        .transactionExecutor,
                    referrerProfileIds: processActionParams.referrerProfileIds,
                    referrerPubIds: processActionParams.referrerPubIds,
                    referrerPubTypes: processActionParams.referrerPubTypes,
                    data: collectData,
                    mintsAllowed: mintsAllowed
                })
            );
    }

    function _deployCollectNFT(
        uint256 profileId,
        uint256 pubId,
        string memory tokenName,
        string memory tokenSymbol,
        string memory contractURI,
        uint16 royalty,
        address collectNFTImpl
    ) private returns (address) {
        address collectNFT = Clones.clone(collectNFTImpl);

        IFlexCollectNFT(collectNFT).initialize(
            profileId,
            tokenName,
            tokenSymbol,
            contractURI,
            royalty
        );
        emit CollectNFTDeployed(profileId, pubId, collectNFT, block.timestamp);

        return collectNFT;
    }
}
