import { ethers } from "hardhat";

const getNextContractAddress = async (senderAddress: string): Promise<string> => {
  const nonce = await ethers.provider.getTransactionCount(senderAddress);
  const contractAddress = ethers.getCreateAddress({
    from: senderAddress,
    nonce: nonce + 1, // Use the next nonce to predict the next contract address
  });
  return contractAddress;
};

export default getNextContractAddress;
