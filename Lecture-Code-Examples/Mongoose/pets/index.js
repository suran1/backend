var mongodb = require('./utils/mongodb.utils');
var express = require('express');
var bodyParser = require('body-parser');
var puppyService = require('./services/pets.services');
var puppies = require('./utils/puppies');


var app = express();

mongodb.createEventListeners();
mongodb.connect();

// Seed the database
// puppyService.saveAllPuppies(puppies).then(function(puppiesSaved){
//     console.log('Seeding of pets database with puppies is complete.');
// }).catch(function (err) {
//     console.log('Error in seeding of pets database: ' + err );
// });

app.get('/puppies', function (req, res){
    puppyService.fetchPuppies()
      .then(function(puppiesFetched){
          res.status(200).send(puppiesFetched);
      }).catch(function (error){
          res.status(500).send(error);
      });
});

app.get('/', function (req, res){
    console.log('Welcome to Pets database Express app!');
});



app.listen(3000, function() {
    console.log('Express app listening on  port 3000...');
});
