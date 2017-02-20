var router = require('express').Router();
var url = require('url');
var userCheck = require('../utils');



// var queryCheck = new RegExp('q\?username=.*&currentDate=/d/d/d/d-/d/d-/d/d')
// //console.log(queryCheck);
// router.get('/tracking', function (req, res){
//
//     res.status(400).send('Query parameters are required. Request denied.');
// });

router.get('/tracking', function (req,res){

    var queryData = url.parse(req.url, true).query;

    userCheck.checkKeys(queryData, function (err, data){
        if (err) {
            res.status(400).json(err);
        } else {
            userCheck.checkDate(data, function (err, valid) {
                if (err) {
                    res.status(400).send(err.toString());
                } else {
                    userCheck.requestLimitCheck(data, function (err, message){
                        if (err){
                            res.status(400).send(err.toString());
                        } else {
                        res.status(200).send(message);
                        }
                    });
                }
            });
        }
    });
});




router.get('*', function (req, res){
    res.status(400).send('Invalid GET request');
});

router.post('*', function (req, res){
    res.status(403).send('POST requests not permitted!');
});

router.put('*', function (req, res){
    res.status(403).send('PUT requests not permitted!');
});

router.delete('*', function (req, res){
    res.status(403).send('DELETE requests not permitted!');
})

module.exports = router;
