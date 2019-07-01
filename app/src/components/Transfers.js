import React, { useMemo } from "react";
import { Card, Table } from 'react-bootstrap';
import { drizzleReactHooks } from 'drizzle-react';

export default () => {
  // https://github.com/trufflesuite/drizzle-react#usecachesend
  const { useCacheEvents } = drizzleReactHooks.useDrizzle();

  // Fetch transfers
  const transfers = useCacheEvents(
    'Token', 'Transfer', useMemo(() => ({ fromBlock: 0 }), [])
  );

  let values = [];
  if (transfers) {
    values = transfers.map(evs => evs.returnValues);
  }

  const { drizzle } = drizzleReactHooks.useDrizzle();
  const fromWei = drizzle.web3.utils.fromWei;

  return (
    <Card bg="dark" text="white">
      <Card.Body>
        <Card.Title>Transfers</Card.Title>
        <Table variant="dark">
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              values.map((transfer, index) => {
                return (
                  <tr key={index}>
                    <td style={{ color: "#dc3545" }}>{transfer.from}</td>
                    <td style={{ color: "#28a745" }}>{transfer.to}</td>
                    <td>{fromWei(transfer.value)}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
};
