import { PublicClient } from "viem";
import { OpenActionContract, Publication } from "~~/hooks/scaffold-lens";

export const getCollectModuleAddress = async (
  publicClient: PublicClient,
  publication: Publication,
  openAction: OpenActionContract,
) => {
  if (!openAction || !publicClient) return null;

  try {
    const collectData: any = await publicClient.readContract({
      address: openAction.contract.address,
      abi: openAction.contract.abi,
      functionName: "getCollectData",
      args: [publication.profileId, publication.pubId],
    });
    if ("collectModule" in collectData) {
      return collectData.collectModule;
    }
  } catch (e) {
    // will throw if the action doesn't have a collect module
  }
  return null;
};
