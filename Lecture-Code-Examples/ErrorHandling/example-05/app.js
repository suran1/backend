// Asynch error with callback

function divideAsync(x, y, callback){
    if (y === 0) {
        callback(new Error('Can\'t divide by zero.'));  // don't have to worry about the second agrument
    } else {
        callback(null, x / y); // have to provide null - this will be the value of 'error' object in callback
    }

}

divideAsync(4, 2, function (error, result){
    if (error){
        console.log('ERROR: ');
        console.log(error);
    } else {
        console.log('RESULT: ', result);
    }
});


divideAsync(4, 0, function (error, result){
    if (error){
        console.log('ERROR: ');
        console.log(error);
    } else {
        console.log('RESULT: ', result);
    }
});
