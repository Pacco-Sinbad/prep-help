const mongoose = require('mongoose')

const RecipesSchema = new mongoose.Schema({
    recipe: {
        type: String,
        required: true,
    },
    calories: {
        type: String,
    },
    author: {
        type: String,
        required: true,
    },
})