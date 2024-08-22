import { parseAbiItem } from "viem";
import { usePublicClient, useReadContract } from "wagmi";

export const useOwnedTokens = (address: string | undefined, contractAddress: `0x${string}`, abi: any) => {
  const publicClient = usePublicClient();

  const getOwnedTokens = async () => {
    if (!address || !publicClient) return [];

    const transferEvent = parseAbiItem(
      "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
    );

    const logs = await publicClient.getLogs({
      address: contractAddress,
      event: transferEvent,
      fromBlock: "earliest",
      toBlock: "latest",
    });

    const ownedTokens = new Set<bigint>();

    for (const log of logs) {
      const { from, to, tokenId } = log.args as { from: string; to: string; tokenId: bigint };

      if (to.toLowerCase() === address.toLowerCase()) {
        ownedTokens.add(tokenId);
      }
      if (from.toLowerCase() === address.toLowerCase()) {
        ownedTokens.delete(tokenId);
      }
    }

    return Array.from(ownedTokens);
  };

  const { data: balanceOf } = useReadContract({
    address: contractAddress,
    abi: abi,
    functionName: "balanceOf",
    args: [address!],
  });

  return { getOwnedTokens, balanceOf };
};
