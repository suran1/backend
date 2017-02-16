// Example - handling async errors using event emitting
// use this for streaming -- such as reading rows from a database
// you'd have an event call end when reading from that databas table

var events = require('events');

// class that divides two numbers and emits events
var DividerEvent = function () {
    events.EventEmitter.call(this);
}

require('util').inherits(DividerEvent, events.EventEmitter);

DividerEvent.prototype.divide = function (x, y){
    if (y === 0) {
        var error = new Error ('Can\'t divide by zero.');
        this.emit('error', error);   // attach error to the event
    } else {
        this.emit('division', x / y);   // division is the event name
    }

    return this;
}


var dividerEvent = new DividerEvent();

dividerEvent.on('error', function (error){
    console.log('ERROR: ');
    console.log(error);
})

dividerEvent.on('division', function (result){
    console.log('RESULT: ', result);
})

dividerEvent.divide(4, 2);
dividerEvent.divide(4, 0);
