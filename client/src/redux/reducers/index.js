import {LOAD_DIETS, GET_FOODS, GET_SEARCH, GET_FOOD_DETAIL, CREATE_RECIPE, ORDER_BY_TITLE, ORDER_BY_HEALTHSCORE, CLEAR, FILTER_BY_DIET} from '../actions/index.js'
    
const initialState = {
  foods: [],
  foodMirror:[],
  foodDetail: {},
  diet: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DIETS:
        return{
            ...state,
            diets: action.payload
        }

    case GET_FOODS:
      return {
          ...state,
          foods: action.payload,
          foodMirror: action.payload
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
            a=a.healthScore;
            b=b.healthScore;
            if(a === b) return 0
            if (a < b) return -1
            return 1
        }) : state.foods.sort((a,b)=>{
            a=a.healthScore;
            b=b.healthScore;
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
                    var diet = recipe.diets.map(d => d)
                    if (diet.includes(action.payload)) return recipe // busca sobre un elementos de un array
                    //if (diet.some(e => e.name === action.payload)) return recipe // busca dobre objetos dentro de un array
                    return null
                    })  
        return {
            ...state,
            foods: dietFilter
        }

    case GET_SEARCH:
        const aCopy = state.foodMirror
        const dataSearch = aCopy.filter(recipe => {
            if (recipe.title.includes(action.payload)) return recipe 
            return null
        }) 
        return {
            ...state,
            foods: dataSearch
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


