let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/kan",{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>console.log("Connected to DB"))
    .catch(error=>(`Something went wrong ${error.message}`));

let authorSchema = new mongoose.Schema({
    name:{type:String},
    website:{type:String},
    address:{type:String}
});

let courseSchema = new mongoose.Schema({
    name:{type:String },
    author:{type:mongoose.Schema.Types.ObjectId,ref:"authors"} // Adding reference Normalization Type 
});

let authorModel = mongoose.model("authors",authorSchema);
let courseModel = mongoose.model("courses",courseSchema);

async function createAuthor(name,website,address){
    let author = new authorModel({
        name:name,
        website:website,
        address:address
    });
    let data = await author.save();
    console.log(data);
}

async function createCourse(name,author){
    let author = new courseModel({
        name:name,
        author:author,
    });
    let data = await course.save();
    console.log(data);
}

createAuthor("Rudyard","www.rudy.com","mumbai");
createCourse("BOOK","4343241fdfsfsfesfsf67"); //Object ID of who's reference needed to be added.

async function allCourseData(){
    let data = courseModel
    .find()
    .populate("author","name -_id") //To fetch the referenced's data not only the reference
    ;
    console.log(data);
}

allCourseData();