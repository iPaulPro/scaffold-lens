import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

import { module } from "@lens-protocol/metadata";
import { uploadMetadata } from "../lib/irysService";
import { FlexCollectPublicationAction } from "../typechain-types";
import { LENS_HUB, MODULE_REGISTRY } from "../config";

const metadata = module({
  name: "FlexCollectPublicationAction",
  title: "Smart Collections",
  description: "Collect Publication Action that allows adding new publications to an existing collection.",
  authors: ["paul@paulburke.co"],
  initializeCalldataABI: JSON.stringify([
    { type: "address", name: "collectModule" },
    { type: "bytes", name: "collectModuleInitData" },
    { type: "address", name: "collectNFT" },
    { type: "bytes32", name: "tokenName" },
    { type: "bytes32", name: "tokenSymbol" },
    { type: "uint16", name: "tokenRoyalty" },
  ]),
  processCalldataABI: JSON.stringify([
    { type: "address", name: "collectNftRecipient" },
    { type: "bytes", name: "collectData" },
  ]),
  attributes: [],
});

const deployFlexCollectPublicationActionContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
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

  const { address: collectNFTImpl } = await get("FlexCollectNFT");

  await deploy("FlexCollectPublicationAction", {
    from: deployer,
    args: [lensHubAddress, moduleRegistry, collectNFTImpl, deployer],
    log: true,
    autoMine: true,
  });

  const action = await hre.ethers.getContract<FlexCollectPublicationAction>("FlexCollectPublicationAction", deployer);

  const metadataURI = await uploadMetadata(metadata);
  const setMetadataRes = await action.setModuleMetadataURI(metadataURI);
  console.log("set metadata URI: tx=", setMetadataRes.hash);

  await new Promise(resolve => setTimeout(resolve, 10000));

  const registered = await action.registerModule();
  console.log("registered open action: tx=", registered.hash);
};

export default deployFlexCollectPublicationActionContract;

deployFlexCollectPublicationActionContract.tags = ["FlexCollectPublicationAction"];
