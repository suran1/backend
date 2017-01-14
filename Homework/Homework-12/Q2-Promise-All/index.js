/*In this file
      Create a function that waits until 5 calls to getRandomNumber have finished and
      then sum the result into a single number.
      Log this result to the console.

      Commit & push this file and any changes to GitHub

*/

var add5Nums = require('./module');


function requestRandomNum () {
  return new Promise(function (resolve, reject){
    add5Nums.getRandomNumber(function (err, num){
      if (err) {
        reject(err);
      }
      resolve(num);
    });
  });
}

Promise.all([       // an array of functions that return promises
    requestRandomNum(),
    requestRandomNum(),
    requestRandomNum(),
    requestRandomNum(),
    requestRandomNum()
  ]).then(function (dataArr) {
    //console.log('The array returned from Promise.all function calls: \n', dataArr);
    var total = 0;
    for (var i = 0; i < dataArr.length; i++) {
      total += dataArr[i];
    }
    console.log(total);
  }).catch(function(err){
    console.error(err);
  });
