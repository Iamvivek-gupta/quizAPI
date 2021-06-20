const express = require('express');
const questionController = require('./../controller/questionController');
const Router = express.Router();

Router.route('/').post(questionController.createQuestion).get(questionController.getAllQuestion);



module.exports = Router;