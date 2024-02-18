import { React, useState } from "react";
import {RiMenu3Line} from "@remixicon/react";
import Logo from "../assets/logo.svg";

function Navbar() {

    const [menu, setMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="navbar-logo">
                    <img src={Logo} alt="logo" />
                </a>
                <ul className={`nav-menu ${menu ? 'show' : 'hide'}`}>
                    <li className="nav-item">
                        <a href="#" className="nav-links">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links">Contact</a>
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