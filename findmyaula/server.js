var https = require('https');
var fs = require('fs');
var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {
    // ejs render automatically looks in the views folder
    res.render('index');
});

// Povo1 page 
app.get('/Povo1', function(req, res) {
    res.render('Povo1');
});

// Povo2 page 
app.get('/Povo2', function(req, res) {
    res.render('Povo2');
});

// Wayfinding page 
app.get('/Wayfinding', function(req, res) {
    res.render('Wayfinding');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});