import "./FoodCard.css";
import React from "react";
//import { useDispatch } from "react-redux";
//import * as actions from "./../../redux/actions/index"
import {Link} from 'react-router-dom'

const FoodCard = (props) => {

  return (
    <div  className="cards">
      <img  className="img" src={props.image} alt={props.name} width="1000" height="300"/>
      <div className="container">
        <Link to = {`/recipes/${props.id}`}>
          <h3>{props.title}</h3>
        </Link>
        <h4> Health Score : {props.healthScore}</h4>
        <h3>Diets</h3>
        <ul>
        { props.diets?.map(xDiet => 
          <li key="{xDiet}">{xDiet}</li>
        )}  
        </ul>
      </div>
    </div>
  );
};

export default FoodCard;

