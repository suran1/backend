var router = require('express').Router();  // creates a child instance of Router ()



// '/'  = the root of kitties
router.get('/', function(request, response) {
  response.status(200).send('lol jk - No kitties here');
});

module.exports = router;
