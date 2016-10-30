// running code without jasmine-node and guess what? It works!

function isLeap (year) { 
if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) { 
        return false;
    
    } else if (year % 4 === 0) { 
        return true; 
    }
    else {
        return false;
    }
}

console.log('Is 2015 a leap year? ', isLeap(2015));
console.log('Is 2016 a leap year? ', isLeap(2016));
console.log('Is 1900 a leap year? ', isLeap(1900));
console.log('Is 2000 a leap year? ', isLeap(2000));
console.log('Is 1978 a leap year? ', isLeap(1978));
console.log('Is 1992 a leap year? ', isLeap(1992));
console.log('Is 2100 a leap year? ', isLeap(2100));
console.log('Is 2400 a leap year? ', isLeap(2400));

