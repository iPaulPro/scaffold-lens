"use client";

import React, { useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useOutsideClick } from "~~/hooks/scaffold-eth";
import { OpenActionContract, useOpenActions } from "~~/hooks/scaffold-lens";

interface OpenActionProps {
  selectedActionModule: OpenActionContract | undefined;
  setSelectedActionModule: (contract: OpenActionContract | undefined) => void;
}

export const OpenActionsSelector: React.FC<OpenActionProps> = ({ selectedActionModule, setSelectedActionModule }) => {
  const { openActions } = useOpenActions();

  const dropdownRef = useRef<HTMLDetailsElement>(null);
  const closeDropdown = () => {
    dropdownRef.current?.removeAttribute("open");
  };
  useOutsideClick(dropdownRef, closeDropdown);

  const onActionClick = (action: OpenActionContract) => {
    setSelectedActionModule(action);
    closeDropdown();
  };

  return (
    <>
      <details ref={dropdownRef} className="dropdown leading-3">
        <summary
          tabIndex={0}
          className="w-fit flex justify-between btn btn-secondary btn-sm shadow-md dropdown-toggle gap-0 !h-auto"
        >
          <span className="pr-2">
            {selectedActionModule ? selectedActionModule.contractName : "Select Open Action"}
          </span>
          <ChevronDownIcon className="h-6 w-4 ml-2 sm:ml-0" />
        </summary>
        <ul
          tabIndex={0}
          className="dropdown-content menu z-[2] p-2 mt-2 shadow-center shadow-accent bg-base-200 rounded-box gap-1 max-h-44 overflow-y-scroll block"
        >
          <li
            key="no-module"
            onClick={() => {
              setSelectedActionModule(undefined);
              closeDropdown();
            }}
            className={`cursor-pointer hover:bg-accent p-2 rounded-box ${!selectedActionModule ? "bg-accent" : ""}`}
          >
            No Action
          </li>
          {openActions?.map((action, index) => (
            <li
              key={index}
              onClick={() => onActionClick(action)}
              className={`cursor-pointer hover:bg-accent p-2 rounded-box ${
                selectedActionModule?.contract.address === action.contract.address ? "bg-accent" : ""
              }`}
            >
              {action.contractName}
            </li>
          ))}
        </ul>
      </details>
    </>
  );
};
