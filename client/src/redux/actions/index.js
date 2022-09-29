export const GET_FOODS = "GET_FOODS";
export const GET_SEARCH = "GET_SEARCH";
export const GET_FOOD_DETAIL = "GET_FOOD_DETAIL";
export const CREATE_FOOD = "CREATE_FOOD";
export const GET_DIETS = "GET_DIETS";

export function getFoods(){
    return function (dispatch){
        
        return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=23f9b242f5524a6ca59188b1138f18b0&number=100`) 
        .then(res => res.json())
        .then(res => {  
            dispatch({
                type: "GET_FOODS",
                payload: res
            })
        })
    }
}

export function getSearch(){
    return function (dispatch){
        
        return fetch(`http://localhost:3001/recipes?name=Garlic`) 
        .then(res => res.json())
        .then(res => {  
            dispatch({
                type: "GET_SEARCH",
                payload: res
            })
        })
    }
}

export function getDiets(){
    return function (dispatch){
        
        return fetch(`http://localhost:3001/diets`) 
        .then(res => res.json())
        .then(res => {  
            dispatch({
                type: "GET_DIETS",
                payload: res
            })
        })
    }
}

export function getFoodDetail(id){
    console.log("actions:",id)
    return function (dispatch){
//        return fetch(`https://api.spoonacular.com/recipes/${id}/information?apikey=23f9b242f5524a6ca59188b1138f18b0&number=100`) 
        return fetch(`http://localhost:3001/recipes/${id}`)
        .then(res => res.json())
        .then(res => {  
            dispatch({
                type: "GET_FOOD_DETAIL",
                payload: res
            })
        })
    }
}
