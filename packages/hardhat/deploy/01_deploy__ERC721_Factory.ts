import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployERC721FactoryContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("FactoryERC721", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });
};

export default deployERC721FactoryContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployERC721FactoryContract.tags = ["ERC721FactoryContract"];
