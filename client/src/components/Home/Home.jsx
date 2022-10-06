import "./home.css";
//import { useEffect, useState } from "react";
import Logo from './../../img/cooking.png'
import NavBar from "./../Nav/NavBar";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getFoods, getSearch, orderByTitle, orderByHealthScore } from "./../../redux/actions/index";

import FoodCard from "./../FoodCard/FoodCard.jsx"

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: "" , 
      tipoT: 'ASC',
      tipoH: 'ASC' };
  }

  componentDidMount (){
    this.props.getFoods()
    }
 
  handleChange(event){
    this.setState({ title: event.target.value }); 
    console.log("valor del evento Search: 1 ", this.setState.title); 
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("valor del evento Search: 2 ", this.setState.title);
    this.props.getSearch(this.state.title)
  }

  handleChange_orderByT(event){
    this.setState({ tipoT: event.target.value });
    console.log("Valor del evento de ORDER:", this.setState.tipoT); 
    event.preventDefault();
    this.props.orderByTitle(event.target.value)
  }

  handleChange_orderByH(event){
    this.setState({ tipoH: event.target.value });
    console.log("Valor del evento de ORDER:", this.setState.tipoH); 
    event.preventDefault();
    this.props.orderByHealthScore(event.target.value)
  }

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
        <select onChange={e => this.handleChange_orderByT(e)} >
          <option value="" >Select Orden</option>
          <option value="Asc">A to Z</option>
          <option value="Desc">Z to A</option>
        </select>
      </div>
      
      <div>
        <h3>Order by Health Score</h3>
          <select onChange={e => this.handleChange_orderByH(e)}>
            <option name="Select One">Select Orden</option>
            <option value="Asc" >Ascendent</option>
            <option value="Desc" >Descendent</option>
          </select>
      </div>

        <div> 
            <h3>Type of Diets</h3>
            <select>
            <option value="All" selected>All Diets</option>
            <option value="Gluten Free" >Gluten Free</option>
            <option value="Ketogenic" >Ketogenic</option>
            <option value="Vegetarian" >Vegetarian</option>
            <option value="Lacto-Vegetarian" >Octo-Vegetarian</option>
            <option value="Ovo-Vegetarian" >Octo-Vegetarian</option>
            <option value="Vegan" >Vegan</option>
            <option value="Pescetarian" >Pescetarian</option>
            <option value="Paleo" >Paleo</option>
            <option value="Primal" >Primal</option>
            <option value="Low FODMAP" >Low FODMAP</option>
            <option value="Whole30" >Whole30</option>
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
                  healthscore={el.healthscore}
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
    getSearch: title => dispatch(getSearch(title)),
    orderByTitle: tipoT => dispatch(orderByTitle(tipoT)),
    orderByHealthScore: tipoH => dispatch(orderByHealthScore(tipoH)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
