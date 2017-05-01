require('dotenv').config();
var path = require("path");
var express = require("express");
var fs = require('fs');
var logger = require("morgan");
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var bodyParser = require('body-parser');
var nconf = require('nconf');
var auth = require('./config.json');
var validator = require("email-validator");
const port = process.env.PORT || 8081;

var app = express();
var server = require('http').createServer(app);


//including client side and using bodyParser
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream }));

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname + './index.html'));
});

app.post("/", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
});

// ADD EMAIL VERIFICATION STEP BEFORE MAKING REQUEST TO SERVER

server.listen(port, function () {
  console.log('Web app started and listening on http://localhost:' + port);
});

// app.listen(3000,function(){
// console.log("Express Started on Port 3000");
// });
