var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var routes = require('./routes');

var app = express();

app.use(bodyParser.json());
app.use('/', routes);

app.listen(5000, function (){
    console.log('App 3 Orchestrator listening on Port 5000...');
});
