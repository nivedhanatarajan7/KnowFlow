const express = require('express')
const router = express.Router();

const Exam = require("../../models/Exam")
const auth = require('../../middleware/auth');

router.get("/", (req, res) => {
    Exam.find()
    .then((exams) => res.json(exams))
    .catch((err) => res.status(404).json({noexamsfound: "No Exam found"}))
})


router.get("/:id", (req, res) => {
    Exam.findById(req.params.id)
    .then((exam) => res.json(exam))
    .catch((err) => res.status(404).json({noexamsfound: "No Exam found"}))
})

router.post("/", (req, res) => {
    Exam.create(req.body)
    .then((exam) => res.json({msg: 'Exam added successfully'}))
    .catch((err) => res.status(400).json({error: "Unable to add exam"}))
})

router.delete("/:id", auth, async (req, res) => {
    Exam.findByIdAndDelete(req.params.id)
    .then((exam) => res.json({msg: 'Exam deleted successfully'}))
    .catch((err) => res.status(404).json({error: "No such item"}))
})

router.put("/:id", (req, res) => {
    Exam.findByIdAndUpdate(req.params.id, req.body)
    .then((exam) => res.json({msg: 'Exam updated successfully'}))
    .catch((err) => res.status(400).json({error: "Unable to update exam"}))
})

module.exports = router;