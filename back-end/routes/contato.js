var express = require('express');
var router = express.Router();
var controller = require('../controllers/contato')();

router.put('/registrar', controller.registrar);


module.exports = router;