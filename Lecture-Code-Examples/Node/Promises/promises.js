// an example of call back hell, and how promises will make it look synchronous
// even though it is asynchoronous

function loadData(callback) {
  // all good things


  callback(null, data);      //callback 1st arg is always error or null,
                             // callback 2nd arg is the data
}

    loadData(function (error, data){
      if (error) {
        // do something error
      }
    });

    // dogs

        loadData(function (error, data){
          if (error) {
            // do something error
          }


          // [dogs, cats]

          loadData(function (error, data){
            if (error) {
              // do something error
            }


            // [dogs, cats, fish]
          });
        });


}

// Promises fix - .then signifies a promise

function ()
  .then (function (Data){
    //do things
  }


  .then (function(data){
    //do things
  })

  .then (function(data){
    //do things
  })


  .catch(function (error) {
    //handle the error once
  });



// or even more succint with promises:

loadData()
  .then(doAThing)
  .then(doAnotherthing)
  .then(doYetAnotherThings)
  .catch(handleDatError);


  // A different option:
  // loadData is a function that returns promises
  // all of executed at once
  // but it will wait to execute the then function until all the results of the
  // functions come back
  Promise.all([       // an array of functions that return promises
    loadData('dogs'),
    loadData('cats'),
    loadData('fish')
  ]).then function (data) {
    // do all the things
  }).catch(function(err)){
    //handle error
  }),
