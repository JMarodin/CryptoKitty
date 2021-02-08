const path = require('path');
const fs = require('fs');
const provider = require('@truffle/hdwallet-provider');
const secrets = JSON.parse(fs.readFileSync('.secrets.json').toString().trim());

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, 'app/src/contracts'),

  networks: {
    rinkeby: {
      provider: () =>
        new provider(
          secrets.privateKey,
          'wss://rinkeby.infura.io/ws/v3/dd38455a7b3f4478805fbf0d79afb7ee',
          0,
          4
        ),
      network_id: 4,
      networkCheckTimeout: 1000000000,
      timeoutBlocks: 200,
    },
  },

  compilers: {
    solc: {
      version: '0.5.7',
    },
  },
};
