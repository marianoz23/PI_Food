const { Router } = require('express');
const { Op, Recipe } = require('../db');

const router = Router();

router.get('/home/orderBy/:id', async (req, res)=> {
    const {id} = req.params
    var campo=''
    if (id.substring(0,1)==='1') campo='title'
    else campo='healthscore' 
    console.log("orderBy", campo, id.substring(1) )

    const apiDB = []
    try
    {   const recipePromDb = Recipe.findAll( { order: [ [campo, id.substring(1) ], ], } ) 
        console.log(recipePromDb)
        Promise.all( [recipePromDb] ).then((res2) => {     
            let aDB = recipeDb;
            for ( i in aDB ) apiDB.push( { id : aDB[i].id, title : aDB[i].title, image : aDB[i].image, healthscore : aDB[i].healthscore, diets : aDB[i].diets })
            console.log("Registros de DB:", aDB.length)
            if (aDB.length > 0)
            { 
                console.log("Extrae recetas ordenadas de DB")
                res.status(201).json(apiDB);
            }
                        
        });    

    }
    catch (e) 
    {
        console.log(e)
    }
});

module.exports = router;