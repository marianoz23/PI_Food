export const LOAD_DIETS = "LOAD_DIETS";
export const GET_FOODS = "GET_FOODS";
export const GET_SEARCH = "GET_SEARCH";
export const ORDER_BY_TITLE = "ORDER_BY_TITLE"
export const ORDER_BY_HEALTHSCORE = "ORDER_BY_HEALTHSCORE"
export const FILTER_BY_DIET = "FILTER_BY_DIET" 
export const GET_FOOD_DETAIL = "GET_FOOD_DETAIL";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const CLEAR = "CLEAR"

export function loadDiets(){
    return function (dispatch){
        
        return fetch(`http://localhost:3001/diets`) 
        .then(res => res.json())
        .then(res => {  
            dispatch({
                type: "LOAD_DIETS",
                payload: res
            })
        })
    }
}

export function getFoods(){

    return function (dispatch){
        return fetch(`http://localhost:3001/home`)
        .then(res => res.json())
        .then(res => {  
            dispatch({
                type: "GET_FOODS",
                payload: res
            })
        })
    }
}

export function getSearch(title){
//    return function (dispatch){
//        return fetch(`http://localhost:3001/recipes?name=${title}`) 
//        .then(res => res.json())
//        .then(res => {  
//            dispatch({
    return{
        type: "GET_SEARCH",
        payload: title
    }
}

export function orderByTitle(order){
    return {  
        type: "ORDER_BY_TITLE",
        payload: order
    }
}

export function orderByHealthScore(order){
    return{
        type: "ORDER_BY_HEALTHSCORE",
        payload: order
    }
}

export function filterByDiet(diet){
    return{
        type: "FILTER_BY_DIET",
        payload: diet
    }
}


export function getFoodDetail(id){

    return function (dispatch){
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


export function addRecipe(input){

    return function (dispatch){
        return fetch('http://localhost:3001/recipes/create',{
                method:'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({
                    title: input.title,
                    image: input.image,
                    summary: input.summary,
                    healthScore: input.healthScore,
                    instructions: input.instructions,
                    diets: input.diets,
                    dishTypes: input.dishTypes
                })
        })
        .then(res => res.json())
        .then(res => {  
            dispatch({
                type: "CREATE_RECIPE",
                payload: res
            })
        })
    }   
}

export function clearDetail() {
    return {
        type: "CLEAR"
    }
}

/*
export function orderByTitle(tipo){
    //    console.log("ACTIONS:tipo order title:", tipo)
        return function (dispatch){
            
            return fetch(`http://localhost:3001/home/orderBy/1${tipo}`) 
            .then(res => res.json())
            .then(res => {  
                dispatch({
                    type: "ORDER_BY_TITLE",
                    payload: res
                })
            })
        }
    }

export function orderByHealthScore(tipo){
//    console.log("ACTIONS:tipo order HealthScore:", tipo)
    return function (dispatch){
        
        return fetch(`http://localhost:3001/home/orderBy/2${tipo}`) 
        .then(res => res.json())
        .then(res => {  
            dispatch({
                type: "ORDER_BY_HEALTHSCORE",
                payload: res
            })
        })
    }
}

*/    