import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";
import testnetAddressBook from "~~/utils/scaffold-lens/addressBook.testnet.json";

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
  232: {
    AccountImpl: {
      address: "0x6a0DD735C2a2Ad6514E7dCBC854efC01228BeFE4",
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "receive",
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "abiDecodeForKnownSelectorHelper",
          inputs: [
            {
              name: "selector",
              type: "bytes4",
              internalType: "bytes4",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "addAccountManager",
          inputs: [
            {
              name: "accountManager",
              type: "address",
              internalType: "address",
            },
            {
              name: "accountManagerPermissions",
              type: "tuple",
              internalType: "struct AccountManagerPermissions",
              components: [
                {
                  name: "canExecuteTransactions",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferTokens",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferNative",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canSetMetadataURI",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "allowNonOwnerSpending",
          inputs: [
            {
              name: "allow",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "canBeAddedToGroup",
          inputs: [
            {
              name: "group",
              type: "address",
              internalType: "address",
            },
            {
              name: "addedBy",
              type: "address",
              internalType: "address",
            },
            {
              name: "params",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "canExecuteTransactions",
          inputs: [
            {
              name: "executor",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "canSetMetadataURI",
          inputs: [
            {
              name: "accountManager",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "executeTransaction",
          inputs: [
            {
              name: "target",
              type: "address",
              internalType: "address",
            },
            {
              name: "value",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "executeTransactions",
          inputs: [
            {
              name: "transactions",
              type: "tuple[]",
              internalType: "struct Transaction[]",
              components: [
                {
                  name: "target",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "data",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes[]",
              internalType: "bytes[]",
            },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "getAccountManagerPermissions",
          inputs: [
            {
              name: "accountManager",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct AccountManagerPermissions",
              components: [
                {
                  name: "canExecuteTransactions",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferTokens",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferNative",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canSetMetadataURI",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getExtraData",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "accountManagers",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "accountManagerPermissions",
              type: "tuple[]",
              internalType: "struct AccountManagerPermissions[]",
              components: [
                {
                  name: "canExecuteTransactions",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferTokens",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferNative",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canSetMetadataURI",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
            {
              name: "sourceStamp",
              type: "tuple",
              internalType: "struct SourceStamp",
              components: [
                {
                  name: "source",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "originalMsgSender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "validator",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "deadline",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isAccountManager",
          inputs: [
            {
              name: "accountManager",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "onERC1155BatchReceived",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "onERC1155Received",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "onERC721Received",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "removeAccountManager",
          inputs: [
            {
              name: "accountManager",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setExtraData",
          inputs: [
            {
              name: "extraDataToSet",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "sourceStamp",
              type: "tuple",
              internalType: "struct SourceStamp",
              components: [
                {
                  name: "source",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "originalMsgSender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "validator",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "deadline",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "updateAccountManagerPermissions",
          inputs: [
            {
              name: "accountManager",
              type: "address",
              internalType: "address",
            },
            {
              name: "accountManagerPermissions",
              type: "tuple",
              internalType: "struct AccountManagerPermissions",
              components: [
                {
                  name: "canExecuteTransactions",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferTokens",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferNative",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canSetMetadataURI",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Account_AccountManagerAdded",
          inputs: [
            {
              name: "accountManager",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "permissions",
              type: "tuple",
              indexed: false,
              internalType: "struct AccountManagerPermissions",
              components: [
                {
                  name: "canExecuteTransactions",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferTokens",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferNative",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canSetMetadataURI",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_AccountManagerRemoved",
          inputs: [
            {
              name: "accountManager",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_AccountManagerUpdated",
          inputs: [
            {
              name: "accountManager",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "permissions",
              type: "tuple",
              indexed: false,
              internalType: "struct AccountManagerPermissions",
              components: [
                {
                  name: "canExecuteTransactions",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferTokens",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferNative",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canSetMetadataURI",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_AllowNonOwnerSpending",
          inputs: [
            {
              name: "allow",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "timestamp",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_ExtraDataAdded",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_ExtraDataRemoved",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_ExtraDataUpdated",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_TransactionExecuted",
          inputs: [
            {
              name: "target",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "data",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "executor",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Contract_Deployed",
          inputs: [
            {
              name: "contractType",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "flavour",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ExtraStorageSet",
          inputs: [
            {
              name: "addressScope",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "entityType",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "entityId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "NotAllowed",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
        {
          type: "error",
          name: "RedundantStateChange",
          inputs: [],
        },
      ],
    },
    AppFactory: {
      address: "0xB3b7502C47E16a1E3c6d660b73006f45Ec327B0B",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "beacon",
              type: "address",
              internalType: "address",
            },
            {
              name: "lock",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployApp",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "sourceStampVerificationEnabled",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "accessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
            {
              name: "proxyAdminOwner",
              type: "address",
              internalType: "address",
            },
            {
              name: "initialProperties",
              type: "tuple",
              internalType: "struct AppInitialProperties",
              components: [
                {
                  name: "graph",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "feeds",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "namespace",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "groups",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "defaultFeed",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "signers",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "paymaster",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "treasury",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_AppFactory_Deployment",
          inputs: [
            {
              name: "app",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "extraData",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
      ],
    },
    LensFactory: {
      address: "0x1fa75D26819Ac733bf7B1C1B36C3F8aEF32d2Cc0",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "factories",
              type: "tuple",
              internalType: "struct FactoryConstructorParams",
              components: [
                {
                  name: "accessControlFactory",
                  type: "address",
                  internalType: "contract AccessControlFactory",
                },
                {
                  name: "accountFactory",
                  type: "address",
                  internalType: "contract AccountFactory",
                },
                {
                  name: "appFactory",
                  type: "address",
                  internalType: "contract AppFactory",
                },
                {
                  name: "groupFactory",
                  type: "address",
                  internalType: "contract GroupFactory",
                },
                {
                  name: "feedFactory",
                  type: "address",
                  internalType: "contract FeedFactory",
                },
                {
                  name: "graphFactory",
                  type: "address",
                  internalType: "contract GraphFactory",
                },
                {
                  name: "namespaceFactory",
                  type: "address",
                  internalType: "contract NamespaceFactory",
                },
              ],
            },
            {
              name: "rules",
              type: "tuple",
              internalType: "struct RuleConstructorParams",
              components: [
                {
                  name: "accountBlockingRule",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "groupGatedFeedRule",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "usernameSimpleCharsetRule",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "banMemberGroupRule",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "addRemovePidGroupRule",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createAccountWithUsernameFree",
          inputs: [
            {
              name: "namespacePrimitiveAddress",
              type: "address",
              internalType: "address",
            },
            {
              name: "accountParams",
              type: "tuple",
              internalType: "struct CreateAccountParams",
              components: [
                {
                  name: "metadataURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "owner",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "accountManagers",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "accountManagersPermissions",
                  type: "tuple[]",
                  internalType: "struct AccountManagerPermissions[]",
                  components: [
                    {
                      name: "canExecuteTransactions",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "canTransferTokens",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "canTransferNative",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "canSetMetadataURI",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
                {
                  name: "accountCreationSourceStamp",
                  type: "tuple",
                  internalType: "struct SourceStamp",
                  components: [
                    {
                      name: "source",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "originalMsgSender",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "validator",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "nonce",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "deadline",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "signature",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
                {
                  name: "accountExtraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "usernameParams",
              type: "tuple",
              internalType: "struct CreateUsernameParams",
              components: [
                {
                  name: "username",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "createUsernameCustomParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
                {
                  name: "createUsernameRuleProcessingParams",
                  type: "tuple[]",
                  internalType: "struct RuleProcessingParams[]",
                  components: [
                    {
                      name: "ruleAddress",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "configSalt",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "assignUsernameCustomParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
                {
                  name: "assignRuleProcessingParams",
                  type: "tuple[]",
                  internalType: "struct RuleProcessingParams[]",
                  components: [
                    {
                      name: "ruleAddress",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "configSalt",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "usernameExtraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createGroupWithFeed",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "admins",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "groupMetadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "groupRules",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "groupExtraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "groupFoundingMember",
              type: "address",
              internalType: "address",
            },
            {
              name: "groupAddFoundingMemberCustomParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "feedMetadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "feedRules",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "feedExtraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployAccount",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "accountManagers",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "accountManagersPermissions",
              type: "tuple[]",
              internalType: "struct AccountManagerPermissions[]",
              components: [
                {
                  name: "canExecuteTransactions",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferTokens",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferNative",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canSetMetadataURI",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
            {
              name: "sourceStamp",
              type: "tuple",
              internalType: "struct SourceStamp",
              components: [
                {
                  name: "source",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "originalMsgSender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "validator",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "deadline",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployApp",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "sourceStampVerificationEnabled",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "admins",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "initialProperties",
              type: "tuple",
              internalType: "struct AppInitialProperties",
              components: [
                {
                  name: "graph",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "feeds",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "namespace",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "groups",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "defaultFeed",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "signers",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "paymaster",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "treasury",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployFeed",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "admins",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "rules",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployGraph",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "admins",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "rules",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployGroup",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "admins",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "rules",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "foundingMember",
              type: "address",
              internalType: "address",
            },
            {
              name: "addFoundingMemberCustomParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployNamespace",
          inputs: [
            {
              name: "namespace",
              type: "string",
              internalType: "string",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "admins",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "rules",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "nftName",
              type: "string",
              internalType: "string",
            },
            {
              name: "nftSymbol",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getFactories",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRules",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getTemporaryAccessControl",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "error",
          name: "DuplicatedValue",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
      ],
    },
    LensGlobalFeed: {
      address: "0xcB5E109FFC0E15565082d78E68dDDf2573703580",
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "changeFeedRules",
          inputs: [
            {
              name: "ruleChanges",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "changePostRules",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "ruleChanges",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "feedRulesParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createPost",
          inputs: [
            {
              name: "postParams",
              type: "tuple",
              internalType: "struct CreatePostParams",
              components: [
                {
                  name: "author",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "repostedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "quotedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "repliedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "ruleChanges",
                  type: "tuple[]",
                  internalType: "struct RuleChange[]",
                  components: [
                    {
                      name: "ruleAddress",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "configSalt",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "configurationChanges",
                      type: "tuple",
                      internalType: "struct RuleConfigurationChange",
                      components: [
                        {
                          name: "configure",
                          type: "bool",
                          internalType: "bool",
                        },
                        {
                          name: "ruleParams",
                          type: "tuple[]",
                          internalType: "struct KeyValue[]",
                          components: [
                            {
                              name: "key",
                              type: "bytes32",
                              internalType: "bytes32",
                            },
                            {
                              name: "value",
                              type: "bytes",
                              internalType: "bytes",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: "selectorChanges",
                      type: "tuple[]",
                      internalType: "struct RuleSelectorChange[]",
                      components: [
                        {
                          name: "ruleSelector",
                          type: "bytes4",
                          internalType: "bytes4",
                        },
                        {
                          name: "isRequired",
                          type: "bool",
                          internalType: "bool",
                        },
                        {
                          name: "enabled",
                          type: "bool",
                          internalType: "bool",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "extraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "feedRulesParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "rootPostRulesParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "quotedPostRulesParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deletePost",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "feedRulesParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "editPost",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "postParams",
              type: "tuple",
              internalType: "struct EditPostParams",
              components: [
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "extraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "feedRulesParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "rootPostRulesParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "quotedPostRulesParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getAccessControl",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getAuthorPostSequentialId",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getExtraData",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getFeedRules",
          inputs: [
            {
              name: "ruleSelector",
              type: "bytes4",
              internalType: "bytes4",
            },
            {
              name: "isRequired",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple[]",
              internalType: "struct Rule[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getNextPostId",
          inputs: [
            {
              name: "author",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPost",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct Post",
              components: [
                {
                  name: "author",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "authorPostSequentialId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "postSequentialId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "rootPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "repostedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "quotedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "repliedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "creationTimestamp",
                  type: "uint80",
                  internalType: "uint80",
                },
                {
                  name: "creationSource",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "lastUpdatedTimestamp",
                  type: "uint80",
                  internalType: "uint80",
                },
                {
                  name: "lastUpdateSource",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "isDeleted",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPostAuthor",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPostCount",
          inputs: [
            {
              name: "author",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPostCount",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPostExtraData",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPostRules",
          inputs: [
            {
              name: "ruleSelector",
              type: "bytes4",
              internalType: "bytes4",
            },
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "isRequired",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple[]",
              internalType: "struct Rule[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPostSequentialId",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPostUnchecked",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct Post",
              components: [
                {
                  name: "author",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "authorPostSequentialId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "postSequentialId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "rootPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "repostedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "quotedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "repliedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "creationTimestamp",
                  type: "uint80",
                  internalType: "uint80",
                },
                {
                  name: "creationSource",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "lastUpdatedTimestamp",
                  type: "uint80",
                  internalType: "uint80",
                },
                {
                  name: "lastUpdateSource",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "isDeleted",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "accessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "postExists",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setAccessControl",
          inputs: [
            {
              name: "newAccessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setExtraData",
          inputs: [
            {
              name: "extraDataToSet",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_AccessControlAdded",
          inputs: [
            {
              name: "accessControl",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "accessControlType",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_AccessControlUpdated",
          inputs: [
            {
              name: "accessControl",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "accessControlType",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Contract_Deployed",
          inputs: [
            {
              name: "contractType",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "flavour",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ExtraStorageSet",
          inputs: [
            {
              name: "addressScope",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "entityType",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "entityId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_ExtraDataAdded",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_ExtraDataRemoved",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_ExtraDataUpdated",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_PostCreated",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "author",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "localSequentialId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "rootPostId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "postParams",
              type: "tuple",
              indexed: false,
              internalType: "struct CreatePostParams",
              components: [
                {
                  name: "author",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "repostedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "quotedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "repliedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "ruleChanges",
                  type: "tuple[]",
                  internalType: "struct RuleChange[]",
                  components: [
                    {
                      name: "ruleAddress",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "configSalt",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "configurationChanges",
                      type: "tuple",
                      internalType: "struct RuleConfigurationChange",
                      components: [
                        {
                          name: "configure",
                          type: "bool",
                          internalType: "bool",
                        },
                        {
                          name: "ruleParams",
                          type: "tuple[]",
                          internalType: "struct KeyValue[]",
                          components: [
                            {
                              name: "key",
                              type: "bytes32",
                              internalType: "bytes32",
                            },
                            {
                              name: "value",
                              type: "bytes",
                              internalType: "bytes",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: "selectorChanges",
                      type: "tuple[]",
                      internalType: "struct RuleSelectorChange[]",
                      components: [
                        {
                          name: "ruleSelector",
                          type: "bytes4",
                          internalType: "bytes4",
                        },
                        {
                          name: "isRequired",
                          type: "bool",
                          internalType: "bool",
                        },
                        {
                          name: "enabled",
                          type: "bool",
                          internalType: "bool",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "extraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "feedRulesParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "rootPostRulesParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "quotedPostRulesParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_PostDeleted",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "author",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_PostEdited",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "author",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newPostParams",
              type: "tuple",
              indexed: false,
              internalType: "struct EditPostParams",
              components: [
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "extraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "feedRulesParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "rootPostRulesParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "quotedPostRulesParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_Post_ExtraDataAdded",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_Post_ExtraDataRemoved",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_Post_ExtraDataUpdated",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_Post_RuleConfigured",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "author",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "configParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_Post_RuleReconfigured",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "author",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "configParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_Post_RuleSelectorDisabled",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "author",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "isRequired",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "ruleSelector",
              type: "bytes4",
              indexed: false,
              internalType: "bytes4",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_Post_RuleSelectorEnabled",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "author",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "isRequired",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "ruleSelector",
              type: "bytes4",
              indexed: false,
              internalType: "bytes4",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_RuleConfigured",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "configParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_RuleReconfigured",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "configParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_RuleSelectorDisabled",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "isRequired",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "ruleSelector",
              type: "bytes4",
              indexed: false,
              internalType: "bytes4",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_RuleSelectorEnabled",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "isRequired",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "ruleSelector",
              type: "bytes4",
              indexed: false,
              internalType: "bytes4",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessDenied",
          inputs: [],
        },
        {
          type: "error",
          name: "AllAnyOfRulesReverted",
          inputs: [],
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "CannotHaveRules",
          inputs: [],
        },
        {
          type: "error",
          name: "ConfigureCallReverted",
          inputs: [],
        },
        {
          type: "error",
          name: "DoesNotExist",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidConfigSalt",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "LimitReached",
          inputs: [],
        },
        {
          type: "error",
          name: "NotAContract",
          inputs: [],
        },
        {
          type: "error",
          name: "RedundantStateChange",
          inputs: [],
        },
        {
          type: "error",
          name: "RequiredRuleReverted",
          inputs: [],
        },
        {
          type: "error",
          name: "RuleNotConfigured",
          inputs: [],
        },
        {
          type: "error",
          name: "SelectorEnabledForDifferentRuleType",
          inputs: [],
        },
        {
          type: "error",
          name: "UnexpectedValue",
          inputs: [],
        },
        {
          type: "error",
          name: "UnsupportedSelector",
          inputs: [],
        },
      ],
    },
    LensGlobalNamespace: {
      address: "0x1aA55B9042f08f45825dC4b651B64c9F98Af4615",
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "accountOf",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "approve",
          inputs: [
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "assignUsername",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "unassignAccountRuleProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "unassignUsernameRuleProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "assignRuleProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "changeNamespaceRules",
          inputs: [
            {
              name: "ruleChanges",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createAndAssignUsername",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "unassigningProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "creationProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "assigningProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createUsername",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "exists",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "exists",
          inputs: [
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getAccessControl",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getApproved",
          inputs: [
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getExtraData",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getNamespace",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getNamespaceRules",
          inputs: [
            {
              name: "ruleSelector",
              type: "bytes4",
              internalType: "bytes4",
            },
            {
              name: "isRequired",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple[]",
              internalType: "struct Rule[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getTokenIdByUsername",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "getUsernameAssignmentSource",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getUsernameByTokenId",
          inputs: [
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getUsernameCreationSource",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getUsernameExtraData",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "key",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "namespace",
              type: "string",
              internalType: "string",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "nftName",
              type: "string",
              internalType: "string",
            },
            {
              name: "nftSymbol",
              type: "string",
              internalType: "string",
            },
            {
              name: "tokenURIProvider",
              type: "address",
              internalType: "contract ITokenURIProvider",
            },
            {
              name: "accessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isApprovedForAll",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "name",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "ownerOf",
          inputs: [
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "ownerOf",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "removeUsername",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "unassigningRuleProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "removalRuleProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "safeTransferFrom",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "safeTransferFrom",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setAccessControl",
          inputs: [
            {
              name: "newAccessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setApprovalForAll",
          inputs: [
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
            {
              name: "approved",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setExtraData",
          inputs: [
            {
              name: "extraDataToSet",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setTokenURIProvider",
          inputs: [
            {
              name: "tokenURIProvider",
              type: "address",
              internalType: "contract ITokenURIProvider",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setUsernameExtraData",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "extraDataToSet",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "symbol",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "tokenURI",
          inputs: [
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferFrom",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "unassignUsername",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "usernameOf",
          inputs: [
            {
              name: "user",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "Approval",
          inputs: [
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "approved",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "ApprovalForAll",
          inputs: [
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "approved",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "BatchMetadataUpdate",
          inputs: [
            {
              name: "_fromTokenId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "_toTokenId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_AccessControlAdded",
          inputs: [
            {
              name: "accessControl",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "accessControlType",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_AccessControlUpdated",
          inputs: [
            {
              name: "accessControl",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "accessControlType",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Contract_Deployed",
          inputs: [
            {
              name: "contractType",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "flavour",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ERC721_TokenURIProviderSet",
          inputs: [
            {
              name: "tokenURIProvider",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ExtraStorageSet",
          inputs: [
            {
              name: "addressScope",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "entityType",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "entityId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Namespace_ExtraDataAdded",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Namespace_ExtraDataRemoved",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Namespace_ExtraDataUpdated",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Namespace_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Namespace_RuleConfigured",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "configParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Namespace_RuleReconfigured",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "configParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Namespace_RuleSelectorDisabled",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "isRequired",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "ruleSelector",
              type: "bytes4",
              indexed: false,
              internalType: "bytes4",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Namespace_RuleSelectorEnabled",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "isRequired",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "ruleSelector",
              type: "bytes4",
              indexed: false,
              internalType: "bytes4",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Username_Assigned",
          inputs: [
            {
              name: "username",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Username_Created",
          inputs: [
            {
              name: "username",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "extraData",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Username_ExtraDataAdded",
          inputs: [
            {
              name: "usernameId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Username_ExtraDataRemoved",
          inputs: [
            {
              name: "usernameId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Username_ExtraDataUpdated",
          inputs: [
            {
              name: "usernameId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Username_Removed",
          inputs: [
            {
              name: "username",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Username_Transfer",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Username_Unassigned",
          inputs: [
            {
              name: "username",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "previousAccount",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessDenied",
          inputs: [],
        },
        {
          type: "error",
          name: "AllAnyOfRulesReverted",
          inputs: [],
        },
        {
          type: "error",
          name: "AlreadyExists",
          inputs: [],
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "ConfigureCallReverted",
          inputs: [],
        },
        {
          type: "error",
          name: "DoesNotExist",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidConfigSalt",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "LimitReached",
          inputs: [],
        },
        {
          type: "error",
          name: "NotAContract",
          inputs: [],
        },
        {
          type: "error",
          name: "RedundantStateChange",
          inputs: [],
        },
        {
          type: "error",
          name: "RequiredRuleReverted",
          inputs: [],
        },
        {
          type: "error",
          name: "RuleNotConfigured",
          inputs: [],
        },
        {
          type: "error",
          name: "SelectorEnabledForDifferentRuleType",
          inputs: [],
        },
        {
          type: "error",
          name: "UnexpectedContractImpl",
          inputs: [],
        },
        {
          type: "error",
          name: "UnsupportedSelector",
          inputs: [],
        },
        {
          type: "error",
          name: "UsernameAssigned",
          inputs: [],
        },
      ],
    },
  },
  37111: {
    AccessControlFactory: {
      address: testnetAddressBook.AccessControlFactory.address,
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "lock",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployOwnerAdminOnlyAccessControl",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "admins",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IRoleBasedAccessControl",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_AccessControlFactory_OwnerAdminDeployment",
          inputs: [
            {
              name: "accessControl",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "owner",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
      ],
    },
    AccountBlockingRule: {
      address: testnetAddressBook.AccountBlockingRule.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "blockUser",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
            {
              name: "target",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isBlocked",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
            {
              name: "blockTarget",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processCreatePost",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "postParams",
              type: "tuple",
              internalType: "struct CreatePostParams",
              components: [
                {
                  name: "author",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "repostedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "quotedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "repliedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "ruleChanges",
                  type: "tuple[]",
                  internalType: "struct RuleChange[]",
                  components: [
                    {
                      name: "ruleAddress",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "configSalt",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "configurationChanges",
                      type: "tuple",
                      internalType: "struct RuleConfigurationChange",
                      components: [
                        {
                          name: "configure",
                          type: "bool",
                          internalType: "bool",
                        },
                        {
                          name: "ruleParams",
                          type: "tuple[]",
                          internalType: "struct KeyValue[]",
                          components: [
                            {
                              name: "key",
                              type: "bytes32",
                              internalType: "bytes32",
                            },
                            {
                              name: "value",
                              type: "bytes",
                              internalType: "bytes",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: "selectorChanges",
                      type: "tuple[]",
                      internalType: "struct RuleSelectorChange[]",
                      components: [
                        {
                          name: "ruleSelector",
                          type: "bytes4",
                          internalType: "bytes4",
                        },
                        {
                          name: "isRequired",
                          type: "bool",
                          internalType: "bool",
                        },
                        {
                          name: "enabled",
                          type: "bool",
                          internalType: "bool",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "extraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processDeletePost",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processEditPost",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "tuple",
              internalType: "struct EditPostParams",
              components: [
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "extraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processFollow",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "followerAccount",
              type: "address",
              internalType: "address",
            },
            {
              name: "accountToFollow",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processFollowRuleChanges",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processPostRuleChanges",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processUnfollow",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "unblockUser",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
            {
              name: "target",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_AccountBlocking_AccountBlocked",
          inputs: [
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "target",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_AccountBlocking_AccountUnblocked",
          inputs: [
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "target",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "ActionOnSelf",
          inputs: [],
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "Blocked",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
        {
          type: "error",
          name: "RedundantStateChange",
          inputs: [],
        },
      ],
    },
    AccountFactory: {
      address: testnetAddressBook.AccountFactory.address,
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "beacon",
              type: "address",
              internalType: "address",
            },
            {
              name: "lock",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployAccount",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "accountManagers",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "accountManagersPermissions",
              type: "tuple[]",
              internalType: "struct AccountManagerPermissions[]",
              components: [
                {
                  name: "canExecuteTransactions",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferTokens",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferNative",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canSetMetadataURI",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
            {
              name: "sourceStamp",
              type: "tuple",
              internalType: "struct SourceStamp",
              components: [
                {
                  name: "source",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "originalMsgSender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "validator",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "deadline",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Account_Created",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "accountManagers",
              type: "address[]",
              indexed: false,
              internalType: "address[]",
            },
            {
              name: "accountManagersPermissions",
              type: "tuple[]",
              indexed: false,
              internalType: "struct AccountManagerPermissions[]",
              components: [
                {
                  name: "canExecuteTransactions",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferTokens",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferNative",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canSetMetadataURI",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "extraData",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
      ],
    },
    AccountImpl: {
      address: testnetAddressBook.AccountImpl.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "receive",
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "abiDecodeForKnownSelectorHelper",
          inputs: [
            {
              name: "selector",
              type: "bytes4",
              internalType: "bytes4",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "addAccountManager",
          inputs: [
            {
              name: "accountManager",
              type: "address",
              internalType: "address",
            },
            {
              name: "accountManagerPermissions",
              type: "tuple",
              internalType: "struct AccountManagerPermissions",
              components: [
                {
                  name: "canExecuteTransactions",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferTokens",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferNative",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canSetMetadataURI",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "allowNonOwnerSpending",
          inputs: [
            {
              name: "allow",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "canBeAddedToGroup",
          inputs: [
            {
              name: "group",
              type: "address",
              internalType: "address",
            },
            {
              name: "addedBy",
              type: "address",
              internalType: "address",
            },
            {
              name: "params",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "canExecuteTransactions",
          inputs: [
            {
              name: "executor",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "canSetMetadataURI",
          inputs: [
            {
              name: "accountManager",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "executeTransaction",
          inputs: [
            {
              name: "target",
              type: "address",
              internalType: "address",
            },
            {
              name: "value",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "executeTransactions",
          inputs: [
            {
              name: "transactions",
              type: "tuple[]",
              internalType: "struct Transaction[]",
              components: [
                {
                  name: "target",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "data",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes[]",
              internalType: "bytes[]",
            },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "getAccountManagerPermissions",
          inputs: [
            {
              name: "accountManager",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct AccountManagerPermissions",
              components: [
                {
                  name: "canExecuteTransactions",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferTokens",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferNative",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canSetMetadataURI",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getExtraData",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "accountManagers",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "accountManagerPermissions",
              type: "tuple[]",
              internalType: "struct AccountManagerPermissions[]",
              components: [
                {
                  name: "canExecuteTransactions",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferTokens",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferNative",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canSetMetadataURI",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
            {
              name: "sourceStamp",
              type: "tuple",
              internalType: "struct SourceStamp",
              components: [
                {
                  name: "source",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "originalMsgSender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "validator",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "deadline",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isAccountManager",
          inputs: [
            {
              name: "accountManager",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "onERC1155BatchReceived",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "",
              type: "uint256[]",
              internalType: "uint256[]",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "onERC1155Received",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "onERC721Received",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "removeAccountManager",
          inputs: [
            {
              name: "accountManager",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setExtraData",
          inputs: [
            {
              name: "extraDataToSet",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "sourceStamp",
              type: "tuple",
              internalType: "struct SourceStamp",
              components: [
                {
                  name: "source",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "originalMsgSender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "validator",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "deadline",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "updateAccountManagerPermissions",
          inputs: [
            {
              name: "accountManager",
              type: "address",
              internalType: "address",
            },
            {
              name: "accountManagerPermissions",
              type: "tuple",
              internalType: "struct AccountManagerPermissions",
              components: [
                {
                  name: "canExecuteTransactions",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferTokens",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferNative",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canSetMetadataURI",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Account_AccountManagerAdded",
          inputs: [
            {
              name: "accountManager",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "permissions",
              type: "tuple",
              indexed: false,
              internalType: "struct AccountManagerPermissions",
              components: [
                {
                  name: "canExecuteTransactions",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferTokens",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferNative",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canSetMetadataURI",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_AccountManagerRemoved",
          inputs: [
            {
              name: "accountManager",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_AccountManagerUpdated",
          inputs: [
            {
              name: "accountManager",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "permissions",
              type: "tuple",
              indexed: false,
              internalType: "struct AccountManagerPermissions",
              components: [
                {
                  name: "canExecuteTransactions",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferTokens",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferNative",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canSetMetadataURI",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_AllowNonOwnerSpending",
          inputs: [
            {
              name: "allow",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "timestamp",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_ExtraDataAdded",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_ExtraDataRemoved",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_ExtraDataUpdated",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Account_TransactionExecuted",
          inputs: [
            {
              name: "target",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "value",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "data",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "executor",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Contract_Deployed",
          inputs: [
            {
              name: "contractType",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "flavour",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ExtraStorageSet",
          inputs: [
            {
              name: "addressScope",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "entityType",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "entityId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "NotAllowed",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
        {
          type: "error",
          name: "RedundantStateChange",
          inputs: [],
        },
      ],
    },
    ActionHub: {
      address: testnetAddressBook.ActionHub.address,
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "treasury",
              type: "address",
              internalType: "address",
            },
            {
              name: "treasuryFee",
              type: "uint16",
              internalType: "uint16",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configureAccountAction",
          inputs: [
            {
              name: "action",
              type: "address",
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "params",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "configurePostAction",
          inputs: [
            {
              name: "action",
              type: "address",
              internalType: "address",
            },
            {
              name: "feed",
              type: "address",
              internalType: "address",
            },
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "params",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "disableAccountAction",
          inputs: [
            {
              name: "action",
              type: "address",
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "params",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "disablePostAction",
          inputs: [
            {
              name: "action",
              type: "address",
              internalType: "address",
            },
            {
              name: "feed",
              type: "address",
              internalType: "address",
            },
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "params",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "enableAccountAction",
          inputs: [
            {
              name: "action",
              type: "address",
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "params",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "enablePostAction",
          inputs: [
            {
              name: "action",
              type: "address",
              internalType: "address",
            },
            {
              name: "feed",
              type: "address",
              internalType: "address",
            },
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "params",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "executeAccountAction",
          inputs: [
            {
              name: "action",
              type: "address",
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "params",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "executePostAction",
          inputs: [
            {
              name: "action",
              type: "address",
              internalType: "address",
            },
            {
              name: "feed",
              type: "address",
              internalType: "address",
            },
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "params",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "getTreasury",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getTreasuryFee",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint16",
              internalType: "uint16",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "signalUniversalAccountAction",
          inputs: [
            {
              name: "action",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "signalUniversalPostAction",
          inputs: [
            {
              name: "action",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_ActionHub_AccountAction_Configured",
          inputs: [
            {
              name: "action",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "msgSender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "source",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "params",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "returnData",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ActionHub_AccountAction_Disabled",
          inputs: [
            {
              name: "action",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "msgSender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "source",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "params",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "returnData",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ActionHub_AccountAction_Enabled",
          inputs: [
            {
              name: "action",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "msgSender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "source",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "params",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "returnData",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ActionHub_AccountAction_Executed",
          inputs: [
            {
              name: "action",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "msgSender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "source",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "params",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "returnData",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ActionHub_AccountAction_Reconfigured",
          inputs: [
            {
              name: "action",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "msgSender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "source",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "params",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "returnData",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ActionHub_AccountAction_Universal",
          inputs: [
            {
              name: "action",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ActionHub_PostAction_Configured",
          inputs: [
            {
              name: "action",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "msgSender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "feed",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "postAuthor",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "source",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "params",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "returnData",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ActionHub_PostAction_Disabled",
          inputs: [
            {
              name: "action",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "msgSender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "feed",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "postAuthor",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "source",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "params",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "returnData",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ActionHub_PostAction_Enabled",
          inputs: [
            {
              name: "action",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "msgSender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "feed",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "postAuthor",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "source",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "params",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "returnData",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ActionHub_PostAction_Executed",
          inputs: [
            {
              name: "action",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "msgSender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "feed",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "postAuthor",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "source",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "params",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "returnData",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ActionHub_PostAction_Reconfigured",
          inputs: [
            {
              name: "action",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "msgSender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "feed",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "postAuthor",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "source",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "params",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "returnData",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ActionHub_PostAction_Universal",
          inputs: [
            {
              name: "action",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ExtraStorageSet",
          inputs: [
            {
              name: "addressScope",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "entityType",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "entityId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "Disabled",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "RedundantStateChange",
          inputs: [],
        },
        {
          type: "error",
          name: "UnexpectedContractImpl",
          inputs: [],
        },
      ],
    },
    AdditionRemovalPidGroupRuleImpl: {
      address: testnetAddressBook.AdditionRemovalPidGroupRuleImpl.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "PARAM__ACCESS_CONTROL",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processAddition",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processJoining",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processLeaving",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processRemoval",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessDenied",
          inputs: [],
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
      ],
    },
    AppFactory: {
      address: testnetAddressBook.AppFactory.address,
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "beacon",
              type: "address",
              internalType: "address",
            },
            {
              name: "lock",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployApp",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "sourceStampVerificationEnabled",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "accessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
            {
              name: "proxyAdminOwner",
              type: "address",
              internalType: "address",
            },
            {
              name: "initialProperties",
              type: "tuple",
              internalType: "struct AppInitialProperties",
              components: [
                {
                  name: "graph",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "feeds",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "namespace",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "groups",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "defaultFeed",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "signers",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "paymaster",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "treasury",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_AppFactory_Deployment",
          inputs: [
            {
              name: "app",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "extraData",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
      ],
    },
    BanMemberGroupRule: {
      address: testnetAddressBook.BanMemberGroupRule.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "PARAM__ACCESS_CONTROL",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "PARAM__BAN_MEMBER",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "PID__BAN_MEMBER",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "PID__UNBAN_MEMBER",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "ban",
          inputs: [
            {
              name: "group",
              type: "address",
              internalType: "address",
            },
            {
              name: "membersToBan",
              type: "tuple[]",
              internalType: "struct BanMemberGroupRule.MemberBatchParams[]",
              components: [
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "customParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
                {
                  name: "ruleProcessingParams",
                  type: "tuple[]",
                  internalType: "struct RuleProcessingParams[]",
                  components: [
                    {
                      name: "ruleAddress",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "configSalt",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "ban",
          inputs: [
            {
              name: "group",
              type: "address",
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "groupParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "groupRuleProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isMemberBanned",
          inputs: [
            {
              name: "group",
              type: "address",
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processAddition",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processJoining",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processLeaving",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processRemoval",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "unban",
          inputs: [
            {
              name: "group",
              type: "address",
              internalType: "address",
            },
            {
              name: "accounts",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "unban",
          inputs: [
            {
              name: "group",
              type: "address",
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_BanMemberGroupRule_MemberBanned",
          inputs: [
            {
              name: "group",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "bannedAccount",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "bannedBy",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_BanMemberGroupRule_MemberUnbanned",
          inputs: [
            {
              name: "group",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "unbannedAccount",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "unbannedBy",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessDenied",
          inputs: [],
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "Banned",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
      ],
    },
    FeedFactory: {
      address: testnetAddressBook.FeedFactory.address,
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "primitiveBeacon",
              type: "address",
              internalType: "address",
            },
            {
              name: "proxyAdminLock",
              type: "address",
              internalType: "address",
            },
            {
              name: "lensFactory",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployFeed",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "accessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
            {
              name: "proxyAdminOwner",
              type: "address",
              internalType: "address",
            },
            {
              name: "ruleChanges",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_FeedFactory_Deployment",
          inputs: [
            {
              name: "feed",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessDenied",
          inputs: [],
        },
      ],
    },
    FollowersOnlyPostRule: {
      address: testnetAddressBook.FollowersOnlyPostRule.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processCreatePost",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "rootPostId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "postParams",
              type: "tuple",
              internalType: "struct CreatePostParams",
              components: [
                {
                  name: "author",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "repostedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "quotedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "repliedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "ruleChanges",
                  type: "tuple[]",
                  internalType: "struct RuleChange[]",
                  components: [
                    {
                      name: "ruleAddress",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "configSalt",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "configurationChanges",
                      type: "tuple",
                      internalType: "struct RuleConfigurationChange",
                      components: [
                        {
                          name: "configure",
                          type: "bool",
                          internalType: "bool",
                        },
                        {
                          name: "ruleParams",
                          type: "tuple[]",
                          internalType: "struct KeyValue[]",
                          components: [
                            {
                              name: "key",
                              type: "bytes32",
                              internalType: "bytes32",
                            },
                            {
                              name: "value",
                              type: "bytes",
                              internalType: "bytes",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: "selectorChanges",
                      type: "tuple[]",
                      internalType: "struct RuleSelectorChange[]",
                      components: [
                        {
                          name: "ruleSelector",
                          type: "bytes4",
                          internalType: "bytes4",
                        },
                        {
                          name: "isRequired",
                          type: "bool",
                          internalType: "bool",
                        },
                        {
                          name: "enabled",
                          type: "bool",
                          internalType: "bool",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "extraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processEditPost",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "tuple",
              internalType: "struct EditPostParams",
              components: [
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "extraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "NotFollowing",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
      ],
    },
    GraphFactory: {
      address: testnetAddressBook.GraphFactory.address,
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "primitiveBeacon",
              type: "address",
              internalType: "address",
            },
            {
              name: "proxyAdminLock",
              type: "address",
              internalType: "address",
            },
            {
              name: "lensFactory",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployGraph",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "accessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
            {
              name: "proxyAdminOwner",
              type: "address",
              internalType: "address",
            },
            {
              name: "ruleChanges",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_GraphFactory_Deployment",
          inputs: [
            {
              name: "graph",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessDenied",
          inputs: [],
        },
      ],
    },
    GroupFactory: {
      address: testnetAddressBook.GroupFactory.address,
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "primitiveBeacon",
              type: "address",
              internalType: "address",
            },
            {
              name: "proxyAdminLock",
              type: "address",
              internalType: "address",
            },
            {
              name: "lensFactory",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployGraph",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "accessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
            {
              name: "proxyAdminOwner",
              type: "address",
              internalType: "address",
            },
            {
              name: "ruleChanges",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_GraphFactory_Deployment",
          inputs: [
            {
              name: "graph",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessDenied",
          inputs: [],
        },
      ],
    },
    GroupGatedFeedRule: {
      address: testnetAddressBook.GroupGatedFeedRule.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processCreatePost",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "postParams",
              type: "tuple",
              internalType: "struct CreatePostParams",
              components: [
                {
                  name: "author",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "repostedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "quotedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "repliedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "ruleChanges",
                  type: "tuple[]",
                  internalType: "struct RuleChange[]",
                  components: [
                    {
                      name: "ruleAddress",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "configSalt",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "configurationChanges",
                      type: "tuple",
                      internalType: "struct RuleConfigurationChange",
                      components: [
                        {
                          name: "configure",
                          type: "bool",
                          internalType: "bool",
                        },
                        {
                          name: "ruleParams",
                          type: "tuple[]",
                          internalType: "struct KeyValue[]",
                          components: [
                            {
                              name: "key",
                              type: "bytes32",
                              internalType: "bytes32",
                            },
                            {
                              name: "value",
                              type: "bytes",
                              internalType: "bytes",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: "selectorChanges",
                      type: "tuple[]",
                      internalType: "struct RuleSelectorChange[]",
                      components: [
                        {
                          name: "ruleSelector",
                          type: "bytes4",
                          internalType: "bytes4",
                        },
                        {
                          name: "isRequired",
                          type: "bool",
                          internalType: "bool",
                        },
                        {
                          name: "enabled",
                          type: "bool",
                          internalType: "bool",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "extraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processDeletePost",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processEditPost",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "tuple",
              internalType: "struct EditPostParams",
              components: [
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "extraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processPostRuleChanges",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "NotAMember",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
      ],
    },
    GroupGatedGraphRule: {
      address: testnetAddressBook.GroupGatedGraphRule.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processFollow",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "followerAccount",
              type: "address",
              internalType: "address",
            },
            {
              name: "accountToFollow",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processFollowRuleChanges",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processUnfollow",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "NotAMember",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
      ],
    },
    GroupImpl: {
      address: testnetAddressBook.GroupImpl.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "addMember",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "addMembers",
          inputs: [
            {
              name: "membersToAdd",
              type: "tuple[]",
              internalType: "struct Group.MemberBatchParams[]",
              components: [
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "customParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
                {
                  name: "ruleProcessingParams",
                  type: "tuple[]",
                  internalType: "struct RuleProcessingParams[]",
                  components: [
                    {
                      name: "ruleAddress",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "configSalt",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "changeGroupRules",
          inputs: [
            {
              name: "ruleChanges",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getAccessControl",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getExtraData",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getGroupRules",
          inputs: [
            {
              name: "ruleSelector",
              type: "bytes4",
              internalType: "bytes4",
            },
            {
              name: "isRequired",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple[]",
              internalType: "struct Rule[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMembership",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct Membership",
              components: [
                {
                  name: "id",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "timestamp",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMembershipId",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMembershipSource",
          inputs: [
            {
              name: "membershipId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMembershipTimestamp",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getNumberOfMembers",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "accessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isMember",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "joinGroup",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "leaveGroup",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "removeMember",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "removeMembers",
          inputs: [
            {
              name: "membersToRemove",
              type: "tuple[]",
              internalType: "struct Group.MemberBatchParams[]",
              components: [
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "customParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
                {
                  name: "ruleProcessingParams",
                  type: "tuple[]",
                  internalType: "struct RuleProcessingParams[]",
                  components: [
                    {
                      name: "ruleAddress",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "configSalt",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setAccessControl",
          inputs: [
            {
              name: "newAccessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setExtraData",
          inputs: [
            {
              name: "extraDataToSet",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_AccessControlAdded",
          inputs: [
            {
              name: "accessControl",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "accessControlType",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_AccessControlUpdated",
          inputs: [
            {
              name: "accessControl",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "accessControlType",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Contract_Deployed",
          inputs: [
            {
              name: "contractType",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "flavour",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ExtraStorageSet",
          inputs: [
            {
              name: "addressScope",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "entityType",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "entityId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Group_ExtraDataAdded",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Group_ExtraDataRemoved",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Group_ExtraDataUpdated",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Group_MemberAdded",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "membershipId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Group_MemberJoined",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "membershipId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Group_MemberLeft",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "membershipId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Group_MemberRemoved",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "membershipId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Group_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Group_RuleConfigured",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "configParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Group_RuleReconfigured",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "configParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Group_RuleSelectorDisabled",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "isRequired",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "ruleSelector",
              type: "bytes4",
              indexed: false,
              internalType: "bytes4",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Group_RuleSelectorEnabled",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "isRequired",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "ruleSelector",
              type: "bytes4",
              indexed: false,
              internalType: "bytes4",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessDenied",
          inputs: [],
        },
        {
          type: "error",
          name: "AllAnyOfRulesReverted",
          inputs: [],
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "ConfigureCallReverted",
          inputs: [],
        },
        {
          type: "error",
          name: "DoesNotExist",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidConfigSalt",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "LimitReached",
          inputs: [],
        },
        {
          type: "error",
          name: "NotAContract",
          inputs: [],
        },
        {
          type: "error",
          name: "NotAllowed",
          inputs: [],
        },
        {
          type: "error",
          name: "RedundantStateChange",
          inputs: [],
        },
        {
          type: "error",
          name: "RequiredRuleReverted",
          inputs: [],
        },
        {
          type: "error",
          name: "RuleNotConfigured",
          inputs: [],
        },
        {
          type: "error",
          name: "SelectorEnabledForDifferentRuleType",
          inputs: [],
        },
        {
          type: "error",
          name: "UnsupportedSelector",
          inputs: [],
        },
      ],
    },
    LensFactory: {
      address: testnetAddressBook.LensFactory.address,
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "factories",
              type: "tuple",
              internalType: "struct FactoryConstructorParams",
              components: [
                {
                  name: "accessControlFactory",
                  type: "address",
                  internalType: "contract AccessControlFactory",
                },
                {
                  name: "accountFactory",
                  type: "address",
                  internalType: "contract AccountFactory",
                },
                {
                  name: "appFactory",
                  type: "address",
                  internalType: "contract AppFactory",
                },
                {
                  name: "groupFactory",
                  type: "address",
                  internalType: "contract GroupFactory",
                },
                {
                  name: "feedFactory",
                  type: "address",
                  internalType: "contract FeedFactory",
                },
                {
                  name: "graphFactory",
                  type: "address",
                  internalType: "contract GraphFactory",
                },
                {
                  name: "namespaceFactory",
                  type: "address",
                  internalType: "contract NamespaceFactory",
                },
              ],
            },
            {
              name: "rules",
              type: "tuple",
              internalType: "struct RuleConstructorParams",
              components: [
                {
                  name: "accountBlockingRule",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "groupGatedFeedRule",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "usernameSimpleCharsetRule",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "banMemberGroupRule",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "addRemovePidGroupRule",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createAccountWithUsernameFree",
          inputs: [
            {
              name: "namespacePrimitiveAddress",
              type: "address",
              internalType: "address",
            },
            {
              name: "accountParams",
              type: "tuple",
              internalType: "struct CreateAccountParams",
              components: [
                {
                  name: "metadataURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "owner",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "accountManagers",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "accountManagersPermissions",
                  type: "tuple[]",
                  internalType: "struct AccountManagerPermissions[]",
                  components: [
                    {
                      name: "canExecuteTransactions",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "canTransferTokens",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "canTransferNative",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "canSetMetadataURI",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
                {
                  name: "accountCreationSourceStamp",
                  type: "tuple",
                  internalType: "struct SourceStamp",
                  components: [
                    {
                      name: "source",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "originalMsgSender",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "validator",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "nonce",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "deadline",
                      type: "uint256",
                      internalType: "uint256",
                    },
                    {
                      name: "signature",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
                {
                  name: "accountExtraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "usernameParams",
              type: "tuple",
              internalType: "struct CreateUsernameParams",
              components: [
                {
                  name: "username",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "createUsernameCustomParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
                {
                  name: "createUsernameRuleProcessingParams",
                  type: "tuple[]",
                  internalType: "struct RuleProcessingParams[]",
                  components: [
                    {
                      name: "ruleAddress",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "configSalt",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "assignUsernameCustomParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
                {
                  name: "assignRuleProcessingParams",
                  type: "tuple[]",
                  internalType: "struct RuleProcessingParams[]",
                  components: [
                    {
                      name: "ruleAddress",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "configSalt",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "usernameExtraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createGroupWithFeed",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "admins",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "groupMetadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "groupRules",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "groupExtraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "groupFoundingMember",
              type: "address",
              internalType: "address",
            },
            {
              name: "groupAddFoundingMemberCustomParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "feedMetadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "feedRules",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "feedExtraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployAccount",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "accountManagers",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "accountManagersPermissions",
              type: "tuple[]",
              internalType: "struct AccountManagerPermissions[]",
              components: [
                {
                  name: "canExecuteTransactions",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferTokens",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canTransferNative",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "canSetMetadataURI",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
            {
              name: "sourceStamp",
              type: "tuple",
              internalType: "struct SourceStamp",
              components: [
                {
                  name: "source",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "originalMsgSender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "validator",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "deadline",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployApp",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "sourceStampVerificationEnabled",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "admins",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "initialProperties",
              type: "tuple",
              internalType: "struct AppInitialProperties",
              components: [
                {
                  name: "graph",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "feeds",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "namespace",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "groups",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "defaultFeed",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "signers",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "paymaster",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "treasury",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployFeed",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "admins",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "rules",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployGraph",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "admins",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "rules",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployGroup",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "admins",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "rules",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "foundingMember",
              type: "address",
              internalType: "address",
            },
            {
              name: "addFoundingMemberCustomParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployNamespace",
          inputs: [
            {
              name: "namespace",
              type: "string",
              internalType: "string",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "admins",
              type: "address[]",
              internalType: "address[]",
            },
            {
              name: "rules",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "nftName",
              type: "string",
              internalType: "string",
            },
            {
              name: "nftSymbol",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getFactories",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRules",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getTemporaryAccessControl",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "error",
          name: "DuplicatedValue",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
      ],
    },
    LensGlobalApp: {
      address: testnetAddressBook.LensGlobalApp.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "addFeeds",
          inputs: [
            {
              name: "feeds",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "addGroups",
          inputs: [
            {
              name: "groups",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "addSigners",
          inputs: [
            {
              name: "signers",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "cancelNonce",
          inputs: [
            {
              name: "nonce",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getAccessControl",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getDefaultFeed",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getDefaultGraph",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getDefaultGroup",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getDefaultNamespace",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getDefaultPaymaster",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getExtraData",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getFeeds",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getGraphs",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getGroups",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getNamespaces",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPaymaster",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getSigners",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getTreasury",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "isSourceStampVerificationEnabled",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "accessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
            {
              name: "initialProps",
              type: "tuple",
              internalType: "struct AppInitialProperties",
              components: [
                {
                  name: "graph",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "feeds",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "namespace",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "groups",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "defaultFeed",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "signers",
                  type: "address[]",
                  internalType: "address[]",
                },
                {
                  name: "paymaster",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "treasury",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "removeFeeds",
          inputs: [
            {
              name: "feeds",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "removeGroups",
          inputs: [
            {
              name: "groups",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "removeSigners",
          inputs: [
            {
              name: "signers",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setAccessControl",
          inputs: [
            {
              name: "newAccessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setDefaultFeed",
          inputs: [
            {
              name: "feed",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setDefaultGroup",
          inputs: [
            {
              name: "group",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setExtraData",
          inputs: [
            {
              name: "extraDataToSet",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setGraph",
          inputs: [
            {
              name: "graph",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setNamespace",
          inputs: [
            {
              name: "namespace",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setPaymaster",
          inputs: [
            {
              name: "paymaster",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setSourceStampVerification",
          inputs: [
            {
              name: "isEnabled",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setTreasury",
          inputs: [
            {
              name: "treasury",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "validateSource",
          inputs: [
            {
              name: "sourceStamp",
              type: "tuple",
              internalType: "struct SourceStamp",
              components: [
                {
                  name: "source",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "originalMsgSender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "validator",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "nonce",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "deadline",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "signature",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_AccessControlAdded",
          inputs: [
            {
              name: "accessControl",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "accessControlType",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_AccessControlUpdated",
          inputs: [
            {
              name: "accessControl",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "accessControlType",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_DefaultFeedSet",
          inputs: [
            {
              name: "feed",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_DefaultGroupSet",
          inputs: [
            {
              name: "group",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_ExtraDataAdded",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_ExtraDataRemoved",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_ExtraDataUpdated",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_FeedAdded",
          inputs: [
            {
              name: "feed",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_FeedRemoved",
          inputs: [
            {
              name: "feed",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_GraphAdded",
          inputs: [
            {
              name: "graph",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_GraphRemoved",
          inputs: [
            {
              name: "graph",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_GroupAdded",
          inputs: [
            {
              name: "group",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_GroupRemoved",
          inputs: [
            {
              name: "group",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_NamespaceAdded",
          inputs: [
            {
              name: "namespace",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_NamespaceRemoved",
          inputs: [
            {
              name: "namespace",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_PaymasterAdded",
          inputs: [
            {
              name: "paymaster",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_PaymasterRemoved",
          inputs: [
            {
              name: "paymaster",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_SignerAdded",
          inputs: [
            {
              name: "signer",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_SignerRemoved",
          inputs: [
            {
              name: "signer",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_SourceStampVerificationSet",
          inputs: [
            {
              name: "isEnabled",
              type: "bool",
              indexed: true,
              internalType: "bool",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_App_TreasurySet",
          inputs: [
            {
              name: "treasury",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Contract_Deployed",
          inputs: [
            {
              name: "contractType",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "flavour",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ExtraStorageSet",
          inputs: [
            {
              name: "addressScope",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "entityType",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "entityId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Source_NonceUsed",
          inputs: [
            {
              name: "nonce",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessDenied",
          inputs: [],
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "Expired",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "LimitReached",
          inputs: [],
        },
        {
          type: "error",
          name: "NonceUsed",
          inputs: [],
        },
        {
          type: "error",
          name: "NotFound",
          inputs: [],
        },
        {
          type: "error",
          name: "RedundantStateChange",
          inputs: [],
        },
        {
          type: "error",
          name: "WrongSigner",
          inputs: [],
        },
      ],
    },
    LensGlobalFeed: {
      address: testnetAddressBook.LensGlobalFeed.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "changeFeedRules",
          inputs: [
            {
              name: "ruleChanges",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "changePostRules",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "ruleChanges",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "feedRulesParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createPost",
          inputs: [
            {
              name: "postParams",
              type: "tuple",
              internalType: "struct CreatePostParams",
              components: [
                {
                  name: "author",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "repostedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "quotedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "repliedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "ruleChanges",
                  type: "tuple[]",
                  internalType: "struct RuleChange[]",
                  components: [
                    {
                      name: "ruleAddress",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "configSalt",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "configurationChanges",
                      type: "tuple",
                      internalType: "struct RuleConfigurationChange",
                      components: [
                        {
                          name: "configure",
                          type: "bool",
                          internalType: "bool",
                        },
                        {
                          name: "ruleParams",
                          type: "tuple[]",
                          internalType: "struct KeyValue[]",
                          components: [
                            {
                              name: "key",
                              type: "bytes32",
                              internalType: "bytes32",
                            },
                            {
                              name: "value",
                              type: "bytes",
                              internalType: "bytes",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: "selectorChanges",
                      type: "tuple[]",
                      internalType: "struct RuleSelectorChange[]",
                      components: [
                        {
                          name: "ruleSelector",
                          type: "bytes4",
                          internalType: "bytes4",
                        },
                        {
                          name: "isRequired",
                          type: "bool",
                          internalType: "bool",
                        },
                        {
                          name: "enabled",
                          type: "bool",
                          internalType: "bool",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "extraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "feedRulesParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "rootPostRulesParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "quotedPostRulesParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deletePost",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "feedRulesParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "editPost",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "postParams",
              type: "tuple",
              internalType: "struct EditPostParams",
              components: [
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "extraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "feedRulesParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "rootPostRulesParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "quotedPostRulesParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getAccessControl",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getAuthorPostSequentialId",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getExtraData",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getFeedRules",
          inputs: [
            {
              name: "ruleSelector",
              type: "bytes4",
              internalType: "bytes4",
            },
            {
              name: "isRequired",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple[]",
              internalType: "struct Rule[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getNextPostId",
          inputs: [
            {
              name: "author",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPost",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct Post",
              components: [
                {
                  name: "author",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "authorPostSequentialId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "postSequentialId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "rootPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "repostedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "quotedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "repliedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "creationTimestamp",
                  type: "uint80",
                  internalType: "uint80",
                },
                {
                  name: "creationSource",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "lastUpdatedTimestamp",
                  type: "uint80",
                  internalType: "uint80",
                },
                {
                  name: "lastUpdateSource",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "isDeleted",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPostAuthor",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPostCount",
          inputs: [
            {
              name: "author",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPostCount",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPostExtraData",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPostRules",
          inputs: [
            {
              name: "ruleSelector",
              type: "bytes4",
              internalType: "bytes4",
            },
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "isRequired",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple[]",
              internalType: "struct Rule[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPostSequentialId",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPostUnchecked",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct Post",
              components: [
                {
                  name: "author",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "authorPostSequentialId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "postSequentialId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "rootPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "repostedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "quotedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "repliedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "creationTimestamp",
                  type: "uint80",
                  internalType: "uint80",
                },
                {
                  name: "creationSource",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "lastUpdatedTimestamp",
                  type: "uint80",
                  internalType: "uint80",
                },
                {
                  name: "lastUpdateSource",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "isDeleted",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "accessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "postExists",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setAccessControl",
          inputs: [
            {
              name: "newAccessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setExtraData",
          inputs: [
            {
              name: "extraDataToSet",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_AccessControlAdded",
          inputs: [
            {
              name: "accessControl",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "accessControlType",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_AccessControlUpdated",
          inputs: [
            {
              name: "accessControl",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "accessControlType",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Contract_Deployed",
          inputs: [
            {
              name: "contractType",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "flavour",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ExtraStorageSet",
          inputs: [
            {
              name: "addressScope",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "entityType",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "entityId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_ExtraDataAdded",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_ExtraDataRemoved",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_ExtraDataUpdated",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_PostCreated",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "author",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "localSequentialId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "rootPostId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "postParams",
              type: "tuple",
              indexed: false,
              internalType: "struct CreatePostParams",
              components: [
                {
                  name: "author",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "repostedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "quotedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "repliedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "ruleChanges",
                  type: "tuple[]",
                  internalType: "struct RuleChange[]",
                  components: [
                    {
                      name: "ruleAddress",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "configSalt",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "configurationChanges",
                      type: "tuple",
                      internalType: "struct RuleConfigurationChange",
                      components: [
                        {
                          name: "configure",
                          type: "bool",
                          internalType: "bool",
                        },
                        {
                          name: "ruleParams",
                          type: "tuple[]",
                          internalType: "struct KeyValue[]",
                          components: [
                            {
                              name: "key",
                              type: "bytes32",
                              internalType: "bytes32",
                            },
                            {
                              name: "value",
                              type: "bytes",
                              internalType: "bytes",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: "selectorChanges",
                      type: "tuple[]",
                      internalType: "struct RuleSelectorChange[]",
                      components: [
                        {
                          name: "ruleSelector",
                          type: "bytes4",
                          internalType: "bytes4",
                        },
                        {
                          name: "isRequired",
                          type: "bool",
                          internalType: "bool",
                        },
                        {
                          name: "enabled",
                          type: "bool",
                          internalType: "bool",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "extraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "feedRulesParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "rootPostRulesParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "quotedPostRulesParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_PostDeleted",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "author",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_PostEdited",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "author",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newPostParams",
              type: "tuple",
              indexed: false,
              internalType: "struct EditPostParams",
              components: [
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "extraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "feedRulesParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "rootPostRulesParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "quotedPostRulesParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_Post_ExtraDataAdded",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_Post_ExtraDataRemoved",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_Post_ExtraDataUpdated",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_Post_RuleConfigured",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "author",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "configParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_Post_RuleReconfigured",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "author",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "configParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_Post_RuleSelectorDisabled",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "author",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "isRequired",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "ruleSelector",
              type: "bytes4",
              indexed: false,
              internalType: "bytes4",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_Post_RuleSelectorEnabled",
          inputs: [
            {
              name: "postId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "author",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "isRequired",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "ruleSelector",
              type: "bytes4",
              indexed: false,
              internalType: "bytes4",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_RuleConfigured",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "configParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_RuleReconfigured",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "configParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_RuleSelectorDisabled",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "isRequired",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "ruleSelector",
              type: "bytes4",
              indexed: false,
              internalType: "bytes4",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Feed_RuleSelectorEnabled",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "isRequired",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "ruleSelector",
              type: "bytes4",
              indexed: false,
              internalType: "bytes4",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessDenied",
          inputs: [],
        },
        {
          type: "error",
          name: "AllAnyOfRulesReverted",
          inputs: [],
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "CannotHaveRules",
          inputs: [],
        },
        {
          type: "error",
          name: "ConfigureCallReverted",
          inputs: [],
        },
        {
          type: "error",
          name: "DoesNotExist",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidConfigSalt",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "LimitReached",
          inputs: [],
        },
        {
          type: "error",
          name: "NotAContract",
          inputs: [],
        },
        {
          type: "error",
          name: "RedundantStateChange",
          inputs: [],
        },
        {
          type: "error",
          name: "RequiredRuleReverted",
          inputs: [],
        },
        {
          type: "error",
          name: "RuleNotConfigured",
          inputs: [],
        },
        {
          type: "error",
          name: "SelectorEnabledForDifferentRuleType",
          inputs: [],
        },
        {
          type: "error",
          name: "UnexpectedValue",
          inputs: [],
        },
        {
          type: "error",
          name: "UnsupportedSelector",
          inputs: [],
        },
      ],
    },
    LensGlobalGraph: {
      address: testnetAddressBook.LensGlobalGraph.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "changeFollowRules",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "ruleChanges",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "ruleChangesProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "changeGraphRules",
          inputs: [
            {
              name: "ruleChanges",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "follow",
          inputs: [
            {
              name: "followerAccount",
              type: "address",
              internalType: "address",
            },
            {
              name: "accountToFollow",
              type: "address",
              internalType: "address",
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "graphRulesProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "followRulesProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getAccessControl",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getExtraData",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getFollow",
          inputs: [
            {
              name: "followerAccount",
              type: "address",
              internalType: "address",
            },
            {
              name: "targetAccount",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct Follow",
              components: [
                {
                  name: "id",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "timestamp",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getFollowRules",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "ruleSelector",
              type: "bytes4",
              internalType: "bytes4",
            },
            {
              name: "isRequired",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple[]",
              internalType: "struct Rule[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getFollowSource",
          inputs: [
            {
              name: "followedAccount",
              type: "address",
              internalType: "address",
            },
            {
              name: "followId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getFollowerById",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "followId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getFollowersCount",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getFollowingCount",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getGraphRules",
          inputs: [
            {
              name: "ruleSelector",
              type: "bytes4",
              internalType: "bytes4",
            },
            {
              name: "isRequired",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple[]",
              internalType: "struct Rule[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "accessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isFollowing",
          inputs: [
            {
              name: "followerAccount",
              type: "address",
              internalType: "address",
            },
            {
              name: "targetAccount",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setAccessControl",
          inputs: [
            {
              name: "newAccessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setExtraData",
          inputs: [
            {
              name: "extraDataToSet",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "unfollow",
          inputs: [
            {
              name: "followerAccount",
              type: "address",
              internalType: "address",
            },
            {
              name: "accountToUnfollow",
              type: "address",
              internalType: "address",
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "graphRulesProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_AccessControlAdded",
          inputs: [
            {
              name: "accessControl",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "accessControlType",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_AccessControlUpdated",
          inputs: [
            {
              name: "accessControl",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "accessControlType",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Contract_Deployed",
          inputs: [
            {
              name: "contractType",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "flavour",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ExtraStorageSet",
          inputs: [
            {
              name: "addressScope",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "entityType",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "entityId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Graph_ExtraDataAdded",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Graph_ExtraDataRemoved",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Graph_ExtraDataUpdated",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Graph_Follow_RuleConfigured",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "configParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Graph_Follow_RuleReconfigured",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "configParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Graph_Follow_RuleSelectorDisabled",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "isRequired",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "ruleSelector",
              type: "bytes4",
              indexed: false,
              internalType: "bytes4",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Graph_Follow_RuleSelectorEnabled",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "isRequired",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "ruleSelector",
              type: "bytes4",
              indexed: false,
              internalType: "bytes4",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Graph_Followed",
          inputs: [
            {
              name: "followerAccount",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "accountToFollow",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "followId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "graphRulesProcessingParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "followRulesProcessingParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "extraData",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Graph_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Graph_RuleConfigured",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "configParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Graph_RuleReconfigured",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "configParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Graph_RuleSelectorDisabled",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "isRequired",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "ruleSelector",
              type: "bytes4",
              indexed: false,
              internalType: "bytes4",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Graph_RuleSelectorEnabled",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "isRequired",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "ruleSelector",
              type: "bytes4",
              indexed: false,
              internalType: "bytes4",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Graph_Unfollowed",
          inputs: [
            {
              name: "followerAccount",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "accountToUnfollow",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "followId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "graphRulesProcessingParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessDenied",
          inputs: [],
        },
        {
          type: "error",
          name: "ActionOnSelf",
          inputs: [],
        },
        {
          type: "error",
          name: "AllAnyOfRulesReverted",
          inputs: [],
        },
        {
          type: "error",
          name: "AlreadyExists",
          inputs: [],
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "CannotFollowAgain",
          inputs: [],
        },
        {
          type: "error",
          name: "ConfigureCallReverted",
          inputs: [],
        },
        {
          type: "error",
          name: "DoesNotExist",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidConfigSalt",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "LimitReached",
          inputs: [],
        },
        {
          type: "error",
          name: "NotAContract",
          inputs: [],
        },
        {
          type: "error",
          name: "NotFollowing",
          inputs: [],
        },
        {
          type: "error",
          name: "RedundantStateChange",
          inputs: [],
        },
        {
          type: "error",
          name: "RequiredRuleReverted",
          inputs: [],
        },
        {
          type: "error",
          name: "RuleNotConfigured",
          inputs: [],
        },
        {
          type: "error",
          name: "SelectorEnabledForDifferentRuleType",
          inputs: [],
        },
        {
          type: "error",
          name: "UnsupportedSelector",
          inputs: [],
        },
      ],
    },
    LensGlobalNamespace: {
      address: testnetAddressBook.LensGlobalNamespace.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "accountOf",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "approve",
          inputs: [
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "assignUsername",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "unassignAccountRuleProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "unassignUsernameRuleProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "assignRuleProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "changeNamespaceRules",
          inputs: [
            {
              name: "ruleChanges",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createAndAssignUsername",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "unassigningProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "creationProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "assigningProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createUsername",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "exists",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "exists",
          inputs: [
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getAccessControl",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getApproved",
          inputs: [
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getExtraData",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getNamespace",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getNamespaceRules",
          inputs: [
            {
              name: "ruleSelector",
              type: "bytes4",
              internalType: "bytes4",
            },
            {
              name: "isRequired",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple[]",
              internalType: "struct Rule[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getTokenIdByUsername",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "getUsernameAssignmentSource",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getUsernameByTokenId",
          inputs: [
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getUsernameCreationSource",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getUsernameExtraData",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "key",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "namespace",
              type: "string",
              internalType: "string",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "nftName",
              type: "string",
              internalType: "string",
            },
            {
              name: "nftSymbol",
              type: "string",
              internalType: "string",
            },
            {
              name: "tokenURIProvider",
              type: "address",
              internalType: "contract ITokenURIProvider",
            },
            {
              name: "accessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isApprovedForAll",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "name",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "ownerOf",
          inputs: [
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "ownerOf",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "removeUsername",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "unassigningRuleProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "removalRuleProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "safeTransferFrom",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "safeTransferFrom",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setAccessControl",
          inputs: [
            {
              name: "newAccessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setApprovalForAll",
          inputs: [
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
            {
              name: "approved",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setExtraData",
          inputs: [
            {
              name: "extraDataToSet",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setTokenURIProvider",
          inputs: [
            {
              name: "tokenURIProvider",
              type: "address",
              internalType: "contract ITokenURIProvider",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setUsernameExtraData",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "extraDataToSet",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "symbol",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "tokenURI",
          inputs: [
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferFrom",
          inputs: [
            {
              name: "from",
              type: "address",
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "unassignUsername",
          inputs: [
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "customParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "usernameOf",
          inputs: [
            {
              name: "user",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "Approval",
          inputs: [
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "approved",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "ApprovalForAll",
          inputs: [
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "approved",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "BatchMetadataUpdate",
          inputs: [
            {
              name: "_fromTokenId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "_toTokenId",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_AccessControlAdded",
          inputs: [
            {
              name: "accessControl",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "accessControlType",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_AccessControlUpdated",
          inputs: [
            {
              name: "accessControl",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "accessControlType",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Contract_Deployed",
          inputs: [
            {
              name: "contractType",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "flavour",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ERC721_TokenURIProviderSet",
          inputs: [
            {
              name: "tokenURIProvider",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ExtraStorageSet",
          inputs: [
            {
              name: "addressScope",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "entityType",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "entityId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Namespace_ExtraDataAdded",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Namespace_ExtraDataRemoved",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Namespace_ExtraDataUpdated",
          inputs: [
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Namespace_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Namespace_RuleConfigured",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "configParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Namespace_RuleReconfigured",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "configParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Namespace_RuleSelectorDisabled",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "isRequired",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "ruleSelector",
              type: "bytes4",
              indexed: false,
              internalType: "bytes4",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Namespace_RuleSelectorEnabled",
          inputs: [
            {
              name: "rule",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "isRequired",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
            {
              name: "ruleSelector",
              type: "bytes4",
              indexed: false,
              internalType: "bytes4",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Username_Assigned",
          inputs: [
            {
              name: "username",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Username_Created",
          inputs: [
            {
              name: "username",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "extraData",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Username_ExtraDataAdded",
          inputs: [
            {
              name: "usernameId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Username_ExtraDataRemoved",
          inputs: [
            {
              name: "usernameId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Username_ExtraDataUpdated",
          inputs: [
            {
              name: "usernameId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "key",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "value",
              type: "bytes",
              indexed: false,
              internalType: "bytes",
            },
            {
              name: "valueIndexed",
              type: "bytes",
              indexed: true,
              internalType: "bytes",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Username_Removed",
          inputs: [
            {
              name: "username",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Username_Transfer",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Username_Unassigned",
          inputs: [
            {
              name: "username",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "previousAccount",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "customParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleProcessingParams",
              type: "tuple[]",
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "ruleParams",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "source",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tokenId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessDenied",
          inputs: [],
        },
        {
          type: "error",
          name: "AllAnyOfRulesReverted",
          inputs: [],
        },
        {
          type: "error",
          name: "AlreadyExists",
          inputs: [],
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "ConfigureCallReverted",
          inputs: [],
        },
        {
          type: "error",
          name: "DoesNotExist",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidConfigSalt",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "LimitReached",
          inputs: [],
        },
        {
          type: "error",
          name: "NotAContract",
          inputs: [],
        },
        {
          type: "error",
          name: "RedundantStateChange",
          inputs: [],
        },
        {
          type: "error",
          name: "RequiredRuleReverted",
          inputs: [],
        },
        {
          type: "error",
          name: "RuleNotConfigured",
          inputs: [],
        },
        {
          type: "error",
          name: "SelectorEnabledForDifferentRuleType",
          inputs: [],
        },
        {
          type: "error",
          name: "UnexpectedContractImpl",
          inputs: [],
        },
        {
          type: "error",
          name: "UnsupportedSelector",
          inputs: [],
        },
        {
          type: "error",
          name: "UsernameAssigned",
          inputs: [],
        },
      ],
    },
    MembershipApprovalGroupRule: {
      address: testnetAddressBook.MembershipApprovalGroupRule.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "cancelMembershipRequest",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "group",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processAddition",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "processJoining",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processLeaving",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processRemoval",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "rejectMembershipRequest",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "group",
              type: "address",
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "rejectMembershipRequests",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "group",
              type: "address",
              internalType: "address",
            },
            {
              name: "accounts",
              type: "address[]",
              internalType: "address[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "sendMembershipRequest",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "group",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_ApprovalGroupRule_MembershipApproved",
          inputs: [
            {
              name: "group",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "approvedBy",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ApprovalGroupRule_MembershipRejected",
          inputs: [
            {
              name: "group",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "rejectedBy",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ApprovalGroupRule_MembershipRequestCancelled",
          inputs: [
            {
              name: "group",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_ApprovalGroupRule_MembershipRequested",
          inputs: [
            {
              name: "group",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessDenied",
          inputs: [],
        },
        {
          type: "error",
          name: "AlreadyExists",
          inputs: [],
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "DoesNotExist",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
      ],
    },
    NamespaceFactory: {
      address: testnetAddressBook.NamespaceFactory.address,
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "primitiveBeacon",
              type: "address",
              internalType: "address",
            },
            {
              name: "proxyAdminLock",
              type: "address",
              internalType: "address",
            },
            {
              name: "lensFactory",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployNamespace",
          inputs: [
            {
              name: "namespace",
              type: "string",
              internalType: "string",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
            {
              name: "accessControl",
              type: "address",
              internalType: "contract IAccessControl",
            },
            {
              name: "proxyAdminOwner",
              type: "address",
              internalType: "address",
            },
            {
              name: "ruleChanges",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "extraData",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "nftName",
              type: "string",
              internalType: "string",
            },
            {
              name: "nftSymbol",
              type: "string",
              internalType: "string",
            },
            {
              name: "tokenURIProvider",
              type: "address",
              internalType: "contract ITokenURIProvider",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_NamespaceFactory_Deployment",
          inputs: [
            {
              name: "namespaceAddress",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "namespace",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessDenied",
          inputs: [],
        },
      ],
    },
    OwnerAdminOnlyAccessControl: {
      address: testnetAddressBook.OwnerAdminOnlyAccessControl.address,
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "lock",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "canChangeAccessControl",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getAccess",
          inputs: [
            {
              name: "roleId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "contractAddress",
              type: "address",
              internalType: "address",
            },
            {
              name: "permissionId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint8",
              internalType: "enum Access",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getType",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "grantRole",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "roleId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "grantRoles",
          inputs: [
            {
              name: "roles",
              type: "tuple[]",
              internalType: "struct Role[]",
              components: [
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "roleId",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "hasAccess",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "contractAddress",
              type: "address",
              internalType: "address",
            },
            {
              name: "permissionId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "hasRole",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "roleId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "revokeRole",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "roleId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "revokeRoles",
          inputs: [
            {
              name: "roles",
              type: "tuple[]",
              internalType: "struct Role[]",
              components: [
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "roleId",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setAccess",
          inputs: [
            {
              name: "roleId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "contractAddress",
              type: "address",
              internalType: "address",
            },
            {
              name: "permissionId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "access",
              type: "uint8",
              internalType: "enum Access",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_AccessControl_AccessAdded",
          inputs: [
            {
              name: "roleId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "contractAddress",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "granted",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_AccessControl_AccessRemoved",
          inputs: [
            {
              name: "roleId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "contractAddress",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_AccessControl_AccessUpdated",
          inputs: [
            {
              name: "roleId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "contractAddress",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "granted",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_AccessControl_RoleGranted",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "roleId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_AccessControl_RoleRevoked",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "roleId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Contract_Deployed",
          inputs: [
            {
              name: "contractType",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "flavour",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
        {
          type: "error",
          name: "RedundantStateChange",
          inputs: [],
        },
      ],
    },
    SimpleCollectAction: {
      address: testnetAddressBook.SimpleCollectAction.address,
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "actionHub",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "feed",
              type: "address",
              internalType: "address",
            },
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "params",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "execute",
          inputs: [
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "feed",
              type: "address",
              internalType: "address",
            },
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "params",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getCollectActionData",
          inputs: [
            {
              name: "feed",
              type: "address",
              internalType: "address",
            },
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "tuple",
              internalType: "struct CollectActionData",
              components: [
                {
                  name: "amount",
                  type: "uint160",
                  internalType: "uint160",
                },
                {
                  name: "collectLimit",
                  type: "uint96",
                  internalType: "uint96",
                },
                {
                  name: "token",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "currentCollects",
                  type: "uint96",
                  internalType: "uint96",
                },
                {
                  name: "recipients",
                  type: "tuple[]",
                  internalType: "struct RecipientData[]",
                  components: [
                    {
                      name: "recipient",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "split",
                      type: "uint16",
                      internalType: "uint16",
                    },
                  ],
                },
                {
                  name: "endTimestamp",
                  type: "uint72",
                  internalType: "uint72",
                },
                {
                  name: "referralFee",
                  type: "uint16",
                  internalType: "uint16",
                },
                {
                  name: "followerOnlyGraph",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "collectionAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "isImmutable",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "isDisabled",
                  type: "bool",
                  internalType: "bool",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setDisabled",
          inputs: [
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "feed",
              type: "address",
              internalType: "address",
            },
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "isDisabled",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "params",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PostAction_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "Disabled",
          inputs: [],
        },
        {
          type: "error",
          name: "DoesNotExist",
          inputs: [],
        },
        {
          type: "error",
          name: "Expired",
          inputs: [],
        },
        {
          type: "error",
          name: "Immutable",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidRecipient",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidSplits",
          inputs: [],
        },
        {
          type: "error",
          name: "LimitReached",
          inputs: [],
        },
        {
          type: "error",
          name: "NotFollowing",
          inputs: [],
        },
        {
          type: "error",
          name: "RedundantStateChange",
          inputs: [],
        },
      ],
    },
    SimplePaymentFeedRule: {
      address: testnetAddressBook.SimplePaymentFeedRule.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processCreatePost",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "postParams",
              type: "tuple",
              internalType: "struct CreatePostParams",
              components: [
                {
                  name: "author",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "repostedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "quotedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "repliedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "ruleChanges",
                  type: "tuple[]",
                  internalType: "struct RuleChange[]",
                  components: [
                    {
                      name: "ruleAddress",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "configSalt",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "configurationChanges",
                      type: "tuple",
                      internalType: "struct RuleConfigurationChange",
                      components: [
                        {
                          name: "configure",
                          type: "bool",
                          internalType: "bool",
                        },
                        {
                          name: "ruleParams",
                          type: "tuple[]",
                          internalType: "struct KeyValue[]",
                          components: [
                            {
                              name: "key",
                              type: "bytes32",
                              internalType: "bytes32",
                            },
                            {
                              name: "value",
                              type: "bytes",
                              internalType: "bytes",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: "selectorChanges",
                      type: "tuple[]",
                      internalType: "struct RuleSelectorChange[]",
                      components: [
                        {
                          name: "ruleSelector",
                          type: "bytes4",
                          internalType: "bytes4",
                        },
                        {
                          name: "isRequired",
                          type: "bool",
                          internalType: "bool",
                        },
                        {
                          name: "enabled",
                          type: "bool",
                          internalType: "bool",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "extraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "processDeletePost",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processEditPost",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "tuple",
              internalType: "struct EditPostParams",
              components: [
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "extraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processPostRuleChanges",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setTrust",
          inputs: [
            {
              name: "target",
              type: "address",
              internalType: "address",
            },
            {
              name: "isTrusted",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_Trusted",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "trustedAddress",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_Untrusted",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "untrustedAddress",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
        {
          type: "error",
          name: "Untrusted",
          inputs: [],
        },
      ],
    },
    SimplePaymentFollowRule: {
      address: testnetAddressBook.SimplePaymentFollowRule.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processFollow",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "followerAccount",
              type: "address",
              internalType: "address",
            },
            {
              name: "accountToFollow",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setTrust",
          inputs: [
            {
              name: "target",
              type: "address",
              internalType: "address",
            },
            {
              name: "isTrusted",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_Trusted",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "trustedAddress",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_Untrusted",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "untrustedAddress",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "NotFound",
          inputs: [],
        },
        {
          type: "error",
          name: "Untrusted",
          inputs: [],
        },
      ],
    },
    SimplePaymentGroupRule: {
      address: testnetAddressBook.SimplePaymentGroupRule.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processAddition",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "processJoining",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "processLeaving",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processRemoval",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setTrust",
          inputs: [
            {
              name: "target",
              type: "address",
              internalType: "address",
            },
            {
              name: "isTrusted",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_Trusted",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "trustedAddress",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_Untrusted",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "untrustedAddress",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
        {
          type: "error",
          name: "Untrusted",
          inputs: [],
        },
      ],
    },
    TippingAccountAction: {
      address: testnetAddressBook.TippingAccountAction.address,
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "actionHub",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "PARAM__TIP_TOKEN",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "params",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "execute",
          inputs: [
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "params",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setDisabled",
          inputs: [
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "isDisabled",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "params",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_AccountAction_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
        {
          type: "error",
          name: "RedundantStateChange",
          inputs: [],
        },
      ],
    },
    TippingPostAction: {
      address: testnetAddressBook.TippingPostAction.address,
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "actionHub",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "feed",
              type: "address",
              internalType: "address",
            },
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "params",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "execute",
          inputs: [
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "feed",
              type: "address",
              internalType: "address",
            },
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "params",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setDisabled",
          inputs: [
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "feed",
              type: "address",
              internalType: "address",
            },
            {
              name: "postId",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "isDisabled",
              type: "bool",
              internalType: "bool",
            },
            {
              name: "params",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PostAction_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
        {
          type: "error",
          name: "RedundantStateChange",
          inputs: [],
        },
      ],
    },
    TokenGatedFeedRule: {
      address: testnetAddressBook.TokenGatedFeedRule.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processCreatePost",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "postParams",
              type: "tuple",
              internalType: "struct CreatePostParams",
              components: [
                {
                  name: "author",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "repostedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "quotedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "repliedPostId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "ruleChanges",
                  type: "tuple[]",
                  internalType: "struct RuleChange[]",
                  components: [
                    {
                      name: "ruleAddress",
                      type: "address",
                      internalType: "address",
                    },
                    {
                      name: "configSalt",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "configurationChanges",
                      type: "tuple",
                      internalType: "struct RuleConfigurationChange",
                      components: [
                        {
                          name: "configure",
                          type: "bool",
                          internalType: "bool",
                        },
                        {
                          name: "ruleParams",
                          type: "tuple[]",
                          internalType: "struct KeyValue[]",
                          components: [
                            {
                              name: "key",
                              type: "bytes32",
                              internalType: "bytes32",
                            },
                            {
                              name: "value",
                              type: "bytes",
                              internalType: "bytes",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: "selectorChanges",
                      type: "tuple[]",
                      internalType: "struct RuleSelectorChange[]",
                      components: [
                        {
                          name: "ruleSelector",
                          type: "bytes4",
                          internalType: "bytes4",
                        },
                        {
                          name: "isRequired",
                          type: "bool",
                          internalType: "bool",
                        },
                        {
                          name: "enabled",
                          type: "bool",
                          internalType: "bool",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "extraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processDeletePost",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processEditPost",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "tuple",
              internalType: "struct EditPostParams",
              components: [
                {
                  name: "contentURI",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "extraData",
                  type: "tuple[]",
                  internalType: "struct KeyValue[]",
                  components: [
                    {
                      name: "key",
                      type: "bytes32",
                      internalType: "bytes32",
                    },
                    {
                      name: "value",
                      type: "bytes",
                      internalType: "bytes",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processPostRuleChanges",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "NotEnough",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
      ],
    },
    TokenGatedFollowRule: {
      address: testnetAddressBook.TokenGatedFollowRule.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processFollow",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "followerAccount",
              type: "address",
              internalType: "address",
            },
            {
              name: "accountToFollow",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "NotEnough",
          inputs: [],
        },
        {
          type: "error",
          name: "NotFound",
          inputs: [],
        },
      ],
    },
    TokenGatedGraphRule: {
      address: testnetAddressBook.TokenGatedGraphRule.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processFollow",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "followerAccount",
              type: "address",
              internalType: "address",
            },
            {
              name: "accountToFollow",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processFollowRuleChanges",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct RuleChange[]",
              components: [
                {
                  name: "ruleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "configSalt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "configurationChanges",
                  type: "tuple",
                  internalType: "struct RuleConfigurationChange",
                  components: [
                    {
                      name: "configure",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "ruleParams",
                      type: "tuple[]",
                      internalType: "struct KeyValue[]",
                      components: [
                        {
                          name: "key",
                          type: "bytes32",
                          internalType: "bytes32",
                        },
                        {
                          name: "value",
                          type: "bytes",
                          internalType: "bytes",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "selectorChanges",
                  type: "tuple[]",
                  internalType: "struct RuleSelectorChange[]",
                  components: [
                    {
                      name: "ruleSelector",
                      type: "bytes4",
                      internalType: "bytes4",
                    },
                    {
                      name: "isRequired",
                      type: "bool",
                      internalType: "bool",
                    },
                    {
                      name: "enabled",
                      type: "bool",
                      internalType: "bool",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processUnfollow",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "NotEnough",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
      ],
    },
    TokenGatedGroupRule: {
      address: testnetAddressBook.TokenGatedGroupRule.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processAddition",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processJoining",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processLeaving",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processRemoval",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "NotEnough",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
      ],
    },
    TokenGatedNamespaceRule: {
      address: testnetAddressBook.TokenGatedNamespaceRule.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processAssigning",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processCreation",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processRemoval",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processUnassigning",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "NotEnough",
          inputs: [],
        },
      ],
    },
    UsernameLengthNamespaceRule: {
      address: testnetAddressBook.UsernameLengthNamespaceRule.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processAssigning",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processCreation",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processRemoval",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processUnassigning",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
      ],
    },
    UsernamePricePerLengthNamespaceRule: {
      address: testnetAddressBook.UsernamePricePerLengthNamespaceRule.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "ruleConfigurationParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processAssigning",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "processCreation",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "processRemoval",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "processUnassigning",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setTrust",
          inputs: [
            {
              name: "target",
              type: "address",
              internalType: "address",
            },
            {
              name: "isTrusted",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_Trusted",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "trustedAddress",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_Untrusted",
          inputs: [
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "untrustedAddress",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidParameter",
          inputs: [],
        },
        {
          type: "error",
          name: "Untrusted",
          inputs: [],
        },
      ],
    },
    UsernameReservedNamespaceRule: {
      address: testnetAddressBook.UsernameReservedNamespaceRule.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "ruleParams",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processAssigning",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processCreation",
          inputs: [
            {
              name: "configSalt",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "originalMsgSender",
              type: "address",
              internalType: "address",
            },
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "processRemoval",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processUnassigning",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_PermissionId_Available",
          inputs: [
            {
              name: "permissionId",
              type: "uint256",
              indexed: true,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_UsernameReservedNamespaceRule_ReservedUsernameCreated",
          inputs: [
            {
              name: "usernamePrimitive",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "indexedUsername",
              type: "string",
              indexed: true,
              internalType: "string",
            },
            {
              name: "username",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "account",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "createdBy",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_UsernameReservedNamespaceRule_UsernameReleased",
          inputs: [
            {
              name: "usernamePrimitive",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "indexedUsername",
              type: "string",
              indexed: true,
              internalType: "string",
            },
            {
              name: "username",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_UsernameReservedNamespaceRule_UsernameReserved",
          inputs: [
            {
              name: "usernamePrimitive",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "configSalt",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "indexedUsername",
              type: "string",
              indexed: true,
              internalType: "string",
            },
            {
              name: "username",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AccessDenied",
          inputs: [],
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
        {
          type: "error",
          name: "RedundantStateChange",
          inputs: [],
        },
      ],
    },
    UsernameSimpleCharsetNamespaceRule: {
      address: testnetAddressBook.UsernameSimpleCharsetNamespaceRule.address,
      abi: [
        {
          type: "constructor",
          inputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "configure",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [
            {
              name: "source",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getMetadataURI",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "string",
              internalType: "string",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "processAssigning",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processCreation",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "username",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processRemoval",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "processUnassigning",
          inputs: [
            {
              name: "",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "string",
              internalType: "string",
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
            {
              name: "",
              type: "tuple[]",
              internalType: "struct KeyValue[]",
              components: [
                {
                  name: "key",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "value",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "setMetadataURI",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              internalType: "string",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Lens_Ownable_OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Lens_Rule_MetadataURISet",
          inputs: [
            {
              name: "metadataURI",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "CannotStartWithThat",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidMsgSender",
          inputs: [],
        },
        {
          type: "error",
          name: "NotAllowed",
          inputs: [],
        },
        {
          type: "error",
          name: "NotImplemented",
          inputs: [],
        },
      ],
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
