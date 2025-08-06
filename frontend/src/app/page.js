'use client';

import { useState, useEffect } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { 
  ShoppingBag, 
  Search, 
  Rocket,
  TrendingUp,
  Users,
  Award,
  Menu,
  X,
  Wallet,
  Plus,
  Eye,
  User,
  Home,
  Sparkles,
  Heart,
  Star,
  Gift,
  Palette,
  Camera,
  Tag,
  Package
} from 'lucide-react';

export default function NFTMarketplace() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleConnectWallet = () => {
    if (connectors.length > 0) {
      connect({ connector: connectors[0] });
    }
  };

  const renderHomeSection = () => (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-7xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-6">
            NFT Wonderland
          </h1>
          <p className="text-2xl text-white/80 mb-8">
            ✨ Create, collect, and trade magical digital art ✨
          </p>
        </div>
        
        <div className="flex justify-center gap-6 mb-16">
          <button className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg font-bold">
            Start Exploring
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full transition-all transform hover:scale-105 border border-white/20 text-lg font-bold">
            Learn More
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all transform hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Palette className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Create</h3>
          <p className="text-white/70">Mint your own NFTs</p>
        </div>
        
        <div className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all transform hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Collect</h3>
          <p className="text-white/70">Discover amazing art</p>
        </div>
        
        <div className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all transform hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Tag className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Sell</h3>
          <p className="text-white/70">List your NFTs</p>
        </div>
        
        <div className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all transform hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Manage</h3>
          <p className="text-white/70">Your collection</p>
        </div>
      </div>
    </div>
  );

  const renderMarketplaceSection = () => (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-4">
            🎨 Marketplace
          </h1>
          <p className="text-xl text-white/70 mb-8">Discover amazing digital art</p>
          
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
              <input
                type="text"
                placeholder="Search NFTs..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all transform hover:scale-105">
              <div className="aspect-square bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">#{item}</span>
                  </div>
                  <p className="text-white/80">NFT #{item}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2">NFT #{item}</h3>
                <p className="text-white/70 text-sm mb-4">By Artist</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/70">Price</span>
                  <span className="text-white font-bold">0.05 ETH</span>
                </div>
                <button className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white py-3 rounded-xl transition-all font-bold">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMintNFTSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-4">
            ✨ Mint NFT
          </h1>
          <p className="text-xl text-white/70">Create your digital art</p>
        </div>
        
        <div className="bg-white/5 rounded-3xl p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-white text-lg font-bold mb-3">Name</label>
              <input
                type="text"
                placeholder="Enter NFT name..."
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
              />
            </div>
            <div>
              <label className="block text-white text-lg font-bold mb-3">Description</label>
              <textarea
                placeholder="Describe your NFT..."
                rows="4"
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
              />
            </div>
            <div>
              <label className="block text-white text-lg font-bold mb-3">Image URL</label>
              <input
                type="url"
                placeholder="https://example.com/image.jpg"
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
              />
            </div>
            <button className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white py-4 rounded-xl transition-all text-lg font-bold">
              Mint NFT
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderListNFTSection = () => (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-4">
            🏷️ List NFT
          </h1>
          <p className="text-xl text-white/70">Sell your NFTs</p>
        </div>
        
        <div className="bg-white/5 rounded-3xl p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-white text-lg font-bold mb-3">Select NFT</label>
              <select className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg">
                <option value="">Choose your NFT</option>
                <option value="1">NFT #1</option>
                <option value="2">NFT #2</option>
                <option value="3">NFT #3</option>
              </select>
            </div>
            <div>
              <label className="block text-white text-lg font-bold mb-3">Price (ETH)</label>
              <input
                type="number"
                step="0.01"
                placeholder="0.01"
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
            </div>
            <button className="w-full bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 text-white py-4 rounded-xl transition-all text-lg font-bold">
              List NFT
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMyNFTsSection = () => (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
            🎁 My Collection
          </h1>
          <p className="text-xl text-white/70">Your precious NFTs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all transform hover:scale-105">
              <div className="aspect-square bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">#{item}</span>
                  </div>
                  <p className="text-white/80">My NFT #{item}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2">My NFT #{item}</h3>
                <p className="text-white/70 text-sm mb-4">Owned by you</p>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white py-3 rounded-xl transition-all font-bold text-sm">
                    Sell
                  </button>
                  <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl transition-all font-bold text-sm">
                    Transfer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Don't render anything until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <p className="text-white/70 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                NFT Wonderland
              </h1>
            </div>
            
            {/* Navigation - Centered */}
            <nav className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setActiveSection('home')}
                  className={`px-6 py-3 rounded-xl transition-all font-bold text-lg ${activeSection === 'home' ? 'text-white bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => setActiveSection('marketplace')}
                  className={`px-6 py-3 rounded-xl transition-all font-bold text-lg ${activeSection === 'marketplace' ? 'text-white bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                >
                  Marketplace
                </button>
                <button 
                  onClick={() => setActiveSection('mint')}
                  className={`px-6 py-3 rounded-xl transition-all font-bold text-lg ${activeSection === 'mint' ? 'text-white bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                >
                  Mint NFT
                </button>
                <button 
                  onClick={() => setActiveSection('list')}
                  className={`px-6 py-3 rounded-xl transition-all font-bold text-lg ${activeSection === 'list' ? 'text-white bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                >
                  List NFT
                </button>
                <button 
                  onClick={() => setActiveSection('my-nfts')}
                  className={`px-6 py-3 rounded-xl transition-all font-bold text-lg ${activeSection === 'my-nfts' ? 'text-white bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                >
                  My NFTs
                </button>
              </div>
            </nav>
            
            {/* Wallet - Right Side */}
            <div className="flex items-center gap-4">
              {isConnected ? (
                <div className="flex items-center gap-4">
                  <span className="text-white/80 text-sm bg-white/10 px-4 py-2 rounded-lg">
                    {formatAddress(address)}
                  </span>
                  <button
                    onClick={() => disconnect()}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all"
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleConnectWallet}
                  className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white px-6 py-3 rounded-xl transition-all font-bold"
                >
                  Connect Wallet
                </button>
              )}
              
              <button 
                className="md:hidden text-white ml-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-white/10">
              <nav className="flex flex-col gap-4">
                <button 
                  onClick={() => {setActiveSection('home'); setIsMenuOpen(false);}}
                  className={`text-left px-6 py-4 rounded-xl font-bold text-lg ${activeSection === 'home' ? 'text-white bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => {setActiveSection('marketplace'); setIsMenuOpen(false);}}
                  className={`text-left px-6 py-4 rounded-xl font-bold text-lg ${activeSection === 'marketplace' ? 'text-white bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                >
                  Marketplace
                </button>
                <button 
                  onClick={() => {setActiveSection('mint'); setIsMenuOpen(false);}}
                  className={`text-left px-6 py-4 rounded-xl font-bold text-lg ${activeSection === 'mint' ? 'text-white bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                >
                  Mint NFT
                </button>
                <button 
                  onClick={() => {setActiveSection('list'); setIsMenuOpen(false);}}
                  className={`text-left px-6 py-4 rounded-xl font-bold text-lg ${activeSection === 'list' ? 'text-white bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                >
                  List NFT
                </button>
                <button 
                  onClick={() => {setActiveSection('my-nfts'); setIsMenuOpen(false);}}
                  className={`text-left px-6 py-4 rounded-xl font-bold text-lg ${activeSection === 'my-nfts' ? 'text-white bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                >
                  My NFTs
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {activeSection === 'home' && renderHomeSection()}
        {activeSection === 'marketplace' && renderMarketplaceSection()}
        {activeSection === 'mint' && renderMintNFTSection()}
        {activeSection === 'list' && renderListNFTSection()}
        {activeSection === 'my-nfts' && renderMyNFTsSection()}
      </main>
    </div>
  );
}
