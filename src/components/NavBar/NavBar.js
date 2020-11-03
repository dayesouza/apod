import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li>
          <NavLink to="/">
            <i className="fas fa-rocket navbar__logo" />
          </NavLink>
        </li>
      </ul>
      <ul className="navbar__list navbar__list__links">
        <li>
          <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/apod"
          >
            APOD
          </NavLink>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="navbar__link"
            href="https://api.nasa.gov/#browseAPI"
          >
            <i className="fas fa-external-link-alt"></i>NASA’S RESOURCES
          </a>
        </li>
      </ul>
    </nav>
  );
}
