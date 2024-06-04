import { ethers } from "hardhat";

const getNextContractAddress = async (senderAddress: string, advance: number = 1): Promise<string> => {
  const nonce = await ethers.provider.getTransactionCount(senderAddress);
  const contractAddress = ethers.getCreateAddress({
    from: senderAddress,
    nonce: nonce + advance,
  });
  return contractAddress;
};

export default getNextContractAddress;
