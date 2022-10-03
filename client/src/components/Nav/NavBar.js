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
 {/*       <div> 
            <h3>Type of Diets</h3>
            <select>
            <option value="All" selected>All Diets</option>
            <option value="Gluten Free" selected>Gluten Free</option>
            <option value="Ketogenic" selected>Ketogenic</option>
            <option value="Vegetarian" selected>Vegetarian</option>
            <option value="Lacto-Vegetarian" selected>Octo-Vegetarian</option>
            <option value="Ovo-Vegetarian" selected>Octo-Vegetarian</option>
            <option value="Vegan" selected>Vegan</option>
            <option value="Pescetarian" selected>Pescetarian</option>
            <option value="Paleo" selected>Paleo</option>
            <option value="Primal" selected>Primal</option>
            <option value="Low FODMAP" selected>Low FODMAP</option>
            <option value="Whole30" selected>Whole30</option>
            </select>
        </div>
    */}
        </header>
    )
}