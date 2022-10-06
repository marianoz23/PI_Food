import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

export default function NavBar() {

    return (
        <header className="navbar">
            <nav>
                <div>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Landing Page</NavLink>
                        <NavLink exact to="/home" >Home</NavLink>
                        <NavLink to="/recipes/create" >Create Recipe</NavLink>
                    </li>
                </ul>
                </div>
             </nav>
        </header>
    )
}