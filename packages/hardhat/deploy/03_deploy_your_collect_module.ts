import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { TokenGatedCollectModule } from "../typechain-types";
import { ethers } from "hardhat";
import { module } from "@lens-protocol/metadata";
import { uploadMetadata } from "../lib/irysService";
import { COLLECT_PUBLICATION_ACTION, LENS_HUB, MODULE_REGISTRY } from "../config";

const metadata = module({
  name: "TokenGatedCollectModule",
  title: "Token Gated Collect Module",
  description: "Enables restricting Collects to users who hold a specific token.",
  authors: ["paul@paulburke.co"],
  initializeCalldataABI: JSON.stringify([
    { type: "uint160", name: "amount" },
    { type: "uint96", name: "collectLimit" },
    { type: "address", name: "currency" },
    { type: "uint16", name: "referralFee" },
    { type: "bool", name: "followerOnly" },
    { type: "uint72", name: "endTimestamp" },
    {
      type: "tuple(address,uint16)[]",
      name: "recipients",
      components: [
        { type: "address", name: "recipient" },
        { type: "uint16", name: "split" },
      ],
    },
    {
      type: "tuple(address,uint256)",
      name: "gateParams",
      components: [
        { type: "address", name: "tokenAddress" },
        { type: "uint256", name: "minThreshold" },
      ],
    },
  ]),
  processCalldataABI: JSON.stringify([
    { type: "address", name: "currency" },
    { type: "uint256", name: "amount" },
  ]),
  attributes: [],
});

const deployTokenGatedCollectModuleContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  let lensHubAddress: string | undefined;
  try {
    const { address } = await get("LensHub");
    lensHubAddress = address;
  } catch (e) {}

  if (!lensHubAddress) {
    lensHubAddress = LENS_HUB;
  }

  let moduleRegistry: string | undefined;
  try {
    const { address } = await get("ModuleRegistry");
    moduleRegistry = address;
  } catch (e) {}

  if (!moduleRegistry) {
    moduleRegistry = MODULE_REGISTRY;
  }

  let collectPublicationAction: string | undefined;
  try {
    const { address } = await get("CollectPublicationAction");
    collectPublicationAction = address;
  } catch (e) {}

  if (!collectPublicationAction) {
    collectPublicationAction = COLLECT_PUBLICATION_ACTION;
  }

  await deploy("TokenGatedCollectModule", {
    from: deployer,
    args: [lensHubAddress, collectPublicationAction, moduleRegistry, deployer],
    log: true,
    autoMine: true,
  });

  const collectModule = await hre.ethers.getContract<TokenGatedCollectModule>("TokenGatedCollectModule", deployer);

  const metadataURI = await uploadMetadata(metadata);
  const setMetadata = await collectModule.setModuleMetadataURI(metadataURI);
  console.log("set metadata URI (tx: " + setMetadata.hash + ")");

  if (process.env.NETWORK !== "localhost") {
    await new Promise(resolve => setTimeout(resolve, 10000));
  }

  const publicationActionContract = await ethers.getContractAt("CollectPublicationAction", collectPublicationAction!);
  const register = await publicationActionContract.registerCollectModule(await collectModule.getAddress());
  console.log("registered TokenGatedCollectModule (tx: " + register.hash + ")");
};

export default deployTokenGatedCollectModuleContract;

deployTokenGatedCollectModuleContract.tags = ["TokenGatedCollectModule"];
