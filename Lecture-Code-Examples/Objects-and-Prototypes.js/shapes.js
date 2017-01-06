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
