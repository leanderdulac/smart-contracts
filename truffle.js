var HDWalletProvider = require("truffle-hdwallet-provider");
require('babel-register');
require('babel-polyfill');



module.exports = {

  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v6vrKrBH3skxXBJnmIwr")
      },
      network_id: 4
    },
  }
};
