import React, { useState } from "react";
import about from "./about";
import "../App.css";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h2 className="navbar-logo">UTBK 2024</h2>
                <div className={`menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                    <div className="icon"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>
                </div>
                <ul className={`navbar-list ${isMobileMenuOpen ? 'open' : ''}`}>
                    <li><a href="#contactpelaksanaan">Contact</a></li>
                    <li><a href="#kelompokpelaksanaan">Team</a></li>
                    <li><a href="#jadwalpelaksanaan">Schedule</a></li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;
