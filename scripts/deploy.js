const hre = require("hardhat");

async function main() {
  console.log("Deploying NFT Marketplace contracts...");

  // Deploy NFT contract first
  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy();
  await nft.waitForDeployment();
  const nftAddress = await nft.getAddress();
  console.log("NFT contract deployed to:", nftAddress);

  // Deploy NFTMarketplace contract
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nftMarketplace = await NFTMarketplace.deploy();
  await nftMarketplace.waitForDeployment();
  const marketplaceAddress = await nftMarketplace.getAddress();
  console.log("NFTMarketplace contract deployed to:", marketplaceAddress);

  console.log("\nDeployment Summary:");
  console.log("===================");
  console.log("NFT Contract:", nftAddress);
  console.log("Marketplace Contract:", marketplaceAddress);
  console.log("Network:", hre.network.name);
  console.log("Deployer:", (await hre.ethers.getSigners())[0].address);

  // Verify contracts on Etherscan (if not on localhost)
  if (hre.network.name !== "hardhat" && hre.network.name !== "localhost") {
    console.log("\nWaiting for block confirmations...");
    await nft.waitForDeployment();
    await nftMarketplace.waitForDeployment();

    console.log("Verifying NFT contract on Etherscan...");
    try {
      await hre.run("verify:verify", {
        address: nftAddress,
        constructorArguments: [],
      });
    } catch (error) {
      console.log("NFT contract verification failed:", error.message);
    }

    console.log("Verifying NFTMarketplace contract on Etherscan...");
    try {
      await hre.run("verify:verify", {
        address: marketplaceAddress,
        constructorArguments: [],
      });
    } catch (error) {
      console.log("NFTMarketplace contract verification failed:", error.message);
    }
  }

  console.log("\nDeployment completed successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 