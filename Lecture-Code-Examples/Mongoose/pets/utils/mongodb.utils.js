var mongoose = require('mongoose');
mongoose.Promise = global.Promise;   // use Node's promises instead of built-in mongoose promises


module.exports = {
                    createEventListeners: createEventListeners,
                    disconnect: disconnect,
                    connect: connect
                  };


function createEventListeners () {

    mongoose.connection.on('connected', function () {
        console.log('Successfully connected to datbase.');
    });

    mongoose.connection.on('disconnected', function (){
        console.log('Database connnection closed');
    });

    mongoose.connection.on('error', function (err){
        console.log('There was an issue connecting to the dastabas.' + err );
    });

}

function connect () {
    mongoose.connect('mongodb://localhost/pets');
}

function disconnect () {
    mongoose.disconnect();
}
