import React from "react";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            Collection
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>

            <a href="/Login " className="btn btn-outline-dark ">
              <i className="fas fa-sign-in-alt"></i>Login
            </a>
            <a href="/Register" className="btn btn-outline-dark ms-2">
              <i className="fas fa-users"></i> Register
            </a>
            <a href="/cart" className="btn btn-outline-dark ms-2">
              <i className="fas fa-cart-plus"></i>Cart(0)
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
