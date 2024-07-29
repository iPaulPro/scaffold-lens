"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Hash, Log, Transaction, TransactionReceipt, decodeEventLog, formatEther, formatUnits } from "viem";
import { hardhat } from "viem/chains";
import { usePublicClient } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { getAllAbis } from "~~/utils/getAllAbis";
import { decodeTransactionData, getFunctionDetails } from "~~/utils/scaffold-eth";
import { replacer } from "~~/utils/scaffold-eth/common";

const TransactionComp = ({ txHash }: { txHash: Hash }) => {
  const client = usePublicClient({ chainId: hardhat.id });
  const router = useRouter();
  const [transaction, setTransaction] = useState<Transaction>();
  const [receipt, setReceipt] = useState<TransactionReceipt>();
  const [functionCalled, setFunctionCalled] = useState<string>();
  const [decodedLogs, setDecodedLogs] = useState<any[]>([]);

  const { targetNetwork } = useTargetNetwork();

  async function decodeLogs(logs: Log<bigint, number, false>[]) {
    const allAbis = getAllAbis(); // Get all ABIs once

    const decodedLogs = await Promise.all(
      logs.map(async log => {
        let decodedLog: any;

        for (const abi of allAbis) {
          try {
            decodedLog = decodeEventLog({
              abi: [abi], // Try with each ABI
              data: log.data,
              topics: log.topics,
            });
            break;
          } catch (error) {
            // Continue trying with other ABIs
          }
        }

        if (!decodedLog) {
          console.error("Failed to decode log with provided ABIs");
          return log; // Return the original log if decoding fails
        }

        return decodedLog;
      }),
    );

    setDecodedLogs(decodedLogs);
  }

  useEffect(() => {
    if (txHash && client) {
      const fetchTransaction = async () => {
        const tx = await client.getTransaction({ hash: txHash });
        const receipt = await client.getTransactionReceipt({ hash: txHash });

        const transactionWithDecodedData = decodeTransactionData(tx);
        setTransaction(transactionWithDecodedData);
        setReceipt(receipt);

        const functionCalled = transactionWithDecodedData.input.substring(0, 10);
        setFunctionCalled(functionCalled);

        decodeLogs(receipt.logs);
      };

      fetchTransaction();
    }
  }, [client, txHash]);

  return (
    <div className="container mx-auto mt-10 mb-20 px-10 md:px-0">
      <button className="btn btn-sm btn-primary" onClick={() => router.back()}>
        Back
      </button>
      {transaction ? (
        <div className="overflow-x-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-primary-content">Transaction Details</h2>{" "}
          <table className="table rounded-lg bg-base-100 w-full shadow-lg md:table-lg table-md">
            <tbody>
              <tr>
                <td>
                  <strong>Transaction Hash:</strong>
                </td>
                <td>{transaction.hash}</td>
              </tr>
              <tr>
                <td>
                  <strong>Block Number:</strong>
                </td>
                <td>{Number(transaction.blockNumber)}</td>
              </tr>
              <tr>
                <td>
                  <strong>From:</strong>
                </td>
                <td>
                  <Address address={transaction.from} format="long" />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>To:</strong>
                </td>
                <td>
                  {!receipt?.contractAddress ? (
                    transaction.to && <Address address={transaction.to} format="long" />
                  ) : (
                    <span>
                      Contract Creation:
                      <Address address={receipt.contractAddress} format="long" />
                    </span>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Value:</strong>
                </td>
                <td>
                  {formatEther(transaction.value)} {targetNetwork.nativeCurrency.symbol}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Function called:</strong>
                </td>
                <td>
                  <div className="w-full md:max-w-[600px] lg:max-w-[800px] overflow-x-auto whitespace-nowrap">
                    {functionCalled === "0x" ? (
                      "This transaction did not call any function."
                    ) : (
                      <>
                        <span className="mr-2">{getFunctionDetails(transaction)}</span>
                        <span className="badge badge-primary font-bold">{functionCalled}</span>
                      </>
                    )}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Gas Price:</strong>
                </td>
                <td>{formatUnits(transaction.gasPrice || 0n, 9)} Gwei</td>
              </tr>
              <tr>
                <td>
                  <strong>Data:</strong>
                </td>
                <td className="form-control">
                  <textarea readOnly value={transaction.input} className="p-0 textarea-primary bg-inherit h-[150px]" />
                </td>
              </tr>
              <tr>
                <td className="flex justify-start">
                  <strong>Logs:</strong>
                </td>
                <td>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Event Name</th>
                        <th>Arguments</th>
                      </tr>
                    </thead>
                    {decodedLogs?.map((log: { eventName: string; args: any }, i: number) => (
                      <tr key={i}>
                        <td>{log.eventName}</td>
                        <td>{JSON.stringify(log.args, replacer, 4)}</td>
                      </tr>
                    ))}
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-2xl text-base-content">Loading...</p>
      )}
    </div>
  );
};

export default TransactionComp;
