const hre = require("hardhat");

async function main() {
  console.log("Deploying NFT Marketplace contracts to localhost...");

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

  console.log("\n=== DEPLOYMENT SUMMARY ===");
  console.log("NFT Contract:", nftAddress);
  console.log("Marketplace Contract:", marketplaceAddress);
  console.log("Network: localhost");
  console.log("Deployer:", (await hre.ethers.getSigners())[0].address);

  console.log("\n=== FRONTEND CONFIGURATION ===");
  console.log("Update the following in frontend/src/contracts/contracts.js:");
  console.log(`CONTRACT_ADDRESSES = {
  NFT: "${nftAddress}",
  MARKETPLACE: "${marketplaceAddress}"
};`);

  console.log("\n=== TESTING INSTRUCTIONS ===");
  console.log("1. Make sure Hardhat node is running: npx hardhat node");
  console.log("2. Update frontend contract addresses");
  console.log("3. Start frontend: cd frontend && npm run dev");
  console.log("4. Connect MetaMask to localhost:8545");
  console.log("5. Import test accounts with private keys from Hardhat node output");

  console.log("\nDeployment completed successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 