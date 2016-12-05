
// Example of closure retaining access to the outer function's variables even after the outer function returns
function celebrityName (firstName) {
    var nameIntro = "This celebrity is ";
    // this inner function has access to the outer function's variables, including the parameter
   function lastName (theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}

var mjName = celebrityName ("Michael"); // At this juncture, the celebrityName outer function has returned.
console.log(mjName());                  //Remember, mjName is a function - need to include the '()' with the variable name

// The closure (lastName) is called here after the outer function has returned above
// Yet, the closure still has access to the outer function's variables and parameter
console.log(mjName ("Jackson")); // This celebrity is Michael Jackson


/*******************************************************************************************************************************/
// Example of closure storing REFERENCES (not values) to the outer function’s variables
// This can get interesting if the outer function variables change value before the closure is called

function celebrityID () {
    var celebrityID = 999;
    // We are returning an object with some inner functions
    // All the inner functions have access to the outer function's variables
    return {
        getID: function ()  {
            // This inner function will return the UPDATED celebrityID variable
            // It will return the current value of celebrityID, even after the changeTheID function changes it
          return celebrityID;
        },
        setID: function (theNewID)  {
            // This inner function will change the outer function's variable anytime
            celebrityID = theNewID;
        }
    }

}

var mjID = celebrityID (); // At this juncture, the celebrityID outer function has returned. mjID is an OBJECT, not a function
console.log(mjID);
console.log(mjID.getID()); // 999
mjID.setID(567); // Changes the outer function's variable
console.log(mjID.getID()); // 567: It returns the updated celebrityId variable

/********************** create space before next example *************************************************/
console.log('\n\n\n\n\n');
/*********************************************************************************************************/

// Example of side effect due to closures having access to the updated values of the outer function’s variables, which can lead to bugs when 
// the outer function’s variable changes with a for loop. 


function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
      theCelebrities[i]["id"] = function ()  {      // for some reason, for loop increments i untii it = 3 and THEN calls the anonymous function
        console.log(i);                             // thus, all the celebreties have an ID of 103, instead of the intended 101, 102, 103
        return uniqueID + i;                        
      }
    }                                               /*
                                                        The reason this happened was because the closure (the anonymous function in this example) has access to the outer function’s variables by reference, not by value. So just as the previous example showed that we can access the updated variable with the closure, this example similarly accessed the i variable when it was changed, since the outer function runs the entire for loop and returns the last value of i, which is 103
                                                    */    
    
    return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0];
console.log(stalloneID.id()); // 103

// to fix this, we use an IIFE (Immdiately Invoked Functional Expression)

function celebrityIDCreator2 (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function (j)  { // the j parametric variable is the i passed in on invocation of this IIFE
            return function () {
                return uniqueID + j; // each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value                      // to the array
            } ()                     // BY adding () at the end of this function, we are executing it immediately and returning just the value of                          // uniqueID + j, instead of returning a function.
        } (i);                       // immediately invoke the function passing the i variable as a parameter
    } // end for

    return theCelebrities;
}

var actionCelebs2 = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs2 = celebrityIDCreator2 (actionCelebs2);
var stalloneID = createIdForActionCelebs2 [0];
console.log(stalloneID.id); // 100

var cruiseID = createIdForActionCelebs2 [1];
console.log(cruiseID.id); // 101

/************************************** MDN Examples *****************************************/

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;    // returns a function
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it - this is the x parameter in outside
console.log(fn_inside); // fn_inside is a function that is references the inside function  
console.log(fn_inside());// returns NaN  because 3 + undefined is NaN
result = fn_inside(5); // returns 8  - closure in action - 5 is used as the y parameter
console.log(result);
result1 = outside(3)(5); // returns 8
console.log(result1);



// Scope chaining - MDN

function A(x) {
    console.log('I\'m in A now');
  function B(y) {
      console.log('I\'m in B now');
    function C(z) {
        console.log('I\'m in C now');
      console.log(x + y + z);
    }
    C(3);
  } // end B funciton 
  B(2);  // call B inside of A
} // end A function
A(1); // logs 6 (1 + 2 + 3)  - we call A first, then B, then C


// Scope chaining and name conflicts - MDN

function outside() {
  var x = 10;
  function inside(x) {
    return x;
  }
  return inside;
}
result = outside()(20); // returns 20 instead of 10
console.log(result);



// MDN Closure Example 1

var pet = function(name) {   // The outer function defines a variable called "name"
  var getName = function() {
    return name;             // The inner function has access to the "name" variable of the outer function
  }
  return getName;            // Return the inner function, thereby exposing it to outer scopes
},
myPet = pet("Vivie");        // assigns getName function to myPet 
   
myPet();                     // Returns "Vivie"
console.log(myPet);          // Proves myPet is a function with the value of getName
console.log(myPet());        // "Vivie"


// MDN Closure and persistence Example 2

var createPet = function(name) {
  var sex;
  
  return {
    setName: function(newName) {
      name = newName;
    },
    
    getName: function() {
      return name;
    },
    
    getSex: function() {
      return sex;
    },
    
    setSex: function(newSex) {
      if(typeof newSex === "string" && (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet("Vivie");
pet.getName();                  // Vivie

pet.setName("Oliver");
pet.setSex("male");
pet.getSex();                   // male
pet.getName();                  // Oliver
console.log(pet.getName());
console.log(pet.getSex());