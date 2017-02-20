var http = require('http');
var request = require('request');

var userData = {
                    userKeys: ['username', 'password'],
                    loginCheck: loginCheck,
                    options: options
                };


var options = {
    protocol: 'http',
    hostname:  'localhost:3000',
    path: '/users',
    method: 'POST',
    headers: {'Content-type' : 'application/json'}

};

function loginCheck (options, callback){
    var body = '';
    res.setEncoding('utf8');












}



module.exports = userData;
