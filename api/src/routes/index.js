const { Router } = require('express');
const { Op, Recipe, Diet } = require('../db');
const { API_PASS } = process.env;
const axios = require('axios');
const db = require('../db');
const router = Router();

//http://localhost:3001/home
router.get('/home', async (req, res)=> {

    try
    {
 
        const fetchData = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_PASS}&addRecipeInformation=true&number=100`)
        const recipeApi = fetchData.data.results;
        const formatApi = recipeApi.map((recipe) => {
            return {
                id: recipe.id,
                image: recipe.image,
                title: recipe.title,
                summary: recipe.summary,
                healthScore: recipe.healthScore,
                diets: recipe.diets
            };
        });
   
        const recipeDb = await Recipe.findAll({
            include: {
            model: Diet,
            attributes: ["name"],
            through: {
            attributes: [],
            }
            },
        });

        var formatDb = [];
        for ( i in recipeDb )
            { 
            formatDb.push( 
            {   id : recipeDb[i].id, 
                title : recipeDb[i].title, 
                image : recipeDb[i].image, 
                healthScore : recipeDb[i].healthScore,
                diets : recipeDb[i].Diets?.map( dietas => dietas.name)
            })
            };
            res.status(200).json([...formatApi, ...formatDb]);
  //          res.status(200).json(formatDb);

    }
    catch (error) 
    {
        res.send({error : error.message})
    }
});

//http://localhost:3001/recipes/create/
router.post('/recipes/create', async (req, res)=> {
    const {title, summary, diets} = req.body
    if (!title || !summary ) return res.status(404).send("Falta enviar datos obligatorios")
    console.log("dietas en Rutas:", diets)
    try{
        const recipeCreate = await Recipe.create(req.body);
        //res.status(201).json(recipe)
        await recipeCreate.addDiets(diets)
        res.status(200).send({ msg: "Recipe successfully created" });
    }
    catch (error){
        res.status(404).send("Error en alguno de los datos provistos")
    }
})


//http://localhost:3001/recipes/715594
router.get('/recipes/:id', async (req, res)=> {
    const {id} = req.params
     try{
        if (id.length > 2) 
        { 
            const recipe = await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_PASS}`) 
            if (recipe) res.status(201).json(recipe.data)
        }    
       else
       {
        const recipeDb = await Recipe.findByPk(id, {
            include: {
            model: Diet,
            attributes: ["name"],
            through: {
            attributes: [],
            }
            },
        })
        var formatDb =  
            {   id : recipeDb.id, 
                title : recipeDb.title, 
                image : recipeDb.image, 
                healthScore : recipeDb.healthScore,
                dishTypes : recipeDb.dishTypes,
                diets : recipeDb.Diets?.map( dietas => dietas.name)
            }

        if (!recipeDb) return res.status(404).send(`El código ${id} no corresponde a una receta existente`)
        res.status(201).json(formatDb);
        }               
    }
    catch (error)
    {
        console.log(error)
    }
})


//-------------------------------------------------
//http://localhost:3001/recipes?name=Garlic
router.get('/recipes', async (req, res)=> {
    console.log("Entrando a hacer la busqueda a la DB")
    const {name} = req.query
    const apiDB = []
    try{
        if (!name) return res.status(404).send(`Debe ingresar un dato para realizar la busqueda`)
        const recipePromDb = await Recipe.findAll({
            where: {
                title: {[Op.substring]: name},
            }
            })
            Promise.all( [recipePromDb] ).then((res2) => {     
                const [recipeDb] = res2
                let aDB = recipeDb;
                for ( i in aDB )
                { 
                    apiDB.push( { id:aDB[i].id, title:aDB[i].title, image:aDB[i].image, healthscore:aDB[i].healthscore, diets:aDB[i].diets })
                };
                console.log("Extrae Busqueda de DB")
                res.status(201).json(apiDB);
            });    
            
        }
    catch (e) {
        console.log(e)
    }
})

//http://localhost:3001/diets
router.get('/diets', async (req, res)=> {
    try{
        const GlutenFree = await Diet.findOrCreate({
            where:{name:"gluten free"}
        });
        const Dairy  = await Diet.findOrCreate({
            where:{name:"dairy free"}
        });
        const Lacto_ovo_vegetarian  = await Diet.findOrCreate({
            where:{name:"lacto ovo vegetarian"}
        });

        const Vegan = await Diet.findOrCreate({
            where:{name:"vegan"}
        });

        const Pecetarian = await Diet.findOrCreate({
            where:{name:"pecetarian"}
        });

        const Paleo = await Diet.findOrCreate({
            where:{name:"paleo"}
        });

        const Primal = await Diet.findOrCreate({
            where:{name:"primal"}
        });

        const Low_Fodmap = await Diet.findOrCreate({
            where:{name:"low FODMAP"}
        });

        const Whole_30 = await Diet.findOrCreate({
            where:{name:"whole 30"}
        });

        res.send("Dietas Cargadas en base de Datos"); 
        }
    catch (error) {
        console.log(error)
    }
})

/*
//http://localhost:3001/home/orderBy/1ASC
router.get('/home/orderBy/:id', async (req, res)=> {
    const {id} = req.params
    var campo=''
    if (id.substring(0,1)==='1') campo='title'
    else campo='healthscore' 
    console.log("orderBy", campo, id.substring(1) )

    const apiDB = []
    try
    {   const recipePromDb = Recipe.findAll( { order: [ [campo, id.substring(1) ], ], } ) 
        Promise.all( [recipePromDb] ).then((res2) => {     
            const [recipeDb] = res2
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

//http://localhost:3001/recipes?name=Garlic
router.get('/xrecipes', async (req, res)=> {
    console.log("Entrando a hacer la busqueda")
    const {name} = req.query
    try{
        if (!name) return res.status(404).send(`Debe ingresar un dato para realizar la busqueda`)
        
       const recipe = await axios(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${API_PASS}&addRecipeInformation=true`) 
       console.log(recipe)
       //res.send(recipe)
       res.status(201).json(recipe.data.results)

        }
    catch (e) {
        console.log(e)
    }
})

//http://localhost:3001/home
router.get('/homes', async (req, res)=> {

    const apiDB = [] 
  
    try
    {
        const recipePromDb = Recipe.findAll({
            include: {
              model: Diet,
              attributes: ["name"],
              through: {
                attributes: [],
              }
            },
        });
        Promise.all( [recipePromDb] ).then((res2) => {     
            const [recipeDb] = res2
            let aDB = recipeDb;
            var cApi = 0
            var cDb = 0
            for ( i in aDB )
            { 
                apiDB.push( { id:aDB[i].id, title:aDB[i].title, image:aDB[i].image, healthScore : aDB[i].healthScore, diets:aDB[i].Diets })
                if (aDB[i].tipo===1) cApi++
                else cDb++;
            };
            console.log("Registros de DB:", cDb)
            console.log("Registros de API:", cApi)
            if ( cApi > 0 ) //(cApi === 0) usar === cuando el api funcione / > para cuando funciones
            {   
                console.log("Extrae recetas de DB")
                res.status(201).json(apiDB);
            }
            else
            {
                console.log("Extrae recetas de API")
                const recipePromApi = axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_PASS}&addRecipeInformation=true&number=5`)
       
                Promise.all( [recipePromApi] ).then((res3) => {     
                    const [recipeApi] = res3
                    let aApi = recipeApi.data.results
                    for ( i in aApi )
                    { 
                        apiDB.push( { id : aApi[i].id, title : aApi[i].title, image : aApi[i].image, healthScore : aApi[i].healthScore, diets : aApi[i].diets })
                    
                        Recipe.create({
                            id: aApi[i].id,
                            image: aApi[i].image,
                            title: aApi[i].title,
                            summary: aApi[i].summary,
                            healthScore: aApi[i].healthScore,
                            diets: aApi[i].diets,
                            tipo: 1
                          });
                      
                    }
                            
                    res.status(200).json(apiDB);
        
                });

            }

        });    

    }
    catch (e) 
    {
        console.log(e)
    }
});

//http://localhost:3001/recipes?name=Garlic
router.get('/recipes', async (req, res)=> {
    console.log("Entrando a hacer la busqueda a la DB")
    const {name} = req.query
    const apiDB = []
    try{
        if (!name) return res.status(404).send(`Debe ingresar un dato para realizar la busqueda`)
        const recipePromDb = await Recipe.findAll({
            where: {
                title: {[Op.substring]: name},
            }
            })
            Promise.all( [recipePromDb] ).then((res2) => {     
                const [recipeDb] = res2
                let aDB = recipeDb;
                for ( i in aDB )
                { 
                    apiDB.push( { id:aDB[i].id, title:aDB[i].title, image:aDB[i].image, healthscore:aDB[i].healthscore, diets:aDB[i].diets })
                };
                console.log("Extrae Busqueda de DB")
                res.status(201).json(apiDB);
            });    
            
        }
    catch (e) {
        console.log(e)
    }
})

*/


module.exports = router;





/*
Únicos Endpoints/Flags que pueden utilizar
GET https://api.spoonacular.com/recipes/complexSearch
Para obtener mayor información sobre las recetas, como por ejemplo el tipo de dieta deben agregar el flag &addRecipeInformation=true a este endpoint
Para los tipos de dieta deben tener en cuenta las propiedades vegetarian, vegan, glutenFree por un lado y también analizar las que se incluyan dentro de la propiedad diets
GET https://api.spoonacular.com/recipes/{id}/information

        //&cuisine=&fillIngredients=false&addRecipeInformation=true&maxReadyTime=120&ignorePantry=flase&number=20&intolerances=gluten&sourceUrl=http://www.foodista.com
        //fetch(`https://api.spoonacular.com/food/products/search?query=${name}&apiKey=${API_PASS}`)
*/