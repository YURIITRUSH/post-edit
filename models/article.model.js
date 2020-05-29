var mongoose = require('mongoose');
var articleSchema = new mongoose.Schema({
  title: String,
  body: String,
  intro: String
})

module.exports = mongoose.model('Article', articleSchema)