// Ternary operator where it is checking against a string

var myString = 'Yikes!';

var state = (myString === 'happy') ? 'Lucky you!\n' : 'Hope life improves\n';
console.log(state);


// if statement checking if a number is not equal to a variable

var cheese = -1;

if (cheese !== -1) {
    console.log(cheese);
} else {
    console.log('There is no cheese that is not equal to -1.');
}

// Write a conditional that evaluates a string to deliver a personalized greeting.
// If the name doesn't match, provide a generic greeting


 var myString = 'Sam';

 if (myString === 'Jodi'){
    console.log('Hello, ' + myString + '!');
 } else if (myString === 'Sam') {
     console.log('Yo, ' + myString + '!');
 } else if (myString === 'Alex') {
     console.log ('What up,' + myString + '?');
 } else if (myString === 'Craig') {
     console.log ('Hey, ' + myString + '.');
 } else if (myString === 'Davy') {
     console.log ('Good to see you, ' + myString + '!');
 } else {
    console.log('Greetings, Earthling!');
 }

// Pesronalized and generic greeting using a swtich statement

var name = 'Bertha';

switch (name) {
    case 'Jodi':
        console.log('Hello, ' + name + '!');
        break;
    case 'Sam':
        console.log('Yo, ' + name + '!');
        break;
    case 'Alex':
         console.log ('What up,' + name + '?');
        break;
    case 'Craig':
        console.log ('Hey, ' + name + '.');
        break;
    case 'Davy':
        console.log ('Good to see you, ' + name + '!');
        break;
    default: 
        console.log('Greetings, Earthling!');
        break;
}

