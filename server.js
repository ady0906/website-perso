var path = require("path");
var express = require("express");
var fs = require('fs');
var logger = require("morgan");
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var bodyParser = require('body-parser');
var nconf = require('nconf');
var auth = require('.config/json');
const port = process.ENV.PORT || 8081;

var app = express();
var server = require('http').createServer(app);


//including client side and using bodyParser
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream }));

// app.listen(3000,function(){
// console.log("Express Started on Port 3000");
// });
