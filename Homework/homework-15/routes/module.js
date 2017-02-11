var cities = require('./cities');
var wunderground = require('wunderground')('a1234a5ae0147cb5');

// function getAlmanacInfo(query) {
//     var actions = ['almanac'];
//     var info = {};
//       return new Promise(function (resolve, reject) {
//           //for (var i = 0; i < query.length; i++) {
//           wunderground.execute(actions, query, function (err, results){
//             if (err){
//                 reject(err);
//             } else {
//               info = Object.assign(results);
//               console.log('info from wunderground: ', info);
//               resolve(results); //res.status(200).json(info);
//             }
//           });
//           //}
//          console.log('outside');
//          return info;
//     });
// }

function getAlmanacInfo(query){

    var info = {};
    var actions = ['almanac'];


        var almaInfo = query.map(function (elem){
            return wunderground.execute(actions, elem, function (err, results){
                if (err){
                    console.log(err);
                } else {
                    info = Object.assign(results);
                    console.log('info from wunderground: ', info);
                    return results; //res.status(200).json(info);
                }
            }).then(function(results) {
                return results;
            });
        });

    return Promise.all(almaInfo)
                .then(function(almaValues){
                    console.log('Almanac info', almaValue);
                    console.log('IN PROMISES.ALL then FUNCTION');

                    return almaValues;
                })
                .catch(function(err){
                    return(err);
                });
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
