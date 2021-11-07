import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={logo} alt="Logo restaurante"/>
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">Contact</Link>
                    <Link to="/contact">About Us</Link>    
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About Us</Link>
                <button onClick={toggleNavbar}>
                    <MenuRoundedIcon/>
                </button>
            </div>
        </div>
    )
}

export default Navbar;
