require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.16",
    settings: {
      viaIR: false,
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  }
};
