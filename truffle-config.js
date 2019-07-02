require('babel-register');
require('babel-polyfill');
require('dotenv').config()
const path = require("path");
const HDWalletProvider = require('truffle-hdwallet-provider');

const privateKey = process.env.PRIVATE_KEY || "";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  networks: {
    develop: {
      port: 7545
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          [privateKey],
          `https://rinkeby.infura.io/v3/${process.env.INFURA_RINKEBY}`
        )
      },
      gas: 5000000,
      gasPrice: 250000000000,
      network_id: 4
    }
  }
};
