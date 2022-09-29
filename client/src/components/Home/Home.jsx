import "./home.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../redux/actions/index"
import FoodCard from "./../FoodCard/FoodCard.jsx"

export class Home extends Component {
  componentDidMount (){
    this.props.getFoods()
  }

  render() {
    return (
    <div>
       <div className="home">
          <h1>Recipes</h1>
          {!this.props.foods? "No hay Foods" : this.props.foods.map(el => (
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
    </div>  
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    foods: state.foods.results
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    getFoods: () => dispatch(actions.getFoods())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
