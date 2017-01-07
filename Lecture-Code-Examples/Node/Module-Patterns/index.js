// By default, node looks for index.js - it automatically look for it
// Some people may use 'server.js' at the starting point. If this is the case
// you'll have to provide the full path

// imports myModule into index.js
// require looks for module.exports in the module.js file and
// then returns that value
var myMod = require('./module');

//myMod.dogsAreBetter();


// Using the 2nd way of inheritance
// var mod = new myMod();
// mod.dogsAreBetter();


// exporting way ('single responsibility')
//myMod();


// exporting way - another examples. A pretend database connection

// var dbConfig = require('.module');
// db.connect(dbConfig.PORT, dbConfig.dbCreds.UN);


myMod.dogsAreBetter();
myMod.breakfast();
