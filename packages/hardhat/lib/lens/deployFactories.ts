import { AppInitialProperties, deployApp } from "./deployAux";
import {
  deployContract,
  getWallet,
  verifyLensFactoryDeployedPrimitive,
  verifyLensFactoryDeployedUsername,
} from "./utils";
import { writeFileSync } from "fs";

export default async function deployFactories(): Promise<{
  lensFactory: string;
  accessControlFactory: string;
}> {
  const outputLines: string[] = [];
  outputLines.push("\n\n--- Indexer file ---\n\n");
  outputLines.push("# CONTRACTS");

  // accessControl factory
  const accessControlFactory_artifactName = "AccessControlFactory";
  const accessControlFactory_args: any[] = [];

  const accessControlFactory = await deployContract(accessControlFactory_artifactName, accessControlFactory_args);

  console.log(`\n✔ AccessControlFactory deployed at ${await accessControlFactory.getAddress()}`);
  outputLines.push(`ACCESS_CONTROL_FACTORY="${await accessControlFactory.getAddress()}"`);

  // userBlocking rule/registry

  const userBlockingRule_artifactName = "UserBlockingRule";
  const userBlockingRule_args: any[] = [];

  const userBlockingRule = await deployContract(userBlockingRule_artifactName, userBlockingRule_args);

  console.log(`\n✔ UserBlockingRule deployed at ${await userBlockingRule.getAddress()}`);
  outputLines.push(`USER_BLOCKING_RULE="${await userBlockingRule.getAddress()}"`);

  // username factory
  const usernameFactory_artifactName = "UsernameFactory";
  const usernameFactory_args: any[] = [];

  const usernameFactory = await deployContract(usernameFactory_artifactName, usernameFactory_args);

  console.log(`\n✔ UsernameFactory deployed at ${await usernameFactory.getAddress()}`);
  outputLines.push(`USERNAME_FACTORY="${await usernameFactory.getAddress()}"`);

  // graph factory
  const graphFactory_artifactName = "GraphFactory";
  const graphFactory_args: any[] = [];

  const graphFactory = await deployContract(graphFactory_artifactName, graphFactory_args);

  console.log(`\n✔ GraphFactory deployed at ${await graphFactory.getAddress()}`);
  outputLines.push(`GRAPH_FACTORY="${await graphFactory.getAddress()}"`);

  // feed factory
  const feedFactory_artifactName = "FeedFactory";
  const feedFactory_args: any[] = [];

  const feedFactory = await deployContract(feedFactory_artifactName, feedFactory_args);

  console.log(`\n✔ FeedFactory deployed at ${await feedFactory.getAddress()}`);
  outputLines.push(`FEED_FACTORY="${await feedFactory.getAddress()}"`);

  // group factory
  const groupFactory_artifactName = "GroupFactory";
  const groupFactory_args: any[] = [];

  const groupFactory = await deployContract(groupFactory_artifactName, groupFactory_args);

  console.log(`\n✔ GroupFactory deployed at ${await groupFactory.getAddress()}`);
  outputLines.push(`GROUP_FACTORY="${await groupFactory.getAddress()}"`);

  // account factory
  const accountFactory_artifactName = "AccountFactory";
  const accountFactory_args: any[] = [];

  const accountFactory = await deployContract(accountFactory_artifactName, accountFactory_args);

  console.log(`\n✔ AccountFactory deployed at ${await accountFactory.getAddress()}`);
  outputLines.push(`ACCOUNT_FACTORY="${await accountFactory.getAddress()}"`);

  // app factory
  const appFactory_artifactName = "AppFactory";
  const appFactory_args: any[] = [];

  const appFactory = await deployContract(appFactory_artifactName, appFactory_args);

  console.log(`\n✔ AppFactory deployed at ${await appFactory.getAddress()}`);
  outputLines.push(`APP_FACTORY="${await appFactory.getAddress()}"`);

  // lens factory
  const lensFactory_artifactName = "LensFactory";
  const lensFactory_args = [
    await accessControlFactory.getAddress(),
    await accountFactory.getAddress(),
    await appFactory.getAddress(),
    await groupFactory.getAddress(),
    await feedFactory.getAddress(),
    await graphFactory.getAddress(),
    await usernameFactory.getAddress(),
    await userBlockingRule.getAddress(),
  ];

  const lensFactory = await deployContract(lensFactory_artifactName, lensFactory_args);

  console.log(`\n✔ LensFactory deployed at ${await lensFactory.getAddress()}`);
  outputLines.push(`LENS_FACTORY="${await lensFactory.getAddress()}"`);

  // deploy global feed
  console.log("Deploying Global Feed...");
  const metadataURI = "https://ipfs.io/ipfs/TezTUri";
  const ownerAddress = getWallet().address;
  const admins: string[] = [];
  const rules: any[] = [];
  const extraData: any[] = [];
  const feedDeploymentTx = await lensFactory.deployFeed(metadataURI, ownerAddress, admins, rules, extraData);
  const globalFeedAddress = await verifyLensFactoryDeployedPrimitive({
    tx: feedDeploymentTx,
    lensContractArtifactName: "Feed",
    metadataURIConstructorParam: metadataURI,
  });
  outputLines.push(`GLOBAL_FEED="${globalFeedAddress}"`);

  // deploy global graph
  console.log("Deploying Global Graph...");
  const graphDeploymentTx = await lensFactory.deployGraph(metadataURI, ownerAddress, admins, rules, extraData);
  const globalGraphAddress = await verifyLensFactoryDeployedPrimitive({
    tx: graphDeploymentTx,
    lensContractArtifactName: "Graph",
    metadataURIConstructorParam: metadataURI,
  });
  outputLines.push(`GLOBAL_GRAPH="${globalGraphAddress}"`);

  // deploy lens username
  console.log("Deploying Lens Username...");
  const usernameDeploymentTx = await lensFactory.deployUsername(
    "lens",
    metadataURI,
    ownerAddress,
    admins,
    rules,
    extraData,
    "Lens Usernames",
    "LENS",
  );
  const lensUsernameAddress = await verifyLensFactoryDeployedUsername({
    tx: usernameDeploymentTx,
    constructorParams: ["lens", metadataURI, ownerAddress, "Lens Usernames", "LENS"],
  });
  outputLines.push(`LENS_USERNAME="${lensUsernameAddress}"`);

  // deploy testnet app
  console.log("Deploying Testnet App...");
  const initialProperties: AppInitialProperties = {
    graph: globalGraphAddress,
    feeds: [globalFeedAddress],
    username: lensUsernameAddress,
    groups: [],
    defaultFeed: globalFeedAddress,
    signers: [],
    paymaster: getWallet().address,
    treasury: getWallet().address,
  };

  const testnetAppAddress = await deployApp(lensFactory, initialProperties);
  outputLines.push(`TESTNET_APP="${testnetAppAddress}"`);

  const output = outputLines.join("\n");
  writeFileSync("deployed_primitives.txt", output);
  console.log(output);

  return {
    lensFactory: await lensFactory.getAddress(),
    accessControlFactory: await accessControlFactory.getAddress(),
  };
}
