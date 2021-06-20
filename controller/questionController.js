const Question = require('./../model/question');


exports.createQuestion = async (req, res) => {
    console.log(req.body);
    const newQuestion = await Question.create(req.body);
    res.status(201).json({
        status: 'success',
        newQuestion
    })
}

exports.getAllQuestion = async (req, res) => {
    console.log(req.body);
    const allQuestion = await Question.find();
    res.status(200).json({
        status: 'success',
        allQuestion
    })
}