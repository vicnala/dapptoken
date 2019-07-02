# Token DApp

A React/Drizzle Hooks Token DApp.

## Create a Drizzle Box

```
mkdir capstone-hooked
cd capstone-hooked
truffle unbox drizzle
```

## Setup contracts and testing

```bash
npm install --save babel-polyfill babel-preset-env babel-preset-es2015 babel-preset-stage-2 babel-preset-stage-3 babel-register chai chai-as-promised chai-bignumber dotenv
```

```bash
touch .babelrc
```

.babelrc
```json
{
  "presets": ["es2015", "stage-2", "stage-3"]
}
```

truffle-config.js
```js
require('babel-register');
require('babel-polyfill');
require('dotenv').config();
//...
```

migrations/2_deploy_contracts.js
```js
const Token = artifacts.require("Token");

module.exports = async function(deployer) {
  const accounts = await web3.eth.getAccounts();
  await deployer.deploy(Token);
};
```

Run the tests
```
truffle test
```

## Deploy to Rinkeby

Use a .env
```bash
PRIVATE_KEY="<your_rinkeby_private_key>"
INFURA_RINKEBY="<your_infura_rinkeby_key>"
```

Install the Truffle HDWalletProvider
```bash
npm install --save truffle-hdwallet-provider truffle-hdwallet-provider-privkey
```

Setup truffle-config:
```js
require('babel-register');
require('babel-polyfill');
require('dotenv').config()
const path = require("path");
const HDWalletProvider = require('truffle-hdwallet-provider');
const privateKey = process.env.PRIVATE_KEY || "";

module.exports = {
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
```

## License

MIT © Víctor Navarro.
