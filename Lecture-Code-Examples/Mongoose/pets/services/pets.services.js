var mongodb = require('../utils/mongodb.utils');
var Puppy = require('../models/puppy.model');

module.exports = {
    saveAllPuppies : saveAllPuppies,
    fetchPuppies : fetchPuppies
};


function saveAllPuppies (puppiesToInsert) {
    return Puppy.insertMany(puppiesToInsert).then(function(allPuppies){
        console.log('All puppies added to datbase: \n'
         + allPuppies);
    }).catch(function (err){
        console.log('There was an error inserting puppies. ' + err );
    });
}


function fetchPuppies () {
    return Puppy.find({}).exec();
}
