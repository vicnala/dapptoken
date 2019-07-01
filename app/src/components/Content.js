import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Balance from './Balance';
import Transfer from './Transfer';
import Transfers from './Transfers';

export default () => {
  return (
    <Container>
      <Row className="p-1">
        <Col>
          <Balance />
        </Col>
      </Row>
      <Row className="p-1">
        <Col>
          <Transfer />
        </Col>
      </Row>
      <Row className="p-1">
        <Col>
          <Transfers />
        </Col>
      </Row>
    </Container>
  );
};
