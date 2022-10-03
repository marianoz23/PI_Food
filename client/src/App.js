import React from "react";
import './App.css';

import NavBar from "./components/Nav/NavBar";
import { Route} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Landing from './components/LandPage/LandPage.jsx';
import FoodDetail from "./components/FoodDetail/FoodDetail.jsx";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe.jsx";


function App() {

  return (
    <div className="App">
     
      <Route exact path="/" component={Landing} />
      <Route exact path="/" component={NavBar} />
      
      <Route exact path='/home' component={Home}/> 
      <Route path='/recipes/:id' component={FoodDetail}/>
      <Route exact path='/recipes/create' component={CreateRecipe}/>
      
      {/*<Route exact path='/local' render={() => <Home/>}/>*/}
      
    </div>
   );
}

export default App;


/*
      <Routes>
        <Route exact path="/" element={<Leading />}></Route>
          <Route exact path="/" element={<Nav />}>
          <Route exact path="/home" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route exact path="/create" element={<CreateRecipe />} />
        </Route>
      </Routes>
    <React.Fragment>
      <div>
      <img id="logoFood" src={Logo} width="100" height="100" className="d-inline-block align-top" alt="Food Mania" />
      <h1>Food Mania</h1>
      </div>
     <NavBar />
        <Route exact path="/" component={<Leading />}>
        <Route exact path="/" component={<NavBar />}>
        <Route exact path="/home" component={<Home />} />
        <Route path="/recipe/:id" component={<FoodDetail />} />
        <Route exact path="/recipes/create" element={<CreateRecipe />} />
      
  </React.Fragment>
{
 
      */     