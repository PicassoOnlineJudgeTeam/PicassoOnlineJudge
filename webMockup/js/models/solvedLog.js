
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var solvedLogSchema = new mongoose.Schema({
    questionID: String,
    memverID: String,
    size: String,
    result: Number,
    time: Number,
    submitTime: String,
});

module.exports = mongoose.model('solvedLog', solvedLogSchema);
