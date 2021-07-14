module.exports = app => {
    const makeQuiz = require("../controllers/makeQuiz.controller");
    let router = require("express").Router();

    //create a mew makeQuiz
    router.post("/", makeQuiz.create);

    router.get("/",makeQuiz.findAll);
    router.delete("/:id",makeQuiz.delete);

    app.use("/api/makeQuiz", router);
}