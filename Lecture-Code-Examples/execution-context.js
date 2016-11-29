var myVar = 'I am a string';

function myFunc() {
    var myVar = 'I am a different string';
    console.log('MY FUNC MYVAR: ', myVar);
    myOtherFunc();
}

function myOtherFunc() {
    var myVar; 
    console.log('MY OTHER FUNC MY VAR ', myVar);
}

console.log('GLOBAL MYVAR: ', myVar);
myFunc();

