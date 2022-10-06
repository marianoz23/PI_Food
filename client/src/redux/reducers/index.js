import {GET_FOODS, GET_SEARCH, GET_FOOD_DETAIL, CREATE_RECIPE, GET_DIETS, ORDER_BY_TITLE, ORDER_BY_HEALTHSCORE} from '../actions/index.js'

const initialState = {
  foods: [],
  foodDetail: {},
  diet: []
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
    case CREATE_RECIPE:
        return {
            ...state,
            foods: [...state.foods, action.payload]
        }
    case GET_DIETS:
        return{
            ...state,
            diets: action.payload
        }

    case ORDER_BY_TITLE:
        return{
            ...state,
            foods: action.payload
        }

    case ORDER_BY_HEALTHSCORE:
            return{
                ...state,
                foods: action.payload
            }
    
    default:
        return state
  }
};

export default rootReducer;


/*

      const orderRecipesTitle = action.payload === "Asc" ?
              state.foods.sort((a,b)=>{
                  if(a.title.toLowerCase() > b.title.toLowerCase()){
                      return 1
                  }
                  if (b.title.toLowerCase() > a.title.toLowerCase()){
                      return -1
                  }
                  return 0
              }) : state.foods.sort((a,b)=>{
                  if(a.title.toLowerCase() > b.title.toLowerCase()){
                      return -1
                  }
                  if (b.title.toLowerCase() > a.title.toLowerCase()){
                      return 1
                  }
                  return 0
              })
          return {
              ...state,
              allRecipes: orderRecipesTitle
          }     
    
*/