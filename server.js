const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const AWS = require('aws-sdk');
const fileUpload = require('express-fileupload');
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
require('./config/sessions')(app);

app.set('view engine', 'ejs');

AWS.config.loadFromPath('./config.json');
var s3Bucket = new AWS.S3({params: {Bucket: "q2insuranceproject"}});
const baseAWSURL = "https://s3.amazonaws.com/q2insuranceproject/"
// us-east-1  q2insuranceproject
var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(port, function() {
  console.log('Listening on', port);
});
