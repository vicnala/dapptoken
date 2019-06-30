import React from "react";
import logo from "./logo.png";

export default ({ accounts, web3 }) => {
  return (
  <div className="App">
    <div>
      <img src={logo} alt="drizzle-logo" />
      <h1>Drizzle Examples</h1>
      <p>Examples of how to get started with Drizzle in various situations.</p>
    </div>

    <div className="section">
      <h2>Active Account</h2>
      {accounts[0]}
    </div>

    <div className="section">
      <h2>Network</h2>
      Status: {web3.status}, ID: {web3.networkId}
    </div>

  </div>
)};
