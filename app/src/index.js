import React from 'react';
import ReactDOM from 'react-dom';
import { Drizzle } from 'drizzle';
import { drizzleReactHooks } from 'drizzle-react';

import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

import drizzleOptions from "./drizzleOptions";
const drizzle = new Drizzle(drizzleOptions);

ReactDOM.render(
  <drizzleReactHooks.DrizzleProvider drizzle={drizzle}>
    <App />
  </drizzleReactHooks.DrizzleProvider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
