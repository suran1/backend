//Blake's way:
var mongodb  = require('./mongodb.utils');
var Puppy = require('./models/puppy.model');
var puppyService = require('./puppies.services');


mongodb.createEventListeners();
mongodb.connect();


var sprinkles = new Puppy ({
    name : 'Sprinkles',
    breed : 'Dalamation',
    age: 1,
    likes : ['petting', 'snacks', 'swimming'],
    dislikes: ['all other animals', 'Dachshunds'],
    clothes: [{ clothesType : 'collar', color : 'teal'}]
});

sprinkles.save().then(function(result){
    console.log('In sprinkles save-then statement...');
    console.log('logging result of "save" function: ', result);

    return result;
}).then(function(result){
    console.log('\n-------calling puppyService.fetchOneLike------\n');
    puppyService.fetchOneLike('petting');
}).then(function(result){
    console.log('\n--------calling fetchName----------\n');
    puppyService.fetchName('Sprinkles');
}).catch(function(error){
    throw error;
    mongodb.disconnect();
});



//mongodb.disconnect();
