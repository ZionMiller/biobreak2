import React from "react";
import PropTypes from "prop-types";

const StockNav = () => {
  return (
    <>
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="dropdown navigation"
      >
        <a className="navbar-item">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>

        <div className="navbar-item has-dropdown is-active">
          <a className="navbar-link">Docs</a>

          <div className="navbar-dropdown is-boxed">
            <a className="navbar-item">Overview</a>
            <a className="navbar-item">Elements</a>
            <a className="navbar-item">Components</a>
            <hr className="navbar-divider" />
            <div className="navbar-item">Version 0.9.4</div>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-body">
          <p className="title">Documentation</p>
          <p className="subtitle">
            Everything you need to <strong>create a website</strong> with Bulma
          </p>
        </div>
      </section>
    </>
  );
};

export default StockNav;
