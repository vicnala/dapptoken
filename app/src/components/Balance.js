import React from "react";
import { drizzleReactHooks } from 'drizzle-react';
import { Card, Table } from 'react-bootstrap';

export default () => {
  const { useCacheCall } = drizzleReactHooks.useDrizzle();
  const drizzleState = drizzleReactHooks.useDrizzleState(drizzleState => ({
    account: drizzleState.accounts[0],
    balances: drizzleState.accountBalances,
  }));

  const { drizzle } = drizzleReactHooks.useDrizzle();
  const fromWei = drizzle.web3.utils.fromWei;

  const etherBalance = fromWei(`${drizzleState.balances[drizzleState.account] || 0}`);
  const tokenBalance = fromWei(`${useCacheCall('Token', 'balanceOf', drizzleState.account) || 0}`);

  return (
    <Card bg="dark" text="white">
      <Card.Body>
        <Card.Title>Balance</Card.Title>
          <Table responsive variant="dark">
            <tbody>
              <tr>
                <td>ETH</td>
                <td style={{ color: "#28a745" }}>{etherBalance}</td>
              </tr>
              <tr>
                <td>DAPP</td>
                <td style={{ color: "#28a745" }}>{tokenBalance}</td>
              </tr>
            </tbody>
          </Table>
      </Card.Body>
    </Card>
  )
};
