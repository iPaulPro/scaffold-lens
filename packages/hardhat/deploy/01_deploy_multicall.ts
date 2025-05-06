import { ContractType, deployLensContract } from "../lib/lens/lensUtils";

async function deploy() {
  await deployLensContract({
    name: "Multicall3",
    contractName: "Multicall3",
    contractType: ContractType.Misc,
  });
}

if (require.main === module) {
  deploy()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
}

export default deploy;

deploy.tags = ["Multicall"];
