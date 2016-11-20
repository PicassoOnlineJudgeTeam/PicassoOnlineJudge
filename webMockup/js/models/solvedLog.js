
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var solvedLogSchema = new mongoose.Schema({
    questionID: String,
    memberID: String,
    size: String,
    result: String,
    time: String,
    submitTime: String
});

module.exports = mongoose.model('solvedLogs', solvedLogSchema);
