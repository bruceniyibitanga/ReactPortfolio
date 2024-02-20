import { React, useState } from "react";
import { Link } from "react-scroll";
import {RiMenu3Line} from "@remixicon/react";
import Logo from "../assets/logo.svg";

function Navbar() {

    const [menu, setMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="home" className="navbar-logo">
                    <img src={Logo} alt="logo" />
                </Link>
                <ul className={`nav-menu ${menu ? 'show' : 'hide'}`}>
                <li className="nav-item">
                    <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-links"
                    activeClass="active"
                    onClick={() => setMenu(false)}
                    >
                    Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-110}
                    duration={500}
                    className="nav-links"
                    onClick={() => setMenu(false)}
                    >
                    About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-110}
                    duration={500}
                    className="nav-links"
                    onClick={() => setMenu(false)}
                    >
                    Projects
                    </Link>
                </li>
                </ul>
                <div className="menu" onClick={() => setMenu(!menu)}>
                    <RiMenu3Line className="menu-icon" size={28} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;