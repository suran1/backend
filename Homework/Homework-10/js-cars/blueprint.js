/*
Exercise 1
We live in a future where we have the ability to build our own cars using JavaScript (hey - it could happen).
Your task is to create a blueprint for a car, and then produce two cars from that blueprint. Your task:

1. Create a folder named js-cars from the command line
2. Initialize the js-cars folder as a git repository
3. Create a file named blueprint.js from the command line
    - In this file, create a car blueprint. Your car should have:
      - Between 0 - 6 wheels
      - A top speed
      - A color
      - A function to report how long this car would take to travel 1/4 mile at top speed
    - Within this same file, create two different versions of cars based on this blueprint
    - Within the same file, write a function that tests that each of your built cars works as intended
      This function should return true if everything is as expected, and false if not
4. Commit and push all changes to a new GitHub repository from the command line



*/

function Car (wheels, maxSpeed, color) {

    this.wheels = wheels;
    this.maxSpeed = maxSpeed;
    this.color = color;
    this.time = (function (speed) {
      return .25 / (speed / 3600);
    })(this.maxSpeed);

}

var chevy = new Car (4, 60, 'red');
var honda = new Car (4, 120, 'blue');
console.log(chevy.time);
console.log(honda.time);


var specObj = {
  wheels: 4,
  maxSpeed: [60, 120],
  color: ['red', 'blue'],
  time: [15, 7.5]
};

function testCar(carObj, specObj) {
  var correct = true;
  if (carObj.wheels !== specObj.wheels){
      correct = false;
      console.log('wheels is', correct);
  }

  if (specObj.maxSpeed.indexOf(carObj.maxSpeed) === -1){
    correct = false;
    console.log('maxSpeed is', correct);
  }

  if (specObj.color.indexOf(carObj.color) === -1) {
    correct = false;
    console.log('color is ', correct);
  }

  if (specObj.time.indexOf(carObj.time) === -1) {
    correct = false;
    console.log('time is ', correct);
  }

  return correct;
}

console.log(testCar(chevy, specObj));
