
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new mongoose.Schema({
    id: String,
    name: String,
    author: String,
    count: Number,
    comCount: Number,
    ltdTime: String,
    origin: String,
    content: String,
    input: String,
    output: String,
    exInput: String,
    exOutput: String,
    testcase: Array
});

module.exports = mongoose.model('question', questionSchema, 'questions');