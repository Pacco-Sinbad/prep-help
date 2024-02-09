const express = require('express')
const router = express.Router()
const recipesController = require('../controllers/recipes')

router.get('/', recipesController.getRecipes)

router.post('/addNew', recipesController.addNewRecipe)

module.exports = router