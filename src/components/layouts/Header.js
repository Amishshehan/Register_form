import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <div className="container">
            <Link to="/" className="navbar-brand">
              Register App
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;