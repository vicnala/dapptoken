## Setup the App

```
cd app
npm audit
npm install react-scripts@3.0.1
```

## Setup drizzleReactHooks

https://github.com/trufflesuite/drizzle-react#react-hooks-support-experimental

index.js
```js
import { Drizzle } from 'drizzle';
import { drizzleReactHooks } from 'drizzle-react';
//...
import drizzleOptions from "./drizzleOptions";
const drizzle = new Drizzle(drizzleOptions);

ReactDOM.render(
  <drizzleReactHooks.DrizzleProvider drizzle={drizzle}>
    <App />
  </drizzleReactHooks.DrizzleProvider>
  , document.getElementById('root')
);
```

Run Ganache and:
```bash
truffle migrate --reset
cd app
npm start
```

## Setup bootstrap

```bash
npm install --save bootstrap react-bootstrap
```

index.js
```js
import 'bootstrap/dist/css/bootstrap.css';
```

## Publish to github pages

First upload your code to a GitHub repo.

Add homepage and deploy scripts to package.json:
```json
{
  "homepage": "https://vicnala.github.io/dapptoken",
  "scripts":{
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build",
  }
}
```

Install gh-pages:
```
npm install --save gh-pages
```

Deploy:
```
npm run deploy
```

## License

MIT © Víctor Navarro.
