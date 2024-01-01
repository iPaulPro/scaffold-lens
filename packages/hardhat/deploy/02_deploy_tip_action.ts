import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

import { module } from "@lens-protocol/metadata";
import { uploadMetadata } from "../lib/irys-service";

const metadata = module({
  name: "TipActionModule",
  title: "Tip Open Action",
  description: "Allow users to tip the creator of a publication",
  authors: ["dev@lens.xyz", "paul@paulburke.co", "martijn.vanhalen@gmail.com"],
  initializeCalldataABI: JSON.stringify([
    {
      type: "address",
      name: "tipReceiver",
    },
  ]),
  processCalldataABI: JSON.stringify([
    {
      type: "address",
      name: "currency",
    },
    {
      type: "uint256",
      name: "tipAmount",
    },
  ]),
  attributes: [],
});

const deployTipActionModuleContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  const lensHubAddress = process.env.LENS_HUB;

  let moduleRegistry: string | undefined;
  try {
    const { address } = await get("ModuleRegistry");
    moduleRegistry = address;
  } catch (e) {}

  if (!moduleRegistry) {
    moduleRegistry = process.env.MODULE_REGISTRY;
  }

  await deploy("TipActionModule", {
    from: deployer,
    args: [lensHubAddress, moduleRegistry],
    log: true,
    autoMine: true,
  });

  const tipPublicationAction = await hre.ethers.getContract("TipActionModule", deployer);

  const metadataURI = await uploadMetadata(metadata);
  await tipPublicationAction.setModuleMetadataURI(metadataURI);

  // Add a delay before calling registerModule to allow for propagation
  await new Promise(resolve => setTimeout(resolve, 10000));

  const registered = await tipPublicationAction.registerModule();
  console.log("registered open action: tx=", registered.hash);
};

export default deployTipActionModuleContract;

deployTipActionModuleContract.tags = ["TipActionModule"];
