import React from "react";
import './App.css';
import { Route, Switch} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Landing from './components/LandPage/LandPage.jsx';
import FoodDetail from "./components/FoodDetail/FoodDetail.jsx";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe.jsx";

function App() {

  return (
    <div className="App">
     <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path='/home' component={Home}/>
      <Route exact path='/recipes/create' component={CreateRecipe}/> 
      <Route path='/recipes/:id' component={FoodDetail}/>
    </Switch>     
    </div>
   );
}

export default App;
