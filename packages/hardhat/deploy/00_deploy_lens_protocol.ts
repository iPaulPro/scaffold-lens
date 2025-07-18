import deployImplementations from "../lib/lens/deployImplementations";
import deployFactories from "../lib/lens/deployFactories";
import { deployLensAccessControl, deployLensActionHub, deployLensPrimitives } from "../lib/lens/deployAux";
import { deployRules } from "../lib/lens/deployRules";
import { deployActions } from "../lib/lens/deployActions";
import { clearAddressBook, generateEnvFile } from "../lib/lens/lensUtils";
import { deployBeacons, deployLock } from "../lib/lens/deployProxyStuff";
import { getWallet, LOCAL_RICH_WALLETS } from "../lib/lens/utils";
import { HardhatRuntimeEnvironment } from "hardhat/types";

async function deployLensProtocol(hre: HardhatRuntimeEnvironment) {
  clearAddressBook();

  const DEPLOYING_MIGRATION = Boolean(process.env.DEPLOY_MIGRATION);
  const DEPLOYING_FR = Boolean(process.env.DEPLOY_FR);
  const deployerAddress = getWallet(hre).address;

  if (DEPLOYING_MIGRATION) {
    console.log("\x1b[33m=============================================");
    console.log("|                                           |");
    console.log("|       Deploying migration version         |");
    console.log("|                                           |");
    console.log("=============================================\x1b[0m");
  }

  const proxyAdminLockOwner = process.env.PROXY_ADMIN_LOCK_OWNER;
  if (!proxyAdminLockOwner && DEPLOYING_FR) {
    throw new Error("PROXY_ADMIN_LOCK_OWNER not found in environment variables");
  }

  const accessControlLockOwner = process.env.ACCESS_CONTROL_LOCK_OWNER;
  if (!accessControlLockOwner && DEPLOYING_FR) {
    throw new Error("ACCESS_CONTROL_LOCK_OWNER not found in environment variables");
  }

  const beaconOwner = process.env.BEACON_OWNER;
  if (!beaconOwner && DEPLOYING_FR) {
    throw new Error("BEACON_OWNER not found in environment variables");
  }

  const factoriesProxyOwner = process.env.FACTORIES_PROXY_OWNER;
  if (!factoriesProxyOwner && DEPLOYING_FR) {
    throw new Error("FACTORIES_PROXY_OWNER not found in environment variables");
  }

  const rulesOwner = process.env.RULES_OWNER;
  if (!rulesOwner && DEPLOYING_FR) {
    throw new Error("RULES_OWNER not found in environment variables");
  }

  const actionsOwner = process.env.ACTIONS_OWNER;
  if (!rulesOwner && DEPLOYING_FR) {
    throw new Error("ACTIONS_OWNER not found in environment variables");
  }

  const primitivesOwner = process.env.PRIMITIVES_OWNER;
  if (!primitivesOwner && DEPLOYING_FR) {
    throw new Error("PRIMITIVES_OWNER not found in environment variables");
  }

  if (DEPLOYING_FR) {
    console.log("ProxyAdminLockOwner", proxyAdminLockOwner);
    console.log("AccessControlAdminLockOwner", accessControlLockOwner);
    console.log("BeaconOwner", beaconOwner);
    console.log("FactoriesProxyOwner", factoriesProxyOwner);
    console.log("RulesOwner", rulesOwner);
    console.log("ActionsOwner", actionsOwner);
    console.log("PrimitivesOwner", primitivesOwner);
  } else {
    console.log("\nNot Deploying fr, so using deployer address as owner everywhere:");

    console.log("\tProxyAdminLockOwner:", deployerAddress);
    console.log("\tAccessControlLockOwner:", deployerAddress);
    console.log("\tBeaconOwner:", deployerAddress);
    console.log("\tFactoriesProxyOwner:", LOCAL_RICH_WALLETS[1].address); // Cannot be deployer cause later it will fail to execute the lensFactory primitives deployments
    console.log("\tRulesOwner:", deployerAddress);
    console.log("\tActionsOwner:", deployerAddress);
    console.log("\tPrimitivesOwner:", deployerAddress);
  }
  console.log("\n-------------------------------------------------------------------\n\n");

  await deployLock(hre, "AppLock", proxyAdminLockOwner ?? deployerAddress);
  await deployLock(hre, "AccountLock", proxyAdminLockOwner ?? deployerAddress);
  await deployLock(hre, "FeedLock", proxyAdminLockOwner ?? deployerAddress);
  await deployLock(hre, "GraphLock", proxyAdminLockOwner ?? deployerAddress);
  await deployLock(hre, "GroupLock", proxyAdminLockOwner ?? deployerAddress);
  await deployLock(hre, "NamespaceLock", proxyAdminLockOwner ?? deployerAddress);
  await deployLock(hre, "AccessControlLock", accessControlLockOwner ?? deployerAddress);

  await deployImplementations(hre, DEPLOYING_MIGRATION);
  await deployBeacons(hre, beaconOwner ?? deployerAddress);
  await deployFactories(
    hre,
    rulesOwner ?? deployerAddress,
    factoriesProxyOwner ?? LOCAL_RICH_WALLETS[1].address,
    DEPLOYING_MIGRATION,
  );
  await deployLensPrimitives(hre, primitivesOwner ?? deployerAddress, DEPLOYING_MIGRATION);
  if (!DEPLOYING_MIGRATION) {
    const actionHub = await deployLensActionHub(hre, factoriesProxyOwner ?? deployerAddress);
    await deployLensAccessControl(hre, primitivesOwner ?? deployerAddress);
    await deployRules(hre, rulesOwner ?? deployerAddress);
    await deployActions(hre, actionHub, actionsOwner ?? deployerAddress);
  }
  if (hre.network.name !== "hardhat") {
    generateEnvFile();
  }
}

export default deployLensProtocol;

deployLensProtocol.tags = ["LensProtocol"];
