import { ethers } from "hardhat";

const getNextContractAddress = async (senderAddress: string, next: number = 1): Promise<string> => {
  const nonce = await ethers.provider.getTransactionCount(senderAddress);
  const contractAddress = ethers.getCreateAddress({
    from: senderAddress,
    nonce: nonce + next,
  });
  return contractAddress;
};

export default getNextContractAddress;
