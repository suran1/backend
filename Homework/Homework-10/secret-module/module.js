/*Exercise 2
Secrets are bad. Unless they're good. JavaScript secrets are always good.

1. Create new folder in all-together named secret-module
2. Initialize the secret-module folder as a git repository
3. Create a file named module.js from the command line
4. In this file, create a module named superSecret
    - This module should contain:
      -- This module should store a secret phrase
         --- This phrase can be anything you want it to be
         --- This phrase should not be accessible from outside the function
      -- This module should also have a function named shareSecret that takes the secret phrase and applies
         the Roman Cipher to it, then reverses it and logs it to the console
    - Within this same file, create a function that tests that the secret phrase cannot be accessed outside the function
      -- It should return true if it cannot access the function and false otherwise
    - Create another function within this file that tests that the output when running the module's shareSecret method
5. Commit and push all changes to a new GitHub repository from the command line

*/



var superSecret = (function () {

     var arrCode = 'Walk as if you are kissing the Earth with your feet. ― Thich Nhat Hanh';
     arrCode = arrCode.toUpperCase();
    
    
      function shareSecret () {

           
            var arrDecode = [];


            for (var i = 0; i < arrCode.length; i++) {

                if ((arrCode.charCodeAt(i) >= 78) && (arrCode.charCodeAt(i) <= 90)) {
                    arrDecode.push(String.fromCharCode(arrCode.charCodeAt(i) - 13));

                } else if ((arrCode.charCodeAt(i) >= 65) && (arrCode.charCodeAt(i) <= 77)) {
                    arrDecode.push(String.fromCharCode(arrCode.charCodeAt(i) + 13));

                } else if (arrCode.charCodeAt(i) === 32) {
                    // randomly generate characters to replace the space char
                    var spaceErase = Math.floor(Math.random() * (126 - 123 + 1)) + 123;
                    arrDecode.push(String.fromCharCode(spaceErase));

                } else {
                    arrDecode.push(arrCode.charAt(i));
                }
            } // end for

            return arrDecode.reverse().join('');
        } // end function



    var publicAPI = {
                        shareSecret: shareSecret
                    };

    return publicAPI;
})();


console.log(superSecret.shareSecret());


function testSecret () {
  if(superSecret.shareSecret().hasOwnProperty('arrCode')){
    return false;
  } else {
    return true;
  }
}

console.log(testSecret());

function testCipher() {
  var regex = /UANU(\||\~|\{|\})GNUA(\||\~|\{|\})UPVUG(\||\~|\{|\})―(\||\~|\{|\})\.GRRS(\||\~|\{|\})EHBL(\||\~|\{|\})UGVJ(\||\~|\{|\})UGENR(\||\~|\{|\})RUG(\||\~|\{|\})TAVFFVX(\||\~|\{|\})REN(\||\~|\{|\})HBL(\||\~|\{|\})SV(\||\~|\{|\})FN(\||\~|\{|\})XYNJ/;

  var testMe = (superSecret.shareSecret()).match(regex);

  if (testMe){
    return true;
  } else {
    return false;
  }

}

console.log(testCipher());
