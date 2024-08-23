"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePublicClient } from "wagmi";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useOutsideClick } from "~~/hooks/scaffold-eth";
import { CollectModuleContract, useCollectModules } from "~~/hooks/scaffold-lens";

interface CollectModuleSelectorProps {
  openActionModuleAddress: string;
  collectModuleSelected: (contract: CollectModuleContract) => void;
}

const CollectModuleSelector: React.FC<CollectModuleSelectorProps> = ({
  openActionModuleAddress,
  collectModuleSelected,
}) => {
  const [selectedModule, setSelectedModule] = useState<CollectModuleContract>();
  const [compatibleModules, setCompatibleModules] = useState<CollectModuleContract[]>();
  const { collectModules } = useCollectModules();

  const publicClient = usePublicClient();

  useEffect(() => {
    if (!collectModules || !publicClient) return;

    const compatModules: CollectModuleContract[] = [];
    const getCompatibleModules = async () => {
      for (const collectModule of collectModules) {
        const actionModule = await publicClient.readContract({
          address: collectModule.contract.address,
          abi: collectModule.contract.abi,
          functionName: "ACTION_MODULE",
        });
        if (actionModule === openActionModuleAddress) {
          compatModules.push(collectModule);
        }
      }
      setCompatibleModules(compatModules);
    };
    getCompatibleModules();
  }, [collectModules, openActionModuleAddress]);

  const dropdownRef = useRef<HTMLDetailsElement>(null);
  const closeDropdown = () => {
    dropdownRef.current?.removeAttribute("open");
  };
  useOutsideClick(dropdownRef, closeDropdown);

  const onModuleClick = (module: CollectModuleContract) => {
    setSelectedModule(module);
    collectModuleSelected(module);
    closeDropdown();
  };

  if (!compatibleModules?.length) {
    return null;
  }

  return (
    <>
      <details ref={dropdownRef} className="dropdown leading-3">
        <summary
          tabIndex={0}
          className="w-fit flex justify-between btn btn-secondary btn-sm shadow-md dropdown-toggle gap-0 !h-auto"
        >
          <span className="pr-2">{selectedModule ? selectedModule.contractName : "Select Collect Module"}</span>
          <ChevronDownIcon className="h-6 w-4 ml-2 sm:ml-0" />
        </summary>
        <ul
          tabIndex={0}
          className="dropdown-content menu z-[2] p-2 mt-2 shadow-center shadow-accent bg-base-200 rounded-box gap-1 max-h-44 overflow-y-scroll block"
        >
          {compatibleModules?.map((module, index) => (
            <li
              key={index}
              onClick={() => onModuleClick(module)}
              className={`cursor-pointer hover:bg-accent p-2 rounded-box ${selectedModule?.contract.address === module.contract.address ? "bg-accent" : ""}`}
            >
              {module.contractName}
            </li>
          ))}
        </ul>
      </details>
    </>
  );
};

export default CollectModuleSelector;
