const bodyParser = require('body-parser');
const express = require('express');
var logger = require('morgan');
var path = require('path');

var api = require('./api/main');

const app = express();
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

app.use('/api', api );
app.use('/', express.static( path.join(__dirname,'public') ));

module.exports = app;
