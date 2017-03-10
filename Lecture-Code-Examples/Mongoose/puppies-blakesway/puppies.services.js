var mongodb = require('./mongodb.utils');
var Puppy = require('./models/puppy.model');

module.exports = {
    fetchOneLike : fetchOneLike,
    fetchName: fetchName
}

function fetchOneLike (oneLike) {
    Puppy.findOne({likes:oneLike}).exec().then(function (result){
        console.log('In fetchOnelike: ', result);
    }).catch(function (error){
        console.log(error);
    });
}

function fetchName (puppyName) {
    Puppy.findOne({ name: puppyName }).exec().then(function(result){
        console.log('\n In fetchName: ' , result);
    }).catch(function(error){
        console.log(error);
    });
}
