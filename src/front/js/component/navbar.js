import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid justify-content-between">
        <Link className="navbar-brand" to="/">
          MarketPlace
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/market">
                Market
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
