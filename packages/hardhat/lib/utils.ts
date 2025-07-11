import { Provider, Wallet } from "zksync-ethers";
import * as hre from "hardhat";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import dotenv from "dotenv";
import { ethers } from "ethers";

import "@matterlabs/hardhat-zksync-node/dist/type-extensions";
import "@matterlabs/hardhat-zksync-verify/dist/src/type-extensions";

import { HardhatRuntimeEnvironment } from "hardhat/types";

// Load env file
dotenv.config();

const deployerPrivateKey =
  process.env.DEPLOYER_PRIVATE_KEY ?? "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

type DeployContractOptions = {
  /**
   * If true, the deployment process will not print any logs
   *
   * @default false
   */
  silent?: boolean;
  /**
   * If true, the contract will be verified on Block Explorer,
   * provided that the network has a verification URL.
   *
   * @default false
   */
  verify?: boolean;
  /**
   * If specified, the contract will be deployed using this wallet
   *
   * @default Wallet instance from DEPLOYER_PRIVATE_KEY env variable
   */
  wallet?: Wallet;
  /**
   * If specified, the contract will be deployed using this Hardhat Runtime Environment
   *
   * @default `hre` global variable
   */
  hre?: HardhatRuntimeEnvironment;
};

type RequiredDeployContractOptions = Required<DeployContractOptions>;

export const getProvider = () => {
  const rpcUrl = hre.network.config.url;
  if (!rpcUrl)
    throw `⛔️ RPC URL wasn't found in "${hre.network.name}"! Please add a "url" field to the network config in hardhat.config.ts`;

  // Initialize zkSync Provider
  const provider = new Provider(rpcUrl);

  return provider;
};

export const getWallet = (privateKey?: string) => {
  if (!privateKey) {
    // Get wallet private key from .env file
    if (!deployerPrivateKey) throw "⛔️ Wallet private key wasn't found in .env file!";
  }

  const provider = getProvider();

  // Initialize zkSync Wallet
  const wallet = new Wallet(privateKey ?? deployerPrivateKey!, provider);

  return wallet;
};

export const verifyEnoughBalance = async (wallet: Wallet, amount: bigint) => {
  // Check if the wallet has enough balance
  const balance = await wallet.getBalance();
  if (balance < amount)
    throw `⛔️ Wallet balance is too low! Required ${ethers.formatEther(
      amount,
    )} ETH, but current ${wallet.address} balance is ${ethers.formatEther(balance)} ETH`;
};

/**
 * @param {string} data.contract The contract's path and name. E.g., "contracts/Greeter.sol:Greeter"
 */
export const verifyContract = async (data: {
  address: string;
  contract: string;
  constructorArguments: string;
  bytecode: string;
}) => {
  const verificationRequestId: number = await hre.run("verify:verify", {
    ...data,
    noCompile: true,
  });
  return verificationRequestId;
};

const createDeploymentLogger = (options: RequiredDeployContractOptions) => {
  return (message: string) => {
    if (options.silent) {
      return;
    }
    console.log(message);
  };
};

const resolveWallet = (options: RequiredDeployContractOptions) => {
  return options?.wallet ?? getWallet();
};

const loadArtifact = async (deployer: Deployer, contractArtifactName: string) => {
  return await deployer.loadArtifact(contractArtifactName).catch(error => {
    if (error?.message?.includes(`Artifact for contract "${contractArtifactName}" not found.`)) {
      console.error(error.message);
      throw `⛔️ Please make sure you have compiled your contracts or specified the correct contract name!`;
    } else {
      throw error;
    }
  });
};

function defaultOptions(options?: DeployContractOptions): RequiredDeployContractOptions {
  return {
    silent: false,
    verify: false,
    wallet: getWallet(),
    hre: hre,
    ...options,
  };
}

export const deployContract = async (
  contractArtifactName: string,
  constructorArguments: any[],
  opts?: DeployContractOptions,
) => {
  const options = defaultOptions(opts);
  const log = createDeploymentLogger(options);

  log(`\nStarting deployment process of "${contractArtifactName}"...`);

  const wallet = resolveWallet(options);
  const deployer = new Deployer(hre, wallet);
  const artifact = await loadArtifact(deployer, contractArtifactName);

  // Estimate contract deployment fee
  const deploymentFee = await deployer.estimateDeployFee(artifact, constructorArguments);
  log(`Estimated deployment cost: ${ethers.formatEther(deploymentFee)} ETH`);

  // Check if the wallet has enough balance
  await verifyEnoughBalance(wallet, deploymentFee);

  // Deploy the contract to zkSync
  const contract = await deployer.deploy(artifact, constructorArguments);
  const address = await contract.getAddress();
  const constructorArgs = contract.interface.encodeDeploy(constructorArguments);
  const fullContractSource = `${artifact.sourceName}:${artifact.contractName}`;

  // Display contract deployment info
  log(`\n"${artifact.contractName}" was successfully deployed:`);
  log(` - Contract address: ${address}`);
  log(` - Contract source: ${fullContractSource}`);
  log(` - Encoded constructor arguments: ${constructorArgs}\n`);

  if (options.verify && hre.network.config.verifyURL) {
    log(`Requesting contract verification...`);
    await verifyContract({
      address,
      contract: fullContractSource,
      constructorArguments: constructorArgs,
      bytecode: artifact.bytecode,
    });
  }

  return contract;
};

export const deployTransparentProxy = async (
  contractArtifactName: string,
  constructorArguments: any[],
  opts?: DeployContractOptions,
) => {
  const options = defaultOptions(opts);
  const log = createDeploymentLogger(options);

  log(`\nStarting deployment process of "${contractArtifactName}"...`);

  const wallet = resolveWallet(options);
  const deployer = new Deployer(hre, wallet);

  const artifact = await loadArtifact(deployer, contractArtifactName);

  // Gas estimation disabled until the hardhat-zksync-upgradable plugin supports custom chain IDs
  // https://github.com/matter-labs/hardhat-zksync/blob/main/packages/hardhat-zksync-upgradable/src/gas-estimation/estimate-gas-proxy.ts#L62

  // // Estimate proxy contract deployment fee
  // const deploymentFee = await hre.zkUpgrades.estimation.estimateGasProxy(
  //   deployer,
  //   artifact,
  //   constructorArguments,
  //   {
  //     kind: "transparent",
  //   },
  //   options.silent
  // );
  // log(`Estimated deployment cost: ${ethers.formatEther(deploymentFee)} ETH`);

  // // Check if the wallet has enough balance
  // await verifyEnoughBalance(wallet, deploymentFee);

  // Deploy the contract using a transparent proxy
  const crowdfunding = await hre.zkUpgrades.deployProxy(
    wallet,
    artifact,
    constructorArguments,
    {
      initializer: "initialize",
    },
    options.silent,
  );

  const contract = await crowdfunding.waitForDeployment();

  const address = await contract.getAddress();
  const initializationArgs = contract.interface.encodeFunctionData("initialize", constructorArguments);
  const fullContractSource = `${artifact.sourceName}:${artifact.contractName}`;

  // Display contract deployment info
  log(`\n"${artifact.contractName}" was successfully deployed:`);
  log(` - Contract address: ${address}`);
  log(` - Contract source: ${fullContractSource}`);
  log(` - Encoded initialization arguments: ${initializationArgs}\n`);

  if (options.verify && hre.network.config.verifyURL) {
    log(`Requesting contract verification...`);
    await verifyContract({
      address,
      contract: fullContractSource,
      constructorArguments: "0x", // Transparent proxy doesn't have constructor arguments
      bytecode: artifact.bytecode,
    });
  }

  return contract;
};

export const upgradeTransparentProxy = async (
  contractArtifactName: string,
  proxyAddress: string,
  opts?: DeployContractOptions,
) => {
  const options = defaultOptions(opts);
  const log = createDeploymentLogger(options);

  log(`\nStarting upgrade process of "${contractArtifactName}"...`);

  const wallet = resolveWallet(options);
  const deployer = new Deployer(hre, wallet);

  const artifact = await loadArtifact(deployer, contractArtifactName);

  return hre.zkUpgrades.upgradeProxy(deployer.zkWallet, proxyAddress, artifact, {}, options.silent);
};

/**
 * Rich wallets can be used for testing purposes.
 * Available on zkSync In-memory node and Dockerized node.
 */
export const LOCAL_RICH_WALLETS = [
  {
    address: "0x36615Cf349d7F6344891B1e7CA7C72883F5dc049",
    privateKey: "0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110",
  },
  {
    address: "0xa61464658AfeAf65CccaaFD3a512b69A83B77618",
    privateKey: "0xac1e735be8536c6534bb4f17f06f6afc73b2b5ba84ac2cfb12f7461b20c0bbe3",
  },
  {
    address: "0x0D43eB5B8a47bA8900d84AA36656c92024e9772e",
    privateKey: "0xd293c684d884d56f8d6abd64fc76757d3664904e309a0645baf8522ab6366d9e",
  },
  {
    address: "0xA13c10C0D5bd6f79041B9835c63f91de35A15883",
    privateKey: "0x850683b40d4a740aa6e745f889a6fdc8327be76e122f5aba645a5b02d0248db8",
  },
  {
    address: "0x8002cD98Cfb563492A6fB3E7C8243b7B9Ad4cc92",
    privateKey: "0xf12e28c0eb1ef4ff90478f6805b68d63737b7f33abfa091601140805da450d93",
  },
  {
    address: "0x4F9133D1d3F50011A6859807C837bdCB31Aaab13",
    privateKey: "0xe667e57a9b8aaa6709e51ff7d093f1c5b73b63f9987e4ab4aa9a5c699e024ee8",
  },
  {
    address: "0xbd29A1B981925B94eEc5c4F1125AF02a2Ec4d1cA",
    privateKey: "0x28a574ab2de8a00364d5dd4b07c4f2f574ef7fcc2a86a197f65abaec836d1959",
  },
  {
    address: "0xedB6F5B4aab3dD95C7806Af42881FF12BE7e9daa",
    privateKey: "0x74d8b3a188f7260f67698eb44da07397a298df5427df681ef68c45b34b61f998",
  },
  {
    address: "0xe706e60ab5Dc512C36A4646D719b889F398cbBcB",
    privateKey: "0xbe79721778b48bcc679b78edac0ce48306a8578186ffcb9f2ee455ae6efeace1",
  },
  {
    address: "0xE90E12261CCb0F3F7976Ae611A29e84a6A85f424",
    privateKey: "0x3eb15da85647edd9a1159a4a13b9e7c56877c4eb33f614546d4db06a51868b1c",
  },
];
