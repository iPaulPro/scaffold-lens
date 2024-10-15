"use client";

import React from "react";
import { useLensFrameContext } from "@frames.js/render/identity/lens";
import { FrameUI, type FrameUIComponents, type FrameUITheme } from "@frames.js/render/ui";
import { useFrame } from "@frames.js/render/use-frame";
import { hardhat } from "viem/chains";
import { useAccount } from "wagmi";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import { useLensIdentity, useLocalLensIdentity } from "~~/hooks/scaffold-lens";

/**
 * StylingProps is a type that defines the props that can be passed to the components to style them.
 */
type StylingProps = {
  className?: string;
  style?: React.CSSProperties;
};

/**
 * You can override components to change their internal logic or structure if you want.
 * By default, it is not necessary to do that since the default structure is already there
 * so you can just pass an empty object and use theme to style the components.
 *
 * You can also style components here and completely ignore theme if you wish.
 */
const components: FrameUIComponents<StylingProps> = {};

/**
 * By default, there are no styles so it is up to you to style the components as you wish.
 */
const theme: FrameUITheme<StylingProps> = {
  Root: {
    className: "flex flex-col w-full border rounded-lg overflow-hidden bg-white relative",
  },
  LoadingScreen: {
    className: "absolute top-0 left-0 right-0 bottom-0 bg-gray-300 z-10",
  },
  ImageContainer: {
    className: "relative w-full h-full border-b border-gray-300 overflow-hidden",
    style: {
      aspectRatio: "var(--frame-image-aspect-ratio)", // helps to set the fixed loading skeleton size
    },
  },
  Button: {
    className: "btn btn-secondary-content w-full bg-transparent text-primary hover:text-neutral",
  },
  ButtonsContainer: {
    className: "grid grid-cols-2 grid-flow-rows-2 gap-2 p-2",
  },
};

interface FrameProps {
  frameUrl: string;
  pubId: string;
}

export const Frame: React.FC<FrameProps> = ({ frameUrl, pubId }) => {
  const { address } = useAccount();
  const { targetNetwork } = useTargetNetwork();

  const lensFrameContext = useLensFrameContext({
    fallbackContext: { pubId },
  });

  const lensIdentity = useLensIdentity();
  const localLensIdentity = useLocalLensIdentity();

  const frameState = useFrame({
    homeframeUrl: frameUrl,
    frameActionProxy: "/frames/render",
    frameGetProxy: "/frames/render",
    frameContext: lensFrameContext.frameContext,
    signerState: targetNetwork.id === hardhat.id ? localLensIdentity : lensIdentity,
    specification: "openframes",
    connectedAddress: address as `0x${string}`,
  });

  return (
    <div className="flex text-black">
      <FrameUI frameState={frameState} components={components} theme={theme} />
    </div>
  );
};
