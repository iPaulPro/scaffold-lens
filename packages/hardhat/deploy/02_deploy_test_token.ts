import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync";

const deployTestToken = async function (hre: HardhatRuntimeEnvironment) {
  const wallet = await hre.deployer.getWallet(0);

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);

  // Load contract
  const artifact = await deployer.loadArtifact("TestToken");

  const contract = await deployer.deploy(artifact);
  console.log("TestToken deployed to:", await contract.getAddress());
};

export default deployTestToken;

deployTestToken.tags = ["TestToken"];
