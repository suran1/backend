// how to deliver a synchronous error

function divideSync(x, y){
    if (y === 0) {
        // have to use throw in order to use the catch block
        // which is why you want to throw errors and not to return it (return
        // means it's succesful)
        throw new Error('Can\'t divide by zero.');  // always good to provide some description here - just don't get to detailed (security reasons)
    } else {
        return x / y;
    }
}

// this works out
try {
    var result = divideSync ( 4, 2);
    console.log('DIVISION RESULT ', result);
} catch (error) {
    console.log('ERROR: ');
    console.log(error);
}

// this throws an error
try {
    var result = divideSync ( 4, 0);
    console.log('DIVISION RESULT ', result);
} catch (error) {
    console.log('ERROR: ');
    console.log(error);
}
