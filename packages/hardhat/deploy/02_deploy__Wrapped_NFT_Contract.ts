import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { parseEther } from "ethers/lib/utils";

const deployERC721FactoryContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("WrappedNFTBase", {
    from: deployer,
    args: [" Premium Spotify Wrapped 2023", "WRAP2023", 1000, parseEther("0")],
    log: true,
    autoMine: true,
  });

  await deploy("WrappedNFTBase", {
    from: deployer,
    args: ["Premium Spotify Wrapped Song", "SONGWRAP2023", 1000, parseEther("0")],
    log: true,
    autoMine: true,
  });

  await deploy("WrappedNFTBase", {
    from: deployer,
    args: ["Premium Spotify Wrapped Artist", "ARTWRAP2023", 1000, parseEther("0")],
    log: true,
    autoMine: true,
  });

  await deploy("WrappedNFTBase", {
    from: deployer,
    args: ["Premium Spotify Wrapped Genre", "GENWRAP2023", 1000, parseEther("0")],
    log: true,
    autoMine: true,
  });
};

export default deployERC721FactoryContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployERC721FactoryContract.tags = ["WrappedNFTContract"];
