import React from 'react'
import { Link } from "react-router-dom";

const MainNav = () => {
    let navCss = {
        listStyle:'none',
        display:'flex',
        justifyContent:'spaceBetween',
        alignItems:'center',
        background:'',
        width:400,
        padding:10,
        textAlign:'center'
    }
    let linkCss = {
        margin:10,
        padding:10,
        textDecoration:'none'
    }
    return (
        <nav>
            <ul style={navCss}>
                <li><Link style={linkCss} exact to="/">Home</Link></li>
                <li><Link style={linkCss} to="/About">About</Link></li>
                <li><Link style={linkCss} to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default MainNav