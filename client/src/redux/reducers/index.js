import {GET_FOODS, GET_SEARCH, GET_FOOD_DETAIL, CREATE_RECIPE, GET_DIETS, ORDER_BY_TITLE, ORDER_BY_HEALTHSCORE, CLEAR, FILTER_BY_DIET} from '../actions/index.js'

const initialState = {
  foods: [],
  foodMirror:[],
  foodDetail: {},
  diet: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOODS:
      return {
          ...state,
          foods: action.payload,
          foodMirror: action.payload
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
        const orderRecipesTitle = action.payload === "Asc" ? 
        state.foods.sort((a,b)=>{
            a=a.title.toLowerCase();
            b=b.title.toLowerCase();
            if(a === b) return 0
            if (a < b) return -1
            return 1
        }) : state.foods.sort((a,b)=>{
            a=a.title.toLowerCase();
            b=b.title.toLowerCase();
            if(a === b) return 0
            if (a > b) return -1
            return 1
        })
        return {
        ...state,
        foods: orderRecipesTitle
    } 

    case ORDER_BY_HEALTHSCORE:
        const orderRecipesHealtScore = action.payload === "Asc" ? 
        state.foods.sort((a,b)=>{
            a=a.healthscore;
            b=b.healthscore;
            if(a === b) return 0
            if (a < b) return -1
            return 1
        }) : state.foods.sort((a,b)=>{
            a=a.healthscore;
            b=b.healthscore;
            if(a === b) return 0
            if (a > b) return -1
            return 1
        })
        return {
        ...state,
        foods: orderRecipesHealtScore
        }

        case FILTER_BY_DIET:
            const recipes = state.foodMirror
            const dietFilter = action.payload === "" ? recipes  
                :recipes.filter(recipe => {
                    let diet = recipe.diets.map(d => d)
                    if (diet.includes(action.payload))return recipe
                    return null
                    })  
            return {
                ...state,
                foods: dietFilter
            }

    case CLEAR: 
        return{
            ...state,
            foodDetail: {}
        }
       
    default:
        return state
  }
};

export default rootReducer;


