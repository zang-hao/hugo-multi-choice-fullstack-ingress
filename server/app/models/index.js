const mongoose=require("mongoose");
const dbConfig=require("../config/db.config");

const db={};
db.mongoose=mongoose;
db.url=dbConfig.url;
db.makeQuiz=require("./makeQuiz.model.js")(mongoose);

module.exports=db;



