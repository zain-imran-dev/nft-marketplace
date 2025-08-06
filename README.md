# 🎨 NFT Wonderland - Complete NFT Marketplace

A full-stack NFT marketplace built with **Solidity**, **Hardhat**, **Next.js**, and **Wagmi**. This project includes smart contracts for minting NFTs, a complete marketplace for buying and selling, and a beautiful modern React frontend.

![NFT Marketplace](https://img.shields.io/badge/Blockchain-Ethereum-blue)
![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-green)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black)
![Hardhat](https://img.shields.io/badge/Hardhat-^2.26.1-orange)

# NFT Marketplace

A complete NFT marketplace with smart contracts and React frontend.

## Key Highlights

- **Complete NFT Marketplace**: Full-featured platform for minting, listing, and trading NFTs
- **Production Ready**: Comprehensive test suite and multi-network deployment support
- **Modern Tech Stack**: Solidity + Next.js 15 + TypeScript with latest Web3 tools
- **Gas Optimized**: Efficient smart contracts with minimal storage operations

## Security Features

- **Smart Contract Security**:
  - ReentrancyGuard protection against attacks
  - Ownable pattern for access control
  - Input validation and safe transfers
  - OpenZeppelin battle-tested libraries

- **Frontend Security**:
  - Secure wallet connection handling
  - Transaction confirmation prompts
  - Input sanitization and error handling

## Quick Start

### Prerequisites
- Node.js v18+
- MetaMask wallet

### Installation
```bash
git clone <repository-url>
cd nft_martetplace
npm install

cd frontend
npm install
cd ..
```

### Environment Setup
Create `.env` file:
```env
PRIVATE_KEY=your_private_key_here
SEPOLIA_URL=your_sepolia_rpc_url
ETHERSCAN_API_KEY=your_etherscan_api_key
```

### Run Application
```bash
# Deploy contracts
npm run compile
npm run deploy

# Start frontend
cd frontend
npm run dev
```

Access at `http://localhost:3000`

## Smart Contracts

### NFT Contract
- ERC721 standard with minting
- `createToken(tokenURI)` - mint NFT
- `getCurrentToken()` - get token count

### Marketplace Contract
- `createMarketItem(nftContract, tokenId, price)` - list NFT
- `createMarketSale(nftContract, itemId)` - buy NFT
- `fetchMarketItems()` - get all items
- `fetchMyNFTs()` - get user's NFTs

## Frontend Pages
- **Home**: Landing page
- **Marketplace**: Browse NFTs
- **Mint**: Create NFTs
- **My Collection**: Manage owned NFTs

## Tech Stack
- **Contracts**: Solidity, Hardhat, OpenZeppelin
- **Frontend**: Next.js 15, Tailwind CSS, Wagmi, TypeScript

## Testing
```bash
npm test
```

## Deployment
- **Local**: `npm run deploy`
- **Testnet**: `npm run deploy:testnet`
- **Mainnet**: `npm run deploy:mainnet`

## License
MIT License

*This project demonstrates a complete NFT marketplace implementation with both smart contracts and frontend application. Perfect for learning, development, and production use.*
