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
                <button className="button">First Team</button>
                <button className="button">Women</button>
                <button className="button">Matches</button>
                <button className="button">Tickets</button>
                <button className="button">About</button>
            </div>
        </div>
    );
};

export default Header;
