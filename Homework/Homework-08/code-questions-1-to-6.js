/*
    To run in node, replace all 'alert' statements with 'console.log'
    Not sure what to do with question 6, since node's default global is the empty object?
    
*/


//Question 1

//var a = 12;
//(function() {
//  alert(a);
//})();

// Question 2 

//var a = 5;
//(function() {
//  var a = 12;
//  alert(a);
//})();



// Question 3

//var a = 10;
//var x = (function() {
//  var a = 12;
//  return (function() {
//    alert(a);
//  });
//})();
//x();


// Question 4

//var a = 10;
//var x = (function() {
//  var y = function() {
//    var a = 12;
//  };
//  return function() {
//    alert(a);
//  }
//})();
//x();


//Question 5

//var a = 10;
//var x = (function() {
//  (function() {
//    a = 12; // <<< look carefully at this line.
//  })();
//  return (function() {
//    alert(a);
//  });
//})();
//x();


//Question 6
//var a = 10;
//(function() {
//  var a = 15;
//  window.x = function() {
//    alert(a);
//  }
//})();
//x();