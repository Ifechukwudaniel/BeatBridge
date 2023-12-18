import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployWrappedNFTFactory: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("WrappedNFTFactory", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });
};

export default deployWrappedNFTFactory;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployWrappedNFTFactory.tags = ["WrappedNFTFactory"];
