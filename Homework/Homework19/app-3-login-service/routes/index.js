var router = require('express').Router();
var request = require('request');
var moment = require('moment');

router.get('/', function(req, res){
    res.status(200).send('Welcome to the Micro Services App!');
});



router.post('/', function(req, res){

    var login = Object.assign(req.body);

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
                    reject (body);

                } else {
                    var app1Answer = Object.assign(body);
                    resolve(app1Answer);
                }
            }); // end of request
        }); // end of promise
    } // END OF FUNCTION

    function checkLoginAttempts(userInfo){

        return new Promise(function (resolve, reject){
            var todayDate = moment().format('YYYY-MM-DD');
            var userCred = {};

            userCred.username = userInfo.username;
            userCred.currentDate = todayDate;

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
                    reject(body);
                } else {
                    var app2response = Object.assign(body);
                    resolve(app2response);
                }
            });
        });

    }


    checkUser(login)
    .then(function(data){
        return checkLoginAttempts (data);
    }).then (function (allowed){
        res.status(200).json(data);
    }).catch(function(error){
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
