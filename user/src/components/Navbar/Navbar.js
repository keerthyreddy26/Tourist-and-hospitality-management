import React from 'react';
import "./NavbarStyles.css";


function Navbar(){
    return(
    <>
    <nav>
        <a href="/">ExploreIndia
        </a>
        <div>
            <ul id="navbar">
                <li><a href="/Home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/hotel">Hotels</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
    </nav>
    
    </>
    )
}

export default Navbar;