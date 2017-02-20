var url = require('url');
var router = require('express').Router();
var userData = require('../utils');
var request = require('request');
var moment = require('moment');

router.get('/', function(req, res){
    res.status(200).send('Welcome to the Micro Services App!');
});



router.post('/', function(req, res){


    var login = Object.assign(req.body);
    console.log(login);
    //res.json(login);

    function checkUser(login) {

        var headers = {
                    'Content-type' : 'application/json'
                    }


        var options = {
                        url:  'http://localhost:3000/user',
                        method: 'POST',
                        headers: headers,
                        body: login,
                        json: true
                    };

        return new Promise (function (resolve, reject){
            request(options, function (error, response, body){
                if (error || response.statusCode !== 200) {
                    console.log(body);
                    console.log(response.statusCode);
                    reject (body);

                } else {
                    console.log('IN APP-3 ELSE BLOCK (GoodCode?)...');
                    console.log(response.statusCode);
                    //console.log(' body: ', body);
                    response.statusCode;
                    console.log('body in request else: ', body);
                    var app1Answer = Object.assign(body);
                    console.log('app1Answer in request body else: ', app1Answer);
                    resolve(app1Answer);

                }
            }); // end of request
        }); // end of promise
    } // END OF FUNCTION

    function checkLoginAttempts(userInfo){
        console.log(userInfo);
        return new Promise(function (resolve, reject){
            var todayDate = moment().format('YYYY-MM-DD');
            var userCred = {};
            userCred.username = userInfo.username;
            userCred.currentDate = todayDate;
            console.log('in checkLoginAttempts - userCred: ', userCred);

            var headers = {
                        'Content-type' : 'application/json'
                        }
            var options = {
                                url: 'http://localhost:8000/tracking',
                                method: 'GET',
                                headers: headers,
                                qs: userCred,
                                json: true


                            }

            request(options, function(error, response, body){
                if (error || response.status !== 200){
                    console.log('in checkLoginAttempts request error...');
                    console.log('body message in request login error if: ', body);
                    //console.log();
                    reject(body);
                } else {
                    console.log('attempts less than 6...');
                    var app2response = Object.assign(body);
                    console.log('app2response in request else: ', app2response);
                    resolve(app2response);
                }
            });
        });

    }


    checkUser(login)
    .then(function(data){
        console.log('in then promise statement');
        return checkLoginAttempts (data);
    }).then (function (allowed){
        res.status(200).json(data);
    }).catch(function(error){
        console.log('in promise catch block');
        res.status(404).json(error);
    });


});


router.get('*', function(req, res){
    res.status(400).send('Invalid GET request.');
});


router.post('*', function(req, res){
    res.status(400).send('Invalid POST request. POST denied.');
});

router.put('*', function(req, res){
    res.status(403).send('PUT request not permitted.');
});

router.delete('*', function(req, res){
    res.status(403).send('DELETE requests not permitted.');
});

module.exports = router;
