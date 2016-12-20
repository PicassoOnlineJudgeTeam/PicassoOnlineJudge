// Gets called when running npm start

var webpack = require('webpack');
var bodyParser = require('webpack-body-parser');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');

var appRouter = require('./js/routes/AppRouter');
var app = new WebpackDevServer(webpack(config), { // Start a server
  publicPath: config.output.publicPath,
  hot: true, // With hot reloading
  inline: false,
  historyApiFallback: true,
  headers: {"Access-Control-Allow-Origin": "*"},
  quiet: false // Without logging
});
// http://mydreamisthebestcooder.tistory.com/6
app.use(bodyParser.json());
app.use('/api/', appRouter);
app.listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }

  // [ CONFIGURE mongoose ]
  var mongoose    = require('mongoose');
  var Question = require('./js/models/question');
  // CONNECT TO MONGODB SERVER
  var db = mongoose.connection;
  db.on('error', console.error);
  db.once('open', function(){
      // CONNECTED TO MONGODB SERVER
      console.log("Connected to mongod server");
      // Question.find(function(err, questions){
      //     if(err) {console.log({error: 'database failure'}); return;}
      //     console.log(questions);
      //     return;
      // })
  });

  // mongoose.connect('mongodb://localhost/mongodb_tutorial');
  // mongoose.connect('mongodb://Cheechyo:01029483750@203.253.198.201:27017/POJ');
  console.log("try to connect...")
  mongoose.connect('mongodb://203.253.198.201:27017/POJ');
  //require('./js/models/question')
  console.log('Listening at localhost:3000');
});
