const db = require("../models");
const MakeQuiz = db.makeQuiz;
const Mongoose = require("mongoose")

exports.create = (req, res) => {
    const makeQuiz = new MakeQuiz({
        question: req.body.question,
        selections: req.body.selections,
        ans: req.body.ans
    });
    makeQuiz
        .save(makeQuiz)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "some error occurs"
            })
        })
}
exports.findAll = (req, res) => {
    MakeQuiz
        .find({})
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurs on retriving data"
            })
        })

}

exports.delete = (req, res) => {
    const id = req.params.id;
    MakeQuiz
        .findByIdAndRemove(id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).sned({
                    message: `Cannot delete makeQuiz with id=${id}`
                });
            } else {
                res.send(data)
            }
        })
        .catch(
            err => {
                res.status(500).send({
                    message: `Could not delete makeQuiz with id=${id}`
                })
            }
        )

}
