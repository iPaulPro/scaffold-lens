import { Provider, Wallet } from "zksync-ethers";
import * as hre from "hardhat";
import { Deployer } from "@matterlabs/hardhat-zksync";
import dotenv from "dotenv";
import { ethers } from "ethers";
import { DeploymentsExtension } from "hardhat-deploy/types";

import "@matterlabs/hardhat-zksync-node/dist/type-extensions";
import "@matterlabs/hardhat-zksync-verify/dist/src/type-extensions";
import { ZkSyncArtifact } from "@matterlabs/hardhat-zksync-deploy/dist/types";
import { Artifact } from "hardhat/types";
import path from "path";

// Load env file
const envFileName =
  !process.env.NODE_ENV || process.env.NODE_ENV === "production" ? ".env" : `.env.${process.env.NODE_ENV}`;
const envFile = path.resolve(process.cwd(), envFileName);
dotenv.config({ path: envFile });

const deployerPrivateKey =
  process.env.DEPLOYER_PRIVATE_KEY ?? "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

export const getProvider = () => {
  const rpcUrl = hre.network.config.url;
  if (!rpcUrl)
    throw `⛔️ RPC URL wasn't found in "${hre.network.name}"! Please add a "url" field to the network config in hardhat.config.ts`;

  // Initialize ZKsync Provider
  const provider = new Provider(rpcUrl);

  return provider;
};

export const getWallet = (privateKey?: string) => {
  const provider = getProvider();

  // Initialize ZKsync Wallet
  const wallet = new Wallet(privateKey ?? deployerPrivateKey, provider);

  return wallet;
};

export const verifyEnoughBalance = async (wallet: Wallet, amount: bigint) => {
  // Check if the wallet has enough balance
  const balance = await wallet.getBalance();
  if (balance < amount)
    throw `⛔️ Wallet balance is too low! Required ${ethers.formatEther(amount)} ETH, but current ${
      wallet.address
    } balance is ${ethers.formatEther(balance)} ETH`;
};

/**
 * @param {string} data.contract The contract's path and name. E.g., "contracts/Greeter.sol:Greeter"
 */
export const verifyContract = async (data: {
  address: string;
  contract: string;
  constructorArguments?: string;
  bytecode: string;
}) => {
  const verificationRequestId: number = await hre.run("verify:verify", {
    ...data,
    noCompile: true,
  });
  return verificationRequestId;
};

export const verifyZkDeployedContract = async (data: {
  address: string;
  artifact: ZkSyncArtifact;
  constructorArguments?: any[];
}) => {
  const contractToVerify = new ethers.Contract(data.address, data.artifact.abi);
  return verifyContract({
    address: data.address,
    contract: `${data.artifact.sourceName}:${data.artifact.contractName}`,
    constructorArguments: data.constructorArguments
      ? contractToVerify.interface.encodeDeploy(data.constructorArguments)
      : undefined,
    bytecode: data.artifact.bytecode,
  });
};

export const verifyDeployedContract = async (data: {
  address: string;
  artifact: Artifact;
  constructorArguments?: any[];
}) => {
  const contractToVerify = new ethers.Contract(data.address, data.artifact.abi);
  return verifyContract({
    address: data.address,
    contract: `${data.artifact.sourceName}:${data.artifact.contractName}`,
    constructorArguments: data.constructorArguments
      ? contractToVerify.interface.encodeDeploy(data.constructorArguments)
      : undefined,
    bytecode: data.artifact.bytecode,
  });
};

export const verifyLensFactoryDeployedPrimitive = async (data: {
  tx: any;
  lensContractArtifactName: string;
  metadataURIConstructorParam: string;
}) => {
  const txReceipt = (await data.tx.wait()) as ethers.TransactionReceipt;

  const eventInterface = new ethers.Interface([
    "event Lens_Contract_Deployed(string indexed indexedContractType, string indexed indexedFlavour, string contractType, string flavour)",
  ]);

  // Parse event logs
  const events = txReceipt.logs.map(log => {
    try {
      const decodedLog = eventInterface.decodeEventLog("Lens_Contract_Deployed", log.data, log.topics);
      return { primitive: decodedLog[2], primitiveType: decodedLog[3], address: log.address };
    } catch {
      return null;
    }
  });

  const deployedAddress = events.filter(e => e?.primitive === data.lensContractArtifactName.toLowerCase())[0]!.address;
  // const accessControlAddress = events.filter(e => e?.primitive === "access-control")[0]?.address;

  // if (accessControlAddress) {
  //   const deployedArtifact = await hre.artifacts.readArtifact(data.lensContractArtifactName);
  //
  //   await verifyDeployedContract({
  //     address: deployedAddress,
  //     artifact: deployedArtifact,
  //     constructorArguments: [data.metadataURIConstructorParam, accessControlAddress],
  //   });
  // }

  return deployedAddress;
};

export const verifyLensFactoryDeployedUsername = async (data: { tx: any; constructorParams: any[] }) => {
  const txReceipt = (await data.tx.wait()) as ethers.TransactionReceipt;

  const eventInterface = new ethers.Interface([
    "event Lens_Contract_Deployed(string indexed indexedContractType, string indexed indexedFlavour, string contractType, string flavour)",
  ]);

  // Parse event logs
  const events = txReceipt.logs.map(log => {
    try {
      const decodedLog = eventInterface.decodeEventLog("Lens_Contract_Deployed", log.data, log.topics);
      return { primitive: decodedLog[2], primitiveType: decodedLog[3], address: log.address };
    } catch {
      return null;
    }
  });

  const deployedAddress = events.filter(e => e?.primitive === "username")[0]!.address;
  // const tokenUriProviderAddress = events.filter(e => e?.primitive === "username-token-uri-provider")[0]?.address;
  //
  // const deployedArtifact = await hre.artifacts.readArtifact("Username");
  //
  // await verifyDeployedContract({
  //   address: deployedAddress,
  //   artifact: deployedArtifact,
  //   constructorArguments: [...data.constructorParams, tokenUriProviderAddress],
  // });

  return deployedAddress;
};

interface ParsedEvent {
  primitive: string;
  primitiveType: string;
  address: string;
}

export function parseLensContractDeployedEventsFromReceipt(txReceipt: ethers.TransactionReceipt): ParsedEvent[] {
  const eventInterface = new ethers.Interface([
    "event Lens_Contract_Deployed(string indexed indexedContractType, string indexed indexedFlavour, string contractType, string flavour)",
  ]);

  // Parse event logs
  const events = txReceipt.logs.reduce<ParsedEvent[]>((acc, log) => {
    try {
      const decodedLog = eventInterface.decodeEventLog("Lens_Contract_Deployed", log.data, log.topics);
      acc.push({
        primitive: decodedLog[2],
        primitiveType: decodedLog[3],
        address: log.address,
      });
    } catch {
      // Skip logs that can't be decoded
    }
    return acc;
  }, []);

  return events;
}

export const getAddressFromEvents = (events: ParsedEvent[], primitiveName: string) => {
  return events.filter(e => e?.primitive === primitiveName)[0]!.address;
};

export async function verifyPrimitive(
  primitiveName: string,
  primitiveAddress: string,
  // constructorArgs: any[],
) {
  // Load compiled contract info
  const primitiveArtifact = await hre.artifacts.readArtifact(primitiveName);

  const deployer = new Deployer(hre, getWallet());
  const artifact = await deployer.loadArtifact(primitiveName);

  await saveDeployment(hre, artifact.contractName, primitiveAddress, primitiveArtifact.abi);

  // // Initialize contract instance for interaction
  // const primitive = new ethers.Contract(primitiveAddress, primitiveArtifact.abi);
  //
  // const encodedConstructorArgs = primitive.interface.encodeDeploy(constructorArgs);
  // const fullContractSource = `${artifact.sourceName}:${artifact.contractName}`;
  //
  // await verifyContract({
  //   address: primitiveAddress,
  //   contract: fullContractSource,
  //   constructorArguments: encodedConstructorArgs,
  //   bytecode: artifact.bytecode,
  // });
}

type DeployContractOptions = {
  /**
   * If true, the deployment process will not print any logs
   */
  silent?: boolean;
  /**
   * If true, the contract will not be verified on Block Explorer
   */
  noVerify?: boolean;
  /**
   * If specified, the contract will be deployed using this wallet
   */
  wallet?: Wallet;
};
export const deployContract = async (
  contractArtifactName: string,
  constructorArguments?: any[],
  options?: DeployContractOptions,
) => {
  const log = (message: string) => {
    if (!options?.silent) console.log(message);
  };

  log(`\nStarting deployment process of "${contractArtifactName}"...`);

  const wallet = options?.wallet ?? getWallet();
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact(contractArtifactName).catch(error => {
    if (error?.message?.includes(`Artifact for contract "${contractArtifactName}" not found.`)) {
      console.error(error.message);
      throw `⛔️ Please make sure you have compiled your contracts or specified the correct contract name!`;
    } else {
      throw error;
    }
  });

  // Estimate contract deployment fee
  const deploymentFee = await deployer.estimateDeployFee(artifact, constructorArguments || []);
  log(`Estimated deployment cost: ${ethers.formatEther(deploymentFee)} ETH`);

  // Check if the wallet has enough balance
  await verifyEnoughBalance(wallet, deploymentFee);

  // Deploy the contract to ZKsync
  const contract = await deployer.deploy(artifact, constructorArguments);
  const address = await contract.getAddress();
  const constructorArgs = contract.interface.encodeDeploy(constructorArguments);
  const fullContractSource = `${artifact.sourceName}:${artifact.contractName}`;

  // Display contract deployment info
  log(`\n"${artifact.contractName}" was successfully deployed:`);
  log(` - Contract address: ${address}`);
  log(` - Contract source: ${fullContractSource}`);
  log(` - Encoded constructor arguments: ${constructorArgs}\n`);

  // if (!options?.noVerify && hre.network.config.verifyURL) {
  //   log(`Requesting contract verification...`);
  //   await verifyContract({
  //     address,
  //     contract: fullContractSource,
  //     constructorArguments: constructorArgs,
  //     bytecode: artifact.bytecode,
  //   });
  // }

  return contract;
};

export const deploy = async (artifactName: string): Promise<string> => {
  // accessControl factory
  const accessControlFactory_artifactName = artifactName;
  const accessControlFactory_args: any[] = [];

  const accessControlFactory = await deployContract(accessControlFactory_artifactName, accessControlFactory_args);

  console.log(`\n✔ ${artifactName} deployed at ${await accessControlFactory.getAddress()}`);
  return await accessControlFactory.getAddress();
};

export function camelToAllCaps(camelCase: string): string {
  return camelCase
    .replace(/([a-z])([A-Z])/g, "$1_$2") // Insert underscore between lowercase and uppercase letters
    .toUpperCase(); // Convert to uppercase
}

export async function saveDeployment(
  hre: { deployments: DeploymentsExtension },
  contractName: string,
  contractAddress: string,
  abi: any[],
) {
  const { save } = hre.deployments;

  await save(contractName, {
    address: contractAddress,
    abi: abi,
  });
}

/**
 * Rich wallets can be used for testing purposes.
 * Available on ZKsync In-memory node and Dockerized node.
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
