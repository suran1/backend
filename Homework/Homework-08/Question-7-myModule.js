/*

Create a module that has two methods: print, and multiply. printModuleName should log the module's name to the console, and multiply should multiply two numbers together. The internal implementation details of the module should be hidden (i.e. the user should not be able to see the moduleId).

Module details:

obj: {
  name: 'Very Awesome Module',
  id: '12erer0ue70'
}

*/

var myModule = (function () {
    function printModuleName (){
            var obj = {
                        name: 'Very Awesome Module',
                        id: '12erer0u70'
                       }

             
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