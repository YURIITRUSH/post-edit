var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  var options = {
    title: 'Form',
    method: 'POST',
    action: '/articles'
  }
  res.render('form-page', options);
});
app.get('/articles', function(req, res) {
  res.send('/articles');
})
app.post('/articles', function(req,res) {
  res.send(req.body.title)
})
app.use(function (req, res, next) {
  res.status(404).sendFile( __dirname + '/static-html/404.html')
})
app.listen(5000, function () {
  console.log('Example app listen on port 5000')
})