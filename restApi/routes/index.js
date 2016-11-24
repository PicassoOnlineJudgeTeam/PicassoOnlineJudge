// routes/index.js
var Questions = require('../models/question');

module.exports = function(app)
{
    // GET ALL QUESTIONS
    app.get('/api/questions', function(req,res){
        Questions.find(function(err, questions){
            if(err) {res.status(500).json({error: 'database failure'}); return;}
//            console.log("questions", questions, router, err);
            // http://expressjs.com/en/api.html#res.jsonp
            res.jsonp(questions);
            res.end();
        });
    });

}