import { getLensFrameMessage, isLensFrameActionPayload } from "frames.js/lens";
import { openframes } from "frames.js/middleware";
import { createFrames } from "frames.js/next";

export const frames = createFrames({
  // basePath must point to the route of initial frame
  // in this case it will reside in app/frames/route.tsx therefore /frames
  basePath: "/frames",
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

          return getLensFrameMessage(body);
        },
      },
    }),
  ],
});
