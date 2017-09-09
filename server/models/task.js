var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo');

var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  taskName: String,
  status: String,
  user_id: {
    type:Schema.Types.ObjectId,
    ref:'Users'
  },
  createdAt: Date,
  updatedAt: Date
})

var taskModels = mongoose.model('Task', TaskSchema);

module.exports = taskModels;
