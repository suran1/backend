// Calculate the circumference of a circle, given the radius as a function argument. The calculation for circumference is 2πr.

function circumference (radius) {
  return 2 * Math.pi * radius;
}

console.log(circumference(1));
console.log(circumference(π));
console.log(circumference(0));
console.log(circumference(-1));
console.log(circumference(2720));
