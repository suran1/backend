var router = require('express').Router();
var users = require('./users.js');
var url = require('url');
var userInfo = require('../utils/module.js');



// generate IDs for original 5 users - only used once
//users = userInfo.getID(5);

router.get('/', function (req, res){
    res.status(200).json(users);
});



router.get('/user/:id?', function(req, res) {
    console.log('in user/:id path');
    var id = req.params.id;
    var queryInfo = req.query;
    console.log('id ', id);
    console.log('queryInfo: ', queryInfo);
    console.log('req.params.username ', req.params.username);
    console.log(users);
    if (queryInfo === undefined){
        console.log('in id part of if statement...');
        userInfo.matchID(id, users, function(err, data){
            if (err) {
                res.status(404).send(err.toString());
            } else {
                res.status(200).json(data);
            }
        });
    } else {
        console.log('inside else for username password check');
        console.log('usersCredKeys', userInfo.userCredKeys);
        var hasValidKeys = userInfo.checkNewUser(queryInfo, userInfo.userCredKeys);
        console.log('hasValidKeys: ' , hasValidKeys);

        if(!hasValidKeys) {
            var loginError = new Error ('Invalid login request');
            res.status(400).send(loginError);

        } else {
            console.log('has valid keys...');
            userInfo.validateUser(queryInfo, users, function (err, data){
                console.log('have results of login check...');

                if (err) {
                    console.log('should print out error here');
                    res.status(400).send(err.toString());
                } else {
                    res.status(200).json(data);
                }
            });
        }
    }
});

router.post('/', function (req, res){
    var body = Object.assign(req.body);

    userInfo.addUser(body, userInfo.allUserKeys, function(err, newUser){
        if (err) {
            res.status(400).send(err.toString() + '\nInvalid user object. POST denied!');
        } else {
            users.push(body);
            res.status(200).json(body);
        }
    });
});

router.post('/user', function (req, res) {
    var login = req.body;
    console.log(login);
    console.log('inside post user path for username password check');
    console.log('usersCredKeys', userInfo.userCredKeys);
    var hasValidKeys = userInfo.checkNewUser(login, userInfo.userCredKeys);
    console.log('hasValidKeys: ' , hasValidKeys);

    if(!hasValidKeys) {
        var loginError = new Error ('Invalid login request');
        //res.status(400).send(loginError);
        res.status(400).json(loginError);
    } else {
        console.log('has valid keys...');
        userInfo.validateUser(login, users, function (err, data){
            console.log('have results of login check...');

            if (err) {
                console.log('should print out error here');
                //res.status(400).send(err.toString());
                res.status(400).send(err.toString());
            } else {
                res.status(200).json(data);
            }
        });
    }

});

router.get('*', function (req, res){
    res.status(404).send('User not found.');
});

router.post('*', function (req, res){
    res.status(300).send('ERROR: Invalid POST request or request object.');
});

router.put('*', function (req, res){
    res.status(403).send('ERROR: PUT requests not permitted.');
});

router.delete('*', function (req, res){
    res.status(403).send('ERROR: DELETE requests not permitted.');
});

module.exports = router;
