require('babel-register');

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 6700000,
      gasPrice: 10,
    }
  },
   solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
