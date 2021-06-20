const express = require('express');
const mongoose = require('mongoose');

const questionRouter = require('./routes/questionRoute');
const quizRouter = require('./routes/quizRoute');
const app = express();

mongoose.connect('mongodb://localhost:27017/quizdb',  { useNewUrlParser: true }).then( (con) => {
    console.log("successfully connected");
})

app.use(express.json());
app.use('/api/v1/question', questionRouter);
app.use('/api/v1/quiz', quizRouter);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`server is up on ${PORT}`);
})