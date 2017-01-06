// Adding solutions from previous exercises to demonstrate adding functions to an object prototype


/* original function Homework 7 in mine, Homework 6 in backend.node js


function dropElements(arr, func) {

    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;

}



console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; }));       // [3, 4]
console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; }));      // [1, 0, 1]
console.log(dropElements([1, 2, 3], function (n) { return n > 0; }));           // [1, 2, 3]
console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; }));        // []
console.log(dropElements([1, 2, 3, 7, 4], function (n) { return n > 3; }));     // [7, 4]
console.log(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; }));     // [3, 9, 2]







*/


/* To make this work as a prototype function of Array object:
    1. Pick the object to add the prototype to. In this case it's the Array object
    2. In the original function, we're passing the object to filter as an argument of the function. Since
       we are now attaching this function to the Array object, we remove the array argument ('arr') from
       the parameter list.
    3. Wherever the 'arr' parameter is referenced in the original function, replace it with the
       'this' keyword
    4. Assign the updated function to the Array.prototype
    5. Call the newly added function on the Array object in the following format:
         [array to pass in].filter(arg)
*/









Array.prototype.filter = function (func) {
  var output = [];
  console.log('In my filter');
  for (var i = 0; i < this.length; i++) {
    if (func(this[i])) {
      output.push(this[i]);
    }
  }

  return output;
}

//console.log(filter([2, 4, 8], function (x) { return x < 3; }));   // [2]
//console.log(filter(['bunny', 'shark', 'bunny', 'lazer', 'bunny', 'piranhas'], function (animal) { return animal === 'bunny'; }));  // ['bunny', 'bunny', 'bunny']

myFunc = function (x)
    { return x < 3; };


console.log('Custom filter method added to Array Prototype\n');
console.log([2, 4, 8].filter(myFunc));
console.log(['bunny', 'shark', 'bunny', 'lazer', 'bunny', 'piranhas'].filter(function (animal) { return animal === 'bunny'; }));  // ['bunny', 'bunny', 'bunny']


// Authentication function added to Array Prototype
Array.prototype.authList = function () {

    var valid = true;
    var username = /^[a-z0-9]+$/;   // regex that tests for only numbers and lowercase letters (must have at least 1 occurence)
                                    /* regex explained:
                                         /   /  - demarcation of regex beginning and end

                                        ^   - beginning of the string

                                        [a-z0-9]  - match lower case letters and digits

                                        +  match one or more of the preceding token - in this case only lowercase letters and numbers
                                           if there are any other characters besides lowercase letters and numbers, the string won't
                                           match

                                        $ - end of the string
                                    */
    for (var i = 0; i < this.length; i++) {
        if ((this[i].length < 6 || this[i].length > 10 ) || (!(username.test(this[i])))) {
            return valid = false;
        }
    }
    return valid;

} // end function

console.log('\nAuthlist function added to Array Prototype exercise\n');
console.log(['john123', 'alex222', 'sandra1'].authList());    // returns true
console.log(['john123', 'alex222', 'sandraW'].authList());    // returns false because sandraW has no number
console.log(['john_123', 'alex222', 'sandra1'].authList());   // returns false because john_123 contains an invalid character



// Ceaser cypher function added to String Prototype


String.prototype.cipher = function () {

    var arrCode = this.toUpperCase();
    var arrDecode = [];


    for (var i = 0; i < arrCode.length; i++) {

        if ((arrCode.charCodeAt(i) >= 78) && (arrCode.charCodeAt(i) <= 90)) {
            arrDecode.push(String.fromCharCode(arrCode.charCodeAt(i) - 13));
        } else if ((arrCode.charCodeAt(i) >= 65) && (arrCode.charCodeAt(i) <= 77)) {
            arrDecode.push(String.fromCharCode(arrCode.charCodeAt(i) + 13));
        } else {
            arrDecode.push(arrCode.charAt(i));
        }
    } // end for
    return arrDecode.join('');
} // end function

console.log('Adding "cipher" to String.prototype\n')
console.log(('SERR CVMMN').cipher());
console.log(('LBH QVQ VG').cipher());


/*
    Compare two strings by the sum of their character values. The strings should not be case sensitive. Return 'equal' if the the strings
    are equal and 'not equal' if the are not.

*/

String.prototype.compare = function (str2){
    var sum1 = 0;
    var sum2 = 0;

    console.log('My compare method on String Object');

    sum1 = addChar(this);
    sum2 = addChar(str2);


    if (sum1 === sum2) {
        return 'equal';
    } else {
        return 'not equal';
    }

    function addChar (str) {
        sum = 0;

        for (var i = 0; i < str.length; i++) {
            sum += str.toUpperCase().charAt(i).charCodeAt();
        }

    return sum;
    }


}



console.log('\nAdding my "compare" method to String.prototype\n');
console.log("AD".compare("BC")); // equal
console.log("AD".compare("DD")); // not equal
console.log("gf".compare("FG")); // equal


/* Add circumference function to Math.prototype */

 Number.prototype.circumference = function () {

    var radius = this;

    try {

        if (radius === "\u03C0") {
            return (2 * Math.PI * 3.14).toFixed(3);
        } else if(typeof radius === 'undefined' || radius <= 0 || typeof radius !== 'number' ) {
            return ('Radius is not a number, or isn\'t greater than zero. Circumference not calculated.');
        } else {
            return (2 * Math.PI * radius).toFixed(3);
        }

    } catch(err) {
        return 'Not the correct data type';
    }
};

console.log((1).circumference());
//console.log(('π').circumference());
console.log((0).circumference());
console.log((-1).circumference());
console.log((2720).circumference());
//console.log((null).circumference());
//console.log(("").circumference());


/* Create a couple of prototypes. At least one should accept a parameter. Give one a data property, give one a function. Create instances of your prototypes.

*/

function Car (color, make){

    this.color = color;
    this.make = make;

};



Car.prototype.showMakeAndModel = function (model) {
    return 'The make and model of this car is: ', this.make + ' ' +  model;
};

console.log('\n My own prototype object: ')
garbageBarge = new Car('red', 'Lincoln');
console.log(garbageBarge);
console.log(garbageBarge.showMakeAndModel('Navigator'));



// Exercise: Create Hierarchy On Your own
// - Track side length(s), calculate area for each shape
/*  - Shape
      - Rectangle
      - Triangle
      - Square
      - Circle
      - Pentagon


*/

function Shape (side){
  this.side = side;  // an array of sides. for circle, this is the radius

}

Shape.prototype.area = function () {

};

function Rectangle (side) {
   Shape.call(this, side);

}

Rectangle.prototype = new Shape;
Rectangle.prototype.area = function () {
  return this.side[0] * this.side[1];

};
var rectangle = new Rectangle([3, 4]);


console.log('\nShapes Hierarchy Exercise \n')
console.log(rectangle.area());


function Triangle (side) {
  Shape.call(this, side);
}

Triangle.prototype = new Shape;
Triangle.prototype.area = function (){
   var s = (this.side[0] + this.side[1] + this.side[2]) / 2;
   var a = Math.sqrt(s* (s - this.side[0])  * (s - this.side[1]) * (s - this.side[2]));
   return a;
}

var triangle = new Triangle ([3,4,5]);
console.log('triangle: ', triangle);
console.log(triangle.area());

function Square (side) {
  Shape.call(this, side);
}

Square.prototype = new Shape;
Square.prototype.area = function () {
   return Math.pow(this.side[0], 2);
};

var square = new Square([5]);

console.log(square.area());

function Circle (side) {
  Shape.call(this, side);
}

Circle.prototype = new Shape;
Circle.prototype.area = function () {
  return (Math.PI * this.side[0] * this.side[0]).toFixed(2);
};

var circle = new Circle ([4]);
console.log(circle.area());


function Pentagon () {
   Triangle.call(this, side);
}

Pentagon.prototype = new Triangle;

Pentagon.prototype.area = function () {

  var s = (this.side[0] + this.side[1] + this.side[2]) / 2;
  var a = (Math.sqrt(s* (s - this.side[0])  * (s - this.side[1]) * (s - this.side[2])) * 5);
  return a;;
}

var pentagon = new Pentagon ([3, 3, 3]);
// console.log(pentagon);
