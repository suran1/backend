// Try -catch block. Error handling - Lecture 10/17/2016 - Brenna on Monday
// FYI: This is just conceptual; code isn't going to work

try {
  //writing code that opens a file and reads from it

    //var myArray = [1, 2, 3];
    //var myvalue = myArray[7];

  throw 'I am an error';    // normally throw is inside the catch block this is
                            // just to simulate the error
  console.log('trying to do a thing');

} catch (error) {           // you can't have multiple catch statements
                                // to catch specific error types. You'll have to
                                // use if/else statements if you want to do it
  console.log('unable to read file', error);
} finally {
  console.log('in the finally block');
}

// To play around with try catch finally, try this:  (always throws an error)

try {
  JSON.parse({});
} catch (err) {
  console.log(err);
} finally
