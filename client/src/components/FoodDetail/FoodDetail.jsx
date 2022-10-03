import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "./../../redux/actions/index"

const FoodDetail = (props) => {

  let id = props.match.params.id;

  const dispatch = useDispatch();
  
  const detail = useSelector(state => state.foodDetail); 

  React.useEffect(() => {
    dispatch(actions.getFoodDetail(id));
  }, [])
  
  return (
    <div>
      <img src={detail.image} alt={detail.name} />
      <h3>{detail.title}</h3>
      <h5>{detail.summary}</h5>
      <h2>Health Score: {detail.healthScore}</h2>
      <h4>Dish Type</h4>
{/* 
      <ol>
      {
        detail.dishTypes.map(dish => (
          <li>{dish}</li>
        ))
      }
      </ol>

      <h4>Diets</h4>
      <ol>
      {
        detail.diets.map(diet => (
          <li>{diet}</li>
        ))
      }
      </ol>

      <h4>steps</h4>
      <ol>
      {
        detail.analyzedInstructions[0].steps.map(s => (
          <li>{s.step}</li>
        ))
      }
      </ol>

   */}
    </div>
  );
};

export default FoodDetail;
