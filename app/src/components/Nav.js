import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

export default ({ accounts }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Token DApp</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
      </Navbar.Collapse>
      <Nav.Link href={`https://etherscan.io/address/${accounts[0]}`}>{accounts[0]}</Nav.Link>
    </Navbar>
  );
};
