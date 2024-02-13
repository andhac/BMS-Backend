const mongoose = require("mongoose");
const moviesSchema =mongoose.Schema({
    img: String,
    title:String,
    gener:String,
})
const movieModel=mongoose.model("movies",moviesSchema)
module.exports= movieModel;
