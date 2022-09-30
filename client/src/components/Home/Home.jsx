import "./home.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getFoods, getSearch } from "./../../redux/actions/index";

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

  render() {
    const { title } = this.state;

    return (
    <header>

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
    </header>
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
    getFoods: () => dispatch(getFoods()),
    getSearch: title => dispatch(getSearch(title))  
//    getSearch: () => dispatch(actions.getSearch())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
