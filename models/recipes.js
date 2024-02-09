const mongoose = require('mongoose')

const RecipesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    calories: {
        type: String,
        required: false,
    },
    // author: {
    //     type: String,
    //     required: true,
    // },
})

module.exports = mongoose.model('Recipes', RecipesSchema)