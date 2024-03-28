import React from "react";
import headerStyles from "./header.module.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.topbar}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul className="mb-0">
                <li>
                  <NavLink to="tel:+91 9133102210">+91 9133102210</NavLink>
                </li>
                <li>
                  <NavLink to="mailto:info@elearninfotech.com">
                    info@elearninfotech.com
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <NavLink to="/">
                <button>Support</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Elearn Infotech
          </NavLink>
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutus">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/treatments">
                  Treatments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/appointment">
                  Book Appointment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contactus">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
