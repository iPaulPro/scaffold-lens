import { getLensFrameMessage, isLensFrameActionPayload } from "frames.js/lens";
import { openframes } from "frames.js/middleware";
import { createFrames } from "frames.js/next";
import { hardhat } from "viem/chains";
import { getLocalLensFrameMessage } from "~~/utils/scaffold-lens";

export const frames = createFrames({
  // basePath must point to the route of initial frame
  // in this case it will reside in app/frames/serve/route.tsx therefore /frames/serve
  basePath: "/frames/serve",
  middleware: [
    openframes({
      clientProtocol: {
        id: "lens",
        version: "1.0.0",
      },
      handler: {
        isValidPayload: body => isLensFrameActionPayload(body),
        getFrameMessage: async body => {
          if (!isLensFrameActionPayload(body)) {
            return undefined;
          }

          if ("chainId" in body.untrustedData && body.untrustedData.chainId === hardhat.id) {
            return getLocalLensFrameMessage(body);
          }

          return getLensFrameMessage(body, {
            environment: "development",
          });
        },
      },
    }),
  ],
});
