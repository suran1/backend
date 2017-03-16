var express = require('express');
var bunyan = require('bunyan');
var app = express();

var log = bunyan.createLogger({
    name: 'app logger';
    streams: [ {
        process.stdout;

    ];
});

app.get('/', function (req, res){
    res.status(200).send('Your Mama');
});

app.get('/countdown/:number', function (req, res){
    var num = req.params.number;
    // I chose the

    if (num === 0) {
        res.status(200).send('This is a string that was sent in ' + num + 'seconds');
    } else {
        var timeoutID = setTimeout(function() { console.log('Hello! This string was printed in '
                                                + num + 'seconds'); }, num * 1000);
                                                
    }


});

app.listen(3000, function (){
    console.log('Listening on port 3000...');
});
