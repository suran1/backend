// this is the way Blake does it in real life

var mongoose = require('mongoose');

module.exports = {
    createEventListeners: createEventListeners,
    connect: connect,
    disconnect: connect
};

function createEventListeners(){
    mongoose.connection.on('connected', function () {
        console.log('Successfully connected to database');
    });
}

    mongoose.connection.on('disconnected', function (){

    });


    mongoose.connection.on('error', function () {

    });

// mongoose doesn't get a callback - it uses an event
// if an event fires, then mongoose gives it a function it should execute

function connect () {
    mongoose.connect('mongodb://localhost/boardgames');
}

function disconnect() {
    mongoose.disconnect();
}
//



// // only use for writing a script; or disconnect on error for api.
//
// mongoose.disconnect();
