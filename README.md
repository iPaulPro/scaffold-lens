# 🏗🌿 Scaffold-Lens

This project is a fork of [Scaffold-ETH 2](https://github.com/scaffold-eth/scaffold-eth-2) for building dapps with Lens V3 on Lens Chain.

## Overview

Features:
- ✅ Run a local ZKsync chain and test contracts locally with Hardhat
- ✅ Deploy the full V3 Lens Protocol on a local network
- ✅ Debug Lens V3 contracts on a Lens Testnet
- ✅ Debug contracts with a graphical interface
- ✅ Deploy a Lens Account Action contract
- ✅ Deploy a Lens Post Rule contract
- ✅ Verify contracts on Lens Block Explorer

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
   Run a local Lens Chain in a terminal from the root directory:
    ```shell
    yarn chain
    ```

   This command starts a local zkSync node using Hardhat and the [hardhat-zksync](https://docs.zksync.io/zksync-era/tooling/hardhat/plugins/hardhat-zksync) plugin. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. **Deploy**  
   On a second terminal, from the root directory, deploy the Lens contracts locally:
    ```bash
    yarn deploy
    ```

   This command deploys the full Lens Social Protocol on the local network as well as the example Action and Rule contracts. Put your contracts  in `packages/hardhat/contracts`.

4. **Start the app**  
   On a third terminal, from the root directory, start your NextJS app:
    ```shell
    yarn start
    ```

   Visit your app on: `http://localhost:3000`. You can interact with your smart contracts using the contract component and review all transactions in the block explorer. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.
   
## Debugging

You can debug your smart contracts using the Contract Debugger. If you haven't already, from the root directory, start your NextJS app:
```shell
yarn start
```

Then navigate to http://localhost:3000/debug to open the debugger. You can now call functions on your smart contracts and debug them in the browser.

## Testing

Run the smart contract unit tests from the root directory.
```shell
yarn hardhat:test
```

This will run the tests located in `packages/hardhat/test` with [Chai](https://github.com/chaijs/chai).

## Deploying to Lens Testnet

Once you are ready to deploy your smart contracts, there are a few things you need to adjust.

1. **Set up environment**  
   To deploy on Lens Testnet, you'll need to set up a `.env.staging` file in the `packages/hardhat` directory. You can use the `.env.staging.example` file as a template.

   Next, generate a new account or add one to deploy the contract(s) from.
   ```bash
   DEPLOYER_PRIVATE_KEY=""
   ```

   The deployer wallet is the account that will deploy your contracts. Additionally, the deployer account will be used to execute any function calls that are part of your deployment script.

   You can generate a random account / private key with `yarn generate` or add the private key of your crypto wallet. `yarn generate` will create a random account and add the DEPLOYER_PRIVATE_KEY to the .env file. You can check the generated account with `yarn account`.

2. Ensure your deployer account has sufficient \$GRASS tokens needed to deploy the contract(s) on the Lens Testnet. You can get free \$GRASS tokens from [Alchemy](https://www.alchemy.com/faucets/lens-sepolia/) or [Lenscan](https://testnet.lenscan.io/faucet).

3. **Deploy**  
   To deploy the `AccountVerificationAction` and `FollowingOnlyPostRule` to Lens Testnet you can run

   ```shell
   yarn deploy:testnet
   ```
---

## Deploying to Lens Chain (Mainnet)

To deploy your contracts to Lens Chain, you will need to follow similar steps as for the testnet, but with a few adjustments:

1. **Set up environment**  
   Create a `.env` file in the `packages/hardhat` directory using the `.env.example` as a template.

   Set the `DEPLOYER_PRIVATE_KEY` to the private key of your deployer account.
2. **Add a script** 
    Add a script for deploying to mainnet that uses the production environment, something like:
    ```json
    {
       "scripts": {
         "deploy:mainnet": "hardhat deploy-zksync --network lensMainnet --tags YourContractName,generateTsAbis"
       }
    }
    ```
3. **Deploy**  
   To deploy your contract to Lens Chain you can then run

   ```shell
   yarn deploy:mainnet
   ```

## Using your own contracts

If you want to use your own contracts there are a few simple steps. 

1. Replace the `AccountVerificationAction.sol` and/or `FollowingOnlyPostRule.sol` contracts in `/packages/hardhat/contracts` with your own. 
2. Update the script(s) in `/packages/hardhat/deploy` to deploy your contract(s) instead of the sample contracts.
3. Change the tag in the `deploy:testnet` script in `/packages/hardhat/package.json` to the tag(s) of your contract(s).

## About Scaffold-ETH 2

Scaffold-ETH is an open-source toolkit for building Ethereum dapps, built using NextJS, RainbowKit, Hardhat, Wagmi, and Typescript.

Learn more about Scaffold-ETH 2 and read the docs [here](https://github.com/scaffold-eth/scaffold-eth-2).