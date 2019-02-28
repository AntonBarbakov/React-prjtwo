import React, { Component } from 'react';
import styleNavbar from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={styleNavbar.nav}>
            <div>
                <NavLink to="/Profile" activeClassName={styleNavbar.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/Dialogs" activeClassName={styleNavbar.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/News" activeClassName={styleNavbar.active}>News</NavLink>
            </div>
            <div>
                <NavLink to="/Music" activeClassName={styleNavbar.active}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/Setting" activeClassName={styleNavbar.active}>Settings</NavLink>
            </div>
        </nav>);
}

export default Navbar;