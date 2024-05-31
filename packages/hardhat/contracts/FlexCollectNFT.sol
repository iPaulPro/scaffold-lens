// SPDX-License-Identifier: MIT

pragma solidity ^0.8.23;

import {ERC2981CollectionRoyalties} from "lens-modules/contracts/base/ERC2981CollectionRoyalties.sol";
import {Errors} from "lens-modules/contracts/libraries/constants/Errors.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {ILensHub} from "lens-modules/contracts/interfaces/ILensHub.sol";
import {LensBaseERC721} from "lens-modules/contracts/base/LensBaseERC721.sol";
import {ActionRestricted} from "lens-modules/contracts/modules/ActionRestricted.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {ContractURIUpdated, IFlexCollectNFT} from "./interfaces/IFlexCollectNFT.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title FlexCollectNFT
 * @author Paul Burke
 *
 * @dev This is a customizable CollectNFT, it differs from the v2 CollectNFT in that the the name and symbol can be set.
 */
contract FlexCollectNFT is
    LensBaseERC721,
    ERC2981CollectionRoyalties,
    ActionRestricted,
    IFlexCollectNFT,
    Ownable
{
    using Strings for uint256;

    address public immutable HUB;

    uint256 internal _tokenIdCounter;

    mapping(uint256 tokenId => uint256 pubId) internal _tokenIdToPubId;

    uint256 private _profileId;
    bool private _initialized;
    string private _name;
    string private _symbol;
    string private _contractURI;

    uint256 internal _royaltiesInBasisPoints;

    constructor(
        address hub,
        address actionModule
    ) Ownable() ActionRestricted(actionModule) {
        HUB = hub;
        _initialized = true;
        _transferOwnership(actionModule);
    }

    /// @inheritdoc IFlexCollectNFT
    function initialize(
        uint256 profileId,
        string memory tokenName,
        string memory tokenSymbol,
        string memory uri,
        uint16 royalty
    ) external override {
        if (_initialized) revert Errors.Initialized();

        _initialized = true;
        _profileId = profileId;
        _name = tokenName;
        _symbol = tokenSymbol;
        _contractURI = uri;
        _setRoyalty(royalty);

        // Transfer ownership to the profile owner
        address profileOwner = IERC721(HUB).ownerOf(profileId);
        _transferOwnership(profileOwner);
    }

    /// @inheritdoc IFlexCollectNFT
    function mint(
        uint256 pubId,
        address to
    ) external override onlyActionModule returns (uint256) {
        unchecked {
            uint256 tokenId = ++_tokenIdCounter;
            _tokenIdToPubId[tokenId] = pubId;
            _mint(to, tokenId);
            return tokenId;
        }
    }

    /// @inheritdoc IFlexCollectNFT
    function getSourcePublicationPointer(
        uint256 tokenId
    ) external view override returns (uint256, uint256) {
        if (!_exists(tokenId)) revert Errors.TokenDoesNotExist();
        return (_profileId, _tokenIdToPubId[tokenId]);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        if (!_exists(tokenId)) revert Errors.TokenDoesNotExist();
        return
            ILensHub(HUB).getContentURI(_profileId, _tokenIdToPubId[tokenId]);
    }

    function setContractURI(string memory uri) external onlyOwner {
        _contractURI = uri;
        emit ContractURIUpdated();
    }

    function contractURI() public view override returns (string memory) {
        if (bytes(_contractURI).length > 0) {
            return _contractURI;
        }
        // fallback to the first token URI
        return ILensHub(HUB).getContentURI(_profileId, 1);
    }

    /**
     * @dev See {IERC721Metadata-name}.
     */
    function name() public view override returns (string memory) {
        return
            bytes(_name).length > 0
                ? _name
                : string.concat(
                    "Lens Collect | Profile #",
                    _profileId.toString(),
                    " - Publication #",
                    _tokenIdToPubId[1].toString()
                );
    }

    /**
     * @dev See {IERC721Metadata-symbol}.
     */
    function symbol() public view override returns (string memory) {
        return bytes(_symbol).length > 0 ? _symbol : "LENS-COLLECT";
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        virtual
        override(ERC2981CollectionRoyalties, LensBaseERC721)
        returns (bool)
    {
        return
            ERC2981CollectionRoyalties.supportsInterface(interfaceId) ||
            LensBaseERC721.supportsInterface(interfaceId);
    }

    function _getReceiver(
        uint256 /* tokenId */
    ) internal view override returns (address) {
        if (!ILensHub(HUB).exists(_profileId)) {
            return address(0);
        }
        return IERC721(HUB).ownerOf(_profileId);
    }

    function _beforeRoyaltiesSet(
        uint256 /* royaltiesInBasisPoints */
    ) internal view override {
        if (IERC721(HUB).ownerOf(_profileId) != msg.sender) {
            revert Errors.NotProfileOwner();
        }
    }

    function _getRoyaltiesInBasisPointsSlot()
        internal
        pure
        override
        returns (uint256)
    {
        uint256 slot;
        assembly {
            slot := _royaltiesInBasisPoints.slot
        }
        return slot;
    }
}
