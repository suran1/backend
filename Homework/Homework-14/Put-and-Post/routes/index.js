var router = require('express').Router();  // import the Express router object
var kitties = require('./kitties');   // kitties router
var puppies = require('./puppies');   // puppies router

// add a new propery '.get' and told it what to do with it.
router.get('/', function (request, response){
    //Express lets you chain certain methods
    response.status(200).send('Welcome to Puppies Only!');
});

router.use('/kitties', kitties);  // '/kitties' is the route, 'kitties' is the function - i.e. from the require statement
router.use('/puppies', puppies);  // '/puppies' is the route, 'puppies is the function - i.e. from the require statement'


// catches all other GET requests
router.get('*', function(request, response){
  response.status(404).send('Sorry - we don\'t have this');
});

router.post('*', function (request, response){
    response.status(404).send('POST not formed properly. Request denied.');
});
router.put('*', function (request, response){
    response.status(404).send('PUT request formed improperly. Request denied.');
});

router.delete('*', function (request, response){
    response.status(403).send('No deletions permitted. Delete request deined.');
});

module.exports = router;
