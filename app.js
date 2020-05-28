var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var controller = require('./controllers/articles.controller.js')

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.set('view engine', 'pug');

var articleRouter = require('./routers/articles.router.js')
articleRouter(app)

app.use(function (req, res, next) {
  res.status(404).sendFile( __dirname + '/static-html/404.html')
})

app.listen(5000, function () {
  console.log('Example app listen on port 5000')
})