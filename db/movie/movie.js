let mongoose = require("mongoose");
let G = require("../genre/genre")

let movieSchema = new mongoose.Schema({
    name:{ type:String, required:true, trim:true},
    genre: { type:G.genreSchema, required:true},
    stocks: {type:Number},
    actor:{ type:String, required:true},
    price:{ type:Number, required:true}
});

let movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;