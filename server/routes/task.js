var express = require('express');
var router = express.Router();
var controller = require('../controller/taskController')
var helper = require('../helper/helper')

router.post('/create', controller.createTask);
router.get('/read', controller.readTask);
router.put('/update/:id', controller.updateTask);
router.delete('/delete/:id', controller.deleteTask);

module.exports = router;
