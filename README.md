# 🏗 ~~Scaffold-ETH 2~~ Scaffold-Lens

This project is a fork of [Scaffold-ETH 2](https://github.com/scaffold-eth/scaffold-eth-2) that demonstrates how to build, debug, test, and deploy an [Open Action](https://docs.lens.xyz/docs/publication-actions-aka-open-actions) Module on Lens Protocol using [Hardhat](https://hardhat.org/).

Features:
- ✅ Run a local EVM chain and test contracts locally with Hardhat
- ✅ Deploy a mock ModuleRegistry contract
- ✅ Deploy an ERC20 token contract used for whitelisted tips
- ✅ Deploy an Open Action Module contract
- ✅ Deploy a Collect Action Module contract
- ✅ Debug local contract calls with a graphical interface
- ✅ Verify contracts on Etherscan

## Contents

- [Requirements](#requirements)
- [Quickstart](#quickstart)
- [Debugging](#debugging)
- [Unit Testing](#testing)
- [Deploying to Testnet](#deploying-to-testnet)
- [Using your own contracts](#using-your-own-contracts)
- [About Scaffold-ETH 2](#about-scaffold-eth-2)

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-Lens, follow the steps below:

1. **Install**  
   Clone this repo & install dependencies
    ```shell
    git clone https://github.com/iPaulPro/scaffold-lens
    cd scaffold-lens
    yarn install
    ```

2. **Start a chain**  
   Run a local network in a terminal from the root directory:
    ```shell
    yarn chain
    ```

   This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. **Start the app**  
   On a second terminal, from the root directory, start your NextJS app:
    ```shell
    yarn start
    ```

   Visit your app on: `http://localhost:3000`. You can interact with your smart contracts using the contract component and review all transactions in the block explorer. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.
   
   Copy the burner wallet address from the top-right navbar menu.

4. **Set up environment**  
    Open `config.ts` in the `packages/hardhat` directory and set `LENS_HUB` to the address of the burner wallet provided by the nextjs project.

5. **Deploy**  
   On a third terminal, from the root directory, deploy the Lens contracts locally:
    ```bash
    yarn deploy:lens
    ```

   This command deploys the full Lens Protocol on the local network. Put your contracts  in `packages/hardhat/contracts`. The `yarn deploy:*` commands use the scripts located in `packages/hardhat/deploy` to deploy the contracts to the specified network.

## Debugging

You can debug your smart contracts using the Contract Debugger. If you haven't already, from the root directory, start your NextJS app:
```shell
yarn start
```

Then navigate to http://localhost:3000/debug to open the debugger. You can now call functions on your smart contracts and debug them in the browser.

### Debugging contracts

1. Run the chain and deploy the `YourActionModule` and mock contracts to the local network, and start the app:
    ```shell
    yarn chain
    yarn deploy:action:local
    yarn start
    ```
2. Navigate to http://localhost:3000/debug.
3. Select the `TestToken` contract and call the `mint` function to mint tokens for the burner wallet.
4. Copy the address of the `YourActionModule` and the `approve` spending from the `YourActionModule`.
5. Select the `YourActionModule` contract and call the `initializePublicationAction` function with a receiver address.
6. Call the `processPublicationAction` with the call data. 

## Testing

Run the smart contract unit tests from the root directory.
```shell
yarn hardhat:test
```

This will run the tests located in `packages/hardhat/test` with [Chai](https://github.com/chaijs/chai).

## Deploying to Testnet

Once you are ready to deploy your smart contracts, there are a few things you need to adjust.

1. **Set up environment**  
   To deploy on Amoy, you'll need to set up a `.env.staging` file in the `packages/hardhat` directory. You can use the `.env.staging.example` file as a template.

   Next, generate a new account or add one to deploy the contract(s) from. Additionally, you will need to add your Alchemy API key.
   ```bash
   ALCHEMY_API_KEY=""
   DEPLOYER_PRIVATE_KEY=""
   ```

   The deployer wallet is the account that will deploy your contracts. Additionally, the deployer account will be used to execute any function calls that are part of your deployment script.

   You can generate a random account / private key with `yarn generate` or add the private key of your crypto wallet. `yarn generate` will create a random account and add the DEPLOYER_PRIVATE_KEY to the .env file. You can check the generated account with `yarn account`.

2. **Deploy**  
   To deploy the `YourActionModule` to Amoy you can run

   ```shell
   yarn deploy:action:testnet
   ```

3. **Verify**  
   You can verify your smart contract on Etherscan by running:

   ```shell
   yarn verify:testnet
   ```
---

## Deploying to Polygon Mainnet

Follow the same directions for deploying to Amoy, but use the `.env` file instead of `.env.staging` and `:mainnet` in the yarn commands, instead of `:testnet`. You will also need to set the `ALCHEMY_API_KEY` with a valid API key.

## Using your own contracts

If you want to use your own contracts there are a few simple steps. 

1. Replace the `YourActionModule.sol` contract in `/packages/hardhat/contracts` with your own. 
2. Update the script(s) in `/packages/hardhat/deploy` to deploy your contract(s) instead of the mock contracts.
3. Change the tag in the `deploy:*` scripts in `/packages/hardhat/package.json` to the tag(s) of your contract(s).
4. (Optional) Remove the `/packages/hardhat/contracts/helpers` directory and related deploy scripts unless you want to use the `TestToken` contract for testing and debugging.

## About Scaffold-ETH 2

Scaffold-ETH is an open-source toolkit for building Ethereum dapps, built using NextJS, RainbowKit, Hardhat, Wagmi, and Typescript.

Learn more about Scaffold-ETH 2 and read the docs [here](https://github.com/scaffold-eth/scaffold-eth-2).