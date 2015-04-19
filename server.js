require("signal-master/secureserver.js");
var fs = require("fs");
var express = require('express');
var https = require('https');

var key = fs.readFileSync('fakekeys/privatekey.pem').toString();
var certificate = fs.readFileSync('fakekeys/certificate.pem').toString();

var app = express();

app.use(express.static("public"));
app.use(express.static("node_modules/simplewebrtc"));
app.use(express.static("node_modules/recordrtc"));

https.createServer({key: key, cert: certificate}, app).listen(8080);

console.log('running on 8080');