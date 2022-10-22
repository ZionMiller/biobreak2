import { useState } from "react";
import { MouseEvent } from "react";
const Nav = () => {
  //https://bulma.io/documentation/components/navbar/
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <span>
            <button className="button is-primary">csSign up</button>
          </span>
          <span>
            <button className="button is-primary">Login</button>
          </span>
          <span>
            <button className="button is-primary">About</button>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
