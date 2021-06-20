const express = require('express');
const quizController = require('./../controller/quizController');
const Router = express.Router();

Router.route('/:name').get(quizController.getAllQuiz).post(quizController.createQuiz);
Router.route('/').get(quizController.getAllQuizQuestion)



module.exports = Router;