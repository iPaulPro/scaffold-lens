import { LensFrameRequest, LensFrameResponse } from "frames.js/lens";

export const getLocalLensFrameMessage = async (frameActionPayload: LensFrameRequest): Promise<LensFrameResponse> => ({
  ...frameActionPayload.untrustedData,
  isValid: true,
  async walletAddress() {
    return frameActionPayload.untrustedData.identityToken; // the identityToken is the wallet address when running locally
  },
});
