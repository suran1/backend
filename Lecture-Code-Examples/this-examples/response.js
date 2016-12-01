/*
    createResponse returns an object
*/

'use strict';

function createResponse() {
    return {
        statusCode: null,
        status: function (code) {
            this.statusCode = code;
            return this;                    // we return the whole object 
        },
        
        send: function (res) {
            return this.statusCode + ' ' + res;
        }
    }; // end return statement    
}

var response = createResponse();
console.log(response);
console.log(response.status(200).send('it worked'));   // What's going on:
                                                       // response.status(200)  
                                                       //     -- this executes Lines 10-12  - and returns the whole object so that the object
                                                       //         that is returned can be used in the next method which is 'send'
                                                       //  .send('it worked')
                                                       //     takes the returned object from the response.status(200) and then calls the .send('it worked')
                                                       //     and executes lines 15 -16. 
                                                       // we have to use the function in order to chain the methods (our own methods)