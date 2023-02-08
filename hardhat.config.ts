import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.16",
    settings: {
      viaIR: false,
      optimizer: {
        enabled: false,
        runs: 1000,
      },
    },
  },
  gasReporter: {
    enabled: true,
  },
};

export default config;
