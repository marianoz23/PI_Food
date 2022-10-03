import "./FoodCard.css";
import React from "react";
//import { useDispatch } from "react-redux";
//import * as actions from "./../../redux/actions/index"
import {Link} from 'react-router-dom'

const FoodCard = (props) => {
  
  console.log(props)
  return (
    <div className="food">
      <img src={props.image} alt={props.name} />
      <Link to = {`/recipes/${props.id}`}>
        <h3>{props.title}</h3>
      </Link>
      <h4>Diets</h4>
      <ol>
      {        
        props.diets.map(diet => (
          <li>{diet}</li>
        ))
      }
      </ol>
    </div>
  );
};

export default FoodCard;

