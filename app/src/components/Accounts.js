import React from "react";

export default ({ accounts, web3 }) => {
  return (
  <div className="App">
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
