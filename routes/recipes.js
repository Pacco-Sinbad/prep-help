const express = require('express')
const router = express.Router()
const todosController = require('../controllers/recipes')

router.get('/', todosController.getTodos)

module.exports = router