let mongoose = require("mongoose");

let movieSchema  = new mongoose.Schema({
    name: { type:String, required:true},
    genre:{ type:String},
    stocks:{type:Number, required:true}
});

let movieModel = mongoose.model("movies",movieSchema);

module.exports = movieModel;