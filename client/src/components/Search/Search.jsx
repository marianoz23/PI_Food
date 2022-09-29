import "./Search.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../redux/actions/index"
import FoodCard from "./../FoodCard/FoodCard.jsx"

export class Home extends Component {
  componentDidMount (){
    this.props.getSearch()
  }

  render() {
    return (
      <div className="Search">
        <h1>Recipes Search</h1>
        {!this.props.recipes? "No existen recipes con esa palabra" : this.props.recipes.map(el => (
          <div> 
            <FoodCard
              id={el.id}
              title={el.title}
              image={el.image}
              />
          </div>
        ))
        }
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    recipes: state.foods.results
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    getSearch: () => dispatch(actions.getSearch())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
