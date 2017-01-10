
// Basic normal function
function greet() {
  console.log('hello');
}

greet();

//now as a callback...

// hello line is executed first, then the callback() function is executed

function greet1(callback) {
  console.log('hello');


  callback();
}

// calling greet1 with a is the anonymous function
greet1(function () {
  console.log('the callback was invoked');
});



greet1(function() {
  console.log('this is a different callback');
})

//callback with additional arguments
greet1('SriDevi', function () {
  console.log('the callback was invoked');
});



greet1('Brenna', function() {
  console.log('this is a different callback');
})


// Example of a callback function that takes an argument

function greet2 (name, callback){
  console.log('hello ' + name + ' ');
  var fullname = {
    firstname: 'Jennifer',
    lastname: 'Smith'
  };


  callback(fullname);
}

greet2('SriDevi', function (data) {
  console.log('the callback was invoked ', data.firstname);
});



greet2('Brenna', function() {
  console.log('this is a different callback: ', data.lastname);
})
