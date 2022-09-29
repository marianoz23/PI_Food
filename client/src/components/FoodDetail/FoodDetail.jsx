import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "./../../redux/actions/index"

const FoodDetail = (props) => {

  let id = props.match.params.id;

  const dispatch = useDispatch();
  
  const detail = useSelector(state => state.foodDetail); 

  React.useEffect(() => {
    dispatch(actions.getFoodDetail(id));
  })
    //}, [])
    
  return (
    <div>
      <img src={detail.image} alt={detail.name} />
      <h3>{detail.title}</h3>
      <h3>{detail.dishTypes.map(dish => dish)}</h3>
      {/*<h3>{detail.diets}</h3>*/}
    </div>
  );
};

export default FoodDetail;
