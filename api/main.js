var express = require('express');
var router = express.Router();

/* platenas endpoints. */
var planetas = require('./planetas');
router.use('/planetas', planetas );

/* personagens endpoints. */
var personagens = require('./personagens');
router.use('/personagens', personagens );

module.exports = router;