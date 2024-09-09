# 🏗🌿 Scaffold-Lens Extension

A [Scaffold-ETH 2 extension](https://docs.scaffoldeth.io/extensions) for building, debugging, testing, and deploying [Open Actions](https://www.lens.xyz/docs/concepts/open-actions) and [Collect Modules](https://www.lens.xyz/docs/primitives/collect/collect-modules) on Lens Protocol using [Hardhat](https://hardhat.org/).

Features:
- ✅ Deploy the full Lens Protocol on a local hardhat network
- ✅ Create and act on Lens publications with a graphical interface
- ✅ Deploy an Open Action Module contract
- ✅ Deploy a Collect Action Module contract
- ✅ Deploy an ERC-20 contract to be used with Open Actions

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
   The wizard will prompt you to name your project, then it will clone Scaffold-ETH 2, set up the Lens extension, and, install dependencies.
2. **Start a chain**  
   Switch to the directory of the new project and run a local network in a terminal from the root directory:
    ```shell
    yarn chain
    ```

   This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. **Deploy contracts**  
   On a second terminal, from the root directory, deploy the protocol and module contracts locally:
    ```bash
    yarn deploy
    ```

   This command deploys the full Lens Protocol on the local network. It will also deploy the example modules, `TipActionModule` and `PayWhatYouWantCollectModule`, to the network.  
   Put your contracts  in `packages/hardhat/contracts`. The `deploy:*` commands use the scripts located in `packages/hardhat/deploy` to deploy the contracts to the specified network.

4. **Start the app**  
   On a third terminal, from the root directory, start your NextJS app:
    ```shell
    yarn start
    ```

   Visit your app at: `http://localhost:3000`. You can interact with your smart contracts using the contract component and review all transactions in the block explorer. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

## Debugging Lens Modules

To debug your Lens Modules, you can use the Lens Protocol UI to create and act on publications. The UI is available at `http://localhost:3000/lens`, or you can click on the "Open Actions" navigation link in the header.

The Scaffold-Lens Extension includes example contracts for Open Actions and Collect Modules in the `packages/hardhat/contracts` directory. You can use these contracts as a starting point for your own Lens Modules. The Open Actions page will automatically include any deployed Open Actions and Collect Modules in the dropdowns.

The `TipActionModule` corresponds to the [example from the Lens Docs](https://www.lens.xyz/docs/primitives/publications/open-actions#creating-open-actions-example). The `PayWhatYouWantCollectModule` is an example of an Open Action Collect Module that can be used with the core `CollectPublicationAction` Open Action.

The `/lens` page will also automatically display any ERC-20 tokens that were deployed locally in the sidebar to make it easier to use these tokens to initialize and act on publications that require token transfers.

1. **Create a Profile**  
   Before you can create publications, you need to create a profile. Click on the "Add Profile" button in the sidebar and follow the instructions to create a profile.
2. **Create a Publication**  
   Use the textarea in the main content section to create a new publication. You can select an Open Action and Collect Module to use. For example, you can create a new publication with tipping enabled using the `TipActionModule` contract.
3. **Act on a Publication**  
   You can act on publications by clicking on the "Act" button in the publication card.

## Demo

You can find a full walkthrough of the extension setup and usage on YouTube: https://youtu.be/ZdL5cGaXlas

## More on Scaffold-ETH 2

Scaffold-ETH is an open-source toolkit for building Ethereum dapps, built using NextJS, RainbowKit, Hardhat, Wagmi, and Typescript.

For more details on how to test, debug, and deploy your own contracts refer to the Scaffold-ETH 2 documentation [here](https://github.com/scaffold-eth/scaffold-eth-2).