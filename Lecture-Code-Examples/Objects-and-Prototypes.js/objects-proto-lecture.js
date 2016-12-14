//Examples
'use strict';
var myProtoObj = {
    b: 3,
    c: 4
}

var myObj = {
    a: 1,
    b: 2
}

// equivalent but Object.create() can receive an argument
//var demoObject = {};
//var demoObject = Object.create();

//myObj.__proto__ = myProtoObj;  /* Don't do this! Gives very poor performanceß   */

//console.log(myObj.c);  // 4

// Prototype Chain
// myObj -> myProtoObj -> Object.prototype -> null


//Example 2
// Proper way to pick a prototoype

var myObj = Object.create(myProtoObj);
myObj.a = 1;
myObj.b = 2;

console.log( myObj.c);   // 4
console.log(myObj.a);    // 1
console.log(myProtoObj.a);  // undefined - can't go down the prototoype chain - only

myProtoObj.d = "I am a new property";

console.log(myObj.d);
// myObj -> myProtoObj -> Object.prototype -> null

//Example 3

console.log('\nExample 3\n')

var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function () {
    return this.firstName +  ' ' + this.lastName;
    }
};

var john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';

console.log(john.getFullName());   // John Doe

var jane = Object.create(person);
jane.firstName = 'Jane';

console.log(jane.getFullName());  // Jane Default

//Example 4
console.log('PERSON');
console.log(person);                         //
console.log('PERSON PROTOTYPE VIA METHOD');  //
console.log(Object.getPrototypeOf(person));  // put this in browser to see how it works


//Example 5 .hasOwnProperty
console.log('\nExmaple 5: .hasOwnProperty\n');

myObj.__proto__ = myProtoObj;  //don't use in real life
console.log(myObj.a);
console.log(myObj.hasOwnProperty('a'))  // check to see if thas property named 'a' - returns boolean (true/false)
                                        // in this case, returns true
console.log(myObj.b);                   // 2
console.log(myObj.hasOwnProperty('b'));  // true - checks the calling object first

console.log(myObj.c);
console.log(myObj.hasOwnProperty('c'));  // false -property exists on the prototype chain, not on the actual object

console.log(myObj.valueOf());           // {a: 1, b: 2 }
console.log(myObj.hasOwnProperty('valueOf'));  // false - this is actual on Object


// Example 6  - How to change the Prototype behavior  - DON'T DO THIS! BAD! EVERYONE EXPECTS IT TO RUN AS EXPECTED,
// NOT VIA YOUR CUSTOMIZATION
// EXCEPTION:   FRONT END DEVELOPMENT - having to support functions for old browsers
// EXCEPTION:  BACKEND (NOT REAL) - program is running on ECMAScript 4 so change prototype 'monkey patching'

// Example of something that doesn't have trim method

/* if (typeof String.prototype.trim === 'undefined') {  // if trim method doesn't exist, use this
    String.prototype.trime = function () {
        return this.replace(/^\s+|\s+$/g)
    };

    var stringToTrim = '    I want to get rid of my extra whitespace     ';
    stringToTrim.trim();    // 'this' keyword in function above will refer to this string

*/

/*  Another bad example - DON'T DO!
    Number.prototype.isPositive = function () {
        return (this > 0);
    };

    This is bad because the real isPositive does a lot more checking
*/


/* Example 7 */

function Rocket () {

}

Rocket.prototype.thrusters = 4;

var myRocket = new Rocket();

console.log(myRocket);
console.log('My rocket has ' + myRocket.thrusters + ' thrusters');



function Person (name) {
    this.name = name;

}

Person.prototype.greet = function (otherName) {
    return 'Hi ' + otherName + ', my name is ' + this.name;
}

var samantha = new Person ('Samantha');

console.log(samantha);
console.log(samantha.greet('Joe'));


function Person2 () {
    this.name = '';
    this.haircolor = '';

}



function Child () {
    Person.call(this);     // the new child is inheriting from Person
    this.gradeInSchool = '';
}

// Inherits from prototype object
Child.prototype = Object.create(Person.prototype);
var jenny = new Child();
console.log(jenny);

console.log(jenny instanceof Person);  // true
console.log(jenny instanceof Child);  // true


//Example 8 Employee

function Employee(name, idNumber, department) {
    this.name = name;
    this.idNumber = idNumber;
    this.department = department;
}

Employee.prototype.getIDNumber = function () {
    return this.idNumber;
}

var samantha = new Employee('Samantha Jones', '123', 'Technology');
console.log('\nEmployee object:')
console.log(samantha);

function Manager(name, idNumber, department, reports) {
    Employee.call(this, name, idNumber, department);
    this.reports = reports;
}

Manager.prototype = new Employee;

var andrea = new Manager ('Andrea Ryan', '123', 'Technology', [234, 345, 456, 678, 789]);


function Worker(name, idNumber, department, projects) {
    Employee.call(this, name, idNumber, department);
    this.projects = projects;
}

Worker.prototype = new Employee;
var jennifer = new Worker ('Jennifer Smith', 234, 'Technology', ['x467', 'T908']);
console.log(jennifer);


console.log(andrea instanceof Employee);
console.log(andrea instanceof Manager);
console.log(andrea instanceof Worker);
console.log(andrea instanceof Object);
console.log('----');
console.log(jennifer instanceof Employee);
console.log(jennifer instanceof Manager);
console.log(jennifer instanceof Worker);
console.log(jennifer instanceof Object);


function Engineer(name, idNumber, department, projects, specialty) {
    Worker.call(this, name, idNumber, department, projects);
    this.speciality = specialty;
}

Engineer.prototype = new Worker;

Engineer.prototype.getSpecialty = function () {
    return this.speciality;
}

var lisa = new Engineer ('Lisa Smith', 234, 'Technology', ['x467', 'T908'], 'mechanical');
console.log(lisa);


function EngineeringIntern (name, idNumber, department, projects, speciality, mentor){
    Engineer.call(this, name, idNumber, department, projects, speciality, mentor);
    this.mentor = mentor;
}

EngineeringIntern.prototype = new Engineer;

var jeff = new EngineeringIntern('Jeff Thompson', 555, 'Technology', ['x467', 'T908'], 'mechanical', 234);
console.log(jeff);

function Sales (name, idNumber, department, projects, quota) {
    Worker.call(this, name, idNumber, department, projects);
    this.quota = quota;
}

Sales.prototype  = new Worker;

var jack = new Sales('Jack Black', 666, 'Sales', ['Y123', 'Y555'], 56);
console.log(jack);


console.log(jeff.getSpecialty());
try {
    console.log(lisa.getSpecialty());
    console.log(jeff.getSpecialty());
    console.log(jennifer.getSpecialty());
    console.log(samantha.getSpecialty());
    console.log(jack.getSpeciality());
    console.log(andrea.getSpeciality());
} catch (err) {
    console.log('You\'re not an engineer. No speciality for you.');
}
