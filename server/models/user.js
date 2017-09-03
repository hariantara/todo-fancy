var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String,
  salt: String,
  role: String,
  createdAt: Date,
  updatedAt: Date
});

var userModels = mongoose.model('User', UserSchema);

module.exports = userModels;
