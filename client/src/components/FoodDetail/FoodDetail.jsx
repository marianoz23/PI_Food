import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "./../../redux/actions/index"
import NavBar from "./../Nav/NavBar";
import "./FoodDetail.css";

const FoodDetail = (props) => {

  let id = props.match.params.id;

  const dispatch = useDispatch();
  
  const detail = useSelector(state => state.foodDetail); 

  React.useEffect(() => {
    dispatch(actions.getFoodDetail(id));
    dispatch(actions.clearDetail());
  }, [])
  
  return (
    <div >
      <NavBar/>
      <h1 className="recipes">RECIPE DETAIL</h1>
      <div className="contenedor-principal">
        <div className="contenedor-principal__izquierda">
          <div className="contenedor-principal__imagen-izquierda">
            <img src={detail.image} alt={detail.name} />
          </div>
          <h3>{detail.title}</h3>
        </div>
        <div className="contenedor-principal__derecha">  
          <h5>{detail.summary?.replace(/<[^>]*>/g,'')}</h5>
          <h2>Health Score: {detail.healthScore}</h2>
          <h3>Dish Types</h3>
          {
            detail.dishTypes?.map(dish => (
              <li key="{dish}">{dish}</li>
            ))
          }
          <h3>Diets</h3>
          {
            detail.diets?.map(eDiet => (
              <li key="{eDiet}">{eDiet}</li>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;

/* 
      <h4>steps</h4>
      <ol>
      {
        detail.analyzedInstructions[0].steps.map(s => (
          <li>{s.step}</li>
        ))
      }
      </ol>

   */
