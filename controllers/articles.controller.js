exports.edit_article = function(req, res) {
  var options = {
    title: 'Form',
    method: 'POST',
    action: '/articles'
  }
  res.render('form-page', options);
}
exports.result_article = function(req,res) {
  var options = {
    title: req.body.title,
    article: req.body,
  }
  res.render('form-result', options);
}