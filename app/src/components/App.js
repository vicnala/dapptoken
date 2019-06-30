import React from 'react';
import { drizzleReactHooks } from 'drizzle-react';
import Nav from './Nav';
import Content from './Content';

import "./App.css";

export default () => {
  // https://github.com/trufflesuite/drizzle-react#react-hooks-support-experimental
  const drizzleState = drizzleReactHooks.useDrizzleState(drizzleState => ({
    accounts: drizzleState.accounts
  }));

  const { drizzle } = drizzleReactHooks.useDrizzle();

  return (
    <div>
      <Nav accounts={drizzleState.accounts} />
      {
        drizzle && drizzle.contractList.length === 2 ?
        <Content /> :
        <div className="content">
          <p className="text-white">
            The smart contract is not on the current network.
            Please select another network with Metamask
          </p>
        </div>
      }
    </div>
  );
}
