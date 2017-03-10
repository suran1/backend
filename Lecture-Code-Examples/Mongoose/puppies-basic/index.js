// this is just learning how to use mongoose. See puppies-blake for the 'real'
// way Blake sets it up (to be more professional).

var mongoose = require('mongoose');


// mongoose doesn't get a callback - it uses an event
// if an event fires, then mongoose gives it a function it should execute
// at this point the connection is still pending - we need to tell MongoDB to do
// something when a connection is made...

mongoose.connect('mongodb://localhost/puppies');  // puppies is that database

var db = mongoose.connection;  // so we can pass 'db' in our callbacks for mongoose


// we tell MongoDB what to do an error event and...
db.on('error', function () {
    console.log('Couldn\'t connect to the database');
});

// ...what to do on an 'open' event (i.e., a successful connection)
// mongoose official documentation does it like this - putting all your stuff in the
// db.once('open...') but Blake prefers doing it a different way - say 'puppies - Blake'
// for the 'professional' way
db.once('open', function () {
    console.log('Connected');

    // Now create the Schema (our blueprint for our documents)
    var puppySchema = mongoose.Schema({
        name: String,
        breed: String,
        age: Number,
        likes: [String],
        dislikes: [String],
        clothes: [{ clothesType: String, color: String }]
    });

    // Now that we have our Schema, we need a mechanism to create multiple copies
    // or edit existing copies of our document schema. This is like when a construction
    // crew builds a house based on a blueprint

    var Puppy = mongoose.model('Puppy', puppySchema); // Puppy will be used as a constructor
                                                      // Puppy is the collection with a Schema

    // Now create a Puppy document (i.e. a specific record in relational DB terminology)
    var sprinkles = new Puppy ({
        name : 'Sprinkles',
        breed : 'Dalamation',
        age: 2,
        likes : ['petting', 'snacks', 'swimming'],
        dislikes: ['all other animals', 'Dachshunds'],
        clothes: [{ clothesType : 'collar', color : 'teal'}]
    });

    // Although we've created a puppy document, we haven't inserted it into the database
    // yet. We do this using mongoose's 'save' method:

    sprinkles.save(function (err, results){
        if (err) {
            console.log(err);
        } else {
            console.log(results);    // log sprinkles document
        }
    });

});
