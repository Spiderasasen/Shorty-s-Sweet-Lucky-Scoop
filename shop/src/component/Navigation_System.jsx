import React from "react";
import Logo from "../assets/logo.jpg"
import "../styles/nav_system.css"

function Navigation_System() {
    return(
        <header>
            <div className="logo-container">
                <img src={Logo} alt="Shop Logo" />
            </div>
        </header>
    )
}
export default Navigation_System;