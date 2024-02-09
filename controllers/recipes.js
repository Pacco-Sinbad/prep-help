const Recipes = require('../models/recipes')

module.exports = {
    getRecipes: (req,res)=>{
        res.render('recipes.ejs')
    },

    addNewRecipe: async (req,res) => {
        try{
            await Recipes.create({title: req.body.title, ingredients: req.body.ingredients, calories: req.body.calories})
            console.log('New Recipe Added')
            res.redirect('/recipes')
        }
        catch(err){
            console.log(err)
        }
    }

}
 