import { useCallback, useEffect, useMemo, useState } from "react";
import { readContract } from "@wagmi/core";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
import { useProfile } from "~~/hooks/scaffold-lens/useProfile";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";

export const useHandle = () => {
  const [handle, setHandle] = useState<string | undefined>();

  const { data: lensHandles } = useDeployedContractInfo("LensHandles");
  const { data: tokenHandleRegistry } = useDeployedContractInfo("TokenHandleRegistry");

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
