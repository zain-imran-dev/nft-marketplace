const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Verifying contracts with account:", deployer.address);

  // Contract addresses (replace with your deployed addresses)
  const NFT_ADDRESS = "YOUR_NFT_CONTRACT_ADDRESS";
  const MARKETPLACE_ADDRESS = "YOUR_MARKETPLACE_CONTRACT_ADDRESS";

  console.log("NFT Contract Address:", NFT_ADDRESS);
  console.log("Marketplace Contract Address:", MARKETPLACE_ADDRESS);

  // Verify NFT contract
  console.log("\nVerifying NFT contract...");
  try {
    await hre.run("verify:verify", {
      address: NFT_ADDRESS,
      constructorArguments: [],
    });
    console.log("NFT contract verified successfully!");
  } catch (error) {
    console.log("NFT contract verification failed:", error.message);
  }

  // Verify Marketplace contract
  console.log("\nVerifying Marketplace contract...");
  try {
    await hre.run("verify:verify", {
      address: MARKETPLACE_ADDRESS,
      constructorArguments: [],
    });
    console.log("Marketplace contract verified successfully!");
  } catch (error) {
    console.log("Marketplace contract verification failed:", error.message);
  }

  console.log("\nVerification process completed!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 