import React from "react";
import logo from "../../Images/Logo.svg";
import hamburger from "../../Images/icon_hamburgermenu.svg"
import "./Nav.css";

function nav() {
  return (
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
            <a href="/">Reservations</a>
          </li>
          <li>
            <a href="/">Order Online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
        <a className="hamburger" href={hamburger}></a>
      </nav>
    </div>
  );
}

export default nav;
