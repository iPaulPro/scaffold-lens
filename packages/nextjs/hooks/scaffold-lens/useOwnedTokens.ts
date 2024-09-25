import { useCallback, useMemo, useRef, useState } from "react";
import { parseAbiItem } from "viem";
import { usePublicClient, useWatchContractEvent } from "wagmi";

export const useOwnedTokens = (address: string | undefined, contractAddress: `0x${string}` | undefined, abi: any) => {
  const [ownedTokens, setOwnedTokens] = useState<bigint[]>([]);
  const publicClient = usePublicClient();
  const processedEvents = useRef<Set<string>>(new Set());

  useMemo(() => {
    if (!publicClient) return;

    if (!address) {
      setOwnedTokens([]);
      return;
    }

    const transferEvent = parseAbiItem(
      "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
    );

    const getOwnedTokens = async () => {
      if (!contractAddress) return;
      const logs = await publicClient.getLogs({
        address: contractAddress,
        event: transferEvent,
        fromBlock: "earliest",
        toBlock: "latest",
      });

      const tokenSet = new Set<bigint>();
      for (const log of logs) {
        const { from, to, tokenId } = log.args as { from: string; to: string; tokenId: bigint };

        if (to.toLowerCase() === address.toLowerCase()) {
          tokenSet.add(tokenId);
        }
        // Remove any tokens that were transferred away
        if (from.toLowerCase() === address.toLowerCase()) {
          tokenSet.delete(tokenId);
        }
      }
      setOwnedTokens(Array.from(tokenSet));
    };

    getOwnedTokens();
  }, [address, publicClient, contractAddress]);

  const handleTransferEvent = useCallback(
    (logs: any[]) => {
      for (const log of logs) {
        const eventKey = `${log.transactionHash}-${log.logIndex}`;
        if (processedEvents.current.has(eventKey)) {
          continue;
        }

        processedEvents.current.add(eventKey);

        const { from, to, tokenId } = log.args as { from: string; to: string; tokenId: bigint };

        setOwnedTokens(prevTokens => {
          const newTokens = new Set(prevTokens);
          if (to.toLowerCase() === address?.toLowerCase()) {
            newTokens.add(tokenId);
          }
          if (from.toLowerCase() === address?.toLowerCase()) {
            newTokens.delete(tokenId);
          }
          return Array.from(newTokens);
        });
      }
    },
    [address],
  );

  useWatchContractEvent({
    address: contractAddress,
    abi,
    eventName: "Transfer",
    onLogs: handleTransferEvent,
  });

  return useMemo(() => ({ ownedTokens }), [ownedTokens]);
};
