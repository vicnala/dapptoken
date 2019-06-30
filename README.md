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
