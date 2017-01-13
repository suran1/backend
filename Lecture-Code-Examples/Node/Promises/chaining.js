//how promises work


// We're going to build a simplified Promise type (Promise is a built in type)
function promiseToBeAwesome () {
  return {
    then: function (callback){
      callback('howdy');
    }
  };
}

promiseToBeAwesome().then(function(greeting){
  console.log(greeting);  //howdy
})

/*promiseToBeAwesome returns an object (our fake Promise):

  {
    then: function (callback) {
      callback('howdy');
  }

}

*/

/***********************************************************************/
// Now, we'll build a constructor function with our own fake promise type
//(we're trying to build a crude model of JS's Promise type  (Promise object))

function MyPromise(callbackFunc) {
  var callback = null;
  this.then = function(cb){   //this will refer to MyPromise
    callback = cb;
  }
  function resolve(value) {
    setTimeout(function () {
      callback(value);
    }, 1);
  }

  callbackFunc(resolve);
}

function callOurPromise() {
  return new MyPromise(function (resolve) {
      resolve('I think their brains are tired');
  });
}

callOurPromise().then(function (str){
  console.log(str);
});
