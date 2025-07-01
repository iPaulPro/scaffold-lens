"use client";

import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { TransactionReceipt, parseEventLogs } from "viem";
import { useAccount, useWaitForTransactionReceipt } from "wagmi";
import { ContractInput, TxReceipt } from "~~/app/debug/_components/contract";
import { useScaffoldContract, useScaffoldWriteContract, useTargetNetwork } from "~~/hooks/scaffold-eth";
import { ZERO_ADDRESS } from "~~/utils/scaffold-eth/common";

const recentAccountsStorageKey = "scaffoldEth2.recentAccounts";

const ACCOUNT_CREATED_EVENT_ABI = [
  {
    type: "event",
    name: "Lens_Account_Created",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "metadataURI",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "accountManagers",
        type: "address[]",
        indexed: false,
        internalType: "address[]",
      },
      {
        name: "accountManagersPermissions",
        type: "tuple[]",
        indexed: false,
        internalType: "struct AccountManagerPermissions[]",
        components: [
          {
            name: "canExecuteTransactions",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "canTransferTokens",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "canTransferNative",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "canSetMetadataURI",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
      {
        name: "source",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "extraData",
        type: "tuple[]",
        indexed: false,
        internalType: "struct KeyValue[]",
        components: [
          {
            name: "key",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "value",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    anonymous: false,
  },
];

export function CreateAccount() {
  const { address, chain } = useAccount();
  const { targetNetwork } = useTargetNetwork();
  const writeDisabled = !chain || chain?.id !== targetNetwork.id;

  const [recentAccounts, setRecentAccounts] = useLocalStorage<string[]>(recentAccountsStorageKey, [], {
    initializeWithValue: false,
  });

  const [form, setForm] = useState<Record<string, any>>({
    owner: "",
    metadataURI: "",
    username: "",
  });
  const [displayedTxResult, setDisplayedTxResult] = useState<TransactionReceipt>();

  const { data: result, isPending, writeContractAsync } = useScaffoldWriteContract("LensFactory");
  const { data: LensNamespace } = useScaffoldContract({
    contractName: "LensGlobalNamespace",
  });

  const { data: txResult } = useWaitForTransactionReceipt({ hash: result });

  useEffect(() => {
    if (address) {
      form.owner = address;
    }
  }, [address, form]);

  useEffect(() => {
    setDisplayedTxResult(txResult);

    if (!txResult) return;

    const logs = parseEventLogs({
      abi: ACCOUNT_CREATED_EVENT_ABI,
      eventName: "Lens_Account_Created",
      logs: txResult.logs,
    });

    const log = logs[0];
    const account = "args" in log && (log.args as any).account;
    if (account) {
      setRecentAccounts([...recentAccounts, account]);
    }
  }, [txResult, recentAccounts, setRecentAccounts]);

  const handleWrite = async () => {
    const lensNamespaceAddress = LensNamespace?.address as `0x${string}` | undefined;
    if (!lensNamespaceAddress || !form.owner || !form.metadataURI || !form.username) {
      return;
    }

    await writeContractAsync({
      functionName: "createAccountWithUsernameFree",
      args: [
        lensNamespaceAddress,
        {
          metadataURI: form.metadataURI,
          owner: form.owner,
          accountManagers: [],
          accountManagersPermissions: [],
          accountCreationSourceStamp: {
            source: ZERO_ADDRESS,
            originalMsgSender: ZERO_ADDRESS,
            validator: ZERO_ADDRESS,
            nonce: 0n,
            deadline: 0n,
            signature: "0x" as `0x${string}`,
          },
          accountExtraData: [],
        },
        {
          username: form.username,
          createUsernameCustomParams: [],
          createUsernameRuleProcessingParams: [],
          assignUsernameCustomParams: [],
          assignRuleProcessingParams: [],
          usernameExtraData: [],
          unassignAccountRuleProcessingParams: [],
        },
      ],
    });
  };

  return (
    <div className="z-10">
      <div className="bg-base-100 rounded-3xl shadow-md shadow-secondary border border-base-300 flex flex-col mt-10 relative">
        <div className="h-[5rem] w-[10rem] bg-base-300 absolute self-start rounded-[22px] -top-[38px] -left-[1px] -z-10 py-[0.65rem] shadow-lg shadow-base-300">
          <div className="flex items-center justify-center space-x-2">
            <p className="my-0 text-sm">Create an Account</p>
          </div>
        </div>
        <div className="p-5">
          <div className="flex flex-col gap-3 py-2 first:pt-0 last:pb-1">
            <ContractInput
              setForm={updatedFormValue => {
                setDisplayedTxResult(undefined);
                setForm(updatedFormValue);
              }}
              form={form}
              stateObjectKey="owner"
              paramType={{
                type: "address",
                name: "owner",
              }}
            />
          </div>
          <div className="flex flex-col gap-3 py-2 first:pt-0 last:pb-1">
            <ContractInput
              setForm={updatedFormValue => {
                setDisplayedTxResult(undefined);
                setForm(updatedFormValue);
              }}
              form={form}
              stateObjectKey="metadataURI"
              paramType={{
                type: "string",
                name: "metadataURI",
              }}
            />
          </div>
          <div className="flex flex-col gap-3 py-2 first:pt-0 last:pb-1">
            <ContractInput
              setForm={updatedFormValue => {
                setDisplayedTxResult(undefined);
                setForm(updatedFormValue);
              }}
              form={form}
              stateObjectKey="username"
              paramType={{
                type: "string",
                name: "username",
              }}
            />
          </div>
          <div className="flex justify-between gap-2 pt-2">
            <div className="flex-grow basis-0">{displayedTxResult && <TxReceipt txResult={displayedTxResult} />}</div>
            <div
              className={`flex ${
                writeDisabled &&
                "tooltip before:content-[attr(data-tip)] before:right-[-10px] before:left-auto before:transform-none"
              }`}
              data-tip={`${writeDisabled && "Wallet not connected or in the wrong network"}`}
            >
              <button className="btn btn-secondary btn-sm" disabled={writeDisabled || isPending} onClick={handleWrite}>
                {isPending && <span className="loading loading-spinner loading-xs"></span>}
                Send 💸
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
