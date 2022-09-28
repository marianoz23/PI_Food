const { Router } = require('express');
const { Op, Recipe, Diet } = require('../db');
const { API_PASS } = process.env;
const axios = require('axios');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use(express.json());

router.get('/', (req, res) => {
    res.send('Hola Foodman');
  });

/*
router.get('/recipes', async (req, res)=> {
    const {name} = req.query
    try{
        if (!name) return res.status(404).send(`Debe ingresar un datoa para realizar la busqueda`)
        const recipe = await Recipe.findAll({
            where: {
                name: {[Op.substring]: name},
            }
            })
            console.log(recipe)
            //res.send(recipe)
            res.status(201).json(recipe)
        }
    catch (e) {
        console.log(e)
    }
})
*/

/*
router.post('/recipes/', async (req, res)=> {
    const {name, summary, healthScore, instructions} = req.body
    console.log(name, summary)
    if (!name || !summary ) return res.status(404).send("Falta enviar datos obligatorios")

    try{
        const recipe = await Recipe.create(req.body)
        res.status(201).json(recipe)
    }
    catch (error){
        res.status(404).send("Error en alguno de los datos provistos")
    }
})
*/

//http://localhost:3001/recipes?name=Garlic
router.get('/recipes', async (req, res)=> {
    const {name} = req.query
    try{
        if (!name) return res.status(404).send(`Debe ingresar un dato para realizar la busqueda`)
        
       const recipe = await axios(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${API_PASS}`) 
       //console.log(recipe)
       //res.send(recipe)
       res.status(201).json(recipe.data)

        }
    catch (e) {
        console.log(e)
    }
})

//http://localhost:3001/recipes/715594
router.get('/recipes/:id', async (req, res)=> {
    const {id} = req.params
    console.log("hola", id)
     try{
       const recipe = await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_PASS}`) 
       //console.log(recipe.data.id)
       //res.send(recipe)
       res.status(201).json(recipe.data)
        }
    catch (e) {
        console.log(e)
    }
})

//


router.get('/diets', async (req, res)=> {
//    const {name} = req.query
    try{
        const diets = await Diet.findAll()
        //console.log(diets)
        //res.send(diets)
        res.status(201).json(diets) 
        }
    catch (e) {
        console.log(e)
    }
})



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