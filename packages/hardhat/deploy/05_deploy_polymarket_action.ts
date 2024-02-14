import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

import { module } from "@lens-protocol/metadata";
import { uploadMetadata } from "../lib/irys-service";

const metadata = module({
  name: "PolymarketAttestActionModule",
  title: "Polymarket Attestation Open Action Module",
  description: "Verifies Polymarket trades made from within publications on Lens Protocol",
  authors: ["paul@paulburke.co"],
  initializeCalldataABI: JSON.stringify([
    {
      type: "bytes32",
      name: "questionId",
    },
  ]),
  processCalldataABI: JSON.stringify([
    {
      type: "tuple(uint256,address,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint8,uint8,bytes)",
      name: "order",
      components: [
        { name: "salt", type: "uint256" },
        { name: "maker", type: "address" },
        { name: "signer", type: "address" },
        { name: "taker", type: "address" },
        { name: "tokenId", type: "uint256" },
        { name: "makerAmount", type: "uint256" },
        { name: "takerAmount", type: "uint256" },
        { name: "expiration", type: "uint256" },
        { name: "nonce", type: "uint256" },
        { name: "feeRateBps", type: "uint256" },
        { name: "side", type: "uint8" },
        { name: "signatureType", type: "uint8" },
        { name: "signature", type: "bytes" },
      ],
    },
  ]),
  attributes: [],
});

const deployPolymarketActionModuleContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  const lensHubAddress = process.env.LENS_HUB;

  let moduleRegistry: string | undefined;
  try {
    const { address } = await get("MockModuleRegistry");
    moduleRegistry = address;
  } catch (e) {}

  if (!moduleRegistry) {
    moduleRegistry = process.env.MODULE_REGISTRY;
  }

  let ctfExchange = process.env.CTF_EXCHANGE;
  try {
    const { address } = await get("MockCtfExchange");
    ctfExchange = address;
  } catch (e) {}

  let collateralToken = process.env.COLLATERAL_TOKEN;
  try {
    const { address } = await get("TestToken");
    collateralToken = address;
  } catch (e) {}

  let conditionalTokens = process.env.CONDITIONAL_TOKENS;
  try {
    const { address } = await get("MockConditionalTokens");
    conditionalTokens = address;
  } catch (e) {}

  let umaCtfAdapter = process.env.UMA_CTF_ADAPTER;
  try {
    const { address } = await get("MockUmaCtfAdapter");
    umaCtfAdapter = address;
  } catch (e) {}

  console.log(
    "deploying with lensHubAddress",
    lensHubAddress,
    "moduleRegistry",
    moduleRegistry,
    "ctfExchange",
    ctfExchange,
    "collateralToken",
    collateralToken,
    "conditionalTokens",
    conditionalTokens,
    "umaCtfAdapter",
    umaCtfAdapter,
  );

  await deploy("PolymarketAttestActionModule", {
    from: deployer,
    args: [lensHubAddress, moduleRegistry, ctfExchange, collateralToken, conditionalTokens, umaCtfAdapter],
    log: true,
    autoMine: true,
  });

  const actionContract = await hre.ethers.getContract("PolymarketAttestActionModule", deployer);

  const metadataURI = await uploadMetadata(metadata);
  await actionContract.setModuleMetadataURI(metadataURI);

  // Add a delay before calling registerModule to allow for propagation
  await new Promise(resolve => setTimeout(resolve, 10000));

  const registered = await actionContract.registerModule();
  console.log("registered open action: tx=", registered.hash);
};

export default deployPolymarketActionModuleContract;

deployPolymarketActionModuleContract.tags = ["PolymarketAttestActionModule"];
