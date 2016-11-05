// Calculate the circumference of a circle, given the radius as a function argument. The calculation for circumference is 2πr.

function circumference (radius) {
    
    if (typeof radius === 'undefined' || radius <= 0 || typeof radius !== 'number') {
        return ('Radius is not a number, or is not in a numerical format, or isn\'t greater than zero. Circumference not calculated.');
    } else { 
        return (2 * Math.PI * radius).toFixed(3);      
    }
        
}

console.log(circumference(1));
console.log(circumference('π'));
console.log(circumference(0));
console.log(circumference(-1));
console.log(circumference(2720));
