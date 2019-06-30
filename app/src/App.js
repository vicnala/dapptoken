import React from 'react';
import { drizzleReactHooks } from 'drizzle-react';
import Accounts from './Accounts';

import "./App.css";

export default () => {
  const drizzleState = drizzleReactHooks.useDrizzleState(drizzleState => ({
    accounts: drizzleState.accounts,
    web3: drizzleState.web3,
  }));

  return <Accounts
    accounts={drizzleState.accounts}
    web3={drizzleState.web3}
  />;
}
