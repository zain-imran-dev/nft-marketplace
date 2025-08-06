# NFT Marketplace Frontend

A beautiful, modern React frontend for the NFT marketplace built with Next.js, Tailwind CSS, and Web3 integration.

## 🎨 Features

- **Modern UI/UX**: Beautiful gradient design with glass morphism effects
- **Web3 Integration**: Connect wallets, interact with smart contracts
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Real-time Updates**: Live marketplace data and transaction status
- **Multiple Tabs**: Marketplace, Mint NFT, List NFT, My NFTs

## 🚀 Quick Start

### Prerequisites

1. **Node.js** (v18 or higher)
2. **MetaMask** or other Web3 wallet
3. **Hardhat node** running locally

### Installation

1. Install dependencies:
```bash
npm install --legacy-peer-deps
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Configuration

### Contract Addresses

Update the contract addresses in `src/contracts/contracts.js`:

```javascript
export const CONTRACT_ADDRESSES = {
  NFT: "YOUR_NFT_CONTRACT_ADDRESS",
  MARKETPLACE: "YOUR_MARKETPLACE_CONTRACT_ADDRESS"
};
```

### Network Configuration

The app supports multiple networks:
- **Localhost** (Hardhat) - For development
- **Sepolia** - Ethereum testnet
- **Mainnet** - Ethereum mainnet

## 🎯 Usage

### 1. Connect Wallet

1. Click "Connect Wallet" button
2. Choose your preferred wallet (MetaMask, WalletConnect, etc.)
3. Approve the connection

### 2. Mint NFTs

1. Navigate to "Mint NFT" tab
2. Enter a token URI (metadata URL)
3. Click "Mint NFT"
4. Confirm the transaction in your wallet

### 3. List NFTs for Sale

1. Navigate to "List NFT" tab
2. Enter the token ID you want to list
3. Set the price in ETH
4. Click "List NFT"
5. Confirm the transaction

### 4. Buy NFTs

1. Browse the marketplace
2. Click "Buy NFT" on any item
3. Confirm the transaction
4. The NFT will be transferred to your wallet

### 5. View Your NFTs

1. Navigate to "My NFTs" tab
2. See all your owned and listed NFTs
3. Track transaction status

## 🎨 UI Components

### Header
- Logo and navigation
- Wallet connection status
- User address display

### Navigation Tabs
- **Marketplace**: Browse and buy NFTs
- **Mint NFT**: Create new NFTs
- **List NFT**: Sell your NFTs
- **My NFTs**: View your collection

### NFT Cards
- Token ID display
- Price information
- Seller address
- Buy button
- Hover effects

### Forms
- Input validation
- Loading states
- Error handling
- Success notifications

## 🔌 Web3 Integration

### Supported Wallets
- **MetaMask**: Most popular Ethereum wallet
- **WalletConnect**: Multi-wallet support
- **Coinbase Wallet**: User-friendly interface

### Smart Contract Interaction
- **ethers.js**: Web3 library for contract calls
- **wagmi**: React hooks for Web3
- **viem**: Type-safe Ethereum client

## 🎨 Design System

### Colors
- **Primary**: Purple to pink gradients
- **Secondary**: Blue to indigo gradients
- **Background**: Dark gradient with glass effects
- **Text**: White with opacity variations

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: Regular, Medium, Bold
- **Sizes**: Responsive scaling

### Effects
- **Glass Morphism**: Backdrop blur effects
- **Gradients**: Smooth color transitions
- **Hover States**: Interactive feedback
- **Animations**: Smooth transitions

## 🛠️ Development

### Project Structure
```
frontend/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with providers
│   │   ├── page.js            # Main marketplace page
│   │   └── globals.css        # Global styles
│   ├── contracts/
│   │   └── contracts.js       # Contract ABIs and addresses
│   └── lib/
│       └── web3.js            # Web3 configuration
├── public/                    # Static assets
└── package.json               # Dependencies
```

### Key Technologies
- **Next.js 15**: React framework
- **Tailwind CSS 4**: Utility-first CSS
- **ethers.js 6**: Ethereum library
- **wagmi 2**: React hooks for Web3
- **lucide-react**: Icon library

### Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🧪 Testing

### Local Testing
1. Start Hardhat node: `npx hardhat node`
2. Deploy contracts: `npm run deploy:local`
3. Update contract addresses
4. Start frontend: `npm run dev`
5. Connect MetaMask to localhost:8545
6. Import test accounts

### Test Accounts
Use the private keys from Hardhat node output:
- Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
- Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
- Account #2: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically

### Manual Deployment
1. Build the project: `npm run build`
2. Start production server: `npm run start`
3. Configure your hosting provider

## 🔒 Security

### Best Practices
- **Input Validation**: All user inputs are validated
- **Error Handling**: Comprehensive error catching
- **Loading States**: Prevent double transactions
- **Wallet Security**: Never store private keys

### Environment Variables
```env
NEXT_PUBLIC_NETWORK=localhost
NEXT_PUBLIC_NFT_ADDRESS=your_nft_contract_address
NEXT_PUBLIC_MARKETPLACE_ADDRESS=your_marketplace_contract_address
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

MIT License - see LICENSE file for details

## 🆘 Support

For issues and questions:
1. Check the documentation
2. Search existing issues
3. Create a new issue with details

---

**Built with ❤️ using Next.js, Tailwind CSS, and Web3 technologies**
