/*

    Using what we've learned, how could we call getFullName, but force its 'this' value to be a different context than 'person'?
    There are multiple ways to do this, try to find multiple solutions

*/


'use strict';

var person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  }
};

var anotherPerson = {
    firstName: 'Jane',
    lastName: 'Smith'
};

//Constructor - but this isn't best practice because OO style
function Person(firstName, lastName) = {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
  }
};


console.log(person.getFullName());
anotherPerson.getFullName = person.getFullName;

console.log(person.getFullName.call(anotherPerson));
console.log(person.getFullName.apply(anotherPerson));

var myPeep = person.getFullName.bind(anotherPerson); //makes a copy of a function (getFullName()) and binds anotherPerson to it - myPeep is a function
console.log(myPeep());                               

console.log(person.getFullName());
console.log(anotherPerson.getFullName());
            
//constructor solution.  Remember, constructor is a function
var jane = new Person('Jane', 'Smith');
console.log(jane.getFullName);
            


