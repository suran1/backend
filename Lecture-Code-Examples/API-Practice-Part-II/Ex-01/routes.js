var router = require('express').Router();
var textHandler = require('./textHandler');
var inputValidation = require('./inputValidation');
var requestLogs = require('./requesttracker.js');

router.get('/', function (req, res){
    // express will automatically send the status code - don't have to include it
    // but you can if you want to be explicit
    res.send('root end point');
});



router.get('/uppercase', function (req, res){

    var getUppLog = requestLogs.createLog(req.query.stringToChange, req.query.userid, req.path, req.method);

    var inputString = req.query.stringToChange;

    if (inputValidation.isAlpha(inputString)){
        getUppLog.valid = true;
        requestLogs.pushLog(getUppLog);
        var convertedString = textHandler.toUpper(inputString);
        res.send(convertedString);
    } else {
        getUppLog.valid = false;
        requestLogs.pushLog(getUppLog);
        res.status(400).send('String malformed.');
    }

});


router.post('/uppercase', function (req, res){

    var postUppLog = requestLogs.createLog(req.query.stringToChange, req.query.userid, req.path, req.method);

    var inputString = Object.assign(req.body.stringToChange);

    if (inputValidation.isAlpha(inputString)){
        postUppLog.valid = true;
        requestLogs.pushLog(postUppLog);
        var convertedString = textHandler.toUpper(inputString);
        res.send(convertedString);
    } else {
        postUppLog.valid = false;
        requestLogs.pushLog(postUppLog);
        res.status(400).send('POST request malformed');
    }

});

router.get('/lowercase', function(req, res){

    var getLowerLog = requestLogs.createLog(req.query.stringToChange, req.query.userid, req.path, req.method);

    var inputString = req.query.stringToChange;
    if (inputValidation.isAlpha(inputString)){
        getLowerLog.valid = true;
        requestLogs.pushLog(getLowerLog);
        var convertedString = textHandler.toLower(inputString);
        res.send(convertedString);
    } else {
        getLowerLog.valid = false;
        requestLogs.pushLog(getLowerLog);
        res.status(400).send('String malformed');
    }
});



router.post('/lowercase', function (req, res){
    var postLowerLog = requestLogs.createLog(req.query.stringToChange, req.query.userid, req.path, req.method);


    var inputString = req.body.stringToChange;
    if (inputValidation.isAlpha(inputString)){
        postLowerLog.valid = true;
        requestLogs.pushLog(postLowerLog);
        var finalString = textHandler.toLower(inputString);
        res.send(finalString);
    } else {
        postLowerLog.valid = false;
        requestLogs.pushLog(postLowerLog);
        res.status(400).send('POST request malformed');
    }
});

router.get('/allLogs', function (req, res){
    res.send(requestLogs.logsArr);
});

router.get('/users/:userid', function (req, res){
    var userID = req.params.userid;
    var userLog = requestLogs.getUserLogs(userID);
    if (userLog.length !== 0){
        res.send(userLog);
    } else {
        res.status(404).send('User not found');
    }
});

// router.get('/\/\d\d\d\d-\d\d-\d\d/', function (req,res){
//     console.log('Hello!');
//     res.send('hello');
// });

router.get('/daterequests', function(req, res){
    console.log('in date request endpoint route');

    res.setHeader('content-type', 'text/plain');
    var filedate = req.query.filedate;
    requestLogs.streamRequestForDate(filedate).pipe(res);

});


module.exports = router;
