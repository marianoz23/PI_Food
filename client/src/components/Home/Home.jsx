import "./home.css";
import Logo from './../../img/cooking.png'
import NavBar from "./../Nav/NavBar";

import React, { Component } from "react";
import { connect } from "react-redux";
import { getFoods, getSearch, orderByTitle } from "./../../redux/actions/index";

import FoodCard from "./../FoodCard/FoodCard.jsx"

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  
  componentDidMount (){
    this.props.getFoods()
    }
 
  handleChange(event){
    this.setState({ title: event.target.value }); // captura el input
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.getSearch(this.state.title)
  }

  orderRecipesTitle(event){
    console.log("asad",orderByTitle(event.target.value))
  //  this.props.orderByTitle(event.target.value)
    //setOrder(event.target.value)
    event.preventDefault()
  };

  render() {
    const { title } = this.state;

    console.log("regresando:", this.props.foods)

    return (
    <header>
      <NavBar/>
      
      <div>
        <img id="logoFood" src={Logo} width="100" height="100" className="d-inline-block align-top" alt="Food Mania" />
        <h1>Food Mania</h1>
      </div>
 

      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <input 
            type="text" 
            placeholder="type favorite recipe"
            value={title} 
            onChange={(e) => this.handleChange(e)} 
            className="form-input"
          />
        </div>
        <button type="submit" className="btn">Search</button>
      </form>

      <div>
        <h3>Order by Title</h3>
        <select onChange={e => this.orderRecipesTitle(e)}>
          <option value="">Selecionar Orden</option>
          <option value="Asc">A to Z</option>
          <option value="Desc">Z to A</option>
        </select>
      </div>
      
      <div>
        <h3>Order by Health Score</h3>
          <select name="select">
            <option name="Select One" disabled>Sort Score</option>
            <option value="ASCENDENT" selected>Ascendent</option>
            <option value="DESCENDET" selected>Descendent</option>
          </select>
      </div>


      <div>
        <div className="home">
            <h1>Recipes</h1>
            {!this.props.foods? "No hay recipes" : this.props.foods.map(el => (
              <div> 
                <FoodCard
                  id={el.id}
                  title={el.title}
                  image={el.image}
                  diets={el.diets}
                  />
              </div>
            ))
            }
        </div>
      </div>  
    </header>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    //foods: state.foods.results
    foods: state.foods
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    getFoods: () => dispatch(getFoods()),
    getSearch: title => dispatch(getSearch(title))  
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
