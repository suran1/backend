/*

Create a module that has two methods: print, and multiply. printModuleName should log the module's name to the console, and multiply should multiply two numbers together. The internal implementation details of the module should be hidden (i.e. the user should not be able to see the moduleId).

Module details:

obj: {
  name: 'Very Awesome Module',
  id: '12erer0ue70'
}

*/

// This has to have an IIFE because otherwise, none of the functions get invoked so then 
// the obj variable never gets assigned it's values, and neithe does multily. However, 
// If you don't use the IIFE it will work if you call it like this:
//  myModule().printModuleName();   
//  myMoule().mulitply(3,2); 
// This is because you are invoking myModule

var myModule = (function () {
    
     
    var obj = {
                        name: 'Very Awesome Module',
                        id: '12erer0u70'
                };
    
    
    var printModuleName = function (){
            return obj.name;
        }


    function multiply (num1, num2) {
            return num1 * num2;
        }
    
    var publicAPI = {
                        printModuleName: printModuleName,
                        multiply: multiply
                    };
    
    return publicAPI;
})();

console.log(myModule.printModuleName());
console.log(myModule.multiply(3, 2));

