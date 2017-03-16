var mongoose = require('mongoose');
mongoose.Promise = global.Promise;   // gets rid of mongoose promises error


module.exports = {
  createEventListeners: createEventListeners,
  connect: connect,
  disconnect: disconnect
};

function createEventListeners() {
  mongoose.connection.on('connected', function () {
    console.log('Successfully connected to database.');
  });

  mongoose.connection.on('disconnected', function () {
    console.log('Database connection closed.');
  });

  mongoose.connection.on('error', function (err) {
    console.log('There was an issue connecting to the database: ' + err);
  });
}

  function connect () {
    //local connection
    //mongoose.connect('mongodb://localhost/library');

    // connect to mlab - this sting is copied from the Home page at the top
    // in production, use environment variables so that you don't push your
    // username and password - to do this use npm package 'dotenv'

    mongoose.connect('mongodb://api:password1@ds145299.mlab.com:45299/library');
  }
  function disconnect() {
    mongoose.disconnect();
  }
