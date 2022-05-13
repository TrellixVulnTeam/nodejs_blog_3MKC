const express = require('express');
const router = express.Router();

const todoController = require('../app/controllers/ApisController');

router.get('/todo/list', todoController.listtodo);


router.delete('/todo/delete/:id', todoController.delete);

router.put('/todo/edit/:id', todoController.edit);

router.post('/todo/add', todoController.add);

router.get('/todo/:id', todoController.gettodoid);

router.get('/todo', todoController.index);

module.exports = router;