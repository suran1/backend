'use strict';
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function(otherName) {
    return 'Hi ' + otherName + ', myname is ' + this.name;
};

