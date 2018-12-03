require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider");


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(
        process.env.MNEMONIC,
        process.env.ROPSTEN_URL),
      network_id: '3',
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  }
};
