import { React, useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "@remixicon/react";
import Logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={Logo} alt="logo" />
      </Link>
      <ul className={`nav-menu navbar-container`}>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="">Contact</Link>
        </li>
      </ul>
      <div className="burger-menu" onClick={() => setMenu(!menu)}>
        <RiMenu3Line className="menu-icon" size={28} />
      </div>
    </nav>
  );
}

export default Navbar;
