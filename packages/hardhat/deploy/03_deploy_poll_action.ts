import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

import { module } from "@lens-protocol/metadata";
import { uploadMetadata } from "../lib/irys-service";

const metadata = module({
  name: "EasPollActionModule",
  title: "EAS Poll Open Action",
  description: "Transforms a Lens Publication into a poll using Ethereum Attestation Service (EAS) for voting.",
  authors: ["paul@paulburke.co"],
  initializeCalldataABI: JSON.stringify([
    {
      type: "tuple",
      name: "poll",
    },
  ]),
  processCalldataABI: JSON.stringify([
    {
      type: "tuple",
      name: "vote",
    },
    {
      type: "tuple",
      name: "signature",
    },
    {
      type: "uint64",
      name: "deadline",
    },
  ]),
  attributes: [],
});

const deployEasPollActionModuleContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  const lensHubAddress = process.env.LENS_HUB;
  const schema = process.env.EAS_SCHEMA;

  let moduleRegistry: string | undefined;
  try {
    const { address } = await get("MockModuleRegistry");
    moduleRegistry = address;
  } catch (e) {}
  if (!moduleRegistry) {
    moduleRegistry = process.env.MODULE_REGISTRY;
  }

  let eas: string | undefined;
  try {
    const { address } = await get("MockEAS");
    eas = address;
  } catch (e) {}
  if (!eas) {
    eas = process.env.EAS_ADDRESS;
  }

  // Deploy the EasPollActionModule contract
  await deploy("EasPollActionModule", {
    from: deployer,
    args: [lensHubAddress, moduleRegistry, eas, schema],
    log: true,
    autoMine: true,
  });

  const pollAction = await hre.ethers.getContract<Contract>("EasPollActionModule", deployer);

  const metadataURI = await uploadMetadata(metadata);
  await pollAction.setModuleMetadataURI(metadataURI);

  await new Promise(resolve => setTimeout(resolve, 10000));

  const registered = await pollAction.registerModule();
  console.log("registered open action: tx=", registered.hash);
};

export default deployEasPollActionModuleContract;

deployEasPollActionModuleContract.tags = ["EasPollActionModule"];
