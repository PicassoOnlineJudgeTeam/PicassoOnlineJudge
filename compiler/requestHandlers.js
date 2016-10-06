var exec = require("child_process").exec;
var querystring = require("querystring");
var sync = require('sync');

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  var body = 
    '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
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
  response.write("You've sent the text(postData): "
    + querystring.parse(postData).text + "\n")
  exec("python3 source.py < input00.txt > result00.txt 2> error00.txt; (diff result00.txt output00.txt > tmp00 && echo 00PASS) || echo 00FAIL && rm tmp00", function(error, stdout, stderr){
    response.write(stdout);
    exec("python3 source.py < input01.txt > result01.txt 2> error01.txt; (diff result01.txt output01.txt > tmp01 && echo 01PASS) || echo 01FAIL && rm tmp01", function(error, stdout, stderr){
      response.write(stdout);
      exec("python3 source.py < input02.txt > result02.txt 2> error02.txt; (diff result02.txt output02.txt > tmp02 && echo 02PASS) || echo 02FAIL && rm tmp02", function(error, stdout, stderr){
        response.write(stdout);
        response.end();
      });
    });
  });
  
  /*
  exec("python3 source.py < input00.txt > result00.txt >> error00.txt; (diff result00.txt output00.txt > tmp00 && echo 00PASS) || echo 00FAIL && rm tmp00", callback_exec);
  exec("python3 source.py < input01.txt > result01.txt >> error01.txt; (diff result01.txt output01.txt > tmp01 && echo 01PASS) || echo 01FAIL && rm tmp01", callback_exec);
  exec("python3 source.py < input02.txt > result02.txt >> error02.txt; (diff result02.txt output02.txt > tmp02 && echo 02PASS) || echo 02FAIL && rm tmp02", callback_exec);
  */
}

exports.start = start;
exports.upload = upload;