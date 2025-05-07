import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { usePublicClient } from "wagmi";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";

export const selectedAccountStorageKey = "scaffoldEth2.selectedAccount";
export const recentAccountsStorageKey = "scaffoldEth2.recentAccounts";

type RecentAccountsProps = {
  onAccountSelected?: (isAddingAccount: boolean) => void;
};

type AccountWithUsername = {
  account: string;
  username: string | undefined;
};

export function RecentAccounts({ onAccountSelected }: RecentAccountsProps) {
  const [accounts, setAccounts] = useState<AccountWithUsername[]>([]);
  const [isAddingAccount, setIsAddingAccount] = useState(false);

  const client = usePublicClient();
  const { data: lensNamespace, isLoading } = useDeployedContractInfo("LensGlobalNamespace");

  const [recentAccounts, setRecentAccounts] = useLocalStorage<string[]>(recentAccountsStorageKey, [], {
    initializeWithValue: false,
  });

  const [selectedAccount, setSelectedAccount] = useLocalStorage<string>(selectedAccountStorageKey, "", {
    initializeWithValue: false,
  });

  useEffect(() => {
    if (!lensNamespace || !client || isLoading) return;

    console.log("lensNamespace: ", lensNamespace);

    const fetchRecentAccounts = async () => {
      const res = await client.multicall({
        contracts: recentAccounts.map(account => ({
          address: lensNamespace.address,
          abi: lensNamespace.abi,
          functionName: "usernameOf",
          args: [account],
        })),
      });
      console.log("fetchRecentAccounts: res", res);
      const data = res.map((item, index) => {
        const username = item.result;
        return { account: recentAccounts[index], username };
      });
      setAccounts(data);
    };

    fetchRecentAccounts();
  }, [recentAccounts, lensNamespace, client, isLoading]);

  const onAccountClick = (account: string) => {
    setIsAddingAccount(false);
    setSelectedAccount(account);
    onAccountSelected?.(false);
  };

  const onAddAccountClick = () => {
    setIsAddingAccount(true);
    onAccountSelected?.(true);
  };

  const onRemoveAccountClick = (account: string) => {
    const newRecentAccounts = recentAccounts.filter(recent => recent !== account);
    setAccounts(accounts.filter(recent => recent.account !== account));
    setRecentAccounts(newRecentAccounts);
    if (selectedAccount === account) {
      setSelectedAccount("");
    }
  };

  return (
    <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 mb-6 space-y-1 py-4">
      <div className="flex">
        <div className="flex flex-col w-full gap-1">
          <div className="flex justify-between items-center">
            <span className="font-bold">Recent Accounts</span>
            {!isAddingAccount && (
              <button onClick={onAddAccountClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            )}
          </div>
          {accounts.length === 0 && <span className="text-gray-400">No recent accounts</span>}
          <div className="flex flex-col gap-1 items-center min-w-0">
            {accounts.map((recent, index) => (
              <div className="flex w-full justify-between items-center" key={index}>
                <button
                  className="text-sm truncate py-1 first:pt-2 text-start"
                  onClick={() => onAccountClick(recent.account)}
                >
                  {recent.username ? `@lens/${recent.username}` : recent.account}
                </button>
                <button onClick={() => onRemoveAccountClick(recent.account)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 cursor-pointer text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
