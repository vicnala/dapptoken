import React, { useState, useEffect, useCallback } from "react";
import { Card, Form, Button } from 'react-bootstrap';
import { drizzleReactHooks } from 'drizzle-react';

export default () => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [submit, setSubmit] = useState(false);

  // https://github.com/trufflesuite/drizzle-react#usecachesend
  const { useCacheSend } = drizzleReactHooks.useDrizzle();
  // https://github.com/trufflesuite/drizzle-react/blob/04bdb7883271dd300eff3aab47a132869f02a627/src/hooks/create-use-cache-send.js#L18
  // the function returns status, not transactions
  const { send, status } = useCacheSend('Token', 'transfer');
  const transferTokens = useCallback(({address, amount}) => send(address, amount), [send]);


  const { drizzle } = drizzleReactHooks.useDrizzle();
  const toWei = drizzle.web3.utils.toWei;

  useEffect(() => {
    if (submit) {
      setSubmit(false);
      // convert to wei
      transferTokens({address, amount: toWei(`${amount || 0}`)});
    }
  }, [submit, transferTokens, address, amount, toWei]);

  return (
    <Card bg="dark" text="white">
      <Card.Body>
        <Card.Title>Transfer Tokens</Card.Title>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Destination Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Destination address 0x..."
              onInput={e => setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Token Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="Token Amount"
              onInput={e => setAmount(e.target.value)}
            />
          </Form.Group>
          <Button variant="secondary" size="lg" onClick={(e) => setSubmit(true)}>
            { (!status || status === "success") ? "TRANSFER" : status.toUpperCase() }
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
};
