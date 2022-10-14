import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "./../../redux/actions/index"
import NavBar from "./../Nav/NavBar";


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
      <img src={detail.image} alt={detail.name} />
      <h3>{detail.title}</h3>
      <h5>{detail.summary?.replace(/<[^>]*>/g,'')}</h5>
      <h2>Health Score: {detail.healthScore}</h2>
      <h3>Dish Types</h3>
      <ol>
      {
        detail.dishTypes?.map(dish => (
          <li >{dish}</li>
        ))
      }
      </ol>

      <h3>Diets</h3>
      <ol>
      {
        detail.diets?.map(diet => (
          <li>{diet}</li>
        ))
      }
      </ol>

    </div>
  );
};

export default FoodDetail;

/* 
summary.replace(/<[^>]*>/g,'')
res.set('Content-Type', 'text/html; charset=utf-8')
      <h4>steps</h4>
      <ol>
      {
        detail.analyzedInstructions[0].steps.map(s => (
          <li>{s.step}</li>
        ))
      }
      </ol>

   */
