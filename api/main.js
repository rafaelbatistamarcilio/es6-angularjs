var express = require('express');
var router = express.Router();

/* platenas endpoints. */
var planetas = require('./planetas');
router.use('/planetas', planetas );

module.exports = router;