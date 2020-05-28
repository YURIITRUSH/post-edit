module.exports = function(app){
  var controller = require('../controllers/articles.controller.js');
  app.get('/', controller.edit_article);
  app.get('/articles', function(req, res) {
    res.send('/articles');
  })
  app.post('/articles', controller.result_article)
}