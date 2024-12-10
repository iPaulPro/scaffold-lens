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
  37111: {
    TippingAccountAction: {
      address: "0x44365b40cC050C7AFee448F00026b94fC8B061eC",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "Lens_AccountAction_Configured",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "Lens_AccountAction_Executed",
          type: "event",
        },
        {
          inputs: [
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
          name: "configure",
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
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "execute",
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
      ],
    },
    SimpleCollectAction: {
      address: "0xCC1702edA947BeEaB598FC8EEDEca94D833eD3F5",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "feed",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "Lens_PostAction_Configured",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "feed",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "Lens_PostAction_Executed",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "feed",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "configure",
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
              name: "feed",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "execute",
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
              name: "feed",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
          ],
          name: "getCollectActionData",
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
                  internalType: "uint72",
                  name: "endTimestamp",
                  type: "uint72",
                },
                {
                  internalType: "address",
                  name: "followerOnlyGraph",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "collectionAddress",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "isImmutable",
                  type: "bool",
                },
              ],
              internalType: "struct CollectActionData",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    AccessControlFactory: {
      address: "0x4Be5187AB4C1f160423331c0db7Db68a76926418",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "accessControl",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "Lens_AccessControlFactory_OwnerAdminDeployment",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address[]",
              name: "admins",
              type: "address[]",
            },
          ],
          name: "deployOwnerAdminOnlyAccessControl",
          outputs: [
            {
              internalType: "contract IRoleBasedAccessControl",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    AccountFactory: {
      address: "0xb532410088316E00e5E93E5491DC6A8BC87dF322",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
            {
              indexed: false,
              internalType: "address[]",
              name: "accountManagers",
              type: "address[]",
            },
            {
              components: [
                {
                  internalType: "bool",
                  name: "canExecuteTransactions",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "canTransferTokens",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "canTransferNative",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "canSetMetadataURI",
                  type: "bool",
                },
              ],
              indexed: false,
              internalType: "struct AccountManagerPermissions[]",
              name: "accountManagersPermissions",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "address",
              name: "source",
              type: "address",
            },
          ],
          name: "Lens_AccountFactory_Deployment",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
            {
              internalType: "address[]",
              name: "accountManagers",
              type: "address[]",
            },
            {
              components: [
                {
                  internalType: "bool",
                  name: "canExecuteTransactions",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "canTransferTokens",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "canTransferNative",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "canSetMetadataURI",
                  type: "bool",
                },
              ],
              internalType: "struct AccountManagerPermissions[]",
              name: "accountManagersPermissions",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              internalType: "struct SourceStamp",
              name: "sourceStamp",
              type: "tuple",
            },
          ],
          name: "deployAccount",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    AppFactory: {
      address: "0x980dc188D6847A191a28a477c63992184D321b8e",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "app",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_AppFactory_Deployment",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
            {
              internalType: "bool",
              name: "sourceStampVerificationEnabled",
              type: "bool",
            },
            {
              internalType: "contract IAccessControl",
              name: "accessControl",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "graph",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "feeds",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "username",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "groups",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "defaultFeed",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "signers",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "paymaster",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "treasury",
                  type: "address",
                },
              ],
              internalType: "struct AppInitialProperties",
              name: "initialProperties",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "key",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "value",
                  type: "bytes",
                },
              ],
              internalType: "struct DataElement[]",
              name: "extraData",
              type: "tuple[]",
            },
          ],
          name: "deployApp",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    FeedFactory: {
      address: "0x18882Eb5ab38a655EFbc6BbFDBBD2A1aa55f33d9",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "feed",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_FeedFactory_Deployment",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
            {
              internalType: "contract IAccessControl",
              name: "accessControl",
              type: "address",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "rules",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "key",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "value",
                  type: "bytes",
                },
              ],
              internalType: "struct DataElement[]",
              name: "extraData",
              type: "tuple[]",
            },
          ],
          name: "deployFeed",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    GraphFactory: {
      address: "0x6b85AaDD9E2514804189618748BB839239b7DA11",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "graph",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_GraphFactory_Deployment",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
            {
              internalType: "contract IAccessControl",
              name: "accessControl",
              type: "address",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "rules",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "key",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "value",
                  type: "bytes",
                },
              ],
              internalType: "struct DataElement[]",
              name: "extraData",
              type: "tuple[]",
            },
          ],
          name: "deployGraph",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    GroupFactory: {
      address: "0xD5DD30FC8f1174b919ED408017e24ce9c85a4627",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "group",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_GroupFactory_Deployment",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
            {
              internalType: "contract IAccessControl",
              name: "accessControl",
              type: "address",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "rules",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "key",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "value",
                  type: "bytes",
                },
              ],
              internalType: "struct DataElement[]",
              name: "extraData",
              type: "tuple[]",
            },
          ],
          name: "deployGroup",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    LensFactory: {
      address: "0xbD7EAFA4Df7EC8DDC8Ca50Fbc29659B10FDD1a3e",
      abi: [
        {
          inputs: [
            {
              internalType: "contract AccessControlFactory",
              name: "accessControlFactory",
              type: "address",
            },
            {
              internalType: "contract AccountFactory",
              name: "accountFactory",
              type: "address",
            },
            {
              internalType: "contract AppFactory",
              name: "appFactory",
              type: "address",
            },
            {
              internalType: "contract GroupFactory",
              name: "groupFactory",
              type: "address",
            },
            {
              internalType: "contract FeedFactory",
              name: "feedFactory",
              type: "address",
            },
            {
              internalType: "contract GraphFactory",
              name: "graphFactory",
              type: "address",
            },
            {
              internalType: "contract UsernameFactory",
              name: "usernameFactory",
              type: "address",
            },
            {
              internalType: "address",
              name: "userBlockingRule",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address[]",
              name: "accountManagers",
              type: "address[]",
            },
            {
              components: [
                {
                  internalType: "bool",
                  name: "canExecuteTransactions",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "canTransferTokens",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "canTransferNative",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "canSetMetadataURI",
                  type: "bool",
                },
              ],
              internalType: "struct AccountManagerPermissions[]",
              name: "accountManagersPermissions",
              type: "tuple[]",
            },
            {
              internalType: "address",
              name: "usernamePrimitiveAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "username",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              internalType: "struct RuleExecutionData",
              name: "createUsernameData",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              internalType: "struct RuleExecutionData",
              name: "assignUsernameData",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              internalType: "struct SourceStamp",
              name: "accountCreationSourceStamp",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              internalType: "struct SourceStamp",
              name: "createUsernameSourceStamp",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              internalType: "struct SourceStamp",
              name: "assignUsernameSourceStamp",
              type: "tuple",
            },
          ],
          name: "createAccountWithUsernameFree",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address[]",
              name: "accountManagers",
              type: "address[]",
            },
            {
              components: [
                {
                  internalType: "bool",
                  name: "canExecuteTransactions",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "canTransferTokens",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "canTransferNative",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "canSetMetadataURI",
                  type: "bool",
                },
              ],
              internalType: "struct AccountManagerPermissions[]",
              name: "accountManagersPermissions",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              internalType: "struct SourceStamp",
              name: "sourceStamp",
              type: "tuple",
            },
          ],
          name: "deployAccount",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
            {
              internalType: "bool",
              name: "sourceStampVerificationEnabled",
              type: "bool",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address[]",
              name: "admins",
              type: "address[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "graph",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "feeds",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "username",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "groups",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "defaultFeed",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "signers",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "paymaster",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "treasury",
                  type: "address",
                },
              ],
              internalType: "struct AppInitialProperties",
              name: "initialProperties",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "key",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "value",
                  type: "bytes",
                },
              ],
              internalType: "struct DataElement[]",
              name: "extraData",
              type: "tuple[]",
            },
          ],
          name: "deployApp",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address[]",
              name: "admins",
              type: "address[]",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "rules",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "key",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "value",
                  type: "bytes",
                },
              ],
              internalType: "struct DataElement[]",
              name: "extraData",
              type: "tuple[]",
            },
          ],
          name: "deployFeed",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address[]",
              name: "admins",
              type: "address[]",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "rules",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "key",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "value",
                  type: "bytes",
                },
              ],
              internalType: "struct DataElement[]",
              name: "extraData",
              type: "tuple[]",
            },
          ],
          name: "deployGraph",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address[]",
              name: "admins",
              type: "address[]",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "rules",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "key",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "value",
                  type: "bytes",
                },
              ],
              internalType: "struct DataElement[]",
              name: "extraData",
              type: "tuple[]",
            },
          ],
          name: "deployGroup",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "namespace",
              type: "string",
            },
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address[]",
              name: "admins",
              type: "address[]",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "rules",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "key",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "value",
                  type: "bytes",
                },
              ],
              internalType: "struct DataElement[]",
              name: "extraData",
              type: "tuple[]",
            },
            {
              internalType: "string",
              name: "nftName",
              type: "string",
            },
            {
              internalType: "string",
              name: "nftSymbol",
              type: "string",
            },
          ],
          name: "deployUsername",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    UsernameFactory: {
      address: "0xFCCE7d6f2854da1D940a29FDBC2E2Efda592828C",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "username",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "namespace",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_UsernameFactory_Deployment",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "namespace",
              type: "string",
            },
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
            {
              internalType: "contract IAccessControl",
              name: "accessControl",
              type: "address",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "rules",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "key",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "value",
                  type: "bytes",
                },
              ],
              internalType: "struct DataElement[]",
              name: "extraData",
              type: "tuple[]",
            },
            {
              internalType: "string",
              name: "nftName",
              type: "string",
            },
            {
              internalType: "string",
              name: "nftSymbol",
              type: "string",
            },
            {
              internalType: "contract ITokenURIProvider",
              name: "tokenURIProvider",
              type: "address",
            },
          ],
          name: "deployUsername",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    UserBlockingRule: {
      address: "0x7d499975049740a23A72EBd00E579D88004591da",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "source",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "target",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "Lens_UserBlocking_UserBlocked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "source",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "target",
              type: "address",
            },
          ],
          name: "Lens_UserBlocking_UserUnblocked",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "source",
              type: "address",
            },
            {
              internalType: "address",
              name: "target",
              type: "address",
            },
          ],
          name: "blockUser",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "configure",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "source",
              type: "address",
            },
            {
              internalType: "address",
              name: "blockTarget",
              type: "address",
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
              name: "postId",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "author",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "repostedPostId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "quotedPostId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "repliedPostId",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration[]",
                  name: "rules",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "feedRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "repostedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "quotedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "repliedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "key",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "value",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct DataElement[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct CreatePostParams",
              name: "postParams",
              type: "tuple",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processCreatePost",
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
              name: "",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "key",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "value",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct DataElement[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct EditPostParams",
              name: "",
              type: "tuple",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processEditPost",
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
              name: "followerAcount",
              type: "address",
            },
            {
              internalType: "address",
              name: "accountToFollow",
              type: "address",
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
              name: "",
              type: "address",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "",
              type: "tuple[]",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processFollowRuleChanges",
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
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "",
              type: "tuple[]",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processPostRuleChanges",
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
              name: "source",
              type: "address",
            },
            {
              internalType: "address",
              name: "target",
              type: "address",
            },
          ],
          name: "unblockUser",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "userBlocks",
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
      ],
    },
    GroupGatedFeedRule: {
      address: "0xDa31B2D12157F7db658080d1782B8fE3aA49205a",
      abi: [
        {
          inputs: [
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "configure",
          outputs: [],
          stateMutability: "nonpayable",
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
              components: [
                {
                  internalType: "address",
                  name: "author",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "repostedPostId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "quotedPostId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "repliedPostId",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration[]",
                  name: "rules",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "feedRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "repostedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "quotedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "repliedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "key",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "value",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct DataElement[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct CreatePostParams",
              name: "postParams",
              type: "tuple",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processCreatePost",
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
              name: "",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "key",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "value",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct DataElement[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct EditPostParams",
              name: "",
              type: "tuple",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processEditPost",
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
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "",
              type: "tuple[]",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processPostRuleChanges",
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
      ],
    },
    RestrictedSignersFeedRule: {
      address: "0xe524FA315B5C2ff1D7977bb0f9A13093555988F7",
      abi: [
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
              internalType: "string",
              name: "label",
              type: "string",
            },
          ],
          name: "Lens_RestrictedSignersRule_SignerAdded",
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
              indexed: true,
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
          ],
          name: "Lens_RestrictedSignersRule_SignerNonceUsed",
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
          ],
          name: "Lens_RestrictedSignersRule_SignerRemoved",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "configure",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "author",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "repostedPostId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "quotedPostId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "repliedPostId",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration[]",
                  name: "rules",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "feedRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "repostedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "quotedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "repliedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "key",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "value",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct DataElement[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct CreatePostParams",
              name: "postParams",
              type: "tuple",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "processCreatePost",
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
              name: "postId",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "key",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "value",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct DataElement[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct EditPostParams",
              name: "editPostParams",
              type: "tuple",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "processEditPost",
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
              name: "postId",
              type: "uint256",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "ruleChanges",
              type: "tuple[]",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "processPostRuleChanges",
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
    SimplePaymentFeedRule: {
      address: "0x0A25ab2A285410cdf45c148FA9DB3828C78138fd",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "payer",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "trusted",
              type: "address",
            },
          ],
          name: "Lens_SimplePaymentRule_Trusted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "payer",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "untrusted",
              type: "address",
            },
          ],
          name: "Lens_SimplePaymentRule_Untrusted",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "configure",
          outputs: [],
          stateMutability: "nonpayable",
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
              components: [
                {
                  internalType: "address",
                  name: "author",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "repostedPostId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "quotedPostId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "repliedPostId",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration[]",
                  name: "rules",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "feedRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "repostedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "quotedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "repliedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "key",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "value",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct DataElement[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct CreatePostParams",
              name: "postParams",
              type: "tuple",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "processCreatePost",
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
              name: "",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "key",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "value",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct DataElement[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct EditPostParams",
              name: "",
              type: "tuple",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processEditPost",
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
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "",
              type: "tuple[]",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processPostRuleChanges",
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
              name: "primitive",
              type: "address",
            },
            {
              internalType: "bool",
              name: "isTrusted",
              type: "bool",
            },
          ],
          name: "setTrust",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    TokenGatedFeedRule: {
      address: "0xD7a7cCC828eDF16551eE4f13B0A794b4EA0ce4b8",
      abi: [
        {
          inputs: [
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "configure",
          outputs: [],
          stateMutability: "nonpayable",
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
              components: [
                {
                  internalType: "address",
                  name: "author",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "repostedPostId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "quotedPostId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "repliedPostId",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration[]",
                  name: "rules",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "feedRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "repostedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "quotedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "repliedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "key",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "value",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct DataElement[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct CreatePostParams",
              name: "postParams",
              type: "tuple",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processCreatePost",
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
              name: "",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "key",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "value",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct DataElement[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct EditPostParams",
              name: "",
              type: "tuple",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processEditPost",
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
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "",
              type: "tuple[]",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processPostRuleChanges",
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
      ],
    },
    SimplePaymentFollowRule: {
      address: "0xb3ea632d84513E9745bE5b1C1531066e57C64148",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "payer",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "trusted",
              type: "address",
            },
          ],
          name: "Lens_SimplePaymentRule_Trusted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "payer",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "untrusted",
              type: "address",
            },
          ],
          name: "Lens_SimplePaymentRule_Untrusted",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "configure",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "followerAccount",
              type: "address",
            },
            {
              internalType: "address",
              name: "accountToFollow",
              type: "address",
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
              name: "primitive",
              type: "address",
            },
            {
              internalType: "bool",
              name: "isTrusted",
              type: "bool",
            },
          ],
          name: "setTrust",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    TokenGatedFollowRule: {
      address: "0x5cA056b1ABa90A52367aBfa08D9Bc1e2726b24e9",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "configure",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "followerAccount",
              type: "address",
            },
            {
              internalType: "address",
              name: "accountToFollow",
              type: "address",
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
    RestrictedSignersGraphRule: {
      address: "0x5E83C1b5c5b6c03A87b65c963987233d0396F5F4",
      abi: [
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
              internalType: "string",
              name: "label",
              type: "string",
            },
          ],
          name: "Lens_RestrictedSignersRule_SignerAdded",
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
              indexed: true,
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
          ],
          name: "Lens_RestrictedSignersRule_SignerNonceUsed",
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
          ],
          name: "Lens_RestrictedSignersRule_SignerRemoved",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "configure",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "followerAccount",
              type: "address",
            },
            {
              internalType: "address",
              name: "accountToFollow",
              type: "address",
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
              name: "account",
              type: "address",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "ruleChanges",
              type: "tuple[]",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "processFollowRuleChanges",
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
    TokenGatedGraphRule: {
      address: "0xE9a966EC7fD01dEF8ccE6591a6DC51aC23b446Dd",
      abi: [
        {
          inputs: [
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "configure",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "followerAccount",
              type: "address",
            },
            {
              internalType: "address",
              name: "accountToFollow",
              type: "address",
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
              name: "",
              type: "address",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "",
              type: "tuple[]",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processFollowRuleChanges",
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
      ],
    },
    ApprovalGroupRule: {
      address: "0xde7Cc59257f87D081a7a9567D3DA360e62b2754E",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "group",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Lens_ApprovalGroupRule_MembershipApproved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "group",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Lens_ApprovalGroupRule_MembershipGranted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "group",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Lens_ApprovalGroupRule_MembershipRejected",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "group",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Lens_ApprovalGroupRule_MembershipRequested",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "permissionId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
          ],
          name: "Lens_PermissionId_Available",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "group",
              type: "address",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "bool",
              name: "isApproved",
              type: "bool",
            },
          ],
          name: "answerMembershipRequest",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "configure",
          outputs: [],
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
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processJoining",
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
              name: "",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processRemoval",
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
              name: "group",
              type: "address",
            },
          ],
          name: "requestMembership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    SimplePaymentGroupRule: {
      address: "0x4D00A2336fBac00C5Ebb6891175c8AC0820Dd6fE",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "payer",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "trusted",
              type: "address",
            },
          ],
          name: "Lens_SimplePaymentRule_Trusted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "payer",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "untrusted",
              type: "address",
            },
          ],
          name: "Lens_SimplePaymentRule_Untrusted",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "configure",
          outputs: [],
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
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "processJoining",
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
              name: "",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processRemoval",
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
              name: "primitive",
              type: "address",
            },
            {
              internalType: "bool",
              name: "isTrusted",
              type: "bool",
            },
          ],
          name: "setTrust",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    TokenGatedGroupRule: {
      address: "0x1B1e5CDfbF0f63aA540D36BFf3Ed16DB14fe4dF9",
      abi: [
        {
          inputs: [
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "configure",
          outputs: [],
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
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processJoining",
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
              name: "",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processRemoval",
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
      ],
    },
    FollowersOnlyPostRule: {
      address: "0xF39E951E830EeeA2aA4e1CD1c7588b0E4020603C",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "configure",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "rootPostId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processQuote",
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
              name: "rootPostId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processReply",
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
              name: "rootPostId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processRepost",
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
    CharsetUsernameRule: {
      address: "0x9369872362b2555cc4438808DfC86C97cB927087",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "permissionId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
          ],
          name: "Lens_PermissionId_Available",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "configure",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "string",
              name: "",
              type: "string",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processAssigning",
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
              name: "account",
              type: "address",
            },
            {
              internalType: "string",
              name: "username",
              type: "string",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processCreation",
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
    LengthUsernameRule: {
      address: "0xbb36492Ee8d3303AdA36536E7b4f6AF6c34614D3",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "permissionId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
          ],
          name: "Lens_PermissionId_Available",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "configure",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "string",
              name: "",
              type: "string",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processAssigning",
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
              name: "account",
              type: "address",
            },
            {
              internalType: "string",
              name: "username",
              type: "string",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processCreation",
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
    SimplePaymentUsernameRule: {
      address: "0x7d499975049740a23A72EBd00E579D88004591da",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "permissionId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
          ],
          name: "Lens_PermissionId_Available",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "payer",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "trusted",
              type: "address",
            },
          ],
          name: "Lens_SimplePaymentRule_Trusted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "payer",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "untrusted",
              type: "address",
            },
          ],
          name: "Lens_SimplePaymentRule_Untrusted",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "configure",
          outputs: [],
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
              internalType: "string",
              name: "",
              type: "string",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "processAssigning",
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
              name: "account",
              type: "address",
            },
            {
              internalType: "string",
              name: "",
              type: "string",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "processCreation",
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
              name: "primitive",
              type: "address",
            },
            {
              internalType: "bool",
              name: "isTrusted",
              type: "bool",
            },
          ],
          name: "setTrust",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    TokenGatedUsernameRule: {
      address: "0xe1d46F3fac690FaA6b2C2a630a49ac9Eb7D900ec",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "permissionId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
          ],
          name: "Lens_PermissionId_Available",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "configure",
          outputs: [],
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
              internalType: "string",
              name: "",
              type: "string",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processAssigning",
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
              name: "account",
              type: "address",
            },
            {
              internalType: "string",
              name: "",
              type: "string",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "processCreation",
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
    GlobalGraph: {
      address: "0x9e7085a6cc3A02F6026817997cE44B26Ba4Df557",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
            {
              internalType: "contract IAccessControl",
              name: "accessControl",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "accessControl",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "accessControlType",
              type: "bytes32",
            },
          ],
          name: "Lens_AccessControlAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "accessControl",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "accessControlType",
              type: "bytes32",
            },
          ],
          name: "Lens_AccessControlUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "string",
              name: "indexedContractType",
              type: "string",
            },
            {
              indexed: true,
              internalType: "string",
              name: "indexedFlavour",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "contractType",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "flavour",
              type: "string",
            },
          ],
          name: "Lens_Contract_Deployed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "value",
              type: "bytes",
            },
            {
              indexed: true,
              internalType: "bytes",
              name: "valueIndexed",
              type: "bytes",
            },
          ],
          name: "Lens_Graph_ExtraDataAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
          ],
          name: "Lens_Graph_ExtraDataRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "value",
              type: "bytes",
            },
            {
              indexed: true,
              internalType: "bytes",
              name: "valueIndexed",
              type: "bytes",
            },
          ],
          name: "Lens_Graph_ExtraDataUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "ruleAddress",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "configData",
                  type: "bytes",
                },
                {
                  internalType: "bool",
                  name: "isRequired",
                  type: "bool",
                },
              ],
              indexed: false,
              internalType: "struct RuleConfiguration",
              name: "ruleConfiguration",
              type: "tuple",
            },
          ],
          name: "Lens_Graph_Follow_RuleAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "ruleAddress",
              type: "address",
            },
          ],
          name: "Lens_Graph_Follow_RuleRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "ruleAddress",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "configData",
                  type: "bytes",
                },
                {
                  internalType: "bool",
                  name: "isRequired",
                  type: "bool",
                },
              ],
              indexed: false,
              internalType: "struct RuleConfiguration",
              name: "ruleConfiguration",
              type: "tuple",
            },
          ],
          name: "Lens_Graph_Follow_RuleUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "followerAccount",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "accountToFollow",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "followId",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleExecutionData",
              name: "graphRulesData",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleExecutionData",
              name: "followRulesData",
              type: "tuple",
            },
            {
              indexed: false,
              internalType: "address",
              name: "source",
              type: "address",
            },
          ],
          name: "Lens_Graph_Followed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_Graph_MetadataURISet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "ruleAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "configData",
              type: "bytes",
            },
            {
              indexed: true,
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
          ],
          name: "Lens_Graph_RuleAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "ruleAddress",
              type: "address",
            },
          ],
          name: "Lens_Graph_RuleRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "ruleAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "configData",
              type: "bytes",
            },
            {
              indexed: true,
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
          ],
          name: "Lens_Graph_RuleUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "followerAccount",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "accountToUnfollow",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "followId",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleExecutionData",
              name: "graphRulesData",
              type: "tuple",
            },
            {
              indexed: false,
              internalType: "address",
              name: "source",
              type: "address",
            },
          ],
          name: "Lens_Graph_Unfollowed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "permissionId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
          ],
          name: "Lens_PermissionId_Available",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "ruleChanges",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              internalType: "struct RuleExecutionData",
              name: "graphRulesData",
              type: "tuple",
            },
          ],
          name: "changeFollowRules",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "ruleChanges",
              type: "tuple[]",
            },
          ],
          name: "changeGraphRules",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "followerAccount",
              type: "address",
            },
            {
              internalType: "address",
              name: "accountToFollow",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "followId",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              internalType: "struct RuleExecutionData",
              name: "graphRulesData",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              internalType: "struct RuleExecutionData",
              name: "followRulesData",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              internalType: "struct SourceStamp",
              name: "sourceStamp",
              type: "tuple",
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
          inputs: [],
          name: "getAccessControl",
          outputs: [
            {
              internalType: "contract IAccessControl",
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
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
          ],
          name: "getExtraData",
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
              internalType: "address",
              name: "followerAccount",
              type: "address",
            },
            {
              internalType: "address",
              name: "targetAccount",
              type: "address",
            },
          ],
          name: "getFollow",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "timestamp",
                  type: "uint256",
                },
              ],
              internalType: "struct Follow",
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
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
          ],
          name: "getFollowRules",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
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
              name: "followId",
              type: "uint256",
            },
          ],
          name: "getFollowerById",
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
              name: "account",
              type: "address",
            },
          ],
          name: "getFollowersCount",
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
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
          ],
          name: "getGraphRules",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getMetadataURI",
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
              name: "followerAccount",
              type: "address",
            },
            {
              internalType: "address",
              name: "targetAccount",
              type: "address",
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
              internalType: "contract IAccessControl",
              name: "newAccessControl",
              type: "address",
            },
          ],
          name: "setAccessControl",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "key",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "value",
                  type: "bytes",
                },
              ],
              internalType: "struct DataElement[]",
              name: "extraDataToSet",
              type: "tuple[]",
            },
          ],
          name: "setExtraData",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "setMetadataURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "followerAccount",
              type: "address",
            },
            {
              internalType: "address",
              name: "accountToUnfollow",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              internalType: "struct RuleExecutionData",
              name: "graphRulesData",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              internalType: "struct SourceStamp",
              name: "sourceStamp",
              type: "tuple",
            },
          ],
          name: "unfollow",
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
      ],
    },
    GlobalFeed: {
      address: "0x83C8D9e96Da13aaD12E068F48C639C7671D2a5C7",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
            {
              internalType: "contract IAccessControl",
              name: "accessControl",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "accessControl",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "accessControlType",
              type: "bytes32",
            },
          ],
          name: "Lens_AccessControlAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "accessControl",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "accessControlType",
              type: "bytes32",
            },
          ],
          name: "Lens_AccessControlUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "string",
              name: "indexedContractType",
              type: "string",
            },
            {
              indexed: true,
              internalType: "string",
              name: "indexedFlavour",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "contractType",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "flavour",
              type: "string",
            },
          ],
          name: "Lens_Contract_Deployed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "value",
              type: "bytes",
            },
            {
              indexed: true,
              internalType: "bytes",
              name: "valueIndexed",
              type: "bytes",
            },
          ],
          name: "Lens_Feed_ExtraDataAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
          ],
          name: "Lens_Feed_ExtraDataRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "value",
              type: "bytes",
            },
            {
              indexed: true,
              internalType: "bytes",
              name: "valueIndexed",
              type: "bytes",
            },
          ],
          name: "Lens_Feed_ExtraDataUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_Feed_MetadataURISet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "author",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "localSequentialId",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "author",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "repostedPostId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "quotedPostId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "repliedPostId",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration[]",
                  name: "rules",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "feedRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "repostedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "quotedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "repliedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "key",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "value",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct DataElement[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct CreatePostParams",
              name: "postParams",
              type: "tuple",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "rootPostId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "source",
              type: "address",
            },
          ],
          name: "Lens_Feed_PostCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "author",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleExecutionData",
              name: "feedRulesData",
              type: "tuple",
            },
            {
              indexed: false,
              internalType: "address",
              name: "source",
              type: "address",
            },
          ],
          name: "Lens_Feed_PostDeleted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "author",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "key",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "value",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct DataElement[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct EditPostParams",
              name: "newPostParams",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleExecutionData",
              name: "feedRulesData",
              type: "tuple",
            },
            {
              indexed: false,
              internalType: "address",
              name: "source",
              type: "address",
            },
          ],
          name: "Lens_Feed_PostEdited",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "value",
              type: "bytes",
            },
            {
              indexed: true,
              internalType: "bytes",
              name: "valueIndexed",
              type: "bytes",
            },
          ],
          name: "Lens_Feed_Post_ExtraDataAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
          ],
          name: "Lens_Feed_Post_ExtraDataRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "value",
              type: "bytes",
            },
            {
              indexed: true,
              internalType: "bytes",
              name: "valueIndexed",
              type: "bytes",
            },
          ],
          name: "Lens_Feed_Post_ExtraDataUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "author",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "ruleAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "configData",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
          ],
          name: "Lens_Feed_Post_RuleAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "author",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "ruleAddress",
              type: "address",
            },
          ],
          name: "Lens_Feed_Post_RuleRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "author",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "ruleAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "configData",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
          ],
          name: "Lens_Feed_Post_RuleUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "ruleAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "configData",
              type: "bytes",
            },
            {
              indexed: true,
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
          ],
          name: "Lens_Feed_RuleAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "ruleAddress",
              type: "address",
            },
          ],
          name: "Lens_Feed_RuleRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "ruleAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "configData",
              type: "bytes",
            },
            {
              indexed: true,
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
          ],
          name: "Lens_Feed_RuleUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "permissionId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
          ],
          name: "Lens_PermissionId_Available",
          type: "event",
        },
        {
          inputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "ruleChanges",
              type: "tuple[]",
            },
          ],
          name: "changeFeedRules",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "ruleChanges",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              internalType: "struct RuleExecutionData",
              name: "feedRulesData",
              type: "tuple",
            },
          ],
          name: "changePostRules",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "author",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "repostedPostId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "quotedPostId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "repliedPostId",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration[]",
                  name: "rules",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "feedRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "repostedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "quotedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes[]",
                      name: "dataForRequiredRules",
                      type: "bytes[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "dataForAnyOfRules",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct RuleExecutionData",
                  name: "repliedPostRulesData",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "key",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "value",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct DataElement[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct CreatePostParams",
              name: "createPostParams",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              internalType: "struct SourceStamp",
              name: "sourceStamp",
              type: "tuple",
            },
          ],
          name: "createPost",
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
              name: "postId",
              type: "uint256",
            },
            {
              internalType: "bytes32[]",
              name: "extraDataKeysToDelete",
              type: "bytes32[]",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              internalType: "struct RuleExecutionData",
              name: "feedRulesData",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              internalType: "struct SourceStamp",
              name: "sourceStamp",
              type: "tuple",
            },
          ],
          name: "deletePost",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "key",
                      type: "bytes32",
                    },
                    {
                      internalType: "bytes",
                      name: "value",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct DataElement[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct EditPostParams",
              name: "newPostParams",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              internalType: "struct RuleExecutionData",
              name: "editPostFeedRulesData",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              internalType: "struct SourceStamp",
              name: "sourceStamp",
              type: "tuple",
            },
          ],
          name: "editPost",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getAccessControl",
          outputs: [
            {
              internalType: "contract IAccessControl",
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
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
          ],
          name: "getExtraData",
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
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
          ],
          name: "getFeedRules",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getMetadataURI",
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
              name: "postId",
              type: "uint256",
            },
          ],
          name: "getPost",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "author",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "localSequentialId",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "contentURI",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "rootPostId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "repostedPostId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "quotedPostId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "repliedPostId",
                  type: "uint256",
                },
                {
                  internalType: "address[]",
                  name: "requiredRules",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "anyOfRules",
                  type: "address[]",
                },
                {
                  internalType: "uint80",
                  name: "creationTimestamp",
                  type: "uint80",
                },
                {
                  internalType: "address",
                  name: "creationSource",
                  type: "address",
                },
                {
                  internalType: "uint80",
                  name: "lastUpdatedTimestamp",
                  type: "uint80",
                },
                {
                  internalType: "address",
                  name: "lastUpdateSource",
                  type: "address",
                },
              ],
              internalType: "struct Post",
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
              name: "postId",
              type: "uint256",
            },
          ],
          name: "getPostAuthor",
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
          name: "getPostCount",
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
              name: "postId",
              type: "uint256",
            },
            {
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
          ],
          name: "getPostExtraData",
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
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
          ],
          name: "getPostRules",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IAccessControl",
              name: "newAccessControl",
              type: "address",
            },
          ],
          name: "setAccessControl",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "key",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "value",
                  type: "bytes",
                },
              ],
              internalType: "struct DataElement[]",
              name: "extraDataToSet",
              type: "tuple[]",
            },
          ],
          name: "setExtraData",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "setMetadataURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    LensUsername: {
      address: "0x6Cc71E78e25eBF6A2525CadC1fc628B42AE4138f",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "namespace",
              type: "string",
            },
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
            {
              internalType: "contract IAccessControl",
              name: "accessControl",
              type: "address",
            },
            {
              internalType: "string",
              name: "nftName",
              type: "string",
            },
            {
              internalType: "string",
              name: "nftSymbol",
              type: "string",
            },
            {
              internalType: "contract ITokenURIProvider",
              name: "tokenURIProvider",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
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
              name: "_fromTokenId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "_toTokenId",
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
              name: "accessControl",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "accessControlType",
              type: "bytes32",
            },
          ],
          name: "Lens_AccessControlAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "accessControl",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "accessControlType",
              type: "bytes32",
            },
          ],
          name: "Lens_AccessControlUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "string",
              name: "indexedContractType",
              type: "string",
            },
            {
              indexed: true,
              internalType: "string",
              name: "indexedFlavour",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "contractType",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "flavour",
              type: "string",
            },
          ],
          name: "Lens_Contract_Deployed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "tokenURIProvider",
              type: "address",
            },
          ],
          name: "Lens_ERC721_TokenURIProviderSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "permissionId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
          ],
          name: "Lens_PermissionId_Available",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "username",
              type: "string",
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleExecutionData",
              name: "data",
              type: "tuple",
            },
            {
              indexed: false,
              internalType: "address",
              name: "source",
              type: "address",
            },
          ],
          name: "Lens_Username_Assigned",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "username",
              type: "string",
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleExecutionData",
              name: "data",
              type: "tuple",
            },
            {
              indexed: false,
              internalType: "address",
              name: "source",
              type: "address",
            },
          ],
          name: "Lens_Username_Created",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "value",
              type: "bytes",
            },
            {
              indexed: true,
              internalType: "bytes",
              name: "valueIndexed",
              type: "bytes",
            },
          ],
          name: "Lens_Username_ExtraDataAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
          ],
          name: "Lens_Username_ExtraDataRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "value",
              type: "bytes",
            },
            {
              indexed: true,
              internalType: "bytes",
              name: "valueIndexed",
              type: "bytes",
            },
          ],
          name: "Lens_Username_ExtraDataUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_Username_MetadataURISet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "username",
              type: "string",
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "source",
              type: "address",
            },
          ],
          name: "Lens_Username_Removed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "ruleAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "configData",
              type: "bytes",
            },
            {
              indexed: true,
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
          ],
          name: "Lens_Username_RuleAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "ruleAddress",
              type: "address",
            },
          ],
          name: "Lens_Username_RuleRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "ruleAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "configData",
              type: "bytes",
            },
            {
              indexed: true,
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
          ],
          name: "Lens_Username_RuleUpdated",
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
          name: "Lens_Username_Transfer",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "username",
              type: "string",
            },
            {
              indexed: true,
              internalType: "address",
              name: "previousAccount",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "source",
              type: "address",
            },
          ],
          name: "Lens_Username_Unassigned",
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
          inputs: [
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
          ],
          name: "accountOf",
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
              name: "account",
              type: "address",
            },
            {
              internalType: "string",
              name: "username",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              internalType: "struct RuleExecutionData",
              name: "data",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              internalType: "struct SourceStamp",
              name: "sourceStamp",
              type: "tuple",
            },
          ],
          name: "assignUsername",
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
              components: [
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes",
                      name: "configData",
                      type: "bytes",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleConfiguration",
                  name: "configuration",
                  type: "tuple",
                },
                {
                  internalType: "enum RuleOperation",
                  name: "operation",
                  type: "uint8",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "ruleChanges",
              type: "tuple[]",
            },
          ],
          name: "changeUsernameRules",
          outputs: [],
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
              internalType: "string",
              name: "username",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              internalType: "struct RuleExecutionData",
              name: "createData",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              internalType: "struct RuleExecutionData",
              name: "assignData",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              internalType: "struct SourceStamp",
              name: "sourceStamp",
              type: "tuple",
            },
          ],
          name: "createAndAssignUsername",
          outputs: [],
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
              internalType: "string",
              name: "username",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "bytes[]",
                  name: "dataForRequiredRules",
                  type: "bytes[]",
                },
                {
                  internalType: "bytes[]",
                  name: "dataForAnyOfRules",
                  type: "bytes[]",
                },
              ],
              internalType: "struct RuleExecutionData",
              name: "data",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              internalType: "struct SourceStamp",
              name: "sourceStamp",
              type: "tuple",
            },
          ],
          name: "createUsername",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getAccessControl",
          outputs: [
            {
              internalType: "contract IAccessControl",
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
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
          ],
          name: "getExtraData",
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
          name: "getMetadataURI",
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
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
          ],
          name: "getUsernameRules",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
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
              internalType: "string",
              name: "username",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              internalType: "struct SourceStamp",
              name: "sourceStamp",
              type: "tuple",
            },
          ],
          name: "removeUsername",
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
              internalType: "contract IAccessControl",
              name: "newAccessControl",
              type: "address",
            },
          ],
          name: "setAccessControl",
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
              components: [
                {
                  internalType: "bytes32",
                  name: "key",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "value",
                  type: "bytes",
                },
              ],
              internalType: "struct DataElement[]",
              name: "extraDataToSet",
              type: "tuple[]",
            },
          ],
          name: "setExtraData",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "setMetadataURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ITokenURIProvider",
              name: "tokenURIProvider",
              type: "address",
            },
          ],
          name: "setTokenURIProvider",
          outputs: [],
          stateMutability: "nonpayable",
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
              internalType: "string",
              name: "username",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              internalType: "struct SourceStamp",
              name: "sourceStamp",
              type: "tuple",
            },
          ],
          name: "unassignUsername",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "user",
              type: "address",
            },
          ],
          name: "usernameOf",
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
    TestnetApp: {
      address: "0xe5439696f4057aF073c0FB2dc6e5e755392922e1",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
            {
              internalType: "bool",
              name: "isSourceStampVerificationEnabled",
              type: "bool",
            },
            {
              internalType: "contract IAccessControl",
              name: "accessControl",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "graph",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "feeds",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "username",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "groups",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "defaultFeed",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "signers",
                  type: "address[]",
                },
                {
                  internalType: "address",
                  name: "paymaster",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "treasury",
                  type: "address",
                },
              ],
              internalType: "struct AppInitialProperties",
              name: "initialProps",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "key",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "value",
                  type: "bytes",
                },
              ],
              internalType: "struct DataElement[]",
              name: "extraData",
              type: "tuple[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "accessControl",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "accessControlType",
              type: "bytes32",
            },
          ],
          name: "Lens_AccessControlAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "accessControl",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "accessControlType",
              type: "bytes32",
            },
          ],
          name: "Lens_AccessControlUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "feed",
              type: "address",
            },
          ],
          name: "Lens_App_DefaultFeedSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "value",
              type: "bytes",
            },
            {
              indexed: true,
              internalType: "bytes",
              name: "valueIndexed",
              type: "bytes",
            },
          ],
          name: "Lens_App_ExtraDataAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
          ],
          name: "Lens_App_ExtraDataRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "value",
              type: "bytes",
            },
            {
              indexed: true,
              internalType: "bytes",
              name: "valueIndexed",
              type: "bytes",
            },
          ],
          name: "Lens_App_ExtraDataUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "feed",
              type: "address",
            },
          ],
          name: "Lens_App_FeedAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "feed",
              type: "address",
            },
          ],
          name: "Lens_App_FeedRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "graph",
              type: "address",
            },
          ],
          name: "Lens_App_GraphAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "graph",
              type: "address",
            },
          ],
          name: "Lens_App_GraphRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "group",
              type: "address",
            },
          ],
          name: "Lens_App_GroupAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "group",
              type: "address",
            },
          ],
          name: "Lens_App_GroupRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_App_MetadataURISet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "paymaster",
              type: "address",
            },
          ],
          name: "Lens_App_PaymasterAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "paymaster",
              type: "address",
            },
          ],
          name: "Lens_App_PaymasterRemoved",
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
          ],
          name: "Lens_App_SignerAdded",
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
          ],
          name: "Lens_App_SignerRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bool",
              name: "isEnabled",
              type: "bool",
            },
          ],
          name: "Lens_App_SourceStampVerificationSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "treasury",
              type: "address",
            },
          ],
          name: "Lens_App_TreasurySet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "username",
              type: "address",
            },
          ],
          name: "Lens_App_UsernameAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "username",
              type: "address",
            },
          ],
          name: "Lens_App_UsernameRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "string",
              name: "indexedContractType",
              type: "string",
            },
            {
              indexed: true,
              internalType: "string",
              name: "indexedFlavour",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "contractType",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "flavour",
              type: "string",
            },
          ],
          name: "Lens_Contract_Deployed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "permissionId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
          ],
          name: "Lens_PermissionId_Available",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address[]",
              name: "feeds",
              type: "address[]",
            },
          ],
          name: "addFeeds",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address[]",
              name: "groups",
              type: "address[]",
            },
          ],
          name: "addGroups",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address[]",
              name: "signers",
              type: "address[]",
            },
          ],
          name: "addSigners",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getAccessControl",
          outputs: [
            {
              internalType: "contract IAccessControl",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getDefaultFeed",
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
          name: "getDefaultGraph",
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
          name: "getDefaultGroup",
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
          name: "getDefaultPaymaster",
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
          name: "getDefaultUsername",
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
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
          ],
          name: "getExtraData",
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
          name: "getFeeds",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getGraphs",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getGroups",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getMetadataURI",
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
          name: "getPaymaster",
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
          name: "getSigners",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
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
          name: "getUsernames",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address[]",
              name: "feeds",
              type: "address[]",
            },
          ],
          name: "removeFeeds",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address[]",
              name: "groups",
              type: "address[]",
            },
          ],
          name: "removeGroups",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address[]",
              name: "signers",
              type: "address[]",
            },
          ],
          name: "removeSigners",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IAccessControl",
              name: "newAccessControl",
              type: "address",
            },
          ],
          name: "setAccessControl",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "feed",
              type: "address",
            },
          ],
          name: "setDefaultFeed",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "key",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "value",
                  type: "bytes",
                },
              ],
              internalType: "struct DataElement[]",
              name: "extraDataToSet",
              type: "tuple[]",
            },
          ],
          name: "setExtraData",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "graph",
              type: "address",
            },
          ],
          name: "setGraph",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "setMetadataURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "paymaster",
              type: "address",
            },
          ],
          name: "setPaymaster",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bool",
              name: "isEnabled",
              type: "bool",
            },
          ],
          name: "setSourceStampVerification",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "treasury",
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
              internalType: "address",
              name: "username",
              type: "address",
            },
          ],
          name: "setUsername",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "source",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "nonce",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "deadline",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "signature",
                  type: "bytes",
                },
              ],
              internalType: "struct SourceStamp",
              name: "sourceStamp",
              type: "tuple",
            },
          ],
          name: "validateSource",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
