import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployERC20FactoryContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("FactoryERC20", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });
};

export default deployERC20FactoryContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployERC20FactoryContract.tags = ["ERC20FactoryContract"];
