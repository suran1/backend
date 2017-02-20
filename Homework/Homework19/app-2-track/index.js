// this app doesn't need body-parser because it does not have
// POST or PUT actions
var express = require('express');
var routes = require('./routes');

var app = express();

app.use('/', routes);

app.listen(8000, function (){
    console.log('App 2 - Tracking listening on Port 8000...');
});
