import React from 'react'
import {
    Link
} from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-dark justify-content-left">
                <Link to="/search" className="nav-link text-white">Search</Link>
                <Link to="/saved" className="nav-link text-white">Saved</Link>
            </nav>
        </header>
    );
}

export default Header;