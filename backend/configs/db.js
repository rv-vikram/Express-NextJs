//to connect mongoDB server
const mongoose = require("mongoose")
const uri = "mongodb+srv://vehicle:12341234@cluster0.pxwcebq.mongodb.net/sample_mflix";

module.exports = () => mongoose.connect(uri)