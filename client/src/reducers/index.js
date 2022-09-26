//import { ADD_MOVIE_FAVOURITE } from "../actions/index.js"

const initialState ={
    moviesLoaded : [],
    moviesFavourites : [],
    moviesDetail : {}
}

function rootReducer(state = initialState, action){
    if (action.type === "ADD_MOVIE_FAVOURITE"){
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.concat(action.payload)
        };
    }
    
    if (action.type === "GET_MOVIES"){
        return{
            ...state, 
            moviesLoaded: action.payload
        }
    } 
    
    if (action.type === "GET_DETAILS"){
        return{
            ...state, 
            moviesDetail: action.payload
        }
    } 

    if (action.type === "CLEAR"){
        return{
          ...state,
          moviesDetail: {}
        }
      }
      
    else return state
}

export default rootReducer