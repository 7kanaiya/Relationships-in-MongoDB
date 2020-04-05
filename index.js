let express = require("express");
let mongoose = require("mongoose");
let app = express();
let genre = require("./routes/genre");
let movie = require("./routes/movie");
let port = process.env.PORT || 4500;
app.use(express.json());
app.use("/genre", genre);
app.use("/movie", movie);

mongoose.connect("mongodb://localhost/kan", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("connected to db")).catch(error => console.log(`something went wrong ${error.message}`));
app.listen(port, () => console.log(`port is working on ${port}`));