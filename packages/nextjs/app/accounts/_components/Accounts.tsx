"use client";

import { useEffect, useState } from "react";
import { CreateAccount } from "~~/app/accounts/_components/CreateAccount";
import { CreateAccountMetadata } from "~~/app/accounts/_components/CreateAccountMetadata";
import { DebugAccount } from "~~/app/accounts/_components/DebugAccount";
import { RecentAccounts } from "~~/app/accounts/_components/RecentAccounts";

export function Accounts() {
  const [isCreatingAccount, setIsCreatingAccount] = useState(true);
  const [isAddingAccount, setIsAddingAccount] = useState(false);

  useEffect(() => {
    if (isCreatingAccount) {
      setIsAddingAccount(false);
    }
  }, [isCreatingAccount]);

  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      <div className="flex flex-row gap-2 w-full max-w-7xl pb-1 px-6 lg:px-10 flex-wrap">
        <button
          className={
            "btn btn-secondary btn-sm font-light hover:border-transparent" +
            (isCreatingAccount ? " bg-base-300 hover:bg-base-300 no-animation" : " bg-base-100 hover:bg-secondary")
          }
          onClick={() => setIsCreatingAccount(true)}
        >
          Create an Account
        </button>
        <button
          className={
            "btn btn-secondary btn-sm font-light hover:border-transparent" +
            (!isCreatingAccount ? " bg-base-300 hover:bg-base-300 no-animation" : " bg-base-100 hover:bg-secondary")
          }
          onClick={() => setIsCreatingAccount(false)}
        >
          Debug Account
        </button>
      </div>
      {isCreatingAccount ? (
        <div className="grid grid-cols-1 lg:grid-cols-6 px-6 lg:px-10 lg:gap-12 w-full max-w-7xl my-0">
          <div className="col-span-5 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="col-span-1 flex flex-col">
              <RecentAccounts
                onAccountSelected={isAddingAccount => {
                  setIsAddingAccount(isAddingAccount);
                  setIsCreatingAccount(false);
                }}
              />
            </div>
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
              <CreateAccountMetadata />
              <CreateAccount />
            </div>
          </div>
        </div>
      ) : (
        <DebugAccount addingAccount={isAddingAccount} />
      )}
    </div>
  );
}
