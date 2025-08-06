# 🎨 NFT Wonderland - Complete NFT Marketplace

A full-stack NFT marketplace built with **Solidity**, **Hardhat**, **Next.js**, and **Wagmi**. This project includes smart contracts for minting NFTs, a complete marketplace for buying and selling, and a beautiful modern React frontend.

![NFT Marketplace](https://img.shields.io/badge/Blockchain-Ethereum-blue)
![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-green)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black)
![Hardhat](https://img.shields.io/badge/Hardhat-^2.26.1-orange)

## ✨ Features

### 🏗️ Smart Contracts
- **NFT Contract**: ERC721 token with minting functionality
- **Marketplace Contract**: Complete marketplace for listing, buying, and selling NFTs
- **Security**: ReentrancyGuard and Ownable patterns for security
- **Gas Optimization**: Efficient data structures and minimal storage operations

### 🎨 Frontend Application
- **Modern UI**: Beautiful gradient design with Tailwind CSS
- **Wallet Integration**: Seamless MetaMask and wallet connection
- **Responsive Design**: Mobile-first approach with responsive navigation
- **Real-time Updates**: Live marketplace data and transaction status
- **User Experience**: Intuitive navigation and smooth animations

### 🔧 Development Features
- **Testing**: Comprehensive test suite covering all functionality
- **Deployment**: Easy deployment scripts for multiple networks
- **Type Safety**: Full TypeScript support for frontend
- **Hot Reloading**: Fast development with Next.js and Hardhat

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MetaMask or compatible wallet

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd nft_martetplace
```

2. **Install dependencies:**
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

3. **Set up environment variables:**
Create a `.env` file in the root directory:
```env
PRIVATE_KEY=your_private_key_here
SEPOLIA_URL=your_sepolia_rpc_url
MAINNET_URL=your_mainnet_rpc_url
ETHERSCAN_API_KEY=your_etherscan_api_key
```

### Running the Application

#### Backend (Smart Contracts)
```bash
# Compile contracts
npm run compile

# Run tests
npm test

# Deploy to local network
npm run deploy

# Deploy to testnet (Sepolia)
npm run deploy:testnet

# Deploy to mainnet
npm run deploy:mainnet
```

#### Frontend (React Application)
```bash
# Start development server
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:3000`

## 📋 Smart Contract Features

### NFT Contract (`contracts/NFT.sol`)
- **ERC721 Standard**: Compliant with OpenZeppelin ERC721 implementation
- **Minting**: Create new NFTs with custom metadata
- **URI Storage**: Flexible token URI management
- **Ownership**: Secure ownership tracking
- **Token Counter**: Automatic token ID management

**Functions:**
- `createToken(string memory tokenURI)` - Mint a new NFT
- `getCurrentToken()` - Get the current token count

### NFTMarketplace Contract (`contracts/NFTMarketplace.sol`)
- **Listing System**: List NFTs for sale with custom pricing
- **Purchase System**: Buy NFTs directly from the marketplace
- **Fee Management**: Configurable listing fees
- **Event System**: Comprehensive event emission for all transactions
- **Security**: Reentrancy protection and access control

**Functions:**
- `createMarketItem(address nftContract, uint256 tokenId, uint256 price)` - List an NFT for sale
- `createMarketSale(address nftContract, uint256 itemId)` - Buy an NFT from the marketplace
- `fetchMarketItems()` - Get all unsold items
- `fetchMyNFTs()` - Get NFTs purchased by the caller
- `fetchItemsCreated()` - Get items created by the caller
- `fetchMarketItem(uint256 marketItemId)` - Get a specific market item
- `updateListingPrice(uint256 _listingPrice)` - Update listing fee (owner only)
- `withdrawListingPrice()` - Withdraw accumulated fees (owner only)

## 🎨 Frontend Features

### User Interface
- **Home Page**: Beautiful landing page with feature overview
- **Marketplace**: Browse and search available NFTs
- **Mint NFT**: Create new NFTs with custom metadata
- **List NFT**: Sell your NFTs on the marketplace
- **My Collection**: View and manage your owned NFTs

### Technical Features
- **Wallet Integration**: Connect MetaMask and other wallets
- **Real-time Updates**: Live transaction status and marketplace updates
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern Animations**: Smooth transitions and hover effects
- **Search Functionality**: Find NFTs by name or attributes

### Technologies Used
- **Next.js 15**: React framework with App Router
- **Tailwind CSS**: Utility-first CSS framework
- **Wagmi**: React hooks for Ethereum
- **Viem**: TypeScript interface for Ethereum
- **Lucide React**: Beautiful icons
- **React Query**: Data fetching and caching

## 🧪 Testing

The project includes comprehensive tests covering:

### Contract Testing
- Contract deployment verification
- NFT minting functionality
- Marketplace listing and purchasing
- View functions and data retrieval
- Owner-only functions
- Event emission verification
- Error condition handling

### Test Coverage
- **Deployment Tests**: Verify correct contract initialization
- **NFT Contract Tests**: Token minting and metadata
- **Marketplace Tests**: Listing, buying, and selling
- **Security Tests**: Access control and reentrancy protection
- **Integration Tests**: End-to-end marketplace workflows

Run tests with:
```bash
npm test
```

## 🌐 Network Support

The project supports multiple networks:

### Development Networks
- **Hardhat Network**: Local development and testing
- **Localhost**: Local node for development

### Production Networks
- **Sepolia Testnet**: Ethereum testnet for testing
- **Ethereum Mainnet**: Production deployment

### Network Configuration
```javascript
// hardhat.config.js
networks: {
  hardhat: {},
  localhost: {
    url: "http://127.0.0.1:8545"
  },
  sepolia: {
    url: process.env.SEPOLIA_URL,
    accounts: [process.env.PRIVATE_KEY]
  },
  mainnet: {
    url: process.env.MAINNET_URL,
    accounts: [process.env.PRIVATE_KEY]
  }
}
```

## 🔒 Security Features

### Smart Contract Security
- **ReentrancyGuard**: Prevents reentrancy attacks
- **Ownable**: Access control for owner functions
- **Input Validation**: Comprehensive parameter checking
- **Safe Transfers**: Secure token transfers using OpenZeppelin
- **Event Emission**: Transparent transaction logging

### Frontend Security
- **Wallet Validation**: Secure wallet connection handling
- **Transaction Confirmation**: User confirmation for all transactions
- **Error Handling**: Graceful error handling and user feedback
- **Input Sanitization**: Safe user input processing

## ⚡ Gas Optimization

### Smart Contract Optimization
- **Solidity Optimizer**: Enabled for gas efficiency
- **Efficient Data Structures**: Optimized storage patterns
- **Minimal Storage Operations**: Reduced gas costs
- **Batch Operations**: Efficient bulk operations where possible

### Frontend Optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **Image Optimization**: Optimized image loading
- **Lazy Loading**: Efficient component loading
- **Caching**: Smart caching strategies

## 📦 Project Structure

```
nft_martetplace/
├── contracts/                 # Smart contracts
│   ├── NFT.sol               # ERC721 NFT contract
│   └── NFTMarketplace.sol    # Marketplace contract
├── frontend/                  # React frontend
│   ├── src/
│   │   ├── app/              # Next.js app router
│   │   ├── components/       # React components
│   │   ├── contracts/        # Contract ABIs
│   │   └── lib/              # Utility functions
│   ├── public/               # Static assets
│   └── package.json          # Frontend dependencies
├── scripts/                   # Deployment scripts
│   ├── deploy.js             # Main deployment script
│   ├── deploy-local.js       # Local deployment
│   └── verify.js             # Contract verification
├── test/                      # Test files
│   └── NFTMarketplace.test.js # Comprehensive tests
├── hardhat.config.js          # Hardhat configuration
└── package.json               # Backend dependencies
```

## 🚀 Deployment

### Local Development
1. Start local Hardhat node:
```bash
npx hardhat node
```

2. Deploy contracts:
```bash
npm run deploy
```

3. Start frontend:
```bash
cd frontend
npm run dev
```

### Testnet Deployment
1. Configure environment variables
2. Deploy to Sepolia:
```bash
npm run deploy:testnet
```

3. Verify contracts on Etherscan:
```bash
npm run verify
```

### Mainnet Deployment
1. Configure environment variables
2. Deploy to mainnet:
```bash
npm run deploy:mainnet
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow Solidity style guide
- Write comprehensive tests
- Update documentation
- Use conventional commits
- Ensure all tests pass

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: Open an issue on GitHub
- **Discussions**: Use GitHub Discussions for questions
- **Documentation**: Check the project wiki
- **Community**: Join our Discord server

## 🙏 Acknowledgments

- **OpenZeppelin**: For secure smart contract libraries
- **Hardhat**: For the development framework
- **Next.js**: For the React framework
- **Wagmi**: For Ethereum React hooks
- **Tailwind CSS**: For the styling framework

---

**Built with ❤️ for the Ethereum community**

*This project demonstrates a complete NFT marketplace implementation with both smart contracts and frontend application. Perfect for learning, development, and production use.*
