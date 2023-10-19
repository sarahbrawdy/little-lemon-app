import React from "react";
import logo from "../../Images/Logo.svg";
import "./Nav.css";
import Reservations from "../Reservations"

function nav() {
  return (
    <>
    <div className="nav-bar-container">
      <nav className="nav-bar">
        <a href="/">
          <img src={logo} alt="LittLe Lemon logo" />
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <Link to='/Reservations'>Reservations</Link>
          </li>
          <li>
            <a href="/">Order Online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </nav>
    </div>
    <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <nav id="menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Reservations</a>
              </li>
              <li>
                <a href="/">Order Online</a>
              </li>
              <li>
                <a href="/">Login</a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </>
  );
}

export default nav;
