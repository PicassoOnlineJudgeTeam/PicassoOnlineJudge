var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var timestamps = require('mongoose-timestamp');
// var expressJwt = require('express-jwt');

var Questions = require('../models/question');
var SolvedLog = require('../models/solvedLog');

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

module.exports = router;
