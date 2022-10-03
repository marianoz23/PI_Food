router.get("/", async (req, res, next) => {

    try {
      const recipePromApi = fetch(`${apiRecipe}&addRecipeInformation=true&number=100`)
      .then((data) => data.json());
  
      const recipePromDb = Recipe.findAll({
        include: TypeOfDiet,
      });
      
      Promise.all([recipePromApi, recipePromDb]).then((res) => {
        const [recipeApi, recipeDb] = res;
        
        const filteredRecipesApi = recipeApi.results.map((recipe) => {
          peticion(recipe);
          return {
            id: recipe.id,
            name: recipe.title,
            summary: recipe.summary,
            healthScore: recipe.healthScore,
          };
        });

        const allRecipes = [...filteredRecipesApi, ...recipeDb];
        res.send(allRecipes);
      });
    } catch (e) {
      next(e);
    }
  });
  
  
  
  const peticion = (item) => {
    if (item.analyzedInstructions[0]) {
      const pasos = item.analyzedInstructions[0]?.steps?.map((item) => {
        return item?.step ?? "No tiene receta";
      });
      Recipe.create({
        id: item.id,
        name: item.title,
        summary: item.summary,
        healthScore: item.healthScore,
        instructions: pasos.join(" "),
      });
    }
  };
  