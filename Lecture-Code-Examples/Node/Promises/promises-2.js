function myPromiseFunc () {

  return new Promise(function(resolve, reject){
    try {  // try is not required
      //make a request to some database or external api - this is asynch
      resolve('value-to-be-passed-back')
    } catch(err) {
      reject('error-to-be-passed-back');
    }

  })

}

/// the promise object has a call back function that has two function
// arguments

function Promise (callback) {
  function resolve, function reject

  callback(resolve, reject);
}


//or written to show this:

myPromiseFunc().then(callback(resultFromPromise));

// this is the Promise object that is returned from myPromiseFunc():

/*

  {
    state: 'resolved'   // or 'pending' or 'rejected/failed'
    then: function (cb) { cb(resultFromPromise)}


  }

*/

/**************************************************************/

//. then is a function that doesn't get called until the async call is completed
// the .then function is what you want to execute when you get the data back
// after the resolve function is completed the updates the Promise's state

//Promise has state: 3 options:
// -- Pending
// -- Completed/resolved/successful
// -- Failed/rejected/unsuccessful
myPromiseFunc().then(function(str){  // .then gets executed when it gets resolved
  console.log(str);  // value-to-be-passed-back
}).catch(function (err) {
  console.log(err);
})
