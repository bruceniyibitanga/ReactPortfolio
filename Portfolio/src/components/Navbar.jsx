import { React, useState } from "react";
import { Link } from "react-scroll";
import { RiMenu3Line } from "@remixicon/react";
import Logo from "../assets/logo.svg";
import About from "../pages/About";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={Logo} alt="logo" />
      </Link>
      <ul className={`nav-menu navbar-container`}>
        <li className="nav-item">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={600}
            offset={-70}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={600}
            offset={-20}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={600}
            offset={-20}
          >
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={800}
            offset={-20}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="burger-menu" onClick={() => setMenu(!menu)}>
        <RiMenu3Line className="menu-icon" size={28} />
      </div>
    </nav>
  );
}

export default Navbar;
