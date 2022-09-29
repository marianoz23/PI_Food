import {GET_FOODS, GET_SEARCH, GET_FOOD_DETAIL, CREATE_FOOD, GET_DIETS} from '../actions/index.js'

const initialState = {
  foods: [],
  foodDetail: {},
  diet: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOODS:
      return {
          ...state,
          foods: action.payload
      }
    case GET_SEARCH:
      return {
          ...state,
          foods: action.payload
        }
    case GET_FOOD_DETAIL:
    return {
        ...state,
        foodDetail: action.payload
    }
    case CREATE_FOOD:
        return {
            ...state,
            foods: [...state.foods, action.payload]
        }
    case GET_DIETS:
        return{
            ...state,
            diets: action.payload
        }
    default:
        return state
  }
};

export default rootReducer;
