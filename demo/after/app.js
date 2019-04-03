"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// Create a new express application instance
var app = express();
app.get('/', function (req, res) {
    res.send('Hello from Manchester Node.js meetup!');
});
app.listen(3000, function () {
    console.log('App listening on port 3000!');
});
