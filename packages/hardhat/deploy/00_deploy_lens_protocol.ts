import deployFactories from "../lib/lens/deployFactories";
import { deployPrimitives, deployAccessControl } from "../lib/lens/deployAux";
import { deployRules } from "../lib/lens/deployRules";

export default async function deploy() {
  const { lensFactory, accessControlFactory } = await deployFactories();
  await deployPrimitives(lensFactory);
  await deployAccessControl(accessControlFactory);
  await deployRules();
}
