import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import { LENS_HUB } from "../config";

const deployCollectNFT: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const lensHubAddress = LENS_HUB;

  const factory = await ethers.getContractFactory("CollectPublicationAction");
  const initCode = factory.bytecode;
  console.log("deployCollectNFT: initCode", initCode);
  const salt = ethers.keccak256(ethers.toUtf8Bytes("something very unique"));
  const collectPublicationActionAddress = ethers.getCreate2Address(deployer, salt, ethers.keccak256(initCode));
  console.log("creating CollectNFT with CollectPublicationAction address:", collectPublicationActionAddress);

  await deploy("CollectNFT", {
    from: deployer,
    args: [lensHubAddress, collectPublicationActionAddress],
    log: true,
    autoMine: true,
  });
};

export default deployCollectNFT;

deployCollectNFT.tags = ["CollectNFT"];
