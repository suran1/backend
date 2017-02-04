'use strict';

function logMessage(message) {
  console.log('A thing was logged: ', message);
}

function logDifferent(message){
  console.log('A different thing was logged: ', message);
}

module.exports = {
  logMessage: logMessage,
  logDifferent: logDifferent
}
