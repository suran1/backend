// constructor function (uses the 'new' keyword)

// function myModule () {
//   this.dogsAreBetter = function () {
//     console.log('Dogs are so much better than cats!');
//   }
// }



// There are ways to to export the module using constructor notation
// If you use it this way, it instantiates one module object that is the same thing
// throughout the application. Only get one instantiation, that you can mutate
// this is the most common way for constructor

// You can only have one 'module.exports in a file'
//module.exports = new myModule();





// Second way - this passes the entire code - like a class ('blueprint'). It
// doesn't create the
//module.exports = myModule;


// Exporting functions (no constuctor)

// module.exports = function () {
//     console.log('Dogs are so much better than cats!');
//
// }


// Same pattern of Exporting Function but another example

// module.exports = {
//   dbCreds: {
//     UN: bljah,
//     PW: dogss
//   },
//   PORT: 3000
// };

// You  can extend module.exports (add properties to the module.exports object)

module.exports.dogsAreBetter = function () {
  console.log('Dogs are so much better than cats!');
};

module.exports.breakfast = function () {
  console.log('Pancakes!!!!!!!!!!!!!!!!!');
};


module.exports.port = 3000;
