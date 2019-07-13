import React from 'react'
import { Link } from "react-router-dom";

const NavMenu = () => {

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <Link className="navbar-brand" exact to="/">Logo</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" exact to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" exact to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" exact to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavMenu