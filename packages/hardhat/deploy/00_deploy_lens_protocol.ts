import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import getNextContractAddress from "../lib/getNextContractAddress";
import { ethers } from "hardhat";
import { DeployOptions } from "hardhat-deploy/dist/types";

const COOLDOWN_PERIOD = 300n;

const deployLensHub: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const baseConfig: DeployOptions = {
    from: deployer,
    log: true,
    autoMine: true,
  };

  // deploy libraries
  const validationLib = await deploy("ValidationLib", baseConfig);
  const actionLib = await deploy("ActionLib", baseConfig);
  const followLib = await deploy("FollowLib", baseConfig);
  const governanceLib = await deploy("GovernanceLib", baseConfig);
  const legacyCollectLib = await deploy("LegacyCollectLib", {
    ...baseConfig,
    libraries: { ValidationLib: validationLib.address },
  });
  const metaTxLib = await deploy("MetaTxLib", baseConfig);
  const profileLib = await deploy("ProfileLib", baseConfig);
  const publicationLib = await deploy("PublicationLib", baseConfig);
  const storageLib = await deploy("StorageLib", baseConfig);
  const typesLib = await deploy("Types", baseConfig);

  // deploy ModuleRegistry
  const moduleRegistry = await deploy("ModuleRegistry", baseConfig);

  // determine the LensHub address
  const lensHubAddress = await getNextContractAddress(deployer, 4);

  // deploy FollowNFT and LegacyCollectNFT
  const followNft = await deploy("FollowNFT", {
    ...baseConfig,
    args: [lensHubAddress],
  });
  const legacyCollectNft = await deploy("LegacyCollectNFT", {
    ...baseConfig,
    args: [lensHubAddress],
  });

  // deploy LensHub
  const lensHub = await deploy("LensHub", {
    from: deployer,
    args: [followNft.address, legacyCollectNft.address, moduleRegistry.address, COOLDOWN_PERIOD],
    log: true,
    autoMine: true,
    proxy: {
      proxyContract: "OpenZeppelinTransparentProxy",
      implementationName: "LensHubInitializable",
      execute: {
        methodName: "initialize",
        args: ["Lens Protocol Profile", "LPP", deployer],
      },
    },
    libraries: {
      ActionLib: actionLib.address,
      FollowLib: followLib.address,
      GovernanceLib: governanceLib.address,
      LegacyCollectLib: legacyCollectLib.address,
      MetaTxLib: metaTxLib.address,
      ProfileLib: profileLib.address,
      PublicationLib: publicationLib.address,
      StorageLib: storageLib.address,
      ValidationLib: validationLib.address,
    },
  });

  // deploy LensHandles and TokenHandleRegistry
  const lensHandles = await deploy("LensHandles", {
    ...baseConfig,
    args: [deployer, lensHub.address, COOLDOWN_PERIOD],
  });
  const tokenHandleRegistry = await deploy("TokenHandleRegistry", {
    ...baseConfig,
    args: [lensHub.address, lensHandles.address],
  });

  // deploy ProfileCreationProxy
  const profileCreationProxy = await deploy("ProfileCreationProxy", {
    ...baseConfig,
    args: [process.env.BURNER_PUBLIC_KEY!, lensHub.address, lensHandles.address, tokenHandleRegistry.address],
  });

  // determine the CollectPublicationAction address
  const collectPublicationActionAddress = await getNextContractAddress(deployer);

  // Deploy CollectNFT
  const collectNft = await deploy("CollectNFT", {
    ...baseConfig,
    args: [lensHub.address, collectPublicationActionAddress],
  });

  // deploy CollectPublicationAction
  const collectPublicationAction = await deploy("CollectPublicationAction", {
    ...baseConfig,
    args: [lensHub.address, collectNft.address, deployer],
  });
  const CollectPublicationAction = await ethers.getContractAt(
    "CollectPublicationAction",
    collectPublicationAction.address,
  );

  // deploy MultirecipientFeeCollectModule
  const multirecipientFeeCollectModule = await deploy("MultirecipientFeeCollectModule", {
    ...baseConfig,
    args: [lensHub.address, collectPublicationAction.address, moduleRegistry.address, deployer],
  });

  // deploy SimpleFeeCollectModule
  const simpleFeeCollectModule = await deploy("SimpleFeeCollectModule", {
    ...baseConfig,
    args: [lensHub.address, collectPublicationAction.address, moduleRegistry.address, deployer],
  });

  const registerMultirecipientCollectModule = await CollectPublicationAction.registerCollectModule(
    multirecipientFeeCollectModule.address,
  );
  console.log("registered MultirecipientFeeCollectModule (tx: " + registerMultirecipientCollectModule.hash + ")");

  const registerSimpleCollectModule = await CollectPublicationAction.registerCollectModule(
    simpleFeeCollectModule.address,
  );
  console.log("registered SimpleFeeCollectModule (tx: " + registerSimpleCollectModule.hash + ")");

  const LensHub = await ethers.getContractAt("LensHub", lensHub.address);

  // set treasury
  const setTreasury = await LensHub.setTreasury(deployer);
  console.log("set Treasury address (tx: " + setTreasury.hash + ")");
  const setTreasuryFee = await LensHub.setTreasuryFee(500n);
  console.log("set Treasury fee (tx: " + setTreasuryFee.hash + ")");

  // deploy token URI contracts
  const followTokenUri = await deploy("FollowTokenURI", {
    ...baseConfig,
    libraries: {
      FollowSVG: (await deploy("FollowSVG", baseConfig)).address,
    },
  });
  const profileTokenUri = await deploy("SimpleProfileTokenURI", {
    ...baseConfig,
    libraries: {
      SimpleProfileSVG: (await deploy("SimpleProfileSVG", baseConfig)).address,
    },
  });
  const gintoNordFontSVG = await deploy("GintoNordFontSVG", baseConfig);
  const handleTokenUri = await deploy("HandleTokenURI", {
    ...baseConfig,
    libraries: {
      HandleSVG: (
        await deploy("HandleSVG", {
          ...baseConfig,
          libraries: {
            GintoNordFontSVG: gintoNordFontSVG.address,
          },
        })
      ).address,
    },
  });

  // deploy PermissionlessCreator
  await deploy("PermissionlessCreator", {
    ...baseConfig,
    args: [process.env.BURNER_PUBLIC_KEY!, lensHub.address, lensHandles.address, tokenHandleRegistry.address],
  });

  const publicActProxy_MetaTx = await deploy("PublicActProxy_MetaTx", baseConfig);

  // deploy PublicActProxy
  await deploy("PublicActProxy", {
    ...baseConfig,
    args: [lensHub.address],
    libraries: {
      Types: typesLib.address,
      PublicActProxy_MetaTx: publicActProxy_MetaTx.address,
    },
  });

  // deploy LitAccessControl
  await deploy("LitAccessControl", {
    ...baseConfig,
    args: [lensHub.address, collectPublicationAction.address],
  });

  // deploy FeeFollowModule
  await deploy("FeeFollowModule", {
    ...baseConfig,
    args: [lensHub.address, moduleRegistry.address, deployer],
  });

  // deploy RevertFollowModule
  await deploy("RevertFollowModule", {
    ...baseConfig,
    args: [deployer],
  });

  // deploy DegreesOfSeparationReferenceModule
  await deploy("DegreesOfSeparationReferenceModule", {
    ...baseConfig,
    args: [lensHub.address, deployer],
  });

  // set token URI contracts
  const setFollowTokenURIContract = await LensHub.setFollowTokenURIContract(followTokenUri.address);
  console.log("assigned FollowTokenURI contract (tx: " + setFollowTokenURIContract.hash + ")");
  const setProfileTokenURIContract = await LensHub.setProfileTokenURIContract(profileTokenUri.address);
  console.log("assigned ProfileTokenURI contract (tx: " + setProfileTokenURIContract.hash + ")");

  // whitelist addresses for profile creation
  const whitelistBurner = await LensHub.whitelistProfileCreator(process.env.BURNER_PUBLIC_KEY!, true);
  console.log("whitelisted burner wallet (tx: " + whitelistBurner.hash + ")");
  const whitelistProfileCreationProxy = await LensHub.whitelistProfileCreator(profileCreationProxy.address, true);
  console.log("whitelisted ProfileCreationProxy (tx: " + whitelistProfileCreationProxy.hash + ")");

  // set token URI contract for LensHandles
  const LensHandles = await ethers.getContractAt("LensHandles", lensHandles.address);
  const setHandleTokenURIContract = await LensHandles.setHandleTokenURIContract(handleTokenUri.address);
  console.log("assigned HandleTokenURI contract (tx: " + setHandleTokenURIContract.hash + ")");

  const upause = await LensHub.setState(0);
  console.log("unpaused LensHub (tx: " + upause.hash + ")");
};

export default deployLensHub;

deployLensHub.tags = ["LensHub"];
