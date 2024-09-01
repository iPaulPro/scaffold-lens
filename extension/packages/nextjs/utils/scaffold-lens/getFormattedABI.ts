import { AbiParameter } from "abitype";

/**
 * Formats the ABI to be compatible with viem
 * @param metadata - The metadata to format
 */
export const getFormattedABI = (metadata: AbiParameter[]) => {
  return metadata.map(param => ({
    ...param,
    // viem only supports standard tuple expressions
    type: param.type.replace(/tuple\([^)]*\)/, "tuple"),
  }));
};
