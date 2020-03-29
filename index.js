let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/kan",{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>console.log("Connected to DB"))
    .catch(error=>(`Something went wrong ${error.message}`));
    