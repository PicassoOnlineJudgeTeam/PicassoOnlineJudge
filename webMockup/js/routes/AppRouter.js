var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var timestamps = require('mongoose-timestamp');
// var expressJwt = require('express-jwt');

var Questions = require('../models/question');
var SolvedLogs = require('../models/solvedLog');

router.get(
    '/questions/:qid',
    function(req, res, next){
        Questions.findOne({id: req.params.qid}, function(err, question){
            if(err) {res.status(500).json({error: 'database failure'}); return;}
            res.json(question);
        });
    }
);

router.get(
    '/questions',
    function(req, res, next){
        Questions.find(function(err, questions){
            if(err) {res.status(500).json({error: 'database failure'}); return;}
            res.json(questions);
        });
    }
);

router.get(
    '/solvedLogs',
    function(req, res, next) {
        SolvedLogs.find(function(err, solvedLogs) {
            if(err) {res.status(500).json({error: 'database failure'}); return;}
            console.log(solvedLogs);
            console.log(router);
            res.json(solvedLogs);
        });
    }
);


module.exports = router;
