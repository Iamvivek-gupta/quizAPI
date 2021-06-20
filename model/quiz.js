const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
    quiz_name: {
        type : String,
        required: true
    }
})

const Quiz = mongoose.model('Quiz', quizSchema);


module.exports = Quiz