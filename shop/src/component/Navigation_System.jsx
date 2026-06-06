import React from "react";
import Logo from "../assets/logo.jpg"
import "../styles/nav_system.css"

function Navigation_System() {
    return(
        <header>
            <div className="logo-container">
                <img src={Logo} alt="Shop Logo" />
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About Me</li>
                    <li>Contact Me</li>
                </ul>
            </nav>
        </header>
    )
}
export default Navigation_System;