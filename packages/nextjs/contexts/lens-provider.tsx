"use client";

import { LensConfig, LensProvider as Provider, development } from "@lens-protocol/react-web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";

const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  environment: development,
};

export function LensProvider({ children }: { children: React.ReactNode }) {
  return <Provider config={lensConfig}>{children}</Provider>;
}
