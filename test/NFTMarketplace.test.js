const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFT Marketplace", function () {
  let nftContract;
  let marketplaceContract;
  let owner;
  let addr1;
  let addr2;
  let addr3;
  let addrs;

  beforeEach(async function () {
    // Get signers
    [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();

    // Deploy NFT contract
    const NFT = await ethers.getContractFactory("NFT");
    nftContract = await NFT.deploy();

    // Deploy Marketplace contract
    const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
    marketplaceContract = await NFTMarketplace.deploy();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await marketplaceContract.owner()).to.equal(owner.address);
    });

    it("Should set the correct listing price", async function () {
      const listingPrice = await marketplaceContract.getListingPrice();
      expect(listingPrice).to.equal(ethers.parseEther("0.025"));
    });
  });

  describe("NFT Contract", function () {
    it("Should mint a new token", async function () {
      const tokenURI = "https://example.com/token/1";
      await nftContract.connect(addr1).createToken(tokenURI);
      
      expect(await nftContract.ownerOf(1)).to.equal(addr1.address);
      expect(await nftContract.tokenURI(1)).to.equal(tokenURI);
    });

    it("Should increment token counter", async function () {
      const initialCount = await nftContract.getCurrentToken();
      await nftContract.connect(addr1).createToken("https://example.com/token/1");
      const newCount = await nftContract.getCurrentToken();
      
      expect(newCount).to.equal(initialCount + 1n);
    });
  });

  describe("Marketplace Functions", function () {
    let tokenId;
    const tokenURI = "https://example.com/token/1";
    const price = ethers.parseEther("1");

    beforeEach(async function () {
      // Mint a token for addr1
      await nftContract.connect(addr1).createToken(tokenURI);
      tokenId = await nftContract.getCurrentToken();
    });

    describe("createMarketItem", function () {
      it("Should create a market item", async function () {
        // Approve marketplace to transfer token
        await nftContract.connect(addr1).approve(marketplaceContract.target, tokenId);
        
        const listingPrice = await marketplaceContract.getListingPrice();
        await marketplaceContract.connect(addr1).createMarketItem(
          nftContract.target,
          tokenId,
          price,
          { value: listingPrice }
        );

        const marketItem = await marketplaceContract.fetchMarketItem(1);
        expect(marketItem.itemId).to.equal(1);
        expect(marketItem.nftContract).to.equal(nftContract.target);
        expect(marketItem.tokenId).to.equal(tokenId);
        expect(marketItem.seller).to.equal(addr1.address);
        expect(marketItem.price).to.equal(price);
        expect(marketItem.sold).to.equal(false);
      });

      it("Should fail if price is zero", async function () {
        await nftContract.connect(addr1).approve(marketplaceContract.target, tokenId);
        
        const listingPrice = await marketplaceContract.getListingPrice();
        await expect(
          marketplaceContract.connect(addr1).createMarketItem(
            nftContract.target,
            tokenId,
            0,
            { value: listingPrice }
          )
        ).to.be.revertedWith("Price must be at least 1 wei");
      });

      it("Should fail if listing price is not paid", async function () {
        await nftContract.connect(addr1).approve(marketplaceContract.target, tokenId);
        
        await expect(
          marketplaceContract.connect(addr1).createMarketItem(
            nftContract.target,
            tokenId,
            price,
            { value: ethers.parseEther("0.01") }
          )
        ).to.be.revertedWith("Price must be equal to listing price");
      });
    });

    describe("createMarketSale", function () {
      beforeEach(async function () {
        // Create a market item
        await nftContract.connect(addr1).approve(marketplaceContract.target, tokenId);
        const listingPrice = await marketplaceContract.getListingPrice();
        await marketplaceContract.connect(addr1).createMarketItem(
          nftContract.target,
          tokenId,
          price,
          { value: listingPrice }
        );
      });

      it("Should allow buying a market item", async function () {
        const initialBalance = await ethers.provider.getBalance(addr1.address);
        
        await marketplaceContract.connect(addr2).createMarketSale(
          nftContract.target,
          1,
          { value: price }
        );

        // Check that token ownership transferred
        expect(await nftContract.ownerOf(tokenId)).to.equal(addr2.address);
        
        // Check that seller received payment
        const finalBalance = await ethers.provider.getBalance(addr1.address);
        expect(finalBalance).to.be.gt(initialBalance);
        
        // Check market item status
        const marketItem = await marketplaceContract.fetchMarketItem(1);
        expect(marketItem.sold).to.equal(true);
        expect(marketItem.owner).to.equal(addr2.address);
      });

      it("Should fail if wrong price is paid", async function () {
        await expect(
          marketplaceContract.connect(addr2).createMarketSale(
            nftContract.target,
            1,
            { value: ethers.parseEther("0.5") }
          )
        ).to.be.revertedWith("Please submit the asking price in order to complete the purchase");
      });
    });

    describe("View Functions", function () {
      beforeEach(async function () {
        // Create multiple market items
        for (let i = 1; i <= 3; i++) {
          await nftContract.connect(addr1).createToken(`https://example.com/token/${i}`);
          const newTokenId = await nftContract.getCurrentToken();
          
          await nftContract.connect(addr1).approve(marketplaceContract.target, newTokenId);
          const listingPrice = await marketplaceContract.getListingPrice();
          await marketplaceContract.connect(addr1).createMarketItem(
            nftContract.target,
            newTokenId,
            ethers.parseEther(`${i}`),
            { value: listingPrice }
          );
        }
      });

      it("Should fetch all market items", async function () {
        const items = await marketplaceContract.fetchMarketItems();
        expect(items.length).to.equal(3);
        
        for (let i = 0; i < items.length; i++) {
          expect(items[i].sold).to.equal(false);
          expect(items[i].owner).to.equal(ethers.ZeroAddress);
        }
      });

      it("Should fetch items created by a user", async function () {
        const items = await marketplaceContract.connect(addr1).fetchItemsCreated();
        expect(items.length).to.equal(3);
        
        for (let i = 0; i < items.length; i++) {
          expect(items[i].seller).to.equal(addr1.address);
        }
      });

      it("Should fetch user's purchased NFTs", async function () {
        // Buy an item
        await marketplaceContract.connect(addr2).createMarketSale(
          nftContract.target,
          1,
          { value: ethers.parseEther("1") }
        );

        const purchasedItems = await marketplaceContract.connect(addr2).fetchMyNFTs();
        expect(purchasedItems.length).to.equal(1);
        expect(purchasedItems[0].owner).to.equal(addr2.address);
        expect(purchasedItems[0].sold).to.equal(true);
      });

      it("Should fetch a specific market item", async function () {
        const item = await marketplaceContract.fetchMarketItem(1);
        expect(item.itemId).to.equal(1);
        expect(item.nftContract).to.equal(nftContract.target);
        expect(item.seller).to.equal(addr1.address);
      });
    });
  });

  describe("Owner Functions", function () {
    it("Should allow owner to update listing price", async function () {
      const newPrice = ethers.parseEther("0.05");
      await marketplaceContract.connect(owner).updateListingPrice(newPrice);
      
      expect(await marketplaceContract.getListingPrice()).to.equal(newPrice);
    });

    it("Should not allow non-owner to update listing price", async function () {
      const newPrice = ethers.parseEther("0.05");
      await expect(
        marketplaceContract.connect(addr1).updateListingPrice(newPrice)
      ).to.be.revertedWithCustomError(marketplaceContract, "OwnableUnauthorizedAccount");
    });

    it("Should allow owner to withdraw listing fees", async function () {
      // Create a market item to generate fees
      await nftContract.connect(addr1).createToken("https://example.com/token/1");
      const tokenId = await nftContract.getCurrentToken();
      
      await nftContract.connect(addr1).approve(marketplaceContract.target, tokenId);
      const listingPrice = await marketplaceContract.getListingPrice();
      await marketplaceContract.connect(addr1).createMarketItem(
        nftContract.target,
        tokenId,
        ethers.parseEther("1"),
        { value: listingPrice }
      );

      const initialBalance = await ethers.provider.getBalance(owner.address);
      await marketplaceContract.connect(owner).withdrawListingPrice();
      const finalBalance = await ethers.provider.getBalance(owner.address);
      
      expect(finalBalance).to.be.gt(initialBalance);
    });
  });

  describe("Events", function () {
    it("Should emit MarketItemCreated event", async function () {
      await nftContract.connect(addr1).createToken("https://example.com/token/1");
      const tokenId = await nftContract.getCurrentToken();
      
      await nftContract.connect(addr1).approve(marketplaceContract.target, tokenId);
      const listingPrice = await marketplaceContract.getListingPrice();
      
      await expect(
        marketplaceContract.connect(addr1).createMarketItem(
          nftContract.target,
          tokenId,
          ethers.parseEther("1"),
          { value: listingPrice }
        )
      ).to.emit(marketplaceContract, "MarketItemCreated")
        .withArgs(1, nftContract.target, tokenId, addr1.address, ethers.ZeroAddress, ethers.parseEther("1"), false);
    });

    it("Should emit MarketItemSold event", async function () {
      await nftContract.connect(addr1).createToken("https://example.com/token/1");
      const tokenId = await nftContract.getCurrentToken();
      
      await nftContract.connect(addr1).approve(marketplaceContract.target, tokenId);
      const listingPrice = await marketplaceContract.getListingPrice();
      await marketplaceContract.connect(addr1).createMarketItem(
        nftContract.target,
        tokenId,
        ethers.parseEther("1"),
        { value: listingPrice }
      );

      await expect(
        marketplaceContract.connect(addr2).createMarketSale(
          nftContract.target,
          1,
          { value: ethers.parseEther("1") }
        )
      ).to.emit(marketplaceContract, "MarketItemSold")
        .withArgs(1, nftContract.target, tokenId, addr1.address, addr2.address, ethers.parseEther("1"));
    });

    it("Should emit ListingPriceUpdated event", async function () {
      const newPrice = ethers.parseEther("0.05");
      await expect(
        marketplaceContract.connect(owner).updateListingPrice(newPrice)
      ).to.emit(marketplaceContract, "ListingPriceUpdated")
        .withArgs(newPrice);
    });
  });
}); 