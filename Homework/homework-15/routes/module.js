  var cities = require('./cities');
  var wunderground = require('wunderground')('a1234a5ae0147cb5');

  function getAlmanacInfo(query) {

    if (query.city !== "" && query.state !== "") {
      var actions = ['almanac'];
      var info = {};

      wunderground.execute(actions, query, function (err, results){
        if (err){

          info = err;
        } else {
          info = Object.assign(results);
          console.log('info from wunderground: ', info);
          return info //res.status(200).json(info);
        }
      });
      console.log('outside');
      return info;
    }


}

function getCityInfo (id) {
  for (var i = 0; i < cities.length; i++){
    if(id.toString() === cities[i].id.toString()){
      return cities[i];
    }
  }
  return false;
}

module.exports = {
                    getAlmanacInfo : getAlmanacInfo,
                    getCityInfo : getCityInfo
                  };
