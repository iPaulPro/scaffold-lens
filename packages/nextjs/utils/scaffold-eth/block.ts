import { Transaction, TransactionReceipt } from "viem";
import { ZkSyncBlock } from "viem/chains";

export type TransactionWithFunction = Transaction & {
  functionName?: string;
  functionArgs?: any[];
  functionArgNames?: string[];
  functionArgTypes?: string[];
};

type TransactionReceipts = {
  [key: string]: TransactionReceipt;
};

export type TransactionsTableProps = {
  blocks: ZkSyncBlock[];
  transactionReceipts: TransactionReceipts;
};
