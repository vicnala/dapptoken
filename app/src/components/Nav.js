import React from "react";

export default ({ accounts }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#/">DApp Token Exchange</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            className="nav-link small"
            href={`https://etherscan.io/address/${accounts[0]}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {accounts[0]}
          </a>
        </li>
      </ul>
    </nav>
  )
};
