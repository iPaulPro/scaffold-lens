const isMainnet = process.env.NETWORK === "polygon";

export const LENS_HUB = isMainnet
  ? "0xdb46d1dc155634fbc732f92e853b10b288ad5a1d"
  : "0xA2574D9DdB6A325Ad2Be838Bd854228B80215148";

export const MODULE_REGISTRY = isMainnet
  ? "0x1eD5983F0c883B96f7C35528a1e22EEA67DE3Ff9"
  : "0x9E81eD8099dF82004D298144138C12AbB959DF1E";

export const COLLECT_PUBLICATION_ACTION = isMainnet
  ? "0x0D90C58cBe787CD70B5Effe94Ce58185D72143fB"
  : "0x34A437A91415C36712B0D912c171c74595Be437d";

// This key corresponds to the private key used to create the burner wallet in the nextjs app.
export const BURNER_PUBLIC_KEY = process.env.BURNER_PUBLIC_KEY || "0xCcF81EA786Eb3DfB66EF87862e23D6b1426be65c";
