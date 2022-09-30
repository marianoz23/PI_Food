import React from "react";
//import './Diet.css';
import Logo from './img/cooking.png'

import NavBar from "./components/Nav/NavBar";
import {Route} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Diet from './components/Diet/Diet.jsx';
import Search from './components/Search/Search.jsx';

import FoodDetail from "./components/FoodDetail/FoodDetail.jsx";

//import Buscador from "./components/Buscador/Buscador";


function App() {
  return (
    <React.Fragment>
      <div>
        <img id="logoFood" src={Logo} width="100" height="100" className="d-inline-block align-top" alt="Food Mania" />
        <h1>Food Mania</h1>
      </div>
      <NavBar />
      <Route exact path='/'>
        <Home name={'Start Food'}/> 
      </Route>
      <Route exact path='/diets'>
        <Diet name={'Start Diet'}/> 
      </Route>
      <Route path='/recipes/:id' component={FoodDetail}/>
      {/*<Route exact path='/recipes/create' component={CreateCharacter}/>*/}
    </React.Fragment>
  );
}

export default App;
