var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var timestamps = require('mongoose-timestamp');
// var expressJwt = require('express-jwt');
var exec = require("child_process").exec;
var fs = require('fs');

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
//            console.log("questions", questions, router, err);
            res.json(questions);
        });
    }
);

router.get(
    '/solvedLogs/:mid',
    function(req, res, next) {
        SolvedLogs.find({memberID: req.params.mid}, function(err, solvedLogs) {
            if(err) {res.status(500).json({error: 'database failure'}); return;}
            res.json(solvedLogs);
        });
    }
);

router.get(
    '/solvedLogs',
    function(req, res, next) {
        SolvedLogs.find(function(err, solvedLogs) {
            if(err) {res.status(500).json({error: 'database failure'}); return;}
            res.json(solvedLogs);
        });
    }
);

router.post(
    '/addLog',
    function(req, res, next) {
        var log = new SolvedLogs({
            'questionID': req.body.questionID,
            'memberID': req.body.memberID,
            'size': req.body.size,
            'result': req.body.result,
            'time': req.body.time,
            'submitTime': req.body.submitTime
        });

        log.save(function(err){
            if(err) {res.status(500).json({result:0}); return;}
            res.json({result:1});
        })
    }
)

router.get(
    '/testWithSource/:obj',
    function(req, res, next) {
        var obj = JSON.parse(decodeURIComponent(req.params.obj));
        Questions.findOne({id: obj.qid}, function(err, question){
            if(err) {res.status(500).json({error: 'database failure'}); return;}
            var arr = [];
            for (var i = 0; i < question.testcase.length; i++) {
                sysin = question.testcase[i].input;
                sysout = question.testcase[i].output;
                test(i, obj.code, sysin, sysout, (idx, flag)=>{
                    arr[idx] = flag;
                    //undefind 제외한 갯수와 비교
                    if (arr.filter(function(val){return val != undefined }).length == question.testcase.length){
                        res.json(arr);
                    }
                });
            }
        });
    }
);

function trim(str) {
    return str.replace( /(^\s*)|(\s*$)/g, "" );
}

function test(idx, source, sysin, sysout, callback){
    fs.writeFile('./source' + idx + '.py', trim(source), function(err) {
        if(err) throw err;
        fs.writeFile('./input' + idx + '.txt', trim(sysin) + '\n', function(err) {
            if(err) throw err;
            fs.writeFile('./output' + idx + '.txt', trim(sysout) + '\n', function(err) {
                if(err) throw err;
                exec("python source" + idx + ".py < input" + idx + ".txt > result" + idx + ".txt 2> error" + idx + ".txt; (diff result" + idx + ".txt output" + idx + ".txt > tmp" + idx + " && (echo PASS && rm tmp" + idx + ") ) || (echo FAIL && rm tmp" + idx + ");", function(error, stdout, stderr){
                    // console.log(idx + "res : " + stdout + "|");
                    // console.log("python source" + idx + ".py < input" + idx + ".txt > result" + idx + ".txt 2> error" + idx + ".txt;"
                    //     + "(printf %s \"$(echo -n $(cat result" + idx + ".txt))\" > result" + idx + ".txt); "
                    //     + "(diff result" + idx + ".txt output" + idx + ".txt > tmp" + idx + " && (echo PASS && rm tmp" + idx + ") ) || (echo FAIL && rm tmp" + idx + ");");

                    callback(idx, stdout.indexOf("PASS") != -1);
                });
            });
        });
    });
    return true;
}

module.exports = router;
