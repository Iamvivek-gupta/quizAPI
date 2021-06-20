const Quiz = require('./../model/quiz');
const Question = require('./../model/question');


exports.getAllQuiz = async (req, res) => {
    console.log(req.params.name);
    let allQuiz = await Quiz.find({quiz_name: req.params.name});
    if(allQuiz.length>0){
        const allQuestion = await Question.find({"quiz_id":req.params.name });
        const data = Object.assign({allQuiz,allQuestion })
        res.status(200).json({
            status: 'success',
            data
        })
    }
    // res.status(200).json({
    //     status: 'success',
    //     allQuiz
    // })
    
}


exports.getAllQuizQuestion = async (req, res) => {
    const allQuiz = await Quiz.find();
     res.status(200).json({
        status: 'success',
        allQuiz
    })
}



exports.createQuiz = async (req, res) => {
    console.log(req.body);
    const newQuiz = await Quiz.create(req.body);
    res.status(201).json({
        status: 'success',
        newQuiz
    })
}