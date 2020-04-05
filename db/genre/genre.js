let mongoose = require("mongoose");

let genreSchema = new mongoose.Schema({
    name:{type:String , required:true, trim:true}
});

let genreModel = mongoose.model("genre",genreSchema);

module.exports = { genreSchema, genreModel};