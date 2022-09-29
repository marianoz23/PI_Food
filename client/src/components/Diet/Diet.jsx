//import "./diet.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../redux/actions/index"

export class Diet extends Component {
  componentDidMount (){
    this.props.getDiets()
  }

  render() {
    return (
      <div className="diet">
        <h1>Diets</h1>
        {!this.props.diets? "No hay Diets" : this.props.diets.map(el => (
          <div> 
            <h3> {el.id} - {el.name} </h3>
          </div>
          ))
        }
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    diets: state.diets
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    getDiets: () => dispatch(actions.getDiets())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Diet);
