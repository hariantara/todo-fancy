var modelTask = require('../models/task')
var jwt =  require('jsonwebtoken')
var helper = require('../helper/helper')
require('dotenv').config()

var createTask = function(req, res){
  task = new modelTask();
  task.taskName = req.body.taskName
  task.status = req.body.status
  task.createdAt = new Date()
  task.updatedAt = new Date()

  task.save(function(err){
    if(!err)
    {
      res.send(task)
    }
    else {
      res.send(err)
    }
  })
}

var updateTask = function(req, res){
  modelTask.findByIdAndUpdate({
    _id:req.params.id
  },{
    taskName:req.body.taskName,
    status:req.body.status,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    res.send(err)
  })
}

var readTask = function(req, res){
  modelTask.find()
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    res.send(err)
  })
}

var deleteTask = function(req, res){
  modelTask.findByIdAndRemove({
    _id:req.params.id
  })
  .then(()=>{
    res.send('deleted')
  })
  .catch(err=>{
    res.send(err)
  })
}

module.exports = {
  createTask,
  updateTask,
  readTask,
  deleteTask
}
