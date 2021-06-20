const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
    question_name: {
        type : String,
        required: true
    },
    options: [{optionName: String, correctOption: Boolean}]
})

const Answer = mongoose.model('Answer', answerSchema);


module.exports = Answer