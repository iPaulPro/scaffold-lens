import { useEffect, useReducer, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { usePublicClient } from "wagmi";
import { recentAccountsStorageKey, selectedAccountStorageKey } from "~~/app/accounts/_components/RecentAccounts";
import { ContractInput } from "~~/app/debug/_components/contract";
import { ContractReadMethods } from "~~/app/debug/_components/contract/ContractReadMethods";
import { ContractVariables } from "~~/app/debug/_components/contract/ContractVariables";
import { ContractWriteMethods } from "~~/app/debug/_components/contract/ContractWriteMethods";
import { Address, Balance } from "~~/components/scaffold-eth";
import { useDeployedContractInfo, useNetworkColor, useScaffoldContract, useTargetNetwork } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";
import { Contract, GenericContract } from "~~/utils/scaffold-eth/contract";

export const DebugAccount = ({ addingAccount }: { addingAccount: boolean }) => {
  const [refreshDisplayVariables, triggerRefreshDisplayVariables] = useReducer(value => !value, false);
  const [contract, setContract] = useState<GenericContract | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddingAccount, setIsAddingAccount] = useState(addingAccount);
  const [form, setForm] = useState<Record<string, any>>({
    address: "",
    username: "",
  });

  const { data: deployedContractData } = useDeployedContractInfo("AccountImpl");
  const { data: lensNamespace } = useScaffoldContract({
    contractName: "LensNamespace",
  });

  const { targetNetwork } = useTargetNetwork();
  const networkColor = useNetworkColor();
  const publicClient = usePublicClient();

  const [recentAccounts, setRecentAccounts] = useLocalStorage<string[]>(recentAccountsStorageKey, [], {
    initializeWithValue: false,
  });

  const [selectedAccount, setSelectedAccount] = useLocalStorage<string>(selectedAccountStorageKey, "", {
    initializeWithValue: false,
  });

  useEffect(() => {
    if (!deployedContractData || !selectedAccount) return;
    setIsLoading(true);
    setContract({
      address: selectedAccount,
      abi: deployedContractData.abi,
    });
    setIsLoading(false);
  }, [selectedAccount, deployedContractData]);

  useEffect(() => {
    if (!lensNamespace || !selectedAccount) return;
    lensNamespace.read.usernameOf([selectedAccount]).then(setUsername);
  }, [lensNamespace, selectedAccount]);

  const addAccount = async () => {
    if (!deployedContractData || !lensNamespace || !publicClient) {
      return;
    }

    let account = form.account;
    if (account) {
      try {
        await publicClient.readContract({
          address: account,
          abi: deployedContractData?.abi,
          functionName: "owner",
        });
      } catch {
        notification.error("No account found at that address");
        return;
      }
    }

    if (form.username && lensNamespace) {
      try {
        account = await lensNamespace.read.accountOf([form.username]);
      } catch {
        notification.error("No account found for that username");
        return;
      }
    }

    const newRecentAccounts = [account, ...recentAccounts];
    setRecentAccounts(newRecentAccounts);
    setIsAddingAccount(false);
    setSelectedAccount(account);
  };

  if (isAddingAccount || (!isLoading && (!contract || !selectedAccount))) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-6 px-6 lg:px-10 lg:gap-12 w-full max-w-7xl my-0">
        <div className="col-span-5 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="col-span-1 flex flex-col gap-6"></div>
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
            <div className="z-10 flex flex-col gap-4">
              <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col mt-10 relative">
                <div className="h-[5rem] w-[10rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
                  <div className="flex items-center justify-center space-x-2">
                    <p className="my-0 text-sm">Add an Account</p>
                  </div>
                </div>
                <div className="p-5">
                  <ContractInput
                    setForm={updatedFormValue => {
                      setForm(updatedFormValue);
                    }}
                    form={form}
                    stateObjectKey="account"
                    paramType={{
                      type: "address",
                      name: "account",
                    }}
                  />
                  <div className="flex justify-end gap-2 pt-2">
                    <button type="button" className="btn btn-secondary btn-sm" onClick={addAccount}>
                      Add
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col mt-10 relative">
                <div className="h-[5rem] w-[10rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
                  <div className="flex items-center justify-center space-x-2">
                    <p className="my-0 text-sm">Add an Account</p>
                  </div>
                </div>
                <div className="p-5">
                  <ContractInput
                    setForm={updatedFormValue => {
                      setForm(updatedFormValue);
                    }}
                    form={form}
                    stateObjectKey="username"
                    paramType={{
                      type: "string",
                      name: "username",
                    }}
                  />
                  <div className="flex justify-end gap-2 pt-2">
                    <button type="button" className="btn btn-secondary btn-sm" onClick={addAccount}>
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!contract) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 px-6 lg:px-10 lg:gap-12 w-full max-w-7xl my-0">
      <div className="col-span-5 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        <div className="col-span-1 flex flex-col gap-6">
          <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 space-y-1 py-4">
            <div className="flex flex-col gap-1">
              <span className="font-bold">Account</span>
              <Address address={contract.address} />
              <div className="flex gap-1 items-center">
                <span className="font-bold text-sm">Balance:</span>
                <Balance address={contract.address} className="px-0 h-1.5 min-h-[0.375rem]" />
              </div>
            </div>
            {targetNetwork && (
              <p className="my-0 text-sm">
                <span className="font-bold">Network</span>:{" "}
                <span style={{ color: networkColor }}>{targetNetwork.name}</span>
              </p>
            )}
          </div>
          {username && (
            <div className="bg-base-300 rounded-3xl px-6 lg:px-8 py-4 shadow-lg shadow-base-300">
              <div className="flex flex-col gap-1">
                <h3 className="font-medium text-lg mb-0 break-all">username</h3>
                <div className="text-gray-500 font-medium flex flex-col items-start">@lens/{username}</div>
              </div>
            </div>
          )}
          <div className="bg-base-300 rounded-3xl px-6 lg:px-8 py-4 shadow-lg shadow-base-300">
            <ContractVariables
              refreshDisplayVariables={refreshDisplayVariables}
              deployedContractData={contract as Contract<"AccountImpl">}
            />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
          <div className="z-10">
            <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col mt-10 relative">
              <div className="h-[5rem] w-[5.5rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
                <div className="flex items-center justify-center space-x-2">
                  <p className="my-0 text-sm">Read</p>
                </div>
              </div>
              <div className="p-5 divide-y divide-base-300">
                <ContractReadMethods deployedContractData={contract as Contract<"AccountImpl">} />
              </div>
            </div>
          </div>
          <div className="z-10">
            <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col mt-10 relative">
              <div className="h-[5rem] w-[5.5rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
                <div className="flex items-center justify-center space-x-2">
                  <p className="my-0 text-sm">Write</p>
                </div>
              </div>
              <div className="p-5 divide-y divide-base-300">
                <ContractWriteMethods
                  deployedContractData={contract as Contract<"AccountImpl">}
                  onChange={triggerRefreshDisplayVariables}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
