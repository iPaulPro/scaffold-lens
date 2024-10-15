import { hexZeroPad, hexlify } from "ethers/lib/utils";

export const toHex = (value: bigint | number): string => {
  const hex = hexlify(value);
  if (hex.length % 2 !== 0) {
    return hexZeroPad(hex, (hex.length - 1) / 2 + 1);
  }
  return hex;
};
