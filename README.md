# 🏗🌿 Scaffold-Lens Extension

A [Scaffold-ETH 2 extension](https://docs.scaffoldeth.io/extensions) for building, debuging, testing, and deploying [Open Actions](https://www.lens.xyz/docs/concepts/open-actions) and [Collect Modules](https://www.lens.xyz/docs/primitives/collect/collect-modules) on Lens Protocol using [Hardhat](https://hardhat.org/).

Features:
- ✅ Run a local EVM chain and test contracts locally with Hardhat
- ✅ Deploy the full Lens Protocol on a local network
- ✅ Deploy an Open Action Module contract
- ✅ Deploy a Collect Action Module contract
- ✅ Debug local contract calls with a graphical interface
- ✅ Create and act on Lens publications with a graphical interface
- ✅ Verify contracts on Etherscan

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-Lens Extension, follow the steps below:

1. **Install**  
   Run `create-eth` with the extension arg pointing to the `ext` branch to create a new Scaffold-ETH 2 project with the Scaffold-Lens extension:
    ```shell
    npx create-eth@latest -e iPaulPro/scaffold-lens:ext
    ```
   The wizard will prompt you to name your project, then it will clone Scaffold-ETH 2, install dependencies, and set up the Lens extension.
2. **Start a chain**  
   Switch to the directory of the new project and run a local network in a terminal from the root directory:
    ```shell
    yarn chain
    ```

   This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. **Configure the project**  
   The Lens contracts require a newer Solidity compiler version than the one used by `create-eth`. Update the Solidity compiler version in `packages/hardhat/hardhat.config.ts` to `0.8.19` or higher.
   ```typescript
   solidity: {
     version: "0.8.19"
     // ...
   }
   ```

4. **Deploy**  
   On a second terminal, from the root directory, deploy the Lens contracts locally:
    ```bash
    yarn deploy
    ```

   This command deploys the full Lens Protocol on the local network. Put your contracts  in `packages/hardhat/contracts`. The `yarn deploy:*` commands use the scripts located in `packages/hardhat/deploy` to deploy the contracts to the specified network.

5. **Start the app**  
   On a third terminal, from the root directory, start your NextJS app:
    ```shell
    yarn start
    ```

   Visit your app at: `http://localhost:3000`. You can interact with your smart contracts using the contract component and review all transactions in the block explorer. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

## Debugging Lens Modules

To debug your Lens Modules, you can use the Lens Protocol UI to create and act on publications. The UI is available at `http://localhost:3000/lens`, or you can click on the "Open Actions" navigation link in the header.

The Scaffold-Lens Extension includes example contracts for Open Actions and Collect Modules in the `packages/hardhat/contracts` directory. You can use these contracts as a starting point for your own Lens Modules.

The `TipActionModule` corresponds to the [example from the Lens Docs](https://www.lens.xyz/docs/primitives/publications/open-actions#creating-open-actions-example). The `PayWhatYouWantCollectModule` is an example of an Open Action Collect Module that can be used with the core `CollectPublicationAction` Open Action.

1. **Create a Profile**  
   Before you can create publications, you need to create a profile. Click on the "Add Profile" button in the sidebar and follow the instructions to create a profile.
2. **Create a Publication**  
   Use the textarea in the main content section to create a new publication. You can select the Open Action and Collect Module to use. For example, you can create a new publication with tipping enabled using the `TipActionModule` contract.
3. **Act on a Publication**  
   You can act on publications by clicking on the "Act" button in the publication card.

## More on Scaffold-ETH 2

Scaffold-ETH is an open-source toolkit for building Ethereum dapps, built using NextJS, RainbowKit, Hardhat, Wagmi, and Typescript.

Learn more about Scaffold-ETH 2 and find the docs [here](https://github.com/scaffold-eth/scaffold-eth-2).