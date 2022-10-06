export const GET_FOODS = "GET_FOODS";
export const GET_SEARCH = "GET_SEARCH";
export const GET_FOOD_DETAIL = "GET_FOOD_DETAIL";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const ORDER_BY_TITLE = "ORDER_BY_TITLE"
export const ORDER_BY_HEALTHSCORE = "ORDER_BY_HEALTHSCORE"


export function getFoods(){
    return function (dispatch){
        //&number=100
//        return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=23f9b242f5524a6ca59188b1138f18b0`) 
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
    return function (dispatch){
        
        return fetch(`http://localhost:3001/recipes?name=${title}`) 
        .then(res => res.json())
        .then(res => {  
            dispatch({
                type: "GET_SEARCH",
                payload: res
            })
        })
    }
}

export function orderByTitle(tipo){
    console.log("ACTIONS:tipo order title:", tipo)
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
    console.log("ACTIONS:tipo order HealthScore:", tipo)
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

    return function (dispatch){
//        return fetch(`https://api.spoonacular.com/recipes/${id}/information?apikey=23f9b242f5524a6ca59188b1138f18b0&number=100`) 
        return fetch(`http://localhost:3001/recipes/${id}`)
        .then(res => res.json())
        .then(res => { console.log(res) 
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
                    summary: input.summary,
                    healthscore: input.healthScore,
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

