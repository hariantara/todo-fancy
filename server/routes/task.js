var express = require('express');
var router = express.Router();
var jwt =  require('jsonwebtoken')
var controller = require('../controller/taskController')
var helper = require('../helper/helper')

const auth = (req, res, next) =>
{
  // console.log(req.headers.token);
  if(req.headers.hasOwnProperty('token')){
    var decoded = jwt.verify(req.headers.token, process.env.SECRETKEY);
    if(decoded.role == 'user')
    {
      req.headers.authentic = decoded
      next()
    }
    else {
      res.send('maaf anda belum terdaftar')
    }
  }
  else {
    res.send('you should login')
  }
  // console.log("DECODED: ",decoded)
}

router.post('/create',auth, controller.createTask);
router.get('/read',auth, controller.readTask);
router.put('/update/:id',auth, controller.updateTask);
router.delete('/delete/:id',auth, controller.deleteTask);

module.exports = router;
