// weather data provided by www.wunderground.com
var cities = require('../cities');
var almaInfo = require ('../module');
var router = require('express').Router();
var wunderground = require('wunderground')('a1234a5ae0147cb5');
// alternate key: 12d30f869f013572


router.get('/', function(req, res) {
    var almaCities = [];
    for (var i = 0; i < cities.length; i++) {
      if (cities[i].almanac === 'true') {
        almaCities.push(cities[i]);
      }
    }

   res.status(201).json(almaCities);
});

router.get(/\/q/, function (req, res) {
  var query = {};
  query.city = req.query.city;
  query.state = req.query.state;


  // var stuff = almanacInfo.getAlmanacInfo(query);
  // console.log(stuff);

  if (query.city !== "" && query.state !== "") {
    var actions = ['almanac'];
    var info = {};

    wunderground.execute(actions, query, function (err, results){
      if (err){
        res.status(404).json(err);
      } else {
        info = Object.assign(results);
        res.status(200).json(info);
      }
    });
  } else {
    res.status(404).send('City not found. Invalid request');
  }
});

router.post('/', function (req, res) {
  var id = req.body.id;
  var city = req.body.city;
  var state = req.body.state;
  var add = true;
  var city;

  if (id == '' || typeof id !== 'number'){
    add = false;
    console.log('id is ', add);
  }
  if (city == ''){
    add = false;
    console.log('city is: ' ,add);
  }

  if (state == ''){
    add = false;
    console.log('state is: ', add);
  }


  if (add) {
    cities.push(req.body);

    city = almaInfo.getCityInfo(id);
    if (city){
      res.status(200).json(city);
    } else {
      res.status(500).send('Internal error. POST request failed');
    }

  } else {
    res.status(404).send('Invalid data in POST request');
  }




});

router.post('*', function (req, res){
  res.status(404).send('Invalid POST request!');
});


module.exports = router;
