import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/diets" >Diets</NavLink>
                        <NavLink to="/recipes" >Search Recipes</NavLink>
                    </li>
                  </ul>
            </nav>
        </header>
    )
}