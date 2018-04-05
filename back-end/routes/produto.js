var express = require('express');
var router = express.Router();
var controller = require('../controllers/produto')(/* construtor */);

router.get('/', controller.listar);

module.exports = router;
