var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require('fs');

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  var source = 
    '#!/bin/python3' + '\n' + 
    'import sys' + '\n' + 
    'n = int(input().strip())' + '\n' + 
    'arr = input().strip().split(" ")' + '\n' + 
    'arr.reverse()' + '\n' + 
    'print(" ".join(arr), end="")';
  var body = 
    '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<p>입력되는 배열을 거꾸로 출력하십시오. 입력 예시 : </p>'+
    '<p>8</p>'+
    '<p>6676 3216 4063 8373 423 586 8850 6762</p>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60" >' + source + '</textarea>'+
    '<input type="submit" value="Submit" />'+
    '</form>'+
    '</body>'+
    '</html>';


    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Received data(postData) : \n"
    + querystring.parse(postData).text + "\n\n");
  fs.writeFile('./source.py', querystring.parse(postData).text, function(err) {
    if(err) throw err;
    console.log('File write completed');
  });

  response.write("\nexample 00\n8\n6676 3216 4063 8373 423 586 8850 6762\n\nexample 01\n9\n305 97 1290 5591 5930 9317 440 6533 7470\n\nexample02\n2\n9053 4443\n--------- result -------\n");

  exec("./judge.sh", function(error, stdout, stderr){
    response.write(stdout);
    response.end();
  });
}

exports.start = start;
exports.upload = upload;