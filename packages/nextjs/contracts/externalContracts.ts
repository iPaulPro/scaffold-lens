import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
  80002: {
    ActionLib: {
      address: "0x6099032c8d4b93d25A50a8F0A6E2cc66259103bc",
      abi: [
        {
          inputs: [],
          name: "ActionNotAllowed",
          type: "error",
        },
        {
          inputs: [],
          name: "ArrayMismatch",
          type: "error",
        },
        {
          inputs: [],
          name: "Blocked",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidReferrer",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "publicationActedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "publicationActedId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "actorProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "address",
                  name: "actionModuleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "actionModuleData",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct Types.PublicationActionParams",
              name: "publicationActionParams",
              type: "tuple",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "actionModuleReturnData",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "Acted",
          type: "event",
        },
      ],
    },
    AuctionCollectAction: {
      address: "0xBA8670dB2EBa711fA588F0745bBaC8396aa51e7e",
      abi: [
        {
          inputs: [
            { internalType: "address", name: "hub", type: "address" },
            { internalType: "address", name: "treasury", type: "address" },
            { internalType: "address", name: "profileNFT", type: "address" },
            { internalType: "address", name: "lensProtocol", type: "address" },
            { internalType: "contract IModuleRegistry", name: "moduleRegistry", type: "address" },
            { internalType: "address", name: "collectNFTImpl", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        { inputs: [], name: "CollectAlreadyProcessed", type: "error" },
        { inputs: [], name: "FeeAlreadyProcessed", type: "error" },
        { inputs: [], name: "InitParamsInvalid", type: "error" },
        { inputs: [], name: "InsufficientBidAmount", type: "error" },
        { inputs: [], name: "InvalidRecipientSplits", type: "error" },
        { inputs: [], name: "NotFollowing", type: "error" },
        { inputs: [], name: "NotHub", type: "error" },
        { inputs: [], name: "OngoingAuction", type: "error" },
        { inputs: [], name: "RecipientSplitCannotBeZero", type: "error" },
        { inputs: [], name: "TooManyRecipients", type: "error" },
        { inputs: [], name: "UnavailableAuction", type: "error" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "uint256", name: "profileId", type: "uint256" },
            { indexed: true, internalType: "uint256", name: "pubId", type: "uint256" },
            { indexed: false, internalType: "uint64", name: "availableSinceTimestamp", type: "uint64" },
            { indexed: false, internalType: "uint32", name: "duration", type: "uint32" },
            { indexed: false, internalType: "uint32", name: "minTimeAfterBid", type: "uint32" },
            { indexed: false, internalType: "uint256", name: "reservePrice", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "minBidIncrement", type: "uint256" },
            { indexed: false, internalType: "uint16", name: "referralFee", type: "uint16" },
            { indexed: false, internalType: "address", name: "currency", type: "address" },
            {
              components: [
                { internalType: "address", name: "recipient", type: "address" },
                { internalType: "uint16", name: "split", type: "uint16" },
              ],
              indexed: false,
              internalType: "struct RecipientData[]",
              name: "recipients",
              type: "tuple[]",
            },
            { indexed: false, internalType: "bool", name: "onlyFollowers", type: "bool" },
            { indexed: false, internalType: "bytes32", name: "tokenName", type: "bytes32" },
            { indexed: false, internalType: "bytes32", name: "tokenSymbol", type: "bytes32" },
            { indexed: false, internalType: "uint16", name: "tokenRoyalty", type: "uint16" },
          ],
          name: "AuctionCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "uint256", name: "profileId", type: "uint256" },
            { indexed: true, internalType: "uint256", name: "pubId", type: "uint256" },
            { indexed: false, internalType: "uint256[]", name: "referrerProfileIds", type: "uint256[]" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
            { indexed: false, internalType: "address", name: "bidderOwner", type: "address" },
            { indexed: false, internalType: "uint256", name: "bidderProfileId", type: "uint256" },
            { indexed: false, internalType: "address", name: "transactionExecutor", type: "address" },
            { indexed: false, internalType: "uint256", name: "endTimestamp", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "timestamp", type: "uint256" },
          ],
          name: "BidPlaced",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "uint256", name: "profileId", type: "uint256" },
            { indexed: true, internalType: "uint256", name: "pubId", type: "uint256" },
            { indexed: true, internalType: "address", name: "collectNFT", type: "address" },
            { indexed: false, internalType: "uint256", name: "timestamp", type: "uint256" },
          ],
          name: "CollectNFTDeployed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "uint256", name: "collectedProfileId", type: "uint256" },
            { indexed: true, internalType: "uint256", name: "collectedPubId", type: "uint256" },
            { indexed: true, internalType: "uint256", name: "collectorProfileId", type: "uint256" },
            { indexed: false, internalType: "address", name: "nftRecipient", type: "address" },
            { indexed: false, internalType: "address", name: "collectNFT", type: "address" },
            { indexed: false, internalType: "uint256", name: "tokenId", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "timestamp", type: "uint256" },
          ],
          name: "Collected",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "uint256", name: "profileId", type: "uint256" },
            { indexed: true, internalType: "uint256", name: "pubId", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "timestamp", type: "uint256" },
          ],
          name: "FeeProcessed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: false, internalType: "uint256", name: "profileId", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "pubId", type: "uint256" },
            { indexed: false, internalType: "address", name: "transactionExecutor", type: "address" },
            { indexed: false, internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "InitializedPublicationAction",
          type: "event",
        },
        { anonymous: false, inputs: [], name: "ModuleRegistered", type: "event" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
            { indexed: true, internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: false, internalType: "uint256", name: "profileId", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "pubId", type: "uint256" },
            { indexed: false, internalType: "address", name: "transactionExecutor", type: "address" },
            { indexed: false, internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "ProcessedPublicationAction",
          type: "event",
        },
        {
          inputs: [],
          name: "COLLECT_NFT_IMPL",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "HUB",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MODULE_REGISTRY",
          outputs: [{ internalType: "contract IModuleRegistry", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "collectedProfileId", type: "uint256" },
            { internalType: "uint256", name: "collectedPubId", type: "uint256" },
          ],
          name: "claim",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "profileId", type: "uint256" },
            { internalType: "uint256", name: "pubId", type: "uint256" },
          ],
          name: "getAuctionData",
          outputs: [
            {
              components: [
                { internalType: "uint64", name: "availableSinceTimestamp", type: "uint64" },
                { internalType: "uint64", name: "startTimestamp", type: "uint64" },
                { internalType: "uint32", name: "duration", type: "uint32" },
                { internalType: "uint32", name: "minTimeAfterBid", type: "uint32" },
                { internalType: "uint64", name: "endTimestamp", type: "uint64" },
                { internalType: "uint256", name: "reservePrice", type: "uint256" },
                { internalType: "uint256", name: "minBidIncrement", type: "uint256" },
                { internalType: "uint256", name: "winningBid", type: "uint256" },
                { internalType: "uint16", name: "referralFee", type: "uint16" },
                { internalType: "address", name: "currency", type: "address" },
                { internalType: "uint256", name: "winnerProfileId", type: "uint256" },
                { internalType: "bool", name: "onlyFollowers", type: "bool" },
                { internalType: "bool", name: "collected", type: "bool" },
                { internalType: "bool", name: "feeProcessed", type: "bool" },
                {
                  components: [
                    { internalType: "bytes32", name: "name", type: "bytes32" },
                    { internalType: "bytes32", name: "symbol", type: "bytes32" },
                    { internalType: "uint16", name: "royalty", type: "uint16" },
                  ],
                  internalType: "struct TokenData",
                  name: "tokenData",
                  type: "tuple",
                },
              ],
              internalType: "struct AuctionData",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "profileId", type: "uint256" },
            { internalType: "uint256", name: "pubId", type: "uint256" },
          ],
          name: "getCollectNFT",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getModuleMetadataURI",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "profileId", type: "uint256" },
            { internalType: "uint256", name: "pubId", type: "uint256" },
          ],
          name: "getRecipients",
          outputs: [
            {
              components: [
                { internalType: "address", name: "recipient", type: "address" },
                { internalType: "uint16", name: "split", type: "uint16" },
              ],
              internalType: "struct RecipientData[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "profileId", type: "uint256" },
            { internalType: "uint256", name: "pubId", type: "uint256" },
            { internalType: "address", name: "transactionExecutor", type: "address" },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "initializePublicationAction",
          outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "isRegistered",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "uint256", name: "publicationActedProfileId", type: "uint256" },
                { internalType: "uint256", name: "publicationActedId", type: "uint256" },
                { internalType: "uint256", name: "actorProfileId", type: "uint256" },
                { internalType: "address", name: "actorProfileOwner", type: "address" },
                { internalType: "address", name: "transactionExecutor", type: "address" },
                { internalType: "uint256[]", name: "referrerProfileIds", type: "uint256[]" },
                { internalType: "uint256[]", name: "referrerPubIds", type: "uint256[]" },
                { internalType: "enum Types.PublicationType[]", name: "referrerPubTypes", type: "uint8[]" },
                { internalType: "bytes", name: "actionModuleData", type: "bytes" },
              ],
              internalType: "struct Types.ProcessActionParams",
              name: "params",
              type: "tuple",
            },
          ],
          name: "processPublicationAction",
          outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "registerModule",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
        {
          inputs: [{ internalType: "string", name: "_metadataURI", type: "string" }],
          name: "setModuleMetadataURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes4", name: "interfaceID", type: "bytes4" }],
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    CollectNFT: {
      address: "0xC7B6faDeCE0345E60ffa46BD3100094815aeB428",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "hub",
              type: "address",
            },
            {
              internalType: "address",
              name: "actionModule",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "Initialized",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidOwner",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "NonERC721ReceiverImplementer",
          type: "error",
        },
        {
          inputs: [],
          name: "NotActionModule",
          type: "error",
        },
        {
          inputs: [],
          name: "NotOwnerOrApproved",
          type: "error",
        },
        {
          inputs: [],
          name: "NotProfileOwner",
          type: "error",
        },
        {
          inputs: [],
          name: "TokenDoesNotExist",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "approved",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "ACTION_MODULE",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "HUB",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "burn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "exists",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "getApproved",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getDomainSeparator",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getSourcePublicationPointer",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
          ],
          name: "isApprovedForAll",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
          ],
          name: "mint",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "mintTimestampOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "signer",
              type: "address",
            },
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "ownerOf",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "salePrice",
              type: "uint256",
            },
          ],
          name: "royaltyInfo",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "royaltiesInBasisPoints",
              type: "uint256",
            },
          ],
          name: "setRoyalty",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "tokenDataOf",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "mintTimestamp",
                  type: "uint96",
                },
              ],
              internalType: "struct Types.TokenData",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "tokenURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    CollectPublicationAction: {
      address: "0x34A437A91415C36712B0D912c171c74595Be437d",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "hub",
              type: "address",
            },
            {
              internalType: "address",
              name: "collectNFTImpl",
              type: "address",
            },
            {
              internalType: "address",
              name: "moduleOwner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AlreadyInitialized",
          type: "error",
        },
        {
          inputs: [],
          name: "CollectNotAllowed",
          type: "error",
        },
        {
          inputs: [],
          name: "NotCollectModule",
          type: "error",
        },
        {
          inputs: [],
          name: "NotHub",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "collectModule",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "metadata",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "CollectModuleRegistered",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "collectNFT",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "CollectNFTDeployed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "collectedProfileId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "collectedPubId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "collectorProfileId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "nftRecipient",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "collectActionData",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "collectActionResult",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "address",
              name: "collectNFT",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "Collected",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [],
          name: "COLLECT_NFT_IMPL",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "HUB",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
          ],
          name: "getCollectData",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "collectModule",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "collectNFT",
                  type: "address",
                },
              ],
              internalType: "struct CollectPublicationAction.CollectData",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getModuleMetadataURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "moduleOwner",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "initializePublicationAction",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "collectModule",
              type: "address",
            },
          ],
          name: "isCollectModuleRegistered",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "publicationActedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "publicationActedId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "actorProfileId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "actorProfileOwner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "transactionExecutor",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "enum Types.PublicationType[]",
                  name: "referrerPubTypes",
                  type: "uint8[]",
                },
                {
                  internalType: "bytes",
                  name: "actionModuleData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.ProcessActionParams",
              name: "processActionParams",
              type: "tuple",
            },
          ],
          name: "processPublicationAction",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "collectModule",
              type: "address",
            },
          ],
          name: "registerCollectModule",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_metadataURI",
              type: "string",
            },
          ],
          name: "setModuleMetadataURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceID",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "collectModule",
              type: "address",
            },
          ],
          name: "verifyCollectModule",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    DegreesOfSeparationReferenceModule: {
      address: "0x2C1F5d6f6dc5df8ce021B5DF6d0AF84c32817d0C",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "hub",
              type: "address",
            },
            {
              internalType: "address",
              name: "moduleOwner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidDegreesOfSeparation",
          type: "error",
        },
        {
          inputs: [],
          name: "NotFollowing",
          type: "error",
        },
        {
          inputs: [],
          name: "NotHub",
          type: "error",
        },
        {
          inputs: [],
          name: "NotInheritingPointedPubConfig",
          type: "error",
        },
        {
          inputs: [],
          name: "OperationDisabled",
          type: "error",
        },
        {
          inputs: [],
          name: "ProfilePathExceedsDegreesOfSeparation",
          type: "error",
        },
        {
          inputs: [],
          name: "TokenDoesNotExist",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [],
          name: "HUB",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MAX_DEGREES_OF_SEPARATION",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
          ],
          name: "getModuleConfig",
          outputs: [
            {
              components: [
                {
                  internalType: "bool",
                  name: "setUp",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "commentsRestricted",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "quotesRestricted",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "mirrorsRestricted",
                  type: "bool",
                },
                {
                  internalType: "uint8",
                  name: "degreesOfSeparation",
                  type: "uint8",
                },
                {
                  internalType: "uint96",
                  name: "sourceProfile",
                  type: "uint96",
                },
                {
                  internalType: "uint96",
                  name: "originalAuthorProfile",
                  type: "uint96",
                },
              ],
              internalType: "struct ModuleConfig",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getModuleMetadataURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "initializeReferenceModule",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "profileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pubId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "transactionExecutor",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "pointedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pointedPubId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "enum Types.PublicationType[]",
                  name: "referrerPubTypes",
                  type: "uint8[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.ProcessCommentParams",
              name: "processCommentParams",
              type: "tuple",
            },
          ],
          name: "processComment",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "profileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pubId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "transactionExecutor",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "pointedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pointedPubId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "enum Types.PublicationType[]",
                  name: "referrerPubTypes",
                  type: "uint8[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.ProcessMirrorParams",
              name: "processMirrorParams",
              type: "tuple",
            },
          ],
          name: "processMirror",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "profileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pubId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "transactionExecutor",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "pointedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pointedPubId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "enum Types.PublicationType[]",
                  name: "referrerPubTypes",
                  type: "uint8[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.ProcessQuoteParams",
              name: "processQuoteParams",
              type: "tuple",
            },
          ],
          name: "processQuote",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_metadataURI",
              type: "string",
            },
          ],
          name: "setModuleMetadataURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceID",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    FeeFollowModule: {
      address: "0x1F7A5E77493AADc59FCD835921a60A1010312D1E",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "hub",
              type: "address",
            },
            {
              internalType: "address",
              name: "moduleRegistry",
              type: "address",
            },
            {
              internalType: "address",
              name: "moduleOwner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InitParamsInvalid",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParams",
          type: "error",
        },
        {
          inputs: [],
          name: "ModuleDataMismatch",
          type: "error",
        },
        {
          inputs: [],
          name: "NotHub",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [],
          name: "HUB",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MODULE_REGISTRY",
          outputs: [
            {
              internalType: "contract IModuleRegistry",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
          ],
          name: "getFeeConfig",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
              ],
              internalType: "struct FeeConfig",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getModuleMetadataURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "initializeFollowModule",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "followTokenId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "targetProfileId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "processFollow",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_metadataURI",
              type: "string",
            },
          ],
          name: "setModuleMetadataURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceID",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    FollowLib: {
      address: "0x7289854FF2e55c43AFCB895EC8cAE798811fcc2D",
      abi: [
        {
          inputs: [],
          name: "ArrayMismatch",
          type: "error",
        },
        {
          inputs: [],
          name: "Blocked",
          type: "error",
        },
        {
          inputs: [],
          name: "NotFollowing",
          type: "error",
        },
        {
          inputs: [],
          name: "SelfFollow",
          type: "error",
        },
        {
          inputs: [],
          name: "TokenDoesNotExist",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "followNFT",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "FollowNFTDeployed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "followerProfileId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "idOfProfileFollowed",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "followTokenIdAssigned",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "followModuleData",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "processFollowModuleReturnData",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "Followed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "unfollowerProfileId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "idOfProfileUnfollowed",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "Unfollowed",
          type: "event",
        },
      ],
    },
    FollowNFT: {
      address: "0x3CA67DAfe181AAd74Ad026Cc098E248869f50Ff1",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "hub",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AlreadyFollowing",
          type: "error",
        },
        {
          inputs: [],
          name: "AlreadyWrapped",
          type: "error",
        },
        {
          inputs: [],
          name: "DoesNotHavePermissions",
          type: "error",
        },
        {
          inputs: [],
          name: "FollowTokenDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "Initialized",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidOwner",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "NonERC721ReceiverImplementer",
          type: "error",
        },
        {
          inputs: [],
          name: "NotFollowing",
          type: "error",
        },
        {
          inputs: [],
          name: "NotHub",
          type: "error",
        },
        {
          inputs: [],
          name: "NotOwnerOrApproved",
          type: "error",
        },
        {
          inputs: [],
          name: "NotProfileOwner",
          type: "error",
        },
        {
          inputs: [],
          name: "OnlyWrappedFollowTokens",
          type: "error",
        },
        {
          inputs: [],
          name: "Paused",
          type: "error",
        },
        {
          inputs: [],
          name: "TokenDoesNotExist",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "approved",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "followerProfileId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "followTokenId",
              type: "uint256",
            },
          ],
          name: "FollowApproval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "HUB",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followerProfileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "followTokenId",
              type: "uint256",
            },
          ],
          name: "approveFollow",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followTokenId",
              type: "uint256",
            },
          ],
          name: "burn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "exists",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followerProfileId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "followTokenId",
              type: "uint256",
            },
          ],
          name: "follow",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "getApproved",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getDomainSeparator",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followTokenId",
              type: "uint256",
            },
          ],
          name: "getFollowApproved",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followTokenId",
              type: "uint256",
            },
          ],
          name: "getFollowData",
          outputs: [
            {
              components: [
                {
                  internalType: "uint160",
                  name: "followerProfileId",
                  type: "uint160",
                },
                {
                  internalType: "uint48",
                  name: "originalFollowTimestamp",
                  type: "uint48",
                },
                {
                  internalType: "uint48",
                  name: "followTimestamp",
                  type: "uint48",
                },
                {
                  internalType: "uint256",
                  name: "profileIdAllowedToRecover",
                  type: "uint256",
                },
              ],
              internalType: "struct Types.FollowData",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followTokenId",
              type: "uint256",
            },
          ],
          name: "getFollowTimestamp",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followerProfileId",
              type: "uint256",
            },
          ],
          name: "getFollowTokenId",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getFollowerCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followTokenId",
              type: "uint256",
            },
          ],
          name: "getFollowerProfileId",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followTokenId",
              type: "uint256",
            },
          ],
          name: "getOriginalFollowTimestamp",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followTokenId",
              type: "uint256",
            },
          ],
          name: "getProfileIdAllowedToRecover",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
          ],
          name: "isApprovedForAll",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followerProfileId",
              type: "uint256",
            },
          ],
          name: "isFollowing",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "mintTimestampOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "signer",
              type: "address",
            },
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "ownerOf",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followerProfileId",
              type: "uint256",
            },
          ],
          name: "processBlock",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followTokenId",
              type: "uint256",
            },
          ],
          name: "removeFollower",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "salePrice",
              type: "uint256",
            },
          ],
          name: "royaltyInfo",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "royaltiesInBasisPoints",
              type: "uint256",
            },
          ],
          name: "setRoyalty",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "tokenDataOf",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "mintTimestamp",
                  type: "uint96",
                },
              ],
              internalType: "struct Types.TokenData",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followTokenId",
              type: "uint256",
            },
          ],
          name: "tokenURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followerProfileId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "followerProfileOwner",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "followTokenId",
              type: "uint256",
            },
          ],
          name: "tryMigrate",
          outputs: [
            {
              internalType: "uint48",
              name: "",
              type: "uint48",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "unfollowerProfileId",
              type: "uint256",
            },
          ],
          name: "unfollow",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followTokenId",
              type: "uint256",
            },
          ],
          name: "unwrap",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followTokenId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "wrappedTokenReceiver",
              type: "address",
            },
          ],
          name: "wrap",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followTokenId",
              type: "uint256",
            },
          ],
          name: "wrap",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    FollowSVG: {
      address: "0x37CBD2C689A8eb10459D974A824ADEF74124DC7e",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followTokenId",
              type: "uint256",
            },
          ],
          name: "getFollowSVG",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
      ],
    },
    FollowTokenURI: {
      address: "0x1a4D3f97770925A14997B351C5cC3Cd47192a5B8",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followTokenId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "followedProfileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "originalFollowTimestamp",
              type: "uint256",
            },
          ],
          name: "getTokenURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
      ],
    },
    FollowerOnlyReferenceModule: {
      address: "0x0D11dC88286466DE99E3DE836eaF35826d373a3c",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "hub",
              type: "address",
            },
            {
              internalType: "address",
              name: "moduleOwner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "NotFollowing",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [],
          name: "HUB",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getModuleMetadataURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "initializeReferenceModule",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "profileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pubId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "transactionExecutor",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "pointedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pointedPubId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "enum Types.PublicationType[]",
                  name: "referrerPubTypes",
                  type: "uint8[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.ProcessCommentParams",
              name: "processCommentParams",
              type: "tuple",
            },
          ],
          name: "processComment",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "profileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pubId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "transactionExecutor",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "pointedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pointedPubId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "enum Types.PublicationType[]",
                  name: "referrerPubTypes",
                  type: "uint8[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.ProcessMirrorParams",
              name: "processMirrorParams",
              type: "tuple",
            },
          ],
          name: "processMirror",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "profileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pubId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "transactionExecutor",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "pointedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pointedPubId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "enum Types.PublicationType[]",
                  name: "referrerPubTypes",
                  type: "uint8[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.ProcessQuoteParams",
              name: "processQuoteParams",
              type: "tuple",
            },
          ],
          name: "processQuote",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_metadataURI",
              type: "string",
            },
          ],
          name: "setModuleMetadataURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceID",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    GintoNordFontSVG: {
      address: "0x68b2751C4113BbACca7c024a030355fE3989Bda7",
      abi: [
        {
          inputs: [],
          name: "getFontStyle",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
      ],
    },
    GovernanceLib: {
      address: "0xf32f16af9e44cB92311DE854D138547BC1F91DC7",
      abi: [
        {
          inputs: [],
          name: "EmergencyAdminCanOnlyPauseFurther",
          type: "error",
        },
        {
          inputs: [],
          name: "NotGovernanceOrEmergencyAdmin",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "caller",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "oldEmergencyAdmin",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newEmergencyAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "EmergencyAdminSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "caller",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "prevGovernance",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newGovernance",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "GovernanceSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "profileCreator",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bool",
              name: "whitelisted",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "ProfileCreatorWhitelisted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "caller",
              type: "address",
            },
            {
              indexed: true,
              internalType: "enum Types.ProtocolState",
              name: "prevState",
              type: "uint8",
            },
            {
              indexed: true,
              internalType: "enum Types.ProtocolState",
              name: "newState",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "StateSet",
          type: "event",
        },
      ],
    },
    HandleSVG: {
      address: "0xA2574D9DdB6A325Ad2Be838Bd854228B80215148",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "localName",
              type: "string",
            },
          ],
          name: "getHandleSVG",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
      ],
    },
    HandleTokenURI: {
      address: "0x33b7C0692DD8267f936936C0A0f7079144d78B92",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "localName",
              type: "string",
            },
            {
              internalType: "string",
              name: "namespace",
              type: "string",
            },
          ],
          name: "getTokenURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
      ],
    },
    LensHandles: {
      address: "0xf6fDD7932219D64f267E4BfaF8d19774526d31D9",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "lensHub",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenGuardianCooldown",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AlreadyEnabled",
          type: "error",
        },
        {
          inputs: [],
          name: "DisablingAlreadyTriggered",
          type: "error",
        },
        {
          inputs: [],
          name: "DoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "GuardianEnabled",
          type: "error",
        },
        {
          inputs: [],
          name: "HandleContainsInvalidCharacters",
          type: "error",
        },
        {
          inputs: [],
          name: "HandleFirstCharInvalid",
          type: "error",
        },
        {
          inputs: [],
          name: "HandleLengthInvalid",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "NotEOA",
          type: "error",
        },
        {
          inputs: [],
          name: "NotHub",
          type: "error",
        },
        {
          inputs: [],
          name: "NotOwner",
          type: "error",
        },
        {
          inputs: [],
          name: "NotOwnerNorWhitelisted",
          type: "error",
        },
        {
          inputs: [],
          name: "OnlyOwner",
          type: "error",
        },
        {
          inputs: [],
          name: "OnlyOwnerOrHub",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "approved",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "fromTokenId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "toTokenId",
              type: "uint256",
            },
          ],
          name: "BatchMetadataUpdate",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "handle",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "namespace",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "handleId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "HandleMinted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "wallet",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bool",
              name: "enabled",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "tokenGuardianDisablingTimestamp",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "TokenGuardianStateChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "DANGER__disableTokenGuardian",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "LENS_HUB",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "NAMESPACE",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "NAMESPACE_HASH",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "OWNER",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "TOKEN_GUARDIAN_COOLDOWN",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "burn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "enableTokenGuardian",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "exists",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "getApproved",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "getHandle",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getHandleTokenURIContract",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "getLocalName",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getNamespace",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "getNamespaceHash",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "wallet",
              type: "address",
            },
          ],
          name: "getTokenGuardianDisablingTimestamp",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "localName",
              type: "string",
            },
          ],
          name: "getTokenId",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
          ],
          name: "isApprovedForAll",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "string",
              name: "localName",
              type: "string",
            },
          ],
          name: "migrateHandle",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "string",
              name: "localName",
              type: "string",
            },
          ],
          name: "mintHandle",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "ownerOf",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "salePrice",
              type: "uint256",
            },
          ],
          name: "royaltyInfo",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "handleTokenURIContract",
              type: "address",
            },
          ],
          name: "setHandleTokenURIContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "royaltiesInBasisPoints",
              type: "uint256",
            },
          ],
          name: "setRoyalty",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "tokenURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    LensHub: {
      address: "0xA2574D9DdB6A325Ad2Be838Bd854228B80215148",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          stateMutability: "payable",
          type: "fallback",
        },
        {
          inputs: [],
          name: "admin",
          outputs: [
            {
              internalType: "address",
              name: "admin_",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "changeAdmin",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "implementation_",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
        {
          inputs: [],
          name: "AlreadyEnabled",
          type: "error",
        },
        {
          inputs: [],
          name: "CallerNotFollowNFT",
          type: "error",
        },
        {
          inputs: [],
          name: "CannotInitImplementation",
          type: "error",
        },
        {
          inputs: [],
          name: "DisablingAlreadyTriggered",
          type: "error",
        },
        {
          inputs: [],
          name: "ExecutorInvalid",
          type: "error",
        },
        {
          inputs: [],
          name: "GuardianEnabled",
          type: "error",
        },
        {
          inputs: [],
          name: "InitParamsInvalid",
          type: "error",
        },
        {
          inputs: [],
          name: "Initialized",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidOwner",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "NonERC721ReceiverImplementer",
          type: "error",
        },
        {
          inputs: [],
          name: "NotAllowed",
          type: "error",
        },
        {
          inputs: [],
          name: "NotEOA",
          type: "error",
        },
        {
          inputs: [],
          name: "NotGovernance",
          type: "error",
        },
        {
          inputs: [],
          name: "NotOwnerOrApproved",
          type: "error",
        },
        {
          inputs: [],
          name: "NotProfileOwner",
          type: "error",
        },
        {
          inputs: [],
          name: "NotWhitelisted",
          type: "error",
        },
        {
          inputs: [],
          name: "Paused",
          type: "error",
        },
        {
          inputs: [],
          name: "PublishingPaused",
          type: "error",
        },
        {
          inputs: [],
          name: "TokenDoesNotExist",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "approved",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "fromTokenId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "toTokenId",
              type: "uint256",
            },
          ],
          name: "BatchMetadataUpdate",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "wallet",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bool",
              name: "enabled",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "tokenGuardianDisablingTimestamp",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "TokenGuardianStateChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint16",
              name: "prevTreasuryFee",
              type: "uint16",
            },
            {
              indexed: true,
              internalType: "uint16",
              name: "newTreasuryFee",
              type: "uint16",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "TreasuryFeeSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "prevTreasury",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newTreasury",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "TreasurySet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "unfollowerProfileId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "idOfProfileUnfollowed",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "Unfollowed",
          type: "event",
        },
        {
          inputs: [],
          name: "DANGER__disableTokenGuardian",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "TOKEN_GUARDIAN_COOLDOWN",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "publicationActedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "publicationActedId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "actorProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "address",
                  name: "actionModuleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "actionModuleData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.PublicationActionParams",
              name: "publicationActionParams",
              type: "tuple",
            },
          ],
          name: "act",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "publicationActedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "publicationActedId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "actorProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "address",
                  name: "actionModuleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "actionModuleData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.PublicationActionParams",
              name: "publicationActionParams",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "signer",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              internalType: "struct Types.EIP712Signature",
              name: "signature",
              type: "tuple",
            },
          ],
          name: "actWithSig",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "burn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "delegatorProfileId",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "delegatedExecutors",
              type: "address[]",
            },
            {
              internalType: "bool[]",
              name: "approvals",
              type: "bool[]",
            },
            {
              internalType: "uint64",
              name: "configNumber",
              type: "uint64",
            },
            {
              internalType: "bool",
              name: "switchToGivenConfig",
              type: "bool",
            },
          ],
          name: "changeDelegatedExecutorsConfig",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "delegatorProfileId",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "delegatedExecutors",
              type: "address[]",
            },
            {
              internalType: "bool[]",
              name: "approvals",
              type: "bool[]",
            },
          ],
          name: "changeDelegatedExecutorsConfig",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "delegatorProfileId",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "delegatedExecutors",
              type: "address[]",
            },
            {
              internalType: "bool[]",
              name: "approvals",
              type: "bool[]",
            },
            {
              internalType: "uint64",
              name: "configNumber",
              type: "uint64",
            },
            {
              internalType: "bool",
              name: "switchToGivenConfig",
              type: "bool",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "signer",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              internalType: "struct Types.EIP712Signature",
              name: "signature",
              type: "tuple",
            },
          ],
          name: "changeDelegatedExecutorsConfigWithSig",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "profileId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "pointedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pointedPubId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "referenceModuleData",
                  type: "bytes",
                },
                {
                  internalType: "address[]",
                  name: "actionModules",
                  type: "address[]",
                },
                {
                  internalType: "bytes[]",
                  name: "actionModulesInitDatas",
                  type: "bytes[]",
                },
                {
                  internalType: "address",
                  name: "referenceModule",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "referenceModuleInitData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.CommentParams",
              name: "commentParams",
              type: "tuple",
            },
          ],
          name: "comment",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "profileId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "pointedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pointedPubId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "referenceModuleData",
                  type: "bytes",
                },
                {
                  internalType: "address[]",
                  name: "actionModules",
                  type: "address[]",
                },
                {
                  internalType: "bytes[]",
                  name: "actionModulesInitDatas",
                  type: "bytes[]",
                },
                {
                  internalType: "address",
                  name: "referenceModule",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "referenceModuleInitData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.CommentParams",
              name: "commentParams",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "signer",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              internalType: "struct Types.EIP712Signature",
              name: "signature",
              type: "tuple",
            },
          ],
          name: "commentWithSig",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "followModule",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "followModuleInitData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.CreateProfileParams",
              name: "createProfileParams",
              type: "tuple",
            },
          ],
          name: "createProfile",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "unfollowerProfileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "idOfProfileUnfollowed",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
          ],
          name: "emitUnfollowedEvent",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "enableTokenGuardian",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "exists",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followerProfileId",
              type: "uint256",
            },
            {
              internalType: "uint256[]",
              name: "idsOfProfilesToFollow",
              type: "uint256[]",
            },
            {
              internalType: "uint256[]",
              name: "followTokenIds",
              type: "uint256[]",
            },
            {
              internalType: "bytes[]",
              name: "datas",
              type: "bytes[]",
            },
          ],
          name: "follow",
          outputs: [
            {
              internalType: "uint256[]",
              name: "",
              type: "uint256[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followerProfileId",
              type: "uint256",
            },
            {
              internalType: "uint256[]",
              name: "idsOfProfilesToFollow",
              type: "uint256[]",
            },
            {
              internalType: "uint256[]",
              name: "followTokenIds",
              type: "uint256[]",
            },
            {
              internalType: "bytes[]",
              name: "datas",
              type: "bytes[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "signer",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              internalType: "struct Types.EIP712Signature",
              name: "signature",
              type: "tuple",
            },
          ],
          name: "followWithSig",
          outputs: [
            {
              internalType: "uint256[]",
              name: "",
              type: "uint256[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "getApproved",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
          ],
          name: "getContentURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "delegatorProfileId",
              type: "uint256",
            },
          ],
          name: "getDelegatedExecutorsConfigNumber",
          outputs: [
            {
              internalType: "uint64",
              name: "",
              type: "uint64",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "delegatorProfileId",
              type: "uint256",
            },
          ],
          name: "getDelegatedExecutorsMaxConfigNumberSet",
          outputs: [
            {
              internalType: "uint64",
              name: "",
              type: "uint64",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "delegatorProfileId",
              type: "uint256",
            },
          ],
          name: "getDelegatedExecutorsPrevConfigNumber",
          outputs: [
            {
              internalType: "uint64",
              name: "",
              type: "uint64",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getDomainSeparator",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
          ],
          name: "getFollowModule",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getFollowNFTImpl",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getFollowTokenURIContract",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getGovernance",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getModuleRegistry",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
          ],
          name: "getProfile",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "pubCount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "followModule",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "followNFT",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "__DEPRECATED__handle",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "__DEPRECATED__imageURI",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "__DEPRECATED__followNFTURI",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "metadataURI",
                  type: "string",
                },
              ],
              internalType: "struct Types.Profile",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getProfileTokenURIContract",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
          ],
          name: "getPublication",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "pointedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pointedPubId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "referenceModule",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "__DEPRECATED__collectModule",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "__DEPRECATED__collectNFT",
                  type: "address",
                },
                {
                  internalType: "enum Types.PublicationType",
                  name: "pubType",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "rootProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "rootPubId",
                  type: "uint256",
                },
              ],
              internalType: "struct Types.PublicationMemory",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
          ],
          name: "getPublicationType",
          outputs: [
            {
              internalType: "enum Types.PublicationType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getState",
          outputs: [
            {
              internalType: "enum Types.ProtocolState",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "wallet",
              type: "address",
            },
          ],
          name: "getTokenGuardianDisablingTimestamp",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getTreasury",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getTreasuryData",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "uint16",
              name: "",
              type: "uint16",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getTreasuryFee",
          outputs: [
            {
              internalType: "uint16",
              name: "",
              type: "uint16",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "increment",
              type: "uint8",
            },
          ],
          name: "incrementNonce",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "symbol",
              type: "string",
            },
            {
              internalType: "address",
              name: "newGovernance",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "module",
              type: "address",
            },
          ],
          name: "isActionModuleEnabledInPublication",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
          ],
          name: "isApprovedForAll",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "byProfileId",
              type: "uint256",
            },
          ],
          name: "isBlocked",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "delegatorProfileId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "delegatedExecutor",
              type: "address",
            },
          ],
          name: "isDelegatedExecutorApproved",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "delegatorProfileId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "delegatedExecutor",
              type: "address",
            },
            {
              internalType: "uint64",
              name: "configNumber",
              type: "uint64",
            },
          ],
          name: "isDelegatedExecutorApproved",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "followerProfileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "followedProfileId",
              type: "uint256",
            },
          ],
          name: "isFollowing",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "profileCreator",
              type: "address",
            },
          ],
          name: "isProfileCreatorWhitelisted",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "mintTimestampOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "profileId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "metadataURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "pointedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pointedPubId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "referenceModuleData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.MirrorParams",
              name: "mirrorParams",
              type: "tuple",
            },
          ],
          name: "mirror",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "profileId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "metadataURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "pointedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pointedPubId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "referenceModuleData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.MirrorParams",
              name: "mirrorParams",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "signer",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              internalType: "struct Types.EIP712Signature",
              name: "signature",
              type: "tuple",
            },
          ],
          name: "mirrorWithSig",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "signer",
              type: "address",
            },
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "ownerOf",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "profileId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  internalType: "address[]",
                  name: "actionModules",
                  type: "address[]",
                },
                {
                  internalType: "bytes[]",
                  name: "actionModulesInitDatas",
                  type: "bytes[]",
                },
                {
                  internalType: "address",
                  name: "referenceModule",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "referenceModuleInitData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.PostParams",
              name: "postParams",
              type: "tuple",
            },
          ],
          name: "post",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "profileId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  internalType: "address[]",
                  name: "actionModules",
                  type: "address[]",
                },
                {
                  internalType: "bytes[]",
                  name: "actionModulesInitDatas",
                  type: "bytes[]",
                },
                {
                  internalType: "address",
                  name: "referenceModule",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "referenceModuleInitData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.PostParams",
              name: "postParams",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "signer",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              internalType: "struct Types.EIP712Signature",
              name: "signature",
              type: "tuple",
            },
          ],
          name: "postWithSig",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "profileId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "pointedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pointedPubId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "referenceModuleData",
                  type: "bytes",
                },
                {
                  internalType: "address[]",
                  name: "actionModules",
                  type: "address[]",
                },
                {
                  internalType: "bytes[]",
                  name: "actionModulesInitDatas",
                  type: "bytes[]",
                },
                {
                  internalType: "address",
                  name: "referenceModule",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "referenceModuleInitData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.QuoteParams",
              name: "quoteParams",
              type: "tuple",
            },
          ],
          name: "quote",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "profileId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "pointedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pointedPubId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "referenceModuleData",
                  type: "bytes",
                },
                {
                  internalType: "address[]",
                  name: "actionModules",
                  type: "address[]",
                },
                {
                  internalType: "bytes[]",
                  name: "actionModulesInitDatas",
                  type: "bytes[]",
                },
                {
                  internalType: "address",
                  name: "referenceModule",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "referenceModuleInitData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.QuoteParams",
              name: "quoteParams",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "signer",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              internalType: "struct Types.EIP712Signature",
              name: "signature",
              type: "tuple",
            },
          ],
          name: "quoteWithSig",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "salePrice",
              type: "uint256",
            },
          ],
          name: "royaltyInfo",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "byProfileId",
              type: "uint256",
            },
            {
              internalType: "uint256[]",
              name: "idsOfProfilesToSetBlockStatus",
              type: "uint256[]",
            },
            {
              internalType: "bool[]",
              name: "blockStatus",
              type: "bool[]",
            },
          ],
          name: "setBlockStatus",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "byProfileId",
              type: "uint256",
            },
            {
              internalType: "uint256[]",
              name: "idsOfProfilesToSetBlockStatus",
              type: "uint256[]",
            },
            {
              internalType: "bool[]",
              name: "blockStatus",
              type: "bool[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "signer",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              internalType: "struct Types.EIP712Signature",
              name: "signature",
              type: "tuple",
            },
          ],
          name: "setBlockStatusWithSig",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newEmergencyAdmin",
              type: "address",
            },
          ],
          name: "setEmergencyAdmin",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "followModule",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "followModuleInitData",
              type: "bytes",
            },
          ],
          name: "setFollowModule",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "followModule",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "followModuleInitData",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "signer",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              internalType: "struct Types.EIP712Signature",
              name: "signature",
              type: "tuple",
            },
          ],
          name: "setFollowModuleWithSig",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "followTokenURIContract",
              type: "address",
            },
          ],
          name: "setFollowTokenURIContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newGovernance",
              type: "address",
            },
          ],
          name: "setGovernance",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "setProfileMetadataURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "signer",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              internalType: "struct Types.EIP712Signature",
              name: "signature",
              type: "tuple",
            },
          ],
          name: "setProfileMetadataURIWithSig",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "profileTokenURIContract",
              type: "address",
            },
          ],
          name: "setProfileTokenURIContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "royaltiesInBasisPoints",
              type: "uint256",
            },
          ],
          name: "setRoyalty",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "enum Types.ProtocolState",
              name: "newState",
              type: "uint8",
            },
          ],
          name: "setState",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newTreasury",
              type: "address",
            },
          ],
          name: "setTreasury",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint16",
              name: "newTreasuryFee",
              type: "uint16",
            },
          ],
          name: "setTreasuryFee",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "tokenDataOf",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "mintTimestamp",
                  type: "uint96",
                },
              ],
              internalType: "struct Types.TokenData",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "tokenURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "transferFromKeepingDelegates",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "unfollowerProfileId",
              type: "uint256",
            },
            {
              internalType: "uint256[]",
              name: "idsOfProfilesToUnfollow",
              type: "uint256[]",
            },
          ],
          name: "unfollow",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "unfollowerProfileId",
              type: "uint256",
            },
            {
              internalType: "uint256[]",
              name: "idsOfProfilesToUnfollow",
              type: "uint256[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "signer",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              internalType: "struct Types.EIP712Signature",
              name: "signature",
              type: "tuple",
            },
          ],
          name: "unfollowWithSig",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "profileCreator",
              type: "address",
            },
            {
              internalType: "bool",
              name: "whitelist",
              type: "bool",
            },
          ],
          name: "whitelistProfileCreator",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_logic",
              type: "address",
            },
            {
              internalType: "address",
              name: "admin_",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          stateMutability: "payable",
          type: "constructor",
        },
      ],
    },
    LitAccessControl: {
      address: "0x9Ddad77aD520d02D2566563b446935C6edD970fC",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "lensHub",
              type: "address",
            },
            {
              internalType: "address",
              name: "collectPubAction",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "requestorAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "hasAccess",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "requestorAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "publisherId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "collectorProfileId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "hasCollected",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "requestorAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "followerProfileId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "isFollowing",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    MetaTxLib: {
      address: "0x7Afc131Fc22A703e39694c11003E55b9301BaBd7",
      abi: [
        {
          inputs: [],
          name: "SignatureExpired",
          type: "error",
        },
        {
          inputs: [],
          name: "SignatureInvalid",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "signer",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "NonceUpdated",
          type: "event",
        },
      ],
    },
    ModuleRegistry: {
      address: "0x9E81eD8099dF82004D298144138C12AbB959DF1E",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "moduleType",
              type: "uint256",
            },
          ],
          name: "ModuleDoesNotSupportType",
          type: "error",
        },
        {
          inputs: [],
          name: "ModuleNotRegistered",
          type: "error",
        },
        {
          inputs: [],
          name: "NotLensModule",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "moduleAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "metadata",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "ModuleMetadataRefreshed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "moduleAddress",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "moduleType",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "metadata",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "ModuleRegistered",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "erc20CurrencyAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "symbol",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint8",
              name: "decimals",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "erc20CurrencyRegistered",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "moduleAddress",
              type: "address",
            },
          ],
          name: "emitModuleMetadataRefresh",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "moduleAddress",
              type: "address",
            },
          ],
          name: "getModuleTypes",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "currencyAddress",
              type: "address",
            },
          ],
          name: "isErc20CurrencyRegistered",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "moduleAddress",
              type: "address",
            },
          ],
          name: "isModuleRegistered",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "moduleAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "moduleType",
              type: "uint256",
            },
          ],
          name: "isModuleRegisteredAs",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "currencyAddress",
              type: "address",
            },
          ],
          name: "registerErc20Currency",
          outputs: [
            {
              internalType: "bool",
              name: "registrationWasPerformed",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "moduleAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "moduleType",
              type: "uint256",
            },
          ],
          name: "registerModule",
          outputs: [
            {
              internalType: "bool",
              name: "registrationWasPerformed",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "currencyAddress",
              type: "address",
            },
          ],
          name: "verifyErc20Currency",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "moduleAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "moduleType",
              type: "uint256",
            },
          ],
          name: "verifyModule",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    MultirecipientFeeCollectModule: {
      address: "0xC13ACcCe5cDb32bED1Af0B11cdb637E3966BCB45",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "hub",
              type: "address",
            },
            {
              internalType: "address",
              name: "actionModule",
              type: "address",
            },
            {
              internalType: "address",
              name: "moduleRegistry",
              type: "address",
            },
            {
              internalType: "address",
              name: "moduleOwner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "CollectExpired",
          type: "error",
        },
        {
          inputs: [],
          name: "InitParamsInvalid",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidRecipientSplits",
          type: "error",
        },
        {
          inputs: [],
          name: "MintLimitExceeded",
          type: "error",
        },
        {
          inputs: [],
          name: "ModuleDataMismatch",
          type: "error",
        },
        {
          inputs: [],
          name: "NotActionModule",
          type: "error",
        },
        {
          inputs: [],
          name: "NotFollowing",
          type: "error",
        },
        {
          inputs: [],
          name: "RecipientSplitCannotBeZero",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [],
          name: "ACTION_MODULE",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MODULE_REGISTRY",
          outputs: [
            {
              internalType: "contract IModuleRegistry",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "publicationCollectedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "publicationCollectedId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "collectorProfileId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "collectorProfileOwner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "transactionExecutor",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "enum Types.PublicationType[]",
                  name: "referrerPubTypes",
                  type: "uint8[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct ModuleTypes.ProcessCollectParams",
              name: "processCollectParams",
              type: "tuple",
            },
          ],
          name: "calculateFee",
          outputs: [
            {
              internalType: "uint160",
              name: "",
              type: "uint160",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
          ],
          name: "getBasePublicationData",
          outputs: [
            {
              components: [
                {
                  internalType: "uint160",
                  name: "amount",
                  type: "uint160",
                },
                {
                  internalType: "uint96",
                  name: "collectLimit",
                  type: "uint96",
                },
                {
                  internalType: "address",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "currentCollects",
                  type: "uint96",
                },
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "referralFee",
                  type: "uint16",
                },
                {
                  internalType: "bool",
                  name: "followerOnly",
                  type: "bool",
                },
                {
                  internalType: "uint72",
                  name: "endTimestamp",
                  type: "uint72",
                },
              ],
              internalType: "struct BaseProfilePublicationData",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getModuleMetadataURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
          ],
          name: "getPublicationData",
          outputs: [
            {
              components: [
                {
                  internalType: "uint160",
                  name: "amount",
                  type: "uint160",
                },
                {
                  internalType: "uint96",
                  name: "collectLimit",
                  type: "uint96",
                },
                {
                  internalType: "address",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "currentCollects",
                  type: "uint96",
                },
                {
                  internalType: "uint16",
                  name: "referralFee",
                  type: "uint16",
                },
                {
                  internalType: "bool",
                  name: "followerOnly",
                  type: "bool",
                },
                {
                  internalType: "uint72",
                  name: "endTimestamp",
                  type: "uint72",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "uint16",
                      name: "split",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct RecipientData[]",
                  name: "recipients",
                  type: "tuple[]",
                },
              ],
              internalType: "struct MultirecipientFeeCollectProfilePublicationData",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "initializePublicationCollectModule",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "publicationCollectedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "publicationCollectedId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "collectorProfileId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "collectorProfileOwner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "transactionExecutor",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "enum Types.PublicationType[]",
                  name: "referrerPubTypes",
                  type: "uint8[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct ModuleTypes.ProcessCollectParams",
              name: "processCollectParams",
              type: "tuple",
            },
          ],
          name: "processCollect",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_metadataURI",
              type: "string",
            },
          ],
          name: "setModuleMetadataURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceID",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    PayWhatYouWantCollectModule: {
      address: "0x3d06AA6ca4FC7eE0D5581B85CB52CA7714175e43",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "hub",
              type: "address",
            },
            {
              internalType: "address",
              name: "actionModule",
              type: "address",
            },
            {
              internalType: "address",
              name: "moduleRegistry",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "CollectExpired",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidInitParams",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidOffer",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidRecipientSplits",
          type: "error",
        },
        {
          inputs: [],
          name: "MintLimitExceeded",
          type: "error",
        },
        {
          inputs: [],
          name: "NotActionModule",
          type: "error",
        },
        {
          inputs: [],
          name: "NotFollowing",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [],
          name: "ACTION_MODULE",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MODULE_REGISTRY",
          outputs: [
            {
              internalType: "contract IModuleRegistry",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "publicationCollectedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "publicationCollectedId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "collectorProfileId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "collectorProfileOwner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "transactionExecutor",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "enum Types.PublicationType[]",
                  name: "referrerPubTypes",
                  type: "uint8[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct ModuleTypes.ProcessCollectParams",
              name: "processCollectParams",
              type: "tuple",
            },
          ],
          name: "calculateFee",
          outputs: [
            {
              internalType: "uint160",
              name: "",
              type: "uint160",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
          ],
          name: "getBasePublicationData",
          outputs: [
            {
              components: [
                {
                  internalType: "uint160",
                  name: "amount",
                  type: "uint160",
                },
                {
                  internalType: "uint96",
                  name: "collectLimit",
                  type: "uint96",
                },
                {
                  internalType: "address",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "currentCollects",
                  type: "uint96",
                },
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "referralFee",
                  type: "uint16",
                },
                {
                  internalType: "bool",
                  name: "followerOnly",
                  type: "bool",
                },
                {
                  internalType: "uint72",
                  name: "endTimestamp",
                  type: "uint72",
                },
              ],
              internalType: "struct BaseProfilePublicationData",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getModuleMetadataURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
          ],
          name: "getPublicationData",
          outputs: [
            {
              components: [
                {
                  internalType: "uint160",
                  name: "amountFloor",
                  type: "uint160",
                },
                {
                  internalType: "uint96",
                  name: "collectLimit",
                  type: "uint96",
                },
                {
                  internalType: "address",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "currentCollects",
                  type: "uint96",
                },
                {
                  internalType: "uint16",
                  name: "referralFee",
                  type: "uint16",
                },
                {
                  internalType: "bool",
                  name: "followerOnly",
                  type: "bool",
                },
                {
                  internalType: "uint72",
                  name: "endTimestamp",
                  type: "uint72",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "uint16",
                      name: "split",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct RecipientData[]",
                  name: "recipients",
                  type: "tuple[]",
                },
              ],
              internalType: "struct PayWhatYouWantCollectProfilePublicationData",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "initializePublicationCollectModule",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "publicationCollectedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "publicationCollectedId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "collectorProfileId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "collectorProfileOwner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "transactionExecutor",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "enum Types.PublicationType[]",
                  name: "referrerPubTypes",
                  type: "uint8[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct ModuleTypes.ProcessCollectParams",
              name: "processCollectParams",
              type: "tuple",
            },
          ],
          name: "processCollect",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_metadataURI",
              type: "string",
            },
          ],
          name: "setModuleMetadataURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceID",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    PermissionlessCreator: {
      address: "0xEf56e67B246CbB94CF29E4E721E9B408526f2582",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "lensHub",
              type: "address",
            },
            {
              internalType: "address",
              name: "lensHandles",
              type: "address",
            },
            {
              internalType: "address",
              name: "tokenHandleRegistry",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "HandleAlreadyExists",
          type: "error",
        },
        {
          inputs: [],
          name: "HandleLengthNotAllowed",
          type: "error",
        },
        {
          inputs: [],
          name: "InsufficientCredits",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidFunds",
          type: "error",
        },
        {
          inputs: [],
          name: "NotAllowed",
          type: "error",
        },
        {
          inputs: [],
          name: "OnlyCreditProviders",
          type: "error",
        },
        {
          inputs: [],
          name: "OnlyOwner",
          type: "error",
        },
        {
          inputs: [],
          name: "OnlyOwnerOrHub",
          type: "error",
        },
        {
          inputs: [],
          name: "ProfileAlreadyLinked",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "creditAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "remainingCredits",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "CreditBalanceChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "creditProvider",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isCreditProvider",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "CreditProviderStatusChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "handleId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "handle",
              type: "string",
            },
            {
              indexed: true,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "HandleCreatedUsingCredits",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "newPrice",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "HandleCreationPriceChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "newMinLength",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "HandleLengthMinChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "ProfileCreatedUsingCredits",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "newPrice",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "ProfileCreationPriceChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "targetAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isUntrusted",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "TrustStatusChanged",
          type: "event",
        },
        {
          inputs: [],
          name: "LENS_HANDLES",
          outputs: [
            {
              internalType: "contract ILensHandles",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "LENS_HUB",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "OWNER",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "TOKEN_HANDLE_REGISTRY",
          outputs: [
            {
              internalType: "contract ITokenHandleRegistry",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "creditProvider",
              type: "address",
            },
          ],
          name: "addCreditProvider",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "string",
              name: "handle",
              type: "string",
            },
          ],
          name: "createHandle",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "string",
              name: "handle",
              type: "string",
            },
          ],
          name: "createHandleUsingCredits",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "followModule",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "followModuleInitData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.CreateProfileParams",
              name: "createProfileParams",
              type: "tuple",
            },
            {
              internalType: "address[]",
              name: "delegatedExecutors",
              type: "address[]",
            },
          ],
          name: "createProfile",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "followModule",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "followModuleInitData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.CreateProfileParams",
              name: "createProfileParams",
              type: "tuple",
            },
            {
              internalType: "address[]",
              name: "delegatedExecutors",
              type: "address[]",
            },
          ],
          name: "createProfileUsingCredits",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "followModule",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "followModuleInitData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.CreateProfileParams",
              name: "createProfileParams",
              type: "tuple",
            },
            {
              internalType: "string",
              name: "handle",
              type: "string",
            },
            {
              internalType: "address[]",
              name: "delegatedExecutors",
              type: "address[]",
            },
          ],
          name: "createProfileWithHandle",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "followModule",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "followModuleInitData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.CreateProfileParams",
              name: "createProfileParams",
              type: "tuple",
            },
            {
              internalType: "string",
              name: "handle",
              type: "string",
            },
            {
              internalType: "address[]",
              name: "delegatedExecutors",
              type: "address[]",
            },
          ],
          name: "createProfileWithHandleUsingCredits",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "decreaseCredits",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "targetAddress",
              type: "address",
            },
          ],
          name: "getCreditBalance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getHandleCreationPrice",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getHandleLengthMin",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getProfileCreationPrice",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
          ],
          name: "getProfileCreatorUsingCredits",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getProfileWithHandleCreationPrice",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "increaseCredits",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "targetAddress",
              type: "address",
            },
          ],
          name: "isCreditProvider",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "targetAddress",
              type: "address",
            },
          ],
          name: "isUntrusted",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "creditProvider",
              type: "address",
            },
          ],
          name: "removeCreditProvider",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint128",
              name: "newPrice",
              type: "uint128",
            },
          ],
          name: "setHandleCreationPrice",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "newMinLength",
              type: "uint8",
            },
          ],
          name: "setHandleLengthMin",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint128",
              name: "newPrice",
              type: "uint128",
            },
          ],
          name: "setProfileCreationPrice",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "targetAddress",
              type: "address",
            },
            {
              internalType: "bool",
              name: "setAsUntrusted",
              type: "bool",
            },
          ],
          name: "setTrustStatus",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "transferFromKeepingDelegates",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "withdrawFunds",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    ProfileCreationProxy: {
      address: "0x8de25afc4B37e0AdBb58caf3dF06fAf419455404",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "hub",
              type: "address",
            },
            {
              internalType: "address",
              name: "lensHandles",
              type: "address",
            },
            {
              internalType: "address",
              name: "tokenHandleRegistry",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "OnlyOwner",
          type: "error",
        },
        {
          inputs: [],
          name: "OnlyOwnerOrHub",
          type: "error",
        },
        {
          inputs: [],
          name: "ProfileAlreadyExists",
          type: "error",
        },
        {
          inputs: [],
          name: "LENS_HUB",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "OWNER",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "string",
              name: "handle",
              type: "string",
            },
          ],
          name: "proxyCreateHandle",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "followModule",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "followModuleInitData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.CreateProfileParams",
              name: "createProfileParams",
              type: "tuple",
            },
          ],
          name: "proxyCreateProfile",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "followModule",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "followModuleInitData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.CreateProfileParams",
              name: "createProfileParams",
              type: "tuple",
            },
            {
              internalType: "string",
              name: "handle",
              type: "string",
            },
          ],
          name: "proxyCreateProfileWithHandle",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    ProfileLib: {
      address: "0x653FB436CE5523d9607339C90d2D361396d699DA",
      abi: [
        {
          inputs: [],
          name: "ArrayMismatch",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "SelfBlock",
          type: "error",
        },
        {
          inputs: [],
          name: "TokenDoesNotExist",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "byProfileId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "idOfProfileBlocked",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "Blocked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "delegatorProfileId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "configNumber",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "DelegatedExecutorsConfigApplied",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "delegatorProfileId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "configNumber",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address[]",
              name: "delegatedExecutors",
              type: "address[]",
            },
            {
              indexed: false,
              internalType: "bool[]",
              name: "approvals",
              type: "bool[]",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "DelegatedExecutorsConfigChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "followModule",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "followModuleInitData",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "followModuleReturnData",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "FollowModuleSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "ProfileCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "metadata",
              type: "string",
            },
            {
              indexed: false,
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "ProfileMetadataSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "byProfileId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "idOfProfileUnblocked",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "Unblocked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "unfollowerProfileId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "idOfProfileUnfollowed",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "Unfollowed",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "delegatorProfileId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "delegatedExecutor",
              type: "address",
            },
          ],
          name: "isExecutorApproved",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    PublicActProxy: {
      address: "0x88c8fa7C470d9d94aDfA40187157917B26A548d3\n",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "lensHub",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "SignatureExpired",
          type: "error",
        },
        {
          inputs: [],
          name: "SignatureInvalid",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "signer",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "NonceUpdated",
          type: "event",
        },
        {
          inputs: [],
          name: "HUB",
          outputs: [
            {
              internalType: "contract ILensHub",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "increment",
              type: "uint8",
            },
          ],
          name: "incrementNonce",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "signer",
              type: "address",
            },
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "publicationActedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "publicationActedId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "actorProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "address",
                  name: "actionModuleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "actionModuleData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.PublicationActionParams",
              name: "publicationActionParams",
              type: "tuple",
            },
          ],
          name: "publicFreeAct",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "publicationActedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "publicationActedId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "actorProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "address",
                  name: "actionModuleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "actionModuleData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.PublicationActionParams",
              name: "publicationActionParams",
              type: "tuple",
            },
            {
              internalType: "address",
              name: "currency",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "approveTo",
              type: "address",
            },
          ],
          name: "publicPaidAct",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "publicationActedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "publicationActedId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "actorProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "address",
                  name: "actionModuleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "actionModuleData",
                  type: "bytes",
                },
              ],
              internalType: "struct Types.PublicationActionParams",
              name: "publicationActionParams",
              type: "tuple",
            },
            {
              internalType: "address",
              name: "currency",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "approveTo",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "signer",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              internalType: "struct Types.EIP712Signature",
              name: "signature",
              type: "tuple",
            },
          ],
          name: "publicPaidActWithSig",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    PublicationLib: {
      address: "0x37CBD2C689A8eb10459D974A824ADEF74124DC7e",
      abi: [
        {
          inputs: [],
          name: "ArrayMismatch",
          type: "error",
        },
        {
          inputs: [],
          name: "Blocked",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidPointedPub",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidReferrer",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "profileId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "pointedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pointedPubId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "referenceModuleData",
                  type: "bytes",
                },
                {
                  internalType: "address[]",
                  name: "actionModules",
                  type: "address[]",
                },
                {
                  internalType: "bytes[]",
                  name: "actionModulesInitDatas",
                  type: "bytes[]",
                },
                {
                  internalType: "address",
                  name: "referenceModule",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "referenceModuleInitData",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct Types.CommentParams",
              name: "commentParams",
              type: "tuple",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "referenceModuleReturnData",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "bytes[]",
              name: "actionModulesInitReturnDatas",
              type: "bytes[]",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "referenceModuleInitReturnData",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "CommentCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "profileId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "metadataURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "pointedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pointedPubId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "referenceModuleData",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct Types.MirrorParams",
              name: "mirrorParams",
              type: "tuple",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "referenceModuleReturnData",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "MirrorCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "profileId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  internalType: "address[]",
                  name: "actionModules",
                  type: "address[]",
                },
                {
                  internalType: "bytes[]",
                  name: "actionModulesInitDatas",
                  type: "bytes[]",
                },
                {
                  internalType: "address",
                  name: "referenceModule",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "referenceModuleInitData",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct Types.PostParams",
              name: "postParams",
              type: "tuple",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes[]",
              name: "actionModulesInitReturnDatas",
              type: "bytes[]",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "referenceModuleInitReturnData",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "PostCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "profileId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "pointedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "pointedPubId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "bytes",
                  name: "referenceModuleData",
                  type: "bytes",
                },
                {
                  internalType: "address[]",
                  name: "actionModules",
                  type: "address[]",
                },
                {
                  internalType: "bytes[]",
                  name: "actionModulesInitDatas",
                  type: "bytes[]",
                },
                {
                  internalType: "address",
                  name: "referenceModule",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "referenceModuleInitData",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct Types.QuoteParams",
              name: "quoteParams",
              type: "tuple",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "referenceModuleReturnData",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "bytes[]",
              name: "actionModulesInitReturnDatas",
              type: "bytes[]",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "referenceModuleInitReturnData",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "QuoteCreated",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
          ],
          name: "getContentURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    RevertFollowModule: {
      address: "0x0c4944D3d0dDf692B578100Ed260a67c7d7F7930",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "moduleOwner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "FollowInvalid",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [],
          name: "getModuleMetadataURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "initializeFollowModule",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processFollow",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_metadataURI",
              type: "string",
            },
          ],
          name: "setModuleMetadataURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceID",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    SimpleFeeCollectModule: {
      address: "0x185B529b421Ff60b0F2388483b757b39103cfcb1",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "hub",
              type: "address",
            },
            {
              internalType: "address",
              name: "actionModule",
              type: "address",
            },
            {
              internalType: "address",
              name: "moduleRegistry",
              type: "address",
            },
            {
              internalType: "address",
              name: "moduleOwner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "CollectExpired",
          type: "error",
        },
        {
          inputs: [],
          name: "InitParamsInvalid",
          type: "error",
        },
        {
          inputs: [],
          name: "MintLimitExceeded",
          type: "error",
        },
        {
          inputs: [],
          name: "ModuleDataMismatch",
          type: "error",
        },
        {
          inputs: [],
          name: "NotActionModule",
          type: "error",
        },
        {
          inputs: [],
          name: "NotFollowing",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [],
          name: "ACTION_MODULE",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MODULE_REGISTRY",
          outputs: [
            {
              internalType: "contract IModuleRegistry",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "publicationCollectedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "publicationCollectedId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "collectorProfileId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "collectorProfileOwner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "transactionExecutor",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "enum Types.PublicationType[]",
                  name: "referrerPubTypes",
                  type: "uint8[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct ModuleTypes.ProcessCollectParams",
              name: "processCollectParams",
              type: "tuple",
            },
          ],
          name: "calculateFee",
          outputs: [
            {
              internalType: "uint160",
              name: "",
              type: "uint160",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
          ],
          name: "getBasePublicationData",
          outputs: [
            {
              components: [
                {
                  internalType: "uint160",
                  name: "amount",
                  type: "uint160",
                },
                {
                  internalType: "uint96",
                  name: "collectLimit",
                  type: "uint96",
                },
                {
                  internalType: "address",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "currentCollects",
                  type: "uint96",
                },
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "referralFee",
                  type: "uint16",
                },
                {
                  internalType: "bool",
                  name: "followerOnly",
                  type: "bool",
                },
                {
                  internalType: "uint72",
                  name: "endTimestamp",
                  type: "uint72",
                },
              ],
              internalType: "struct BaseProfilePublicationData",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getModuleMetadataURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
          ],
          name: "getPublicationData",
          outputs: [
            {
              components: [
                {
                  internalType: "uint160",
                  name: "amount",
                  type: "uint160",
                },
                {
                  internalType: "uint96",
                  name: "collectLimit",
                  type: "uint96",
                },
                {
                  internalType: "address",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "currentCollects",
                  type: "uint96",
                },
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "referralFee",
                  type: "uint16",
                },
                {
                  internalType: "bool",
                  name: "followerOnly",
                  type: "bool",
                },
                {
                  internalType: "uint72",
                  name: "endTimestamp",
                  type: "uint72",
                },
              ],
              internalType: "struct BaseProfilePublicationData",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "initializePublicationCollectModule",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "publicationCollectedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "publicationCollectedId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "collectorProfileId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "collectorProfileOwner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "transactionExecutor",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "enum Types.PublicationType[]",
                  name: "referrerPubTypes",
                  type: "uint8[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct ModuleTypes.ProcessCollectParams",
              name: "processCollectParams",
              type: "tuple",
            },
          ],
          name: "processCollect",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_metadataURI",
              type: "string",
            },
          ],
          name: "setModuleMetadataURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceID",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    TokenHandleRegistry: {
      address: "0x24360dc6Af3c0b37baA8B0aaDD5BcA11C1a1389A",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "lensHub",
              type: "address",
            },
            {
              internalType: "address",
              name: "lensHandles",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "DoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "DoesNotHavePermissions",
          type: "error",
        },
        {
          inputs: [],
          name: "HandleAndTokenNotInSameWallet",
          type: "error",
        },
        {
          inputs: [],
          name: "NotHandleNorTokenOwner",
          type: "error",
        },
        {
          inputs: [],
          name: "NotLinked",
          type: "error",
        },
        {
          inputs: [],
          name: "OnlyLensHub",
          type: "error",
        },
        {
          inputs: [],
          name: "SignatureExpired",
          type: "error",
        },
        {
          inputs: [],
          name: "SignatureInvalid",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "collection",
                  type: "address",
                },
              ],
              indexed: false,
              internalType: "struct RegistryTypes.Handle",
              name: "handle",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "collection",
                  type: "address",
                },
              ],
              indexed: false,
              internalType: "struct RegistryTypes.Token",
              name: "token",
              type: "tuple",
            },
            {
              indexed: false,
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "HandleLinked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "collection",
                  type: "address",
                },
              ],
              indexed: false,
              internalType: "struct RegistryTypes.Handle",
              name: "handle",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "collection",
                  type: "address",
                },
              ],
              indexed: false,
              internalType: "struct RegistryTypes.Token",
              name: "token",
              type: "tuple",
            },
            {
              indexed: false,
              internalType: "address",
              name: "transactionExecutor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "HandleUnlinked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "signer",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "NonceUpdated",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
          ],
          name: "getDefaultHandle",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "increment",
              type: "uint8",
            },
          ],
          name: "incrementNonce",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "handleId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
          ],
          name: "link",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "handleId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "signer",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              internalType: "struct Types.EIP712Signature",
              name: "signature",
              type: "tuple",
            },
          ],
          name: "linkWithSig",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "handleId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
          ],
          name: "migrationLink",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "signer",
              type: "address",
            },
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "handleId",
              type: "uint256",
            },
          ],
          name: "resolve",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "handleId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
          ],
          name: "unlink",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "handleId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "signer",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "v",
                  type: "uint8",
                },
                {
                  internalType: "bytes32",
                  name: "r",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "s",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
              ],
              internalType: "struct Types.EIP712Signature",
              name: "signature",
              type: "tuple",
            },
          ],
          name: "unlinkWithSig",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    TokenGatedCollectModule: {
      address: "0x25281C473698Bb7593C56Ee1b4BedB116DC82939",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "hub",
              type: "address",
            },
            {
              internalType: "address",
              name: "actionModule",
              type: "address",
            },
            {
              internalType: "address",
              name: "moduleRegistry",
              type: "address",
            },
            {
              internalType: "address",
              name: "moduleOwner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "CollectExpired",
          type: "error",
        },
        {
          inputs: [],
          name: "GateParamsInvalid",
          type: "error",
        },
        {
          inputs: [],
          name: "InitParamsInvalid",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidRecipientSplits",
          type: "error",
        },
        {
          inputs: [],
          name: "MintLimitExceeded",
          type: "error",
        },
        {
          inputs: [],
          name: "ModuleDataMismatch",
          type: "error",
        },
        {
          inputs: [],
          name: "NotActionModule",
          type: "error",
        },
        {
          inputs: [],
          name: "NotEnoughBalance",
          type: "error",
        },
        {
          inputs: [],
          name: "NotFollowing",
          type: "error",
        },
        {
          inputs: [],
          name: "RecipientSplitCannotBeZero",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [],
          name: "ModuleRegistered",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "tokenAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "minThreshold",
              type: "uint256",
            },
          ],
          name: "TokenGatedCollectCreated",
          type: "event",
        },
        {
          inputs: [],
          name: "ACTION_MODULE",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "MODULE_REGISTRY",
          outputs: [
            {
              internalType: "contract IModuleRegistry",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "publicationCollectedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "publicationCollectedId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "collectorProfileId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "collectorProfileOwner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "transactionExecutor",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "enum Types.PublicationType[]",
                  name: "referrerPubTypes",
                  type: "uint8[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct ModuleTypes.ProcessCollectParams",
              name: "processCollectParams",
              type: "tuple",
            },
          ],
          name: "calculateFee",
          outputs: [
            {
              internalType: "uint160",
              name: "",
              type: "uint160",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
          ],
          name: "getBasePublicationData",
          outputs: [
            {
              components: [
                {
                  internalType: "uint160",
                  name: "amount",
                  type: "uint160",
                },
                {
                  internalType: "uint96",
                  name: "collectLimit",
                  type: "uint96",
                },
                {
                  internalType: "address",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "currentCollects",
                  type: "uint96",
                },
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "referralFee",
                  type: "uint16",
                },
                {
                  internalType: "bool",
                  name: "followerOnly",
                  type: "bool",
                },
                {
                  internalType: "uint72",
                  name: "endTimestamp",
                  type: "uint72",
                },
              ],
              internalType: "struct BaseProfilePublicationData",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getModuleMetadataURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
          ],
          name: "getPublicationData",
          outputs: [
            {
              components: [
                {
                  internalType: "uint160",
                  name: "amount",
                  type: "uint160",
                },
                {
                  internalType: "uint96",
                  name: "collectLimit",
                  type: "uint96",
                },
                {
                  internalType: "address",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "currentCollects",
                  type: "uint96",
                },
                {
                  internalType: "uint16",
                  name: "referralFee",
                  type: "uint16",
                },
                {
                  internalType: "bool",
                  name: "followerOnly",
                  type: "bool",
                },
                {
                  internalType: "uint72",
                  name: "endTimestamp",
                  type: "uint72",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "recipient",
                      type: "address",
                    },
                    {
                      internalType: "uint16",
                      name: "split",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct RecipientData[]",
                  name: "recipients",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "tokenAddress",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "minThreshold",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct GateParams",
                  name: "gateParams",
                  type: "tuple",
                },
              ],
              internalType: "struct TokenGatedCollectPublicationData",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "profileId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "pubId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "initializePublicationCollectModule",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "isRegistered",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "publicationCollectedProfileId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "publicationCollectedId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "collectorProfileId",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "collectorProfileOwner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "transactionExecutor",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerProfileIds",
                  type: "uint256[]",
                },
                {
                  internalType: "uint256[]",
                  name: "referrerPubIds",
                  type: "uint256[]",
                },
                {
                  internalType: "enum Types.PublicationType[]",
                  name: "referrerPubTypes",
                  type: "uint8[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct ModuleTypes.ProcessCollectParams",
              name: "processCollectParams",
              type: "tuple",
            },
          ],
          name: "processCollect",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "registerModule",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_metadataURI",
              type: "string",
            },
          ],
          name: "setModuleMetadataURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceID",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    USDC: {
      address: "0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582",
      abi: [
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "owner", type: "address" },
            { indexed: true, internalType: "address", name: "spender", type: "address" },
            { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "authorizer", type: "address" },
            { indexed: true, internalType: "bytes32", name: "nonce", type: "bytes32" },
          ],
          name: "AuthorizationCanceled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "authorizer", type: "address" },
            { indexed: true, internalType: "bytes32", name: "nonce", type: "bytes32" },
          ],
          name: "AuthorizationUsed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "_account", type: "address" }],
          name: "Blacklisted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "newBlacklister", type: "address" }],
          name: "BlacklisterChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "burner", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "Burn",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "newMasterMinter", type: "address" }],
          name: "MasterMinterChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "minter", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "Mint",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "minter", type: "address" },
            { indexed: false, internalType: "uint256", name: "minterAllowedAmount", type: "uint256" },
          ],
          name: "MinterConfigured",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "oldMinter", type: "address" }],
          name: "MinterRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: false, internalType: "address", name: "previousOwner", type: "address" },
            { indexed: false, internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        { anonymous: false, inputs: [], name: "Pause", type: "event" },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "newAddress", type: "address" }],
          name: "PauserChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "newRescuer", type: "address" }],
          name: "RescuerChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "_account", type: "address" }],
          name: "UnBlacklisted",
          type: "event",
        },
        { anonymous: false, inputs: [], name: "Unpause", type: "event" },
        {
          inputs: [],
          name: "CANCEL_AUTHORIZATION_TYPEHASH",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "PERMIT_TYPEHASH",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "RECEIVE_WITH_AUTHORIZATION_TYPEHASH",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "TRANSFER_WITH_AUTHORIZATION_TYPEHASH",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "authorizer", type: "address" },
            { internalType: "bytes32", name: "nonce", type: "bytes32" },
          ],
          name: "authorizationState",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "account", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "_account", type: "address" }],
          name: "blacklist",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "blacklister",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
          name: "burn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "authorizer", type: "address" },
            { internalType: "bytes32", name: "nonce", type: "bytes32" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "cancelAuthorization",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "authorizer", type: "address" },
            { internalType: "bytes32", name: "nonce", type: "bytes32" },
            { internalType: "bytes", name: "signature", type: "bytes" },
          ],
          name: "cancelAuthorization",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "minter", type: "address" },
            { internalType: "uint256", name: "minterAllowedAmount", type: "uint256" },
          ],
          name: "configureMinter",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "currency",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "decrement", type: "uint256" },
          ],
          name: "decreaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "increment", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "string", name: "tokenName", type: "string" },
            { internalType: "string", name: "tokenSymbol", type: "string" },
            { internalType: "string", name: "tokenCurrency", type: "string" },
            { internalType: "uint8", name: "tokenDecimals", type: "uint8" },
            { internalType: "address", name: "newMasterMinter", type: "address" },
            { internalType: "address", name: "newPauser", type: "address" },
            { internalType: "address", name: "newBlacklister", type: "address" },
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "string", name: "newName", type: "string" }],
          name: "initializeV2",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "lostAndFound", type: "address" }],
          name: "initializeV2_1",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address[]", name: "accountsToBlacklist", type: "address[]" },
            { internalType: "string", name: "newSymbol", type: "string" },
          ],
          name: "initializeV2_2",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "_account", type: "address" }],
          name: "isBlacklisted",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "account", type: "address" }],
          name: "isMinter",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "masterMinter",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_to", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "mint",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "minter", type: "address" }],
          name: "minterAllowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "nonces",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "pause", outputs: [], stateMutability: "nonpayable", type: "function" },
        {
          inputs: [],
          name: "paused",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pauser",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "bytes", name: "signature", type: "bytes" },
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "validAfter", type: "uint256" },
            { internalType: "uint256", name: "validBefore", type: "uint256" },
            { internalType: "bytes32", name: "nonce", type: "bytes32" },
            { internalType: "bytes", name: "signature", type: "bytes" },
          ],
          name: "receiveWithAuthorization",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "validAfter", type: "uint256" },
            { internalType: "uint256", name: "validBefore", type: "uint256" },
            { internalType: "bytes32", name: "nonce", type: "bytes32" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "receiveWithAuthorization",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "minter", type: "address" }],
          name: "removeMinter",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "contract IERC20", name: "tokenContract", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "rescueERC20",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "rescuer",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "validAfter", type: "uint256" },
            { internalType: "uint256", name: "validBefore", type: "uint256" },
            { internalType: "bytes32", name: "nonce", type: "bytes32" },
            { internalType: "bytes", name: "signature", type: "bytes" },
          ],
          name: "transferWithAuthorization",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "validAfter", type: "uint256" },
            { internalType: "uint256", name: "validBefore", type: "uint256" },
            { internalType: "bytes32", name: "nonce", type: "bytes32" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "transferWithAuthorization",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "_account", type: "address" }],
          name: "unBlacklist",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        { inputs: [], name: "unpause", outputs: [], stateMutability: "nonpayable", type: "function" },
        {
          inputs: [{ internalType: "address", name: "_newBlacklister", type: "address" }],
          name: "updateBlacklister",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "_newMasterMinter", type: "address" }],
          name: "updateMasterMinter",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "_newPauser", type: "address" }],
          name: "updatePauser",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "newRescuer", type: "address" }],
          name: "updateRescuer",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "version",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "pure",
          type: "function",
        },
      ],
    },
    ValidationLib: {
      address: "0x1a4D3f97770925A14997B351C5cC3Cd47192a5B8",
      abi: [],
    },
    WPOL: {
      address: "0x360ad4f9a9a8efe9a8dcb5f461c4cc1047e1dcf9",
      abi: [
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [{ name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "guy", type: "address" },
            { name: "wad", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "src", type: "address" },
            { name: "dst", type: "address" },
            { name: "wad", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [{ name: "wad", type: "uint256" }],
          name: "withdraw",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [{ name: "", type: "uint8" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [{ name: "", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [{ name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "dst", type: "address" },
            { name: "wad", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [],
          name: "deposit",
          outputs: [],
          payable: true,
          stateMutability: "payable",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            { name: "", type: "address" },
            { name: "", type: "address" },
          ],
          name: "allowance",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        { payable: true, stateMutability: "payable", type: "fallback" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "src", type: "address" },
            { indexed: true, name: "guy", type: "address" },
            { indexed: false, name: "wad", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "src", type: "address" },
            { indexed: true, name: "dst", type: "address" },
            { indexed: false, name: "wad", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "dst", type: "address" },
            { indexed: false, name: "wad", type: "uint256" },
          ],
          name: "Deposit",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "src", type: "address" },
            { indexed: false, name: "wad", type: "uint256" },
          ],
          name: "Withdrawal",
          type: "event",
        },
      ],
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
