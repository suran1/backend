'use strict';
var logger  = require('./logger.js');

function add(a, b) {
  logger.logMessage('addition was used');
  logger.logDifferent('different Log');
  return a + b;

}

function subtract(a,b) {
  logger.logMessage('subtraction was used');
  return a - b;
}

module.exports = {
  add : add,
  subtract: subtract
};
