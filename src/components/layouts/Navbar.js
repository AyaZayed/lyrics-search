import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const headerSVG = new URL('../../assets/img/header.svg', import.meta.url)

    return (
        <nav className="navbar">
            <a href="/" className="navbar-logo">
                <img src={headerSVG} alt="logo" />
            </a>
        </nav>
    )
}