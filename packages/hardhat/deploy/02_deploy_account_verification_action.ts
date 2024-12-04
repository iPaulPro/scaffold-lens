import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Deployer } from "@matterlabs/hardhat-zksync";
import { verifyZkDeployedContract } from "../lib/lens/utils";

const deployTestToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const wallet = await hre.deployer.getWallet(0);

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);

  // Load contract
  const artifact = await deployer.loadArtifact("AccountVerificationAction");

  const contract = await deployer.deploy(artifact);
  const address = await contract.getAddress();
  console.log("AccountVerificationAction deployed to:", address);

  const chainId = await hre.getChainId();
  if (chainId !== "260") {
    await verifyZkDeployedContract({
      address,
      artifact,
    });
  }
};

export default deployTestToken;

deployTestToken.tags = ["AccountVerificationAction"];
