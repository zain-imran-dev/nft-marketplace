# 🚀 Complete NFT Marketplace Setup Guide

This guide will help you set up and test the complete NFT marketplace system with smart contracts and frontend.

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **MetaMask** browser extension
- **Git** (optional)

## 🏗️ Project Structure

```
nft-marketplace/
├── contracts/                 # Smart contracts
│   ├── NFT.sol              # ERC721 NFT contract
│   └── NFTMarketplace.sol   # Marketplace contract
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── app/             # Next.js pages
│   │   ├── contracts/       # Contract ABIs
│   │   └── lib/             # Web3 configuration
│   └── package.json
├── scripts/                  # Deployment scripts
├── test/                     # Smart contract tests
└── package.json
```

## 🚀 Step-by-Step Setup

### Step 1: Install Dependencies

```bash
# Install smart contract dependencies
npm install

# Install frontend dependencies
cd frontend
npm install --legacy-peer-deps
cd ..
```

### Step 2: Compile Smart Contracts

```bash
npm run compile
```

### Step 3: Start Local Blockchain

```bash
npx hardhat node
```

This will start a local Hardhat network with 20 test accounts, each with 10,000 ETH.

### Step 4: Deploy Contracts

In a new terminal:

```bash
npm run deploy
```

This will deploy both contracts and show you the addresses.

### Step 5: Update Frontend Configuration

Copy the contract addresses from the deployment output and update `frontend/src/contracts/contracts.js`:

```javascript
export const CONTRACT_ADDRESSES = {
  NFT: "YOUR_NFT_CONTRACT_ADDRESS",
  MARKETPLACE: "YOUR_MARKETPLACE_CONTRACT_ADDRESS"
};
```

### Step 6: Start Frontend

```bash
cd frontend
npm run dev
```

The frontend will be available at [http://localhost:3000](http://localhost:3000)

### Step 7: Configure MetaMask

1. **Add Local Network**:
   - Network Name: `Hardhat Local`
   - RPC URL: `http://127.0.0.1:8545`
   - Chain ID: `1337`
   - Currency Symbol: `ETH`

2. **Import Test Accounts**:
   Use these private keys from the Hardhat node output:
   - Account #0: `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`
   - Account #1: `0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d`
   - Account #2: `0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a`

## 🧪 Testing the System

### Test Scenario 1: Mint and List NFT

1. **Connect Wallet**: Click "Connect Wallet" and select MetaMask
2. **Switch to Account #0**: Use the first test account
3. **Mint NFT**: 
   - Go to "Mint NFT" tab
   - Enter URI: `https://example.com/metadata/1.json`
   - Click "Mint NFT"
   - Confirm transaction
4. **List NFT**:
   - Go to "List NFT" tab
   - Enter Token ID: `1`
   - Enter Price: `0.1`
   - Click "List NFT"
   - Confirm transaction

### Test Scenario 2: Buy NFT

1. **Switch to Account #1**: Use the second test account
2. **Browse Marketplace**: Go to "Marketplace" tab
3. **Buy NFT**: Click "Buy NFT" on the listed item
4. **Confirm Transaction**: Approve the purchase

### Test Scenario 3: View Your NFTs

1. **Switch to Account #1**: Use the second test account
2. **Check My NFTs**: Go to "My NFTs" tab
3. **Verify Ownership**: You should see the purchased NFT

## 🎨 Frontend Features

### 🏠 Homepage
- **Welcome Screen**: Connect wallet to start
- **Navigation Tabs**: Easy switching between features
- **Responsive Design**: Works on all devices

### 🛒 Marketplace
- **NFT Grid**: Beautiful card layout
- **Search & Filter**: Find specific NFTs
- **Buy Buttons**: One-click purchases
- **Price Display**: Clear pricing information

### ➕ Mint NFT
- **Simple Form**: Just enter token URI
- **Loading States**: Visual feedback during minting
- **Success Messages**: Confirmation of successful mint

### 📋 List NFT
- **Token ID Input**: Specify which NFT to list
- **Price Setting**: Set your desired price
- **Fee Calculation**: Shows listing fee

### 👤 My NFTs
- **Owned NFTs**: View your collection
- **Listed NFTs**: See what you're selling
- **Status Tracking**: Sold vs. listed status

## 🔧 Troubleshooting

### Common Issues

#### 1. "Contract not found" error
- **Solution**: Make sure you've updated the contract addresses in `frontend/src/contracts/contracts.js`

#### 2. MetaMask connection issues
- **Solution**: 
  - Make sure MetaMask is connected to localhost:8545
  - Try refreshing the page
  - Check if Hardhat node is running

#### 3. Transaction fails
- **Solution**:
  - Check if you have enough ETH for gas fees
  - Make sure you're using the correct account
  - Verify the contract addresses are correct

#### 4. Frontend not loading
- **Solution**:
  - Check if the development server is running
  - Look for console errors in browser dev tools
  - Verify all dependencies are installed

### Debug Commands

```bash
# Check if contracts are compiled
npm run compile

# Run tests to verify contracts work
npm test

# Check Hardhat node status
npx hardhat node

# Deploy contracts again
npm run deploy
```

## 📊 Expected Results

### After Minting NFT
- Token ID should increment
- NFT should appear in your wallet
- Transaction should be confirmed

### After Listing NFT
- NFT should appear in marketplace
- Price should be displayed correctly
- Listing fee should be deducted

### After Buying NFT
- NFT should transfer to buyer's wallet
- Seller should receive payment
- NFT should disappear from marketplace
- NFT should appear in buyer's "My NFTs"

## 🚀 Next Steps

### Production Deployment
1. **Deploy to Testnet** (Sepolia):
   ```bash
   npm run deploy:testnet
   ```

2. **Deploy to Mainnet**:
   ```bash
   npm run deploy:mainnet
   ```

3. **Deploy Frontend**:
   - Build: `cd frontend && npm run build`
   - Deploy to Vercel/Netlify

### Advanced Features
- **IPFS Integration**: Store metadata on IPFS
- **Auction System**: Add bidding functionality
- **Royalty System**: Implement creator royalties
- **Batch Operations**: Mint multiple NFTs
- **Advanced Search**: Filter by price, creator, etc.

## 📞 Support

If you encounter issues:

1. **Check the logs**: Look at terminal output for errors
2. **Verify setup**: Ensure all steps are completed
3. **Test contracts**: Run `npm test` to verify contracts
4. **Check network**: Make sure MetaMask is on correct network

## 🎉 Success!

You now have a fully functional NFT marketplace with:
- ✅ Smart contracts deployed and tested
- ✅ Beautiful frontend with Web3 integration
- ✅ Complete mint, list, and buy functionality
- ✅ Responsive design and modern UI
- ✅ Local testing environment

**Happy building! 🚀** 