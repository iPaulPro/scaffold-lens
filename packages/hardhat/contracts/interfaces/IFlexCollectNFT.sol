// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

/**
 * @notice Signal to OpenSea that the contract-level metadata URI has changed.
 *
 * @dev https://docs.opensea.io/docs/contract-level-metadata
 */
event ContractURIUpdated();

/**
 * @title IFlexCollectNFT
 * @author Paul Burke
 *
 * @notice This is based on the interface for the Lens Protocol CollectNFT contract. Which is cloned
 * upon the first collect for any given publication.
 *
 * @notice Adds token name, symbol, royalty, and contract metadata URI to the initialize interface.
 */
interface IFlexCollectNFT {
    /**
     * @notice Initializes the collect NFT with the specified token name, symbol, and royalty.
     * @custom:permissions PublicationCollectionAction.
     *
     * @param profileId The profile ID of the publication author.
     * @param tokenName The name of the token.
     * @param tokenSymbol The symbol of the token.
     * @param contractURI The contract-level metadata URI. Falls back to first token URI.
     * @param royalty The royalty percentage.
     */
    function initialize(
        uint256 profileId,
        string memory tokenName,
        string memory tokenSymbol,
        string memory contractURI,
        uint16 royalty
    ) external;

    /**
     * @notice Mints a collect NFT to the specified address. This can only be called by the hub and is called
     * upon collection.
     * @custom:permissions PublicationCollectionAction.
     *
     * @param pubId The ID of the publication.
     * @param to The address to mint the NFT to.
     *
     * @return uint256 An integer representing the minted token ID.
     */
    function mint(uint256 pubId, address to) external returns (uint256);

    /**
     * @notice Returns the source publication of this collect NFT.
     *
     * @param tokenId The token ID of the collect NFT.
     *
     * @return tuple First is the profile ID, and second is the publication ID.
     */
    function getSourcePublicationPointer(
        uint256 tokenId
    ) external view returns (uint256, uint256);

    /**
     * @notice Adds support for contract-level metadata. Defaults to the URI of the first token.
     *
     * @dev https://docs.opensea.io/docs/contract-level-metadata
     *
     * @return string The contract-level metadata URI.
     */
    function contractURI() external view returns (string memory);
}
