"use client";

import { useEffect } from "react";
import { ProfileProvider } from "~~/components/ProfileProvider";
import scaffoldConfig from "~~/scaffold.config";

export const ScaffoldLensAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  const setBurnerPrivateKey = async () => {
    localStorage.setItem("burnerWallet.pk", scaffoldConfig.burnerPrivateKey);
  };

  useEffect(() => {
    setBurnerPrivateKey();
  }, []);

  return <ProfileProvider>{children}</ProfileProvider>;
};
