import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import { LENS_HUB } from "../config";
import { getContractAddress } from "@ethersproject/address";

const deployCollectNFT: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const [owner] = await ethers.getSigners();
  const nonce = await owner.getNonce();

  const collectPublicationActionAddress = getContractAddress({
    from: owner.address,
    nonce: nonce + 1,
  });

  await deploy("CollectNFT", {
    from: deployer,
    args: [LENS_HUB, collectPublicationActionAddress],
    log: true,
    autoMine: true,
  });
};

export default deployCollectNFT;

deployCollectNFT.tags = ["CollectNFT"];
