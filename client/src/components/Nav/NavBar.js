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
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/diets" >Diets</NavLink>
                    </li>
                </ul>
                </div>
             </nav>
        </header>
    )
}