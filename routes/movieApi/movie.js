let express = require("express");
let router = express.Router();
let movieModel = require("../../db/transaction/movie");
let Joi = require("@hapi/joi");

router.post("/movieshow", async (req,res)=>{
    let { error } = movieValidationError(req.body);
    if(error){ return res.status(400).send({message: error.details[0].message})};

    let data = new movieModel({
        name: req.body.name,
        genre: req.body.genre,
        stocks: req.body.stocks
    });

    let items = await data.save();
    res.send({i:items});
});


function movieValidationError(error){
    let Schema = Joi.object({
        name:Joi.string().required(),
        genre: Joi.string().required(),
        stocks: Joi.number().required()
    });
    return Schema.validate(error);
}

module.exports = router;