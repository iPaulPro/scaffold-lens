import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import getNextContractAddress from "../lib/getNextContractAddress";
import { ethers } from "hardhat";
import { DeployOptions } from "hardhat-deploy/dist/types";
import { BURNER_PUBLIC_KEY } from "../config";

const GUARDIAN_COOLDOWN_PERIOD = 300n; // 5 minutes
const TREASURY_FEE = 500n; // 5%

enum ModuleType {
  PUBLICATION_ACTION_MODULE = 1,
  REFERENCE_MODULE = 2,
  FOLLOW_MODULE = 3,
}

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
  const metaTxLib = await deploy("MetaTxLib", baseConfig);
  const profileLib = await deploy("ProfileLib", baseConfig);
  const publicationLib = await deploy("PublicationLib", baseConfig);
  const storageLib = await deploy("StorageLib", baseConfig);
  const typesLib = await deploy("Types", baseConfig);

  // deploy ModuleRegistry
  const moduleRegistry = await deploy("ModuleRegistry", baseConfig);
  const ModuleRegistry = await ethers.getContractAt("ModuleRegistry", moduleRegistry.address);

  // determine the LensHub address
  const lensHubAddress = await getNextContractAddress(deployer, 4);

  // deploy FollowNFT
  const followNft = await deploy("FollowNFT", {
    ...baseConfig,
    args: [lensHubAddress],
  });

  // deploy LensHub
  const lensHub = await deploy("LensHub", {
    from: deployer,
    args: [followNft.address, moduleRegistry.address, GUARDIAN_COOLDOWN_PERIOD],
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
      MetaTxLib: metaTxLib.address,
      ProfileLib: profileLib.address,
      PublicationLib: publicationLib.address,
      StorageLib: storageLib.address,
      ValidationLib: validationLib.address,
    },
  });

  const LensHub = await ethers.getContractAt("LensHub", lensHub.address);

  // deploy LensHandles
  const lensHandles = await deploy("LensHandles", {
    ...baseConfig,
    args: [deployer, lensHub.address, GUARDIAN_COOLDOWN_PERIOD],
  });
  const LensHandles = await ethers.getContractAt("LensHandles", lensHandles.address);

  // deploy TokenHandleRegistry
  const tokenHandleRegistry = await deploy("TokenHandleRegistry", {
    ...baseConfig,
    args: [lensHub.address, lensHandles.address],
  });

  // deploy ProfileCreationProxy
  const profileCreationProxy = await deploy("ProfileCreationProxy", {
    ...baseConfig,
    args: [BURNER_PUBLIC_KEY, lensHub.address, lensHandles.address, tokenHandleRegistry.address],
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

  // deploy SimpleFeeCollectModule
  const simpleFeeCollectModule = await deploy("SimpleFeeCollectModule", {
    ...baseConfig,
    args: [lensHub.address, collectPublicationAction.address, moduleRegistry.address, deployer],
  });

  // deploy MultirecipientFeeCollectModule
  const multirecipientFeeCollectModule = await deploy("MultirecipientFeeCollectModule", {
    ...baseConfig,
    args: [lensHub.address, collectPublicationAction.address, moduleRegistry.address, deployer],
  });

  // deploy FollowTokenURI
  const followTokenUri = await deploy("FollowTokenURI", {
    ...baseConfig,
    libraries: {
      FollowSVG: (await deploy("FollowSVG", baseConfig)).address,
    },
  });

  // deploy ProfileTokenURI
  const profileTokenUri = await deploy("SimpleProfileTokenURI", {
    ...baseConfig,
    libraries: {
      SimpleProfileSVG: (await deploy("SimpleProfileSVG", baseConfig)).address,
    },
  });

  // deploy HandleTokenURI
  const handleTokenUri = await deploy("HandleTokenURI", {
    ...baseConfig,
    libraries: {
      HandleSVG: (
        await deploy("HandleSVG", {
          ...baseConfig,
          libraries: {
            GintoNordFontSVG: (await deploy("GintoNordFontSVG", baseConfig)).address,
          },
        })
      ).address,
    },
  });

  // deploy PermissionlessCreator
  await deploy("PermissionlessCreator", {
    ...baseConfig,
    args: [BURNER_PUBLIC_KEY, lensHub.address, lensHandles.address, tokenHandleRegistry.address],
  });

  // deploy PublicActProxy_MetaTx
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
  const feeFollowModule = await deploy("FeeFollowModule", {
    ...baseConfig,
    args: [lensHub.address, moduleRegistry.address, deployer],
  });

  // deploy RevertFollowModule
  const revertFollowModule = await deploy("RevertFollowModule", {
    ...baseConfig,
    args: [deployer],
  });

  // deploy DegreesOfSeparationReferenceModule
  const degreesOfSeparationReferenceModule = await deploy("DegreesOfSeparationReferenceModule", {
    ...baseConfig,
    args: [lensHub.address, deployer],
  });

  // deploy FollowerOnlyReferenceModule
  const followerOnlyReferenceModule = await deploy("FollowerOnlyReferenceModule", {
    ...baseConfig,
    args: [lensHub.address, deployer],
  });

  // set treasury

  const setTreasury = await LensHub.setTreasury(deployer);
  console.log("set Treasury address (tx: " + setTreasury.hash + ")");

  const setTreasuryFee = await LensHub.setTreasuryFee(TREASURY_FEE);
  console.log("set Treasury fee (tx: " + setTreasuryFee.hash + ")");

  // register modules

  const registerMultirecipientCollectModule = await CollectPublicationAction.registerCollectModule(
    multirecipientFeeCollectModule.address,
  );
  console.log("registered MultirecipientFeeCollectModule (tx: " + registerMultirecipientCollectModule.hash + ")");

  const registerSimpleCollectModule = await CollectPublicationAction.registerCollectModule(
    simpleFeeCollectModule.address,
  );
  console.log("registered SimpleFeeCollectModule (tx: " + registerSimpleCollectModule.hash + ")");

  const registerCollectPublicationActionAddress = await ModuleRegistry.registerModule(
    collectPublicationAction.address,
    ModuleType.PUBLICATION_ACTION_MODULE,
  );
  console.log("registered CollectPublicationAction (tx: " + registerCollectPublicationActionAddress.hash + ")");

  const registerFeeFollowModule = await ModuleRegistry.registerModule(
    feeFollowModule.address,
    ModuleType.FOLLOW_MODULE,
  );
  console.log("registered FeeFollowModule (tx: " + registerFeeFollowModule.hash + ")");

  const registerRevertFollowModule = await ModuleRegistry.registerModule(
    revertFollowModule.address,
    ModuleType.FOLLOW_MODULE,
  );
  console.log("registered RevertFollowModule (tx: " + registerRevertFollowModule.hash + ")");

  const registerDegreesOfSeparationReferenceModule = await ModuleRegistry.registerModule(
    degreesOfSeparationReferenceModule.address,
    ModuleType.REFERENCE_MODULE,
  );
  console.log(
    "registered DegreesOfSeparationReferenceModule (tx: " + registerDegreesOfSeparationReferenceModule.hash + ")",
  );

  const registerFollowerOnlyReferenceModule = await ModuleRegistry.registerModule(
    followerOnlyReferenceModule.address,
    ModuleType.REFERENCE_MODULE,
  );
  console.log("registered FollowerOnlyReferenceModule (tx: " + registerFollowerOnlyReferenceModule.hash + ")");

  // set token URI contracts

  const setFollowTokenURIContract = await LensHub.setFollowTokenURIContract(followTokenUri.address);
  console.log("assigned FollowTokenURI contract (tx: " + setFollowTokenURIContract.hash + ")");

  const setProfileTokenURIContract = await LensHub.setProfileTokenURIContract(profileTokenUri.address);
  console.log("assigned ProfileTokenURI contract (tx: " + setProfileTokenURIContract.hash + ")");

  const setHandleTokenURIContract = await LensHandles.setHandleTokenURIContract(handleTokenUri.address);
  console.log("assigned HandleTokenURI contract (tx: " + setHandleTokenURIContract.hash + ")");

  // whitelist addresses for profile creation

  const whitelistDeployer = await LensHub.whitelistProfileCreator(deployer, true);
  console.log("whitelisted deployer wallet (tx: " + whitelistDeployer.hash + ")");

  const whitelistBurner = await LensHub.whitelistProfileCreator(BURNER_PUBLIC_KEY, true);
  console.log("whitelisted burner wallet (tx: " + whitelistBurner.hash + ")");

  const whitelistProfileCreationProxy = await LensHub.whitelistProfileCreator(profileCreationProxy.address, true);
  console.log("whitelisted ProfileCreationProxy (tx: " + whitelistProfileCreationProxy.hash + ")");

  // finally, unpause LensHub
  const unpause = await LensHub.setState(0);
  console.log("unpaused LensHub (tx: " + unpause.hash + ")");
};

export default deployLensHub;

deployLensHub.tags = ["LensHub"];
