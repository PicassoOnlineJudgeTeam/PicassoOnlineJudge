// routes/index.js

module.exports = function(app, Question)
{
    // GET ALL questions
    app.get('/api/questions', function(req,res){
        Question.find(function(err, questions){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(questions);
        })
    });

    // GET SINGLE question
    app.get('/api/questions/:question_id', function(req, res){
        Question.findOne({id: req.params.question_id}, function(err, question){
            if(err) return res.status(500).json({error: err});
            if(!question) return res.status(404).json({error: 'question not found'});
            res.json(question);
        })
    });

    // GET question BY AUTHOR
    app.get('/api/questions/author/:author', function(req, res){
        Question.find({author: req.params.author}, function(err, questions){
            if(err) return res.status(500).json({error: err});
            if(questions.length === 0) return res.status(404).json({error: 'question not found'});
            res.json(questions);
        })
    });

    // // CREATE question
    // app.post('/api/questions', function(req, res){
    //     var question = new Question();
    //     question.title = req.body.name;
    //     question.author = req.body.author;
    //     question.published_date = new Date(req.body.published_date);
    //
    //     question.save(function(err){
    //         if(err){
    //             console.error(err);
    //             res.json({result: 0});
    //             return;
    //         }
    //
    //         res.json({result: 1});
    //
    //     });
    // });
    //
    // // UPDATE THE question
    // app.put('/api/questions/:question_id', function(req, res){
    //     Question.findById(req.params.question_id, function(err, question){
    //         if(err) return res.status(500).json({ error: 'database failure' });
    //         if(!question) return res.status(404).json({ error: 'question not found' });
    //
    //         if(req.body.id) question.id = req.body.id;
    //         if(req.body.name) question.name = req.body.name;
    //         if(req.body.author) question.author = req.body.author;
    //
    //         question.save(function(err){
    //             if(err) res.status(500).json({error: 'failed to update'});
    //             res.json({message: 'question updated'});
    //         });
    //
    //     });
    // });
    //
    // // DELETE question
    // app.delete('/api/questions/:question_id', function(req, res){
    //     Question.remove({ _id: req.params.question_id }, function(err, output){
    //         if(err) return res.status(500).json({ error: "database failure" });
    //
    //         /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
    //         if(!output.result.n) return res.status(404).json({ error: "question not found" });
    //         res.json({ message: "question deleted" });
    //         */
    //
    //         res.status(204).end();
    //     })
    // });

}
