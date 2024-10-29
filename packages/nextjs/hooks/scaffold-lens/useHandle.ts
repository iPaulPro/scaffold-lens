import { useCallback, useEffect, useMemo, useState } from "react";
import { readContract } from "@wagmi/core";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import { useProfile } from "~~/hooks/scaffold-lens/useProfile";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";
import { Contract, contracts } from "~~/utils/scaffold-eth/contract";

export const useHandle = () => {
  const [handle, setHandle] = useState<string | undefined>();

  const { targetNetwork } = useTargetNetwork();
  const lensHandles = contracts?.[targetNetwork.id]?.["LensHandles"] as Contract<"LensHandles">;
  const tokenHandleRegistry = contracts?.[targetNetwork.id]?.["tokenHandleRegistry"] as Contract<"TokenHandleRegistry">;

  const { profileId } = useProfile();

  const getHandle = useCallback(
    async (tokenId: bigint) => {
      if (!lensHandles || !tokenHandleRegistry) return;
      const handleId = await readContract(wagmiConfig, {
        abi: tokenHandleRegistry.abi,
        address: tokenHandleRegistry.address,
        functionName: "getDefaultHandle",
        args: [tokenId],
      });

      return await readContract(wagmiConfig, {
        abi: lensHandles.abi,
        address: lensHandles.address,
        functionName: "getLocalName",
        args: [handleId],
      });
    },
    [lensHandles, tokenHandleRegistry],
  );

  useEffect(() => {
    if (!profileId) return;
    getHandle(profileId).then(setHandle);
  }, [profileId, getHandle]);

  return useMemo(() => ({ handle }), [handle]);
};
