# 🏗 ~~Scaffold-ETH 2~~ Scaffold-Lens

---

This project is a fork of [Scaffold-ETH 2](https://github.com/scaffold-eth/scaffold-eth-2) that demonstrates how to build, debug, test, and deploy an [Open Action](https://docs.lens.xyz/docs/publication-actions-aka-open-actions) Module on Lens Protocol using [Hardhat](https://hardhat.org/).

The `TipActionModule` is a simple module that allows users to tip the author of a publication. It's based on the "Creating an Open Action" tutorial from the [Lens Docs](https://docs.lens.xyz/docs/creating-a-publication-action).

Additions to the tutorial include:
- [x] Adds compliance with the Open Action [Module Metadata Standard](https://docs.lens.xyz/docs/module-metadata-standard)
- [x] Publishes metadata file on Arweave during deployment and sets a `metadataURI` field on the module
- [x] Registers the module with the [ModuleRegistry](https://docs.lens.xyz/docs/module-registry) contract during deployment
- [x] Checks token allowance before attempting to send a tip
- [x] Uses `SafeERC20` to transfer tokens
- [x] Uses `ReentrancyGuard` to prevent reentrancy attacks
- [x] Adds unit tests with Chai

Features:
- [x] Run a local EVM chain and test contracts locally with Hardhat
- [x] Deploy a mock ModuleRegistry contract
- [x] Deploy an ERC20 token contract used for whitelisted tips
- [x] Deploy an Open Action Module contract
- [x] Debug local contract calls with a graphical interface

---

## Contents

- [Requirements](#requirements)
- [Quickstart](#quickstart)
- [Testing](#testing)
- [Deploying to Mumbai](#deploying-to-mumbai)
- [Using the TipActionModule Contract](#using-the-tipactionmodule-contract)
- [About Scaffold-ETH 2](#about-scaffold-eth-2)

## Requirements

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-Lens, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/iPaulPro/scaffold-lens
cd scaffold-lens
yarn install
```

2. Run a local network in a terminal from the root directory:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, from the root directory, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the contract component or the example ui in the frontend. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

4. Set up the hardhat .env file

To test on a local chain, you'll need to set up a `.env.development` file in the `packages/hardhat` directory. You can use the `.env.development.example` file as a template.
```bash
# This should be the address of the eth-scaffold burner wallet when running locally
LENS_HUB=0x19F380b7Bd20c49e48DBD53C732880166C792daE
```
`LENS_HUB` should be set to the address of the burner wallet, found when running the nextjs app locally. This will allow you to test `onlyHub` functions on the contract.

<img src="assets/nextjs-screenshot.jpg" width="400" alt="Screenshot of nextjs client"/>

5. On a third terminal, from the root directory, deploy the test contract locally:

```
yarn deploy:local
```

This command deploys the smart contracts to the local network. The contracts are located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy:*` commands use the deploy scripts located in `packages/hardhat/deploy` to deploy the contracts to the network. You can also customize the deploy script.

## Testing

Run the smart contract test with `yarn hardhat:test` from the root directory. This will run the tests located in `packages/hardhat/test`.

## Deploying to Mumbai

Once you are ready to deploy your smart contracts, there are a few things you need to adjust.

1. Set up the .env file

To deploy on Mumbai, you'll need to set up a `.env` file in the `packages/hardhat` directory. You can use the `.env.example` file as a template.  You'll need to provide the current addresses of the Lens Hub and Module Registry contracts. (These should be provided by Lens Protocol).
```bash
# These should be provided by https://docs.lens.xyz/docs/deployed-contract-addresses
LENS_HUB=0x4fbffF20302F3326B20052ab9C217C44F6480900
MODULE_REGISTRY=0x4BeB63842BB800A1Da77a62F2c74dE3CA39AF7C0
```

2. Select the network

You can change the defaultNetwork in `packages/hardhat/hardhat.config.ts.` You could also simply run `hardhat deploy --network target_network` to deploy to another network.

Check the `hardhat.config.ts` for the networks that are pre-configured. You can also add other network settings to the `hardhat.config.ts file`. Here are the [Alchemy docs](https://docs.alchemy.com/docs/how-to-add-alchemy-rpc-endpoints-to-metamask) for information on specific networks.

3. Generate a new account or add one to deploy the contract(s) from. Additionally you will need to add your Alchemy API key. Rename `.env.example` to `.env` and fill the required keys.

```
ALCHEMY_API_KEY="",
DEPLOYER_PRIVATE_KEY=""
```

The deployer account is the account that will deploy your contracts. Additionally, the deployer account will be used to execute any function calls that are part of your deployment script.

You can generate a random account / private key with `yarn generate` or add the private key of your crypto wallet. `yarn generate` will create a random account and add the DEPLOYER_PRIVATE_KEY to the .env file. You can check the generated account with `yarn account`.

4. Deploy your smart contract(s)

To deploy the `TipActionModule` to Mumbai you can run 

```
yarn deploy:action
```

5. Verify your smart contract

You can verify your smart contract on Etherscan by running:

```
yarn verify
```

## Using the TipActionModule Contract

| Network | Chain ID | Deployed Contract                                                                                                               | Metadata                                                                     |
|---------|----------|---------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| Mumbai  | 80001    | [0xce962e5ade34202489e04bb8ed258f8d079eee3e](https://mumbai.polygonscan.com/address/0xce962e5ade34202489e04bb8ed258f8d079eee3e) | [link](https://gateway.irys.xyz/9XjLZj9uvL_ZiHuTp9SdGAMd859IBYX95KKNNrqmF-Q) |

The `TipActionModule` contract can be used as an Open Action Module on Lens Protocol.

The initialize calldata ABI is

```json
[
  { 
    "type": "address", 
    "name": "tipReceiver"
  }
]
```

And the process calldata ABI is

```json
[
    {
      "type": "address",
      "name": "currency"
    },
    {
      "type": "uint256",
      "name": "tipAmount"
    }
  ]
```

Where `currency` is the address of the ERC20 token to use for tips, and `tipAmount` is the amount of tokens to send in wei. Note that the token must be registered with the Lens Module Registry.

### Using the TipActionModule with the Lens SDK

You can initialize the action and set the tip receiver using the Lens SDK Client.

```typescript
import { type LensClient, type OnchainPostRequest, encodeData } from '@lens-protocol/client';

const openActionContract = "0xce962e5ade34202489e04bb8ed258f8d079eee3e";

const postRequest: OnchainPostRequest = { contentURI };

// The initialization calldata accepts a single address parameter, the tip receiver
const calldata = encodeData(
  [{ name: "tipReceiver", type: "address" }],
  [tipReceiver],
);

postRequest.openActionModules.push({
  unknownOpenAction: {
    address: openActionContract,
    data: calldata,
  },
});

await lensClient.publication.postOnchain(postRequest);
```

To support executing a tip action, you can create an `act` transaction as usual, supplying the currency and amount to tip as the process call data.

```typescript
const tipActionContract = "0xce962e5ade34202489e04bb8ed258f8d079eee3e";

// get the module settings and metadata
const settings = post.openActionModules.find(
  (module) => module.contract.address.toLowerCase() === tipActionContract.toLowerCase(),
);
const metadataRes = await lensClient.modules.fetchMetadata({
  implementation: settings.contract.address,
});

// encode calldata
const processCalldata: ModuleParam[] = JSON.parse(metadataRes.metadata.processCalldataABI);
const calldata = encodeData(
  processCalldata,
  [currency, amount.toString()],
);

// create the act transaction request
const request: ActOnOpenActionRequest = {
  actOn: {
    unknownOpenAction: {
      address: tipActionContract,
      data: calldata,
    },
  },
  for: post.id,
};

const tip = await lensClient.publication.actions.createActOnTypedData(request);
// sign and broadcast transaction
```

The tip receiver can be obtained from the module settings
```typescript
if (settings.initializeCalldata) {
  const initData = decodeData(
    JSON.parse(metadataRes.metadata.initializeCalldataABI) as ModuleParam[],
    settings.initializeCalldata,
  );
  // This is the tip receiver address (registered in the initialize calldata)
  const tipReceiver = initData.tipReceiver;
}
```

### Important Notes

1. Clients implementing the tip action should ensure the user has approved the tip amount for the tip currency before attempting to execute the tip action.

You can check the allowance using the ERC-20 `allowance` function directly, or use the Lens SDK Client:

```typescript
const needsApproval = async (
  currency: string, 
  actionModule: string
): Promise<boolean> => {
  const req: ApprovedModuleAllowanceAmountRequest = {
    currencies: [currency],
    unknownOpenActionModules: [actionModule],
  };
  const res = await lensClient.modules.approvedAllowanceAmount(req);
  if (res.isFailure()) return true;

  const allowances = res.unwrap();
  if (!allowances.length) return true;

  return tipAmount.lt(allowances[0].allowance.value);
};
```
---

## About Scaffold-ETH 2

Scaffold-ETH is an open-source toolkit for building Ethereum dapps, built using NextJS, RainbowKit, Hardhat, Wagmi, and Typescript.

Learn more about Scaffold-ETH 2 and read the docs [here](https://github.com/scaffold-eth/scaffold-eth-2).