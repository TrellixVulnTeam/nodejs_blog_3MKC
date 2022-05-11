const express = require('express');
const router = express.Router();

const newscontroller = require('../app/controllers/NewsController');

router.get('/delete/:id', newscontroller.delete);

router.get('/edit_detail/:slug', newscontroller.edit_detail);

router.put('/edit_detail/:slug', newscontroller.update_detail);

router.get('/edit', newscontroller.edit);

router.get('/create', newscontroller.create);

router.post('/store', newscontroller.store);

router.get('/:slug', newscontroller.show);

router.get('/', newscontroller.index);

module.exports = router;