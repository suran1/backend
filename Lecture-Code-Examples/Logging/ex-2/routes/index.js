//var emoji = require('node-emoji');
var router = require('express').Router();


router.get('/', function (req, res){
    req.log.info('GET /');
    res.status(200).send('Your Mama');
});

router.get('/countdown/:number', function (req, res){
    req.log.info('GET /countdown/' + req.params.number);
    var startingNbr = req.params.number;

    var startTime = Date.now();  // gets the time when the request comes in

    var countDown = setInterval(function (){
        req.log.info('Counting down: ', + startingNbr);

        startingNbr--;

        if (startingNbr === 0) {
            clearInterval(countDown);

            var endTime = Date.now();  // endTime when Starting number
            var totalTime = ((endTime - startTime) / 1000).toString();
            req.log.debug('Request finished after ', + totalTime + 's');
            res.status(200).send('Whatever man...');
        }
    }, 1000);
});

router.get('/error', function (req, res, next){
    req.log.warn('Something went wrong at /error');
    next(new Error('Oh no! Something bad happened at route /error!'));
});

module.exports = router;
