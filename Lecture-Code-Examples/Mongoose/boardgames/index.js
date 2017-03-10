

var mongoose = require('mongoose');

// mongoose doesn't get a callback - it uses an event
// if an event fires, then mongoose gives it a function it should execute
mongoose.connect('mongodb://localhost/boardgames');

//
var db = mongoose.connection;

// add event listeners for error;
// have to put all code in the
db.on('error', function (){
    console.log('could not connect');


});

// this code runs after the disconnect command on line 28
mongoose.connection.on('disconnected', function (){
    console.log('DB disconnected');
});


// official docs say put everything inside the db.once callback
db.once('open', function () {
    console.log('Connected!');

    var gamesSchema = mongoose.Schema({
        name: String,
        ratings: Number

        // if you want to use arrays have to  do it with the type:
        // manufacturer: [String] <-- an array of strings
    });

    // 'Game' in parenthese is the name of the model. This will become the
    // collection - mongoose wants it to be singular. It will make it plural
    // and uses lowercase.  We assign it to a variable 'Game' so we can access it
    // Model is dependent on a Schema
    // Game is like a collection but with a schema
    var Game = mongoose.model('Game', gamesSchema);

    var catan = new Game ({
        name: 'Settlers of Catan',
        ratings: 8
    });

    catan.save(function (err, result){
        // handle error
        console.log(result);
        mongoose.disconnect();
    });
});


// // only use for writing a script; or disconnect on error for api.
//
// mongoose.disconnect();
