import React, { useEffect, useState } from "react";
import { formatUnits } from "viem";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { Address, IntegerInput } from "~~/components/scaffold-eth";
import { ERC20TokenContract } from "~~/hooks/scaffold-lens/useERC20Tokens";
import { notification } from "~~/utils/scaffold-eth";

interface ERC20TokenProps {
  token: ERC20TokenContract;
}

const TxnNotification = ({ message }: { message: string }) => {
  return (
    <div className={`flex flex-col ml-1 cursor-default`}>
      <p className="my-0">{message}</p>
    </div>
  );
};

const ERC20Token: React.FC<ERC20TokenProps> = ({ token }) => {
  const [formattedBalance, setFormattedBalance] = useState<string>();
  const [amountToMint, setAmountToMint] = useState<string>("");

  const { writeContract, isPending, isError, isSuccess } = useWriteContract();
  const { address } = useAccount();

  const { data: balance } = useReadContract({
    abi: token.contract.abi,
    address: token.contract.address,
    functionName: "balanceOf",
    args: [address],
    query: {
      refetchInterval: 2000,
    },
  });

  const { data: decimals } = useReadContract({
    abi: token.contract.abi,
    address: token.contract.address,
    functionName: "decimals",
  });

  const { data: symbol } = useReadContract({
    abi: token.contract.abi,
    address: token.contract.address,
    functionName: "symbol",
  });

  useEffect(() => {
    if (balance && decimals) {
      const formatted = formatUnits(balance as bigint, decimals as number);
      setFormattedBalance(formatted.toString());
    }
  }, [balance, decimals]);

  useEffect(() => {
    if (isSuccess) {
      notification.success(<TxnNotification message="Transaction completed successfully!" />, { icon: "🎉" });
      setAmountToMint("");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      notification.error(<TxnNotification message="Transaction failed." />, { icon: "🚨" });
    }
  }, [isError]);

  const mint = async () => {
    writeContract({
      abi: token.contract.abi,
      address: token.contract.address,
      functionName: "mint",
      args: [address, amountToMint],
    });
  };

  return (
    <div className="bg-base-300 border-base-300 border shadow-lg shadow-base-300 rounded-3xl p-6 mb-6 space-y-4 divide-y divide-base-100">
      <div className="flex flex-col space-y-1">
        <div className="font-bold">{token.contractName}</div>
        <Address address={token.contract.address} />
        <div className="text-sm">
          <span className="font-bold">Balance</span>: {formattedBalance}
          <span className="px-1 text-xs font-bold">{symbol as string}</span>
        </div>
      </div>
      <div className="flex flex-col space-y-2 pt-4">
        <IntegerInput
          value={amountToMint}
          placeholder="uint256 amount"
          onChange={value => {
            setAmountToMint(value.toString());
          }}
        />
        <button className="btn btn-secondary btn-sm" disabled={isPending} onClick={mint}>
          {isPending && <span className="loading loading-spinner loading-xs"></span>}
          Mint 💸
        </button>
      </div>
    </div>
  );
};

export default ERC20Token;
