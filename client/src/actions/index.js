export function getFoofd(id){
    return function (dispatch){

        return fetch(`https://api.spoonacular.com/recipes/${id}/information?apikey=23f9b242f5524a6ca59188b1138f18b0`) // codigo asincrono
        .then(res => res.json())
        .then(res => {  // se tranforma en sincrono
            dispatch({
                type: "GET_FOOD",
                payload: res.Search
            })
        })
    }
}
