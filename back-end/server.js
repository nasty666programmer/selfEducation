var express = require('express');
var createError = require('http-errors');
var path = require('path');

var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express(); 



app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.get('/', function(req,res) {
    res.send('hello server');
})

app.listen(3008,function() {
    console.log('server start');
})

module.export = app