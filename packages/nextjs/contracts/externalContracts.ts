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
    AccessControlFactory: {
      address: "0x3563B412FB6c08B75E9388DE9ef59f83d21FF2E5",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "lock",
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
      address: "0x41510037B8468f1351c23ccd1C2814b8Aacc3023",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "beacon",
              type: "address",
            },
            {
              internalType: "address",
              name: "lock",
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
              indexed: true,
              internalType: "address",
              name: "source",
              type: "address",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "extraData",
              type: "tuple[]",
            },
          ],
          name: "Lens_Account_Created",
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
                  internalType: "address",
                  name: "originalMsgSender",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "validator",
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
              internalType: "struct KeyValue[]",
              name: "extraData",
              type: "tuple[]",
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
      address: "0xABEB2d241712963D2449Cf3B696854c8bf4041c6",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "beacon",
              type: "address",
            },
            {
              internalType: "address",
              name: "lock",
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
              name: "app",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "metadataURI",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "extraData",
              type: "tuple[]",
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
              internalType: "address",
              name: "proxyAdminOwner",
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
                  name: "namespace",
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
              internalType: "struct KeyValue[]",
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
      address: "0xA970608f573Bc8688cB8C1FFD68bC957A4957B67",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "primitiveBeacon",
              type: "address",
            },
            {
              internalType: "address",
              name: "proxyAdminLock",
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
              internalType: "address",
              name: "proxyAdminOwner",
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
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "ruleChanges",
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
              internalType: "struct KeyValue[]",
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
      address: "0x39d74D1A46C3372E76AA05E92740eD2B23Af572D",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "primitiveBeacon",
              type: "address",
            },
            {
              internalType: "address",
              name: "proxyAdminLock",
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
              internalType: "address",
              name: "proxyAdminOwner",
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
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "ruleChanges",
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
              internalType: "struct KeyValue[]",
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
      address: "0xfaAC8b60a1c9D75D9b8DAC2D442FcF0dFeecB811",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "primitiveBeacon",
              type: "address",
            },
            {
              internalType: "address",
              name: "proxyAdminLock",
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
              internalType: "address",
              name: "proxyAdminOwner",
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
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "ruleChanges",
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
              internalType: "struct KeyValue[]",
              name: "extraData",
              type: "tuple[]",
            },
            {
              internalType: "address",
              name: "foundingMember",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "addFoundingMemberCustomParams",
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
    NamespaceFactory: {
      address: "0x67B907190C1cE21d3FFbF2C5cf88dAb871284f18",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "primitiveBeacon",
              type: "address",
            },
            {
              internalType: "address",
              name: "proxyAdminLock",
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
              name: "namespaceAddress",
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
          name: "Lens_NamespaceFactory_Deployment",
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
              internalType: "address",
              name: "proxyAdminOwner",
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
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "ruleChanges",
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
              internalType: "struct KeyValue[]",
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
          name: "deployNamespace",
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
      address: "0x4fC9F8E28141689c3983B453619Dd846a3A6234E",
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
              internalType: "contract NamespaceFactory",
              name: "namespaceFactory",
              type: "address",
            },
            {
              internalType: "address",
              name: "accountBlockingRule",
              type: "address",
            },
            {
              internalType: "address",
              name: "groupGatedFeedRule",
              type: "address",
            },
            {
              internalType: "address",
              name: "usernameSimpleCharsetRule",
              type: "address",
            },
            {
              internalType: "address",
              name: "banMemberGroupRule",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "DuplicatedValue",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "namespacePrimitiveAddress",
              type: "address",
            },
            {
              components: [
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
                      internalType: "address",
                      name: "originalMsgSender",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "validator",
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
                  internalType: "struct KeyValue[]",
                  name: "accountExtraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct CreateAccountParams",
              name: "accountParams",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "username",
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
                  internalType: "struct KeyValue[]",
                  name: "createUsernameCustomParams",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "configSalt",
                      type: "bytes32",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleProcessingParams[]",
                  name: "createUsernameRuleProcessingParams",
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
                  internalType: "struct KeyValue[]",
                  name: "assignUsernameCustomParams",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "configSalt",
                      type: "bytes32",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleProcessingParams[]",
                  name: "unassignAccountRuleProcessingParams",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "ruleAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "configSalt",
                      type: "bytes32",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleProcessingParams[]",
                  name: "assignRuleProcessingParams",
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
                  internalType: "struct KeyValue[]",
                  name: "usernameExtraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct CreateUsernameParams",
              name: "usernameParams",
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
              internalType: "string",
              name: "groupMetadataURI",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "groupRules",
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
              internalType: "struct KeyValue[]",
              name: "groupExtraData",
              type: "tuple[]",
            },
            {
              internalType: "address",
              name: "groupFoundingMember",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "groupAddFoundingMemberCustomParams",
              type: "tuple[]",
            },
            {
              internalType: "string",
              name: "feedMetadataURI",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "feedRules",
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
              internalType: "struct KeyValue[]",
              name: "feedExtraData",
              type: "tuple[]",
            },
          ],
          name: "createGroupWithFeed",
          outputs: [
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
                  internalType: "address",
                  name: "originalMsgSender",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "validator",
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
              internalType: "struct KeyValue[]",
              name: "extraData",
              type: "tuple[]",
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
                  name: "namespace",
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
              internalType: "struct KeyValue[]",
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
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
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
              internalType: "struct KeyValue[]",
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
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
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
              internalType: "struct KeyValue[]",
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
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
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
              internalType: "struct KeyValue[]",
              name: "extraData",
              type: "tuple[]",
            },
            {
              internalType: "address",
              name: "foundingMember",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "addFoundingMemberCustomParams",
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
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
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
              internalType: "struct KeyValue[]",
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
          name: "deployNamespace",
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
          inputs: [],
          name: "getFactories",
          outputs: [
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
          name: "getRules",
          outputs: [
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
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getTemporaryAccessControl",
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
      ],
    },
    GlobalFeed: {
      address: "0x82365f8DF6599b3444D2754bDb2317bdDc357c3B",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AccessDenied",
          type: "error",
        },
        {
          inputs: [],
          name: "AllAnyOfRulesReverted",
          type: "error",
        },
        {
          inputs: [],
          name: "AlreadyInitialized",
          type: "error",
        },
        {
          inputs: [],
          name: "CannotHaveRules",
          type: "error",
        },
        {
          inputs: [],
          name: "ConfigureCallReverted",
          type: "error",
        },
        {
          inputs: [],
          name: "DoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidConfigSalt",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "LimitReached",
          type: "error",
        },
        {
          inputs: [],
          name: "NotAContract",
          type: "error",
        },
        {
          inputs: [],
          name: "RedundantStateChange",
          type: "error",
        },
        {
          inputs: [],
          name: "RequiredRuleReverted",
          type: "error",
        },
        {
          inputs: [],
          name: "RuleNotConfigured",
          type: "error",
        },
        {
          inputs: [],
          name: "SelectorEnabledForDifferentRuleType",
          type: "error",
        },
        {
          inputs: [],
          name: "SingleAnyOfRule",
          type: "error",
        },
        {
          inputs: [],
          name: "UnexpectedValue",
          type: "error",
        },
        {
          inputs: [],
          name: "UnsupportedSelector",
          type: "error",
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
              name: "addressScope",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "entityId",
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
          ],
          name: "Lens_ExtraStorageSet",
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
              indexed: false,
              internalType: "uint256",
              name: "localSequentialId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "rootPostId",
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
                      internalType: "bytes32",
                      name: "configSalt",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "configure",
                          type: "bool",
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
                          internalType: "struct KeyValue[]",
                          name: "ruleParams",
                          type: "tuple[]",
                        },
                      ],
                      internalType: "struct RuleConfigurationChange",
                      name: "configurationChanges",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes4",
                          name: "ruleSelector",
                          type: "bytes4",
                        },
                        {
                          internalType: "bool",
                          name: "isRequired",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "enabled",
                          type: "bool",
                        },
                      ],
                      internalType: "struct RuleSelectorChange[]",
                      name: "selectorChanges",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleChange[]",
                  name: "ruleChanges",
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
                  internalType: "struct KeyValue[]",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "customParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              name: "feedRulesParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              name: "rootPostRulesParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              name: "quotedPostRulesParams",
              type: "tuple[]",
            },
            {
              indexed: true,
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "customParams",
              type: "tuple[]",
            },
            {
              indexed: true,
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
                  internalType: "struct KeyValue[]",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "customParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              name: "feedRulesParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              name: "rootPostRulesParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              name: "quotedPostRulesParams",
              type: "tuple[]",
            },
            {
              indexed: true,
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
              indexed: false,
              internalType: "address",
              name: "author",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "configParams",
              type: "tuple[]",
            },
          ],
          name: "Lens_Feed_Post_RuleConfigured",
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
              indexed: false,
              internalType: "address",
              name: "author",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "configParams",
              type: "tuple[]",
            },
          ],
          name: "Lens_Feed_Post_RuleReconfigured",
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
              indexed: false,
              internalType: "address",
              name: "author",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "ruleSelector",
              type: "bytes4",
            },
          ],
          name: "Lens_Feed_Post_RuleSelectorDisabled",
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
              indexed: false,
              internalType: "address",
              name: "author",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "ruleSelector",
              type: "bytes4",
            },
          ],
          name: "Lens_Feed_Post_RuleSelectorEnabled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "configParams",
              type: "tuple[]",
            },
          ],
          name: "Lens_Feed_RuleConfigured",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "configParams",
              type: "tuple[]",
            },
          ],
          name: "Lens_Feed_RuleReconfigured",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "ruleSelector",
              type: "bytes4",
            },
          ],
          name: "Lens_Feed_RuleSelectorDisabled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "ruleSelector",
              type: "bytes4",
            },
          ],
          name: "Lens_Feed_RuleSelectorEnabled",
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
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
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
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "ruleChanges",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "feedRulesParams",
              type: "tuple[]",
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
                      internalType: "bytes32",
                      name: "configSalt",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "configure",
                          type: "bool",
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
                          internalType: "struct KeyValue[]",
                          name: "ruleParams",
                          type: "tuple[]",
                        },
                      ],
                      internalType: "struct RuleConfigurationChange",
                      name: "configurationChanges",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes4",
                          name: "ruleSelector",
                          type: "bytes4",
                        },
                        {
                          internalType: "bool",
                          name: "isRequired",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "enabled",
                          type: "bool",
                        },
                      ],
                      internalType: "struct RuleSelectorChange[]",
                      name: "selectorChanges",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleChange[]",
                  name: "ruleChanges",
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
                  internalType: "struct KeyValue[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct CreatePostParams",
              name: "postParams",
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
              internalType: "struct KeyValue[]",
              name: "customParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "feedRulesParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "rootPostRulesParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "quotedPostRulesParams",
              type: "tuple[]",
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
              internalType: "struct KeyValue[]",
              name: "customParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "feedRulesParams",
              type: "tuple[]",
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
                  internalType: "struct KeyValue[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct EditPostParams",
              name: "postParams",
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
              internalType: "struct KeyValue[]",
              name: "customParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "feedRulesParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "rootPostRulesParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "quotedPostRulesParams",
              type: "tuple[]",
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
              internalType: "uint256",
              name: "postId",
              type: "uint256",
            },
          ],
          name: "getAuthorPostSequentialId",
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
              internalType: "bytes4",
              name: "ruleSelector",
              type: "bytes4",
            },
            {
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
          ],
          name: "getFeedRules",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
              ],
              internalType: "struct Rule[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "source",
              type: "address",
            },
          ],
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
              name: "author",
              type: "address",
            },
          ],
          name: "getNextPostId",
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
                  name: "authorPostSequentialId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "postSequentialId",
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
                {
                  internalType: "bool",
                  name: "isDeleted",
                  type: "bool",
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
          inputs: [
            {
              internalType: "address",
              name: "author",
              type: "address",
            },
          ],
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
              internalType: "bytes4",
              name: "ruleSelector",
              type: "bytes4",
            },
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
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
              ],
              internalType: "struct Rule[]",
              name: "",
              type: "tuple[]",
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
          name: "getPostSequentialId",
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
          ],
          name: "getPostUnchecked",
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
                  name: "authorPostSequentialId",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "postSequentialId",
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
                {
                  internalType: "bool",
                  name: "isDeleted",
                  type: "bool",
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
          name: "initialize",
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
          ],
          name: "postExists",
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
              internalType: "struct KeyValue[]",
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
    GlobalGraph: {
      address: "0xb510545B32A0742E1D4D4899c2eC8b57c74e5FA5",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AccessDenied",
          type: "error",
        },
        {
          inputs: [],
          name: "ActionOnSelf",
          type: "error",
        },
        {
          inputs: [],
          name: "AllAnyOfRulesReverted",
          type: "error",
        },
        {
          inputs: [],
          name: "AlreadyExists",
          type: "error",
        },
        {
          inputs: [],
          name: "AlreadyInitialized",
          type: "error",
        },
        {
          inputs: [],
          name: "CannotFollowAgain",
          type: "error",
        },
        {
          inputs: [],
          name: "ConfigureCallReverted",
          type: "error",
        },
        {
          inputs: [],
          name: "DoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidConfigSalt",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "LimitReached",
          type: "error",
        },
        {
          inputs: [],
          name: "NotAContract",
          type: "error",
        },
        {
          inputs: [],
          name: "NotFollowing",
          type: "error",
        },
        {
          inputs: [],
          name: "RedundantStateChange",
          type: "error",
        },
        {
          inputs: [],
          name: "RequiredRuleReverted",
          type: "error",
        },
        {
          inputs: [],
          name: "RuleNotConfigured",
          type: "error",
        },
        {
          inputs: [],
          name: "SelectorEnabledForDifferentRuleType",
          type: "error",
        },
        {
          inputs: [],
          name: "SingleAnyOfRule",
          type: "error",
        },
        {
          inputs: [],
          name: "UnsupportedSelector",
          type: "error",
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
              name: "addressScope",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "entityId",
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
          ],
          name: "Lens_ExtraStorageSet",
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
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "configParams",
              type: "tuple[]",
            },
          ],
          name: "Lens_Graph_Follow_RuleConfigured",
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
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "configParams",
              type: "tuple[]",
            },
          ],
          name: "Lens_Graph_Follow_RuleReconfigured",
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
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "ruleSelector",
              type: "bytes4",
            },
          ],
          name: "Lens_Graph_Follow_RuleSelectorDisabled",
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
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "ruleSelector",
              type: "bytes4",
            },
          ],
          name: "Lens_Graph_Follow_RuleSelectorEnabled",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "customParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              name: "graphRulesProcessingParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              name: "followRulesProcessingParams",
              type: "tuple[]",
            },
            {
              indexed: true,
              internalType: "address",
              name: "source",
              type: "address",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "extraData",
              type: "tuple[]",
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
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "configParams",
              type: "tuple[]",
            },
          ],
          name: "Lens_Graph_RuleConfigured",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "configParams",
              type: "tuple[]",
            },
          ],
          name: "Lens_Graph_RuleReconfigured",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "ruleSelector",
              type: "bytes4",
            },
          ],
          name: "Lens_Graph_RuleSelectorDisabled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "ruleSelector",
              type: "bytes4",
            },
          ],
          name: "Lens_Graph_RuleSelectorEnabled",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "customParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              name: "graphRulesProcessingParams",
              type: "tuple[]",
            },
            {
              indexed: true,
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
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "ruleChanges",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "ruleChangesProcessingParams",
              type: "tuple[]",
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
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
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
              internalType: "struct KeyValue[]",
              name: "customParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "graphRulesProcessingParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "followRulesProcessingParams",
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
              internalType: "struct KeyValue[]",
              name: "extraData",
              type: "tuple[]",
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
              internalType: "bytes4",
              name: "ruleSelector",
              type: "bytes4",
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
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
              ],
              internalType: "struct Rule[]",
              name: "",
              type: "tuple[]",
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
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "getFollowingCount",
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
              internalType: "bytes4",
              name: "ruleSelector",
              type: "bytes4",
            },
            {
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
          ],
          name: "getGraphRules",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
              ],
              internalType: "struct Rule[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "source",
              type: "address",
            },
          ],
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
          name: "initialize",
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
              internalType: "struct KeyValue[]",
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
              internalType: "struct KeyValue[]",
              name: "customParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "graphRulesProcessingParams",
              type: "tuple[]",
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
    LensNamespace: {
      address: "0xaFe49B3faA3C65c4C56C6b768C9047E3bF4076Bb",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AccessDenied",
          type: "error",
        },
        {
          inputs: [],
          name: "AllAnyOfRulesReverted",
          type: "error",
        },
        {
          inputs: [],
          name: "AlreadyExists",
          type: "error",
        },
        {
          inputs: [],
          name: "AlreadyInitialized",
          type: "error",
        },
        {
          inputs: [],
          name: "ConfigureCallReverted",
          type: "error",
        },
        {
          inputs: [],
          name: "DoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidConfigSalt",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "LimitReached",
          type: "error",
        },
        {
          inputs: [],
          name: "NotAContract",
          type: "error",
        },
        {
          inputs: [],
          name: "RedundantStateChange",
          type: "error",
        },
        {
          inputs: [],
          name: "RequiredRuleReverted",
          type: "error",
        },
        {
          inputs: [],
          name: "RuleNotConfigured",
          type: "error",
        },
        {
          inputs: [],
          name: "SelectorEnabledForDifferentRuleType",
          type: "error",
        },
        {
          inputs: [],
          name: "SingleAnyOfRule",
          type: "error",
        },
        {
          inputs: [],
          name: "UnexpectedContractImpl",
          type: "error",
        },
        {
          inputs: [],
          name: "UnsupportedSelector",
          type: "error",
        },
        {
          inputs: [],
          name: "UsernameAssigned",
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
              internalType: "address",
              name: "addressScope",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "entityId",
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
          ],
          name: "Lens_ExtraStorageSet",
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
          name: "Lens_Namespace_ExtraDataAdded",
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
          name: "Lens_Namespace_ExtraDataRemoved",
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
          name: "Lens_Namespace_ExtraDataUpdated",
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
          name: "Lens_Namespace_MetadataURISet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "configParams",
              type: "tuple[]",
            },
          ],
          name: "Lens_Namespace_RuleConfigured",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "configParams",
              type: "tuple[]",
            },
          ],
          name: "Lens_Namespace_RuleReconfigured",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "ruleSelector",
              type: "bytes4",
            },
          ],
          name: "Lens_Namespace_RuleSelectorDisabled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "rule",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "ruleSelector",
              type: "bytes4",
            },
          ],
          name: "Lens_Namespace_RuleSelectorEnabled",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "customParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              name: "ruleProcessingParams",
              type: "tuple[]",
            },
            {
              indexed: true,
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "customParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              name: "ruleProcessingParams",
              type: "tuple[]",
            },
            {
              indexed: true,
              internalType: "address",
              name: "source",
              type: "address",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "extraData",
              type: "tuple[]",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "customParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              name: "ruleProcessingParams",
              type: "tuple[]",
            },
            {
              indexed: true,
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "customParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct RuleProcessingParams[]",
              name: "ruleProcessingParams",
              type: "tuple[]",
            },
            {
              indexed: true,
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
              name: "username",
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
              internalType: "struct KeyValue[]",
              name: "customParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "unassignAccountRuleProcessingParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "unassignUsernameRuleProcessingParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "assignRuleProcessingParams",
              type: "tuple[]",
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
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "ruleChanges",
              type: "tuple[]",
            },
          ],
          name: "changeNamespaceRules",
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
              internalType: "struct KeyValue[]",
              name: "customParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "unassigningProcessingParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "creationProcessingParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "assigningProcessingParams",
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
              internalType: "struct KeyValue[]",
              name: "extraData",
              type: "tuple[]",
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
              internalType: "struct KeyValue[]",
              name: "customParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "ruleProcessingParams",
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
              internalType: "struct KeyValue[]",
              name: "extraData",
              type: "tuple[]",
            },
          ],
          name: "createUsername",
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
          inputs: [
            {
              internalType: "address",
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "bytes4",
              name: "ruleSelector",
              type: "bytes4",
            },
            {
              internalType: "bool",
              name: "isRequired",
              type: "bool",
            },
          ],
          name: "getNamespaceRules",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
              ],
              internalType: "struct Rule[]",
              name: "",
              type: "tuple[]",
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
          ],
          name: "getTokenIdByUsername",
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
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "getUsernameByTokenId",
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
              internalType: "string",
              name: "username",
              type: "string",
            },
            {
              internalType: "bytes32",
              name: "key",
              type: "bytes32",
            },
          ],
          name: "getUsernameExtraData",
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
            {
              internalType: "contract IAccessControl",
              name: "accessControl",
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
              internalType: "struct KeyValue[]",
              name: "customParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "unassigningRuleProcessingParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "removalRuleProcessingParams",
              type: "tuple[]",
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
              internalType: "struct KeyValue[]",
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
          inputs: [
            {
              internalType: "string",
              name: "username",
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
              internalType: "struct KeyValue[]",
              name: "extraDataToSet",
              type: "tuple[]",
            },
          ],
          name: "setUsernameExtraData",
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
              internalType: "struct KeyValue[]",
              name: "customParams",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "ruleAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
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
                  internalType: "struct KeyValue[]",
                  name: "ruleParams",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleProcessingParams[]",
              name: "ruleProcessingParams",
              type: "tuple[]",
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
      address: "0xaC19aa2402b3AC3f9Fe471D4783EC68595432465",
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
              indexed: true,
              internalType: "address",
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
    ActionHub: {
      address: "0x8012d5bF7076097FA58642e1982ED7032A99bd26",
      abi: [
        {
          inputs: [],
          name: "Disabled",
          type: "error",
        },
        {
          inputs: [],
          name: "RedundantStateChange",
          type: "error",
        },
        {
          inputs: [],
          name: "UnexpectedContractImpl",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "action",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "msgSender",
              type: "address",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "returnData",
              type: "bytes",
            },
          ],
          name: "Lens_ActionHub_AccountAction_Configured",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "action",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "msgSender",
              type: "address",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "returnData",
              type: "bytes",
            },
          ],
          name: "Lens_ActionHub_AccountAction_Disabled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "action",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "msgSender",
              type: "address",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "returnData",
              type: "bytes",
            },
          ],
          name: "Lens_ActionHub_AccountAction_Enabled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "action",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "msgSender",
              type: "address",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "returnData",
              type: "bytes",
            },
          ],
          name: "Lens_ActionHub_AccountAction_Executed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "action",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "msgSender",
              type: "address",
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "returnData",
              type: "bytes",
            },
          ],
          name: "Lens_ActionHub_AccountAction_Reconfigured",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "action",
              type: "address",
            },
          ],
          name: "Lens_ActionHub_AccountAction_Universal",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "action",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "msgSender",
              type: "address",
            },
            {
              indexed: false,
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "returnData",
              type: "bytes",
            },
          ],
          name: "Lens_ActionHub_PostAction_Configured",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "action",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "msgSender",
              type: "address",
            },
            {
              indexed: false,
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "returnData",
              type: "bytes",
            },
          ],
          name: "Lens_ActionHub_PostAction_Disabled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "action",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "msgSender",
              type: "address",
            },
            {
              indexed: false,
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "returnData",
              type: "bytes",
            },
          ],
          name: "Lens_ActionHub_PostAction_Enabled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "action",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "msgSender",
              type: "address",
            },
            {
              indexed: false,
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "returnData",
              type: "bytes",
            },
          ],
          name: "Lens_ActionHub_PostAction_Executed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "action",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "msgSender",
              type: "address",
            },
            {
              indexed: false,
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
              indexed: false,
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "returnData",
              type: "bytes",
            },
          ],
          name: "Lens_ActionHub_PostAction_Reconfigured",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "action",
              type: "address",
            },
          ],
          name: "Lens_ActionHub_PostAction_Universal",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "action",
              type: "address",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
          ],
          name: "configureAccountAction",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "action",
              type: "address",
            },
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
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
          ],
          name: "configurePostAction",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "action",
              type: "address",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
          ],
          name: "disableAccountAction",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "action",
              type: "address",
            },
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
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
          ],
          name: "disablePostAction",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "action",
              type: "address",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
          ],
          name: "enableAccountAction",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "action",
              type: "address",
            },
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
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
          ],
          name: "enablePostAction",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "action",
              type: "address",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
          ],
          name: "executeAccountAction",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "action",
              type: "address",
            },
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
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
          ],
          name: "executePostAction",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "action",
              type: "address",
            },
          ],
          name: "signalUniversalAccountAction",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "action",
              type: "address",
            },
          ],
          name: "signalUniversalPostAction",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    OwnerAdminOnlyAccessControl: {
      address: "0x8A821ECFC9BA48e6fce1705b0a08D65D4490aB63",
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
              name: "lock",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "NotImplemented",
          type: "error",
        },
        {
          inputs: [],
          name: "RedundantStateChange",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "roleId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "permissionId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "granted",
              type: "bool",
            },
          ],
          name: "Lens_AccessControl_AccessAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "roleId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "permissionId",
              type: "uint256",
            },
          ],
          name: "Lens_AccessControl_AccessRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "roleId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "permissionId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "granted",
              type: "bool",
            },
          ],
          name: "Lens_AccessControl_AccessUpdated",
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
              internalType: "uint256",
              name: "roleId",
              type: "uint256",
            },
          ],
          name: "Lens_AccessControl_RoleGranted",
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
              internalType: "uint256",
              name: "roleId",
              type: "uint256",
            },
          ],
          name: "Lens_AccessControl_RoleRevoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
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
          name: "Lens_Ownable_OwnershipTransferred",
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
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "canChangeAccessControl",
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
              name: "roleId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "permissionId",
              type: "uint256",
            },
          ],
          name: "getAccess",
          outputs: [
            {
              internalType: "enum Access",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getType",
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
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "roleId",
              type: "uint256",
            },
          ],
          name: "grantRole",
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
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "permissionId",
              type: "uint256",
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
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "roleId",
              type: "uint256",
            },
          ],
          name: "hasRole",
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
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "roleId",
              type: "uint256",
            },
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "roleId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "permissionId",
              type: "uint256",
            },
            {
              internalType: "enum Access",
              name: "access",
              type: "uint8",
            },
          ],
          name: "setAccess",
          outputs: [],
          stateMutability: "nonpayable",
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
    TippingAccountAction: {
      address: "0x5a24f5aE0610fD6251b22EA8A900a8267B98261c",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "actionHub",
              type: "address",
            },
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "NotImplemented",
          type: "error",
        },
        {
          inputs: [],
          name: "RedundantStateChange",
          type: "error",
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
          name: "Lens_AccountAction_MetadataURISet",
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
          name: "Lens_Ownable_OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [],
          name: "PARAM__TIP_TOKEN",
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
              internalType: "address",
              name: "originalMsgSender",
              type: "address",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
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
              name: "originalMsgSender",
              type: "address",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
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
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "address",
              name: "originalMsgSender",
              type: "address",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "bool",
              name: "isDisabled",
              type: "bool",
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
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
          ],
          name: "setDisabled",
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
    TippingPostAction: {
      address: "0xc9eBaaa668f206Ad93FaAFE2ac3b7c70b145A752",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "actionHub",
              type: "address",
            },
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "NotImplemented",
          type: "error",
        },
        {
          inputs: [],
          name: "RedundantStateChange",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
          name: "Lens_PostAction_MetadataURISet",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "originalMsgSender",
              type: "address",
            },
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
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
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
              name: "originalMsgSender",
              type: "address",
            },
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
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
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
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "address",
              name: "originalMsgSender",
              type: "address",
            },
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
              internalType: "bool",
              name: "isDisabled",
              type: "bool",
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
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
          ],
          name: "setDisabled",
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
    SimpleCollectAction: {
      address: "0xB924221D3D3BF10dbC5D52dbCA993Cbd5914b040",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "actionHub",
              type: "address",
            },
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "Disabled",
          type: "error",
        },
        {
          inputs: [],
          name: "DoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "Expired",
          type: "error",
        },
        {
          inputs: [],
          name: "Immutable",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "LimitReached",
          type: "error",
        },
        {
          inputs: [],
          name: "NotFollowing",
          type: "error",
        },
        {
          inputs: [],
          name: "RedundantStateChange",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
          name: "Lens_PostAction_MetadataURISet",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "originalMsgSender",
              type: "address",
            },
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
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
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
              name: "originalMsgSender",
              type: "address",
            },
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
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
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
                  name: "token",
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
                {
                  internalType: "bool",
                  name: "isDisabled",
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
        {
          inputs: [
            {
              internalType: "address",
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "address",
              name: "originalMsgSender",
              type: "address",
            },
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
              internalType: "bool",
              name: "isDisabled",
              type: "bool",
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
              internalType: "struct KeyValue[]",
              name: "params",
              type: "tuple[]",
            },
          ],
          name: "setDisabled",
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
    GroupGatedGraphRule: {
      address: "0xcbfFaF319193879B86d17D95ef083CDa0FED8e9f",
      abi: [
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "NotAMember",
          type: "error",
        },
        {
          inputs: [],
          name: "NotImplemented",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_Rule_MetadataURISet",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
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
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processFollow",
          outputs: [],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "",
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
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processFollowRuleChanges",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
            {
              internalType: "address",
              name: "",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processUnfollow",
          outputs: [],
          stateMutability: "pure",
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
    TokenGatedGraphRule: {
      address: "0x7176b4Af355520ebbc7464371E915C44dF81c44E",
      abi: [
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "NotEnough",
          type: "error",
        },
        {
          inputs: [],
          name: "NotImplemented",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_Rule_MetadataURISet",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
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
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processFollow",
          outputs: [],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "",
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
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processFollowRuleChanges",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
            {
              internalType: "address",
              name: "",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processUnfollow",
          outputs: [],
          stateMutability: "pure",
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
    BanMemberGroupRule: {
      address: "0xD753A14fbD3930A375A2eDAaF0201365E40C56EC",
      abi: [
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AccessDenied",
          type: "error",
        },
        {
          inputs: [],
          name: "Banned",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "NotImplemented",
          type: "error",
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "bannedAccount",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "bannedBy",
              type: "address",
            },
          ],
          name: "Lens_BanMemberGroupRule_MemberBanned",
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "unbannedAccount",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "unbannedBy",
              type: "address",
            },
          ],
          name: "Lens_BanMemberGroupRule_MemberUnbanned",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_Rule_MetadataURISet",
          type: "event",
        },
        {
          inputs: [],
          name: "PARAM__ACCESS_CONTROL",
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
          name: "PARAM__BAN_MEMBER",
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
          name: "PID__BAN_MEMBER",
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
          name: "PID__UNBAN_MEMBER",
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
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
          ],
          name: "ban",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
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
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "originalMsgSender",
              type: "address",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
            },
          ],
          name: "processAddition",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processJoining",
          outputs: [],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processLeaving",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "originalMsgSender",
              type: "address",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
            },
          ],
          name: "processRemoval",
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
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
          ],
          name: "unban",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    MembershipApprovalGroupRule: {
      address: "0xa57fAa088042a9e88C582266C9f8c7e22c797272",
      abi: [
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AccessDenied",
          type: "error",
        },
        {
          inputs: [],
          name: "AlreadyExists",
          type: "error",
        },
        {
          inputs: [],
          name: "DoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "NotImplemented",
          type: "error",
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              name: "approvedBy",
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              name: "rejectedBy",
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Lens_ApprovalGroupRule_MembershipRequestCancelled",
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_Rule_MetadataURISet",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "group",
              type: "address",
            },
          ],
          name: "cancelMembershipRequest",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
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
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "originalMsgSender",
              type: "address",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processAddition",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processJoining",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processLeaving",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processRemoval",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
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
          ],
          name: "rejectMembershipRequest",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
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
    SimplePaymentGroupRule: {
      address: "0xF1362369a4170413048372B0FC960923917dfcCd",
      abi: [
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "NotImplemented",
          type: "error",
        },
        {
          inputs: [],
          name: "Untrusted",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_Rule_MetadataURISet",
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
              name: "trustedAddress",
              type: "address",
            },
          ],
          name: "Lens_Rule_Trusted",
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
              name: "untrustedAddress",
              type: "address",
            },
          ],
          name: "Lens_Rule_Untrusted",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
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
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processAddition",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
            },
          ],
          name: "processJoining",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processLeaving",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processRemoval",
          outputs: [],
          stateMutability: "pure",
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
              name: "target",
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
    TokenGatedGroupRule: {
      address: "0x4aB996DFB74439c2a71B3AB7ae2fe1948e72487e",
      abi: [
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "NotAllowed",
          type: "error",
        },
        {
          inputs: [],
          name: "NotEnough",
          type: "error",
        },
        {
          inputs: [],
          name: "NotImplemented",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_Rule_MetadataURISet",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
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
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processAddition",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processJoining",
          outputs: [],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processLeaving",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processRemoval",
          outputs: [],
          stateMutability: "view",
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
    GroupGatedFeedRule: {
      address: "0x7c0A99cf60eF5C59e8f51c03C8C246AA612Aa147",
      abi: [
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "NotAMember",
          type: "error",
        },
        {
          inputs: [],
          name: "NotImplemented",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
          name: "Lens_Rule_MetadataURISet",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
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
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
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
                      internalType: "bytes32",
                      name: "configSalt",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "configure",
                          type: "bool",
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
                          internalType: "struct KeyValue[]",
                          name: "ruleParams",
                          type: "tuple[]",
                        },
                      ],
                      internalType: "struct RuleConfigurationChange",
                      name: "configurationChanges",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes4",
                          name: "ruleSelector",
                          type: "bytes4",
                        },
                        {
                          internalType: "bool",
                          name: "isRequired",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "enabled",
                          type: "bool",
                        },
                      ],
                      internalType: "struct RuleSelectorChange[]",
                      name: "selectorChanges",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleChange[]",
                  name: "ruleChanges",
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
                  internalType: "struct KeyValue[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct CreatePostParams",
              name: "postParams",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processCreatePost",
          outputs: [],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processDeletePost",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
                  internalType: "struct KeyValue[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct EditPostParams",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processEditPost",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "",
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
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processPostRuleChanges",
          outputs: [],
          stateMutability: "pure",
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
    SimplePaymentFeedRule: {
      address: "0x1f17d734969912f504380f38657ec03d4226Eb8b",
      abi: [
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "NotImplemented",
          type: "error",
        },
        {
          inputs: [],
          name: "Untrusted",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_Rule_MetadataURISet",
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
              name: "trustedAddress",
              type: "address",
            },
          ],
          name: "Lens_Rule_Trusted",
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
              name: "untrustedAddress",
              type: "address",
            },
          ],
          name: "Lens_Rule_Untrusted",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
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
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
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
                      internalType: "bytes32",
                      name: "configSalt",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "configure",
                          type: "bool",
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
                          internalType: "struct KeyValue[]",
                          name: "ruleParams",
                          type: "tuple[]",
                        },
                      ],
                      internalType: "struct RuleConfigurationChange",
                      name: "configurationChanges",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes4",
                          name: "ruleSelector",
                          type: "bytes4",
                        },
                        {
                          internalType: "bool",
                          name: "isRequired",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "enabled",
                          type: "bool",
                        },
                      ],
                      internalType: "struct RuleSelectorChange[]",
                      name: "selectorChanges",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleChange[]",
                  name: "ruleChanges",
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
                  internalType: "struct KeyValue[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct CreatePostParams",
              name: "postParams",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
            },
          ],
          name: "processCreatePost",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processDeletePost",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
                  internalType: "struct KeyValue[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct EditPostParams",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processEditPost",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "",
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
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processPostRuleChanges",
          outputs: [],
          stateMutability: "pure",
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
              name: "target",
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
    TokenGatedFeedRule: {
      address: "0x0aeeFB16d44e382DFB1AcB320736969a8E11f055",
      abi: [
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "NotEnough",
          type: "error",
        },
        {
          inputs: [],
          name: "NotImplemented",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_Rule_MetadataURISet",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
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
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
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
                      internalType: "bytes32",
                      name: "configSalt",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "configure",
                          type: "bool",
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
                          internalType: "struct KeyValue[]",
                          name: "ruleParams",
                          type: "tuple[]",
                        },
                      ],
                      internalType: "struct RuleConfigurationChange",
                      name: "configurationChanges",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes4",
                          name: "ruleSelector",
                          type: "bytes4",
                        },
                        {
                          internalType: "bool",
                          name: "isRequired",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "enabled",
                          type: "bool",
                        },
                      ],
                      internalType: "struct RuleSelectorChange[]",
                      name: "selectorChanges",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleChange[]",
                  name: "ruleChanges",
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
                  internalType: "struct KeyValue[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct CreatePostParams",
              name: "postParams",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processCreatePost",
          outputs: [],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processDeletePost",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
                  internalType: "struct KeyValue[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct EditPostParams",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processEditPost",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "",
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
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processPostRuleChanges",
          outputs: [],
          stateMutability: "pure",
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
    UsernameSimpleCharsetNamespaceRule: {
      address: "0x28F9C04aF2f8fA538ae8166DA171a065fdaa189f",
      abi: [
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "CannotStartWithThat",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "NotAllowed",
          type: "error",
        },
        {
          inputs: [],
          name: "NotImplemented",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
          name: "Lens_Rule_MetadataURISet",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
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
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
            {
              internalType: "string",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processAssigning",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
            {
              internalType: "string",
              name: "username",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processCreation",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processRemoval",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
            {
              internalType: "string",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processUnassigning",
          outputs: [],
          stateMutability: "pure",
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
    UsernameLengthNamespaceRule: {
      address: "0xfBD7Fb3902409F18e8d87CCC603035f5A62644E5",
      abi: [
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "NotImplemented",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_Rule_MetadataURISet",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
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
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
            {
              internalType: "string",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processAssigning",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "originalMsgSender",
              type: "address",
            },
            {
              internalType: "address",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processCreation",
          outputs: [],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processRemoval",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
            {
              internalType: "string",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processUnassigning",
          outputs: [],
          stateMutability: "pure",
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
    UsernameReservedNamespaceRule: {
      address: "0x541a7BA31685278F26D3157b689031dAcFeDe98c",
      abi: [
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AccessDenied",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "NotImplemented",
          type: "error",
        },
        {
          inputs: [],
          name: "RedundantStateChange",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_Rule_MetadataURISet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "usernamePrimitive",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "string",
              name: "indexedUsername",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "username",
              type: "string",
            },
            {
              indexed: false,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "createdBy",
              type: "address",
            },
          ],
          name: "Lens_UsernameReservedNamespaceRule_ReservedUsernameCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "usernamePrimitive",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "string",
              name: "indexedUsername",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "username",
              type: "string",
            },
          ],
          name: "Lens_UsernameReservedNamespaceRule_UsernameReleased",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "usernamePrimitive",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "string",
              name: "indexedUsername",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "username",
              type: "string",
            },
          ],
          name: "Lens_UsernameReservedNamespaceRule_UsernameReserved",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
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
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
            {
              internalType: "string",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processAssigning",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "originalMsgSender",
              type: "address",
            },
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processCreation",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processRemoval",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
            {
              internalType: "string",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processUnassigning",
          outputs: [],
          stateMutability: "pure",
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
    TokenGatedNamespaceRule: {
      address: "0xC6bC5a9675f07EBE08f530A39A6B624953D16Ec9",
      abi: [
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "NotEnough",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_Rule_MetadataURISet",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
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
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "originalMsgSender",
              type: "address",
            },
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processAssigning",
          outputs: [],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "originalMsgSender",
              type: "address",
            },
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processCreation",
          outputs: [],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "originalMsgSender",
              type: "address",
            },
            {
              internalType: "string",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processRemoval",
          outputs: [],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "originalMsgSender",
              type: "address",
            },
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processUnassigning",
          outputs: [],
          stateMutability: "view",
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
    UsernamePricePerLengthNamespaceRule: {
      address: "0x2bc7c5152d3FBfc3b73aC134f295D5B43560F78c",
      abi: [
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "Untrusted",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
              name: "metadataURI",
              type: "string",
            },
          ],
          name: "Lens_Rule_MetadataURISet",
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
              name: "trustedAddress",
              type: "address",
            },
          ],
          name: "Lens_Rule_Trusted",
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
              name: "untrustedAddress",
              type: "address",
            },
          ],
          name: "Lens_Rule_Untrusted",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
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
              internalType: "struct KeyValue[]",
              name: "ruleConfigurationParams",
              type: "tuple[]",
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
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "originalMsgSender",
              type: "address",
            },
            {
              internalType: "address",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
            },
          ],
          name: "processAssigning",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "originalMsgSender",
              type: "address",
            },
            {
              internalType: "address",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
            },
          ],
          name: "processCreation",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "originalMsgSender",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
            },
          ],
          name: "processRemoval",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "originalMsgSender",
              type: "address",
            },
            {
              internalType: "address",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
            },
          ],
          name: "processUnassigning",
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
              name: "target",
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
    SimplePaymentFollowRule: {
      address: "0x49A6d6f6De72CC2d73AB5CeEbBBCBe51B1c73E7e",
      abi: [
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "NotFound",
          type: "error",
        },
        {
          inputs: [],
          name: "Untrusted",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
          name: "Lens_Rule_MetadataURISet",
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
              name: "trustedAddress",
              type: "address",
            },
          ],
          name: "Lens_Rule_Trusted",
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
              name: "untrustedAddress",
              type: "address",
            },
          ],
          name: "Lens_Rule_Untrusted",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
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
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
            },
          ],
          name: "processFollow",
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
              name: "target",
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
    TokenGatedFollowRule: {
      address: "0xC1fFf7f65C9964f77f442Ca2872f2c30ed73CD65",
      abi: [
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "NotEnough",
          type: "error",
        },
        {
          inputs: [],
          name: "NotFound",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
          name: "Lens_Rule_MetadataURISet",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
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
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processFollow",
          outputs: [],
          stateMutability: "view",
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
    FollowersOnlyPostRule: {
      address: "0xa891a162d62FF8D2Fe1D02d3344D94dED308996f",
      abi: [
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "NotFollowing",
          type: "error",
        },
        {
          inputs: [],
          name: "NotImplemented",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
          name: "Lens_Rule_MetadataURISet",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "postId",
              type: "uint256",
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
              internalType: "struct KeyValue[]",
              name: "ruleParams",
              type: "tuple[]",
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
              name: "source",
              type: "address",
            },
          ],
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
              internalType: "bytes32",
              name: "configSalt",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "rootPostId",
              type: "uint256",
            },
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
                      internalType: "bytes32",
                      name: "configSalt",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "configure",
                          type: "bool",
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
                          internalType: "struct KeyValue[]",
                          name: "ruleParams",
                          type: "tuple[]",
                        },
                      ],
                      internalType: "struct RuleConfigurationChange",
                      name: "configurationChanges",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes4",
                          name: "ruleSelector",
                          type: "bytes4",
                        },
                        {
                          internalType: "bool",
                          name: "isRequired",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "enabled",
                          type: "bool",
                        },
                      ],
                      internalType: "struct RuleSelectorChange[]",
                      name: "selectorChanges",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleChange[]",
                  name: "ruleChanges",
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
                  internalType: "struct KeyValue[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct CreatePostParams",
              name: "postParams",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processCreatePost",
          outputs: [],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
                  internalType: "struct KeyValue[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct EditPostParams",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processEditPost",
          outputs: [],
          stateMutability: "pure",
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
    AccountBlockingRule: {
      address: "0x3637bb04f706B7CC6937BFbDa6A7FE7AC85859Ca",
      abi: [
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
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "ActionOnSelf",
          type: "error",
        },
        {
          inputs: [],
          name: "Blocked",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "NotImplemented",
          type: "error",
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
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "Lens_AccountBlocking_AccountBlocked",
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
          name: "Lens_AccountBlocking_UserUnblocked",
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
          name: "Lens_Ownable_OwnershipTransferred",
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
          name: "Lens_Rule_MetadataURISet",
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
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "accountBlocks",
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
              internalType: "bytes32",
              name: "",
              type: "bytes32",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
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
          ],
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
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
                      internalType: "bytes32",
                      name: "configSalt",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "configure",
                          type: "bool",
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
                          internalType: "struct KeyValue[]",
                          name: "ruleParams",
                          type: "tuple[]",
                        },
                      ],
                      internalType: "struct RuleConfigurationChange",
                      name: "configurationChanges",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes4",
                          name: "ruleSelector",
                          type: "bytes4",
                        },
                        {
                          internalType: "bool",
                          name: "isRequired",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "enabled",
                          type: "bool",
                        },
                      ],
                      internalType: "struct RuleSelectorChange[]",
                      name: "selectorChanges",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleChange[]",
                  name: "ruleChanges",
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
                  internalType: "struct KeyValue[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct CreatePostParams",
              name: "postParams",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processCreatePost",
          outputs: [],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processDeletePost",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
                  internalType: "struct KeyValue[]",
                  name: "extraData",
                  type: "tuple[]",
                },
              ],
              internalType: "struct EditPostParams",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processEditPost",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processFollow",
          outputs: [],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "",
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
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processFollowRuleChanges",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "",
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
                  internalType: "bytes32",
                  name: "configSalt",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "configure",
                      type: "bool",
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
                      internalType: "struct KeyValue[]",
                      name: "ruleParams",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct RuleConfigurationChange",
                  name: "configurationChanges",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "bytes4",
                      name: "ruleSelector",
                      type: "bytes4",
                    },
                    {
                      internalType: "bool",
                      name: "isRequired",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "enabled",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RuleSelectorChange[]",
                  name: "selectorChanges",
                  type: "tuple[]",
                },
              ],
              internalType: "struct RuleChange[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processPostRuleChanges",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
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
            {
              internalType: "address",
              name: "",
              type: "address",
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
              internalType: "struct KeyValue[]",
              name: "",
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
              internalType: "struct KeyValue[]",
              name: "",
              type: "tuple[]",
            },
          ],
          name: "processUnfollow",
          outputs: [],
          stateMutability: "pure",
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
      ],
    },
    AppImpl: {
      address: "0x1eb36c181bdb8A5A905Da3220695FEE3AB0B92B4",
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
              indexed: true,
              internalType: "address",
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
    AccountImpl: {
      address: "0xc2361e491e82b7fa8C8Fc6C2949dAE06ed4b3369",
      abi: [
        {
          inputs: [],
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
          name: "InvalidMsgSender",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidParameter",
          type: "error",
        },
        {
          inputs: [],
          name: "NotAllowed",
          type: "error",
        },
        {
          inputs: [],
          name: "NotImplemented",
          type: "error",
        },
        {
          inputs: [],
          name: "RedundantStateChange",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "accountManager",
              type: "address",
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
              internalType: "struct AccountManagerPermissions",
              name: "permissions",
              type: "tuple",
            },
          ],
          name: "Lens_Account_AccountManagerAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "accountManager",
              type: "address",
            },
          ],
          name: "Lens_Account_AccountManagerRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "accountManager",
              type: "address",
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
              internalType: "struct AccountManagerPermissions",
              name: "permissions",
              type: "tuple",
            },
          ],
          name: "Lens_Account_AccountManagerUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "bool",
              name: "allow",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "Lens_Account_AllowNonOwnerSpending",
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
          name: "Lens_Account_ExtraDataAdded",
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
          name: "Lens_Account_ExtraDataRemoved",
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
          name: "Lens_Account_ExtraDataUpdated",
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
          name: "Lens_Account_MetadataURISet",
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
            {
              indexed: true,
              internalType: "address",
              name: "source",
              type: "address",
            },
          ],
          name: "Lens_Account_MetadataURISet",
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
          name: "Lens_Account_OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "target",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
            {
              indexed: true,
              internalType: "address",
              name: "executor",
              type: "address",
            },
          ],
          name: "Lens_Account_TransactionExecuted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
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
              name: "addressScope",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "entityId",
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
          ],
          name: "Lens_ExtraStorageSet",
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
          name: "Lens_Ownable_OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "accountManager",
              type: "address",
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
              internalType: "struct AccountManagerPermissions",
              name: "accountManagerPermissions",
              type: "tuple",
            },
          ],
          name: "addAccountManager",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bool",
              name: "allow",
              type: "bool",
            },
          ],
          name: "allowNonOwnerSpending",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "executor",
              type: "address",
            },
          ],
          name: "canExecuteTransactions",
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
              name: "accountManager",
              type: "address",
            },
          ],
          name: "canSetMetadataURI",
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
              name: "target",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "executeTransaction",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
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
                  name: "target",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct Transaction[]",
              name: "transactions",
              type: "tuple[]",
            },
          ],
          name: "executeTransactions",
          outputs: [
            {
              internalType: "bytes[]",
              name: "",
              type: "bytes[]",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "accountManager",
              type: "address",
            },
          ],
          name: "getAccountManagerPermissions",
          outputs: [
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
              internalType: "struct AccountManagerPermissions",
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
              name: "source",
              type: "address",
            },
          ],
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
              name: "accountManagerPermissions",
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
                  internalType: "address",
                  name: "originalMsgSender",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "validator",
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
              internalType: "struct KeyValue[]",
              name: "extraData",
              type: "tuple[]",
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
              name: "accountManager",
              type: "address",
            },
          ],
          name: "isAccountManager",
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
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "uint256[]",
              name: "",
              type: "uint256[]",
            },
            {
              internalType: "uint256[]",
              name: "",
              type: "uint256[]",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "onERC1155BatchReceived",
          outputs: [
            {
              internalType: "bytes4",
              name: "",
              type: "bytes4",
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
          name: "onERC1155Received",
          outputs: [
            {
              internalType: "bytes4",
              name: "",
              type: "bytes4",
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
          name: "onERC721Received",
          outputs: [
            {
              internalType: "bytes4",
              name: "",
              type: "bytes4",
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
              internalType: "address",
              name: "accountManager",
              type: "address",
            },
          ],
          name: "removeAccountManager",
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
              internalType: "struct KeyValue[]",
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
              internalType: "string",
              name: "metadataURI",
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
                  internalType: "address",
                  name: "originalMsgSender",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "validator",
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
          name: "setMetadataURI",
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
              name: "accountManager",
              type: "address",
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
              internalType: "struct AccountManagerPermissions",
              name: "accountManagerPermissions",
              type: "tuple",
            },
          ],
          name: "updateAccountManagerPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
    },
    FeedImpl: {
      address: "0x051f8a7Db163F62686869BeFF9a444515a37a5C5",
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
              indexed: true,
              internalType: "address",
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
          name: "SingleAnyOfRule",
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
    GraphImpl: {
      address: "0xA1C50AC30Eb1fAbF3280503C6D931982B263De06",
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
              indexed: true,
              internalType: "address",
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
          name: "SingleAnyOfRule",
          inputs: [],
        },
        {
          type: "error",
          name: "UnsupportedSelector",
          inputs: [],
        },
      ],
    },
    GroupImpl: {
      address: "0xdC5A24F9536Ca16d3F5Fd1b75324349415c582ed",
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
              indexed: true,
              internalType: "address",
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
          name: "SingleAnyOfRule",
          inputs: [],
        },
        {
          type: "error",
          name: "UnsupportedSelector",
          inputs: [],
        },
      ],
    },
    NamespaceImpl: {
      address: "0xaae915cF769da9e372b5899f9fD67f98396dB046",
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
              indexed: true,
              internalType: "address",
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
          name: "SingleAnyOfRule",
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
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
