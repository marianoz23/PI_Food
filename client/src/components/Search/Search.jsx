import "./Search.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../redux/actions/index"
import FoodCard from "./../FoodCard/FoodCard.jsx"

export class Search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  
  handleChange(event){
    this.setState({ title: event.target.value }); // con lo capte en el input
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.getSearch(this.state.title)  //se la pasa al reducer
  }

  render() {

    return (
    <header>
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="type favorite recipe" value={this.title} onChange={this.handleChange} className="form-input"/>
        <button type="submit" className="btn">Search</button>
      </form>
      
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
    </header>  
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);


/*

  componentDidMount (){
    this.props.getSearch()
  }


}



*/