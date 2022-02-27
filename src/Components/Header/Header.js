import React from "react";
import logo from "../../logo/logo.png";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navLink">
                <a href="#">First Team</a>
                <a href="#">Women</a>
                <a href="#">Matches</a>
                <a href="#">Tickets</a>
                <a href="#">About</a>
            </div>
        </div>
    );
};

export default Header;
