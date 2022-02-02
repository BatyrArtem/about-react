import React from 'react'
import ReactLogo from "../images/reactjs-icon.png"

export default function Navbar() {
    return (
        <nav>
            <img src={ReactLogo} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Love</h4>
        </nav>
    )
}