const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    question: {
        type : String,
        required: true
    },
    quiz_id: {
        type: String,
        required: true
    }
})

const Question = mongoose.model('Question', questionSchema);


module.exports = Question