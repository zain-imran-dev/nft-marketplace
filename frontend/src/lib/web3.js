import { createConfig } from 'wagmi';
import { hardhat } from 'wagmi/chains';
import { metaMask } from '@wagmi/connectors';

const config = createConfig({
  chains: [hardhat],
  connectors: [
    metaMask(),
  ],
});

export { config }; 