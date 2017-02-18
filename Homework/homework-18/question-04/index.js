// Example - handling async errors using event emitting
// use this for streaming -- such as reading rows from a database
// you'd have an event call end when reading from that databas table

var events = require('events');

// class that divides two numbers and emits events
var QCharEvent = function () {
    events.EventEmitter.call(this);
}

require('util').inherits(QCharEvent, events.EventEmitter);

QCharEvent.prototype.isQChar = function (str){
    var firstChar = str.substr(0,1);
    var answer = 17;

    if (firstChar == '' || firstChar.toUpperCase() !== 'Q') {
        var error = new Error ('First character isn\'t "Q" or "q".');
        this.emit('error', error);   // attach error to the event
    } else {
        this.emit('isQChar', answer);   // division is the event name
    }

    return this;
}


var qcharEvent = new QCharEvent();

qcharEvent.on('error', function (error){
    console.log('ERROR: ');
    console.log(error);
})

qcharEvent.on('isQChar', function (result){
    console.log('RESULT: ', result);
})

qcharEvent.isQChar('Quail');
qcharEvent.isQChar('conquer');
