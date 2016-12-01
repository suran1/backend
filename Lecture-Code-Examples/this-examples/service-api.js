/*
    Scenario:  I have a service (a piece of code that is typically going to make calls to an API and bring back data) 
    
    Create a service that returns an object  (myService is a function that returns an object). To use it we'd have to assign the 
    returned object to a variable (or feed to a function that expects an object) in order to use it.



*/

function myService(){
    return {                                //return returns an object
        logger: null,                       //in API, a logger 
        data: [],
        configure: function(logArg, dataArg){   
            this.logger = logArg;               //this refers to the object the 
            this.data = dataArg;
        },
        
        print: function (val) {
            this.logger.log(val);           // in this example, we're going to pass the console object (which we're essentially renaming as 'logger')
        }                                   // and using console's (logger's) 'log' method.  So Line 21 is the same thing as console.log'
        
    };  // end return statement
} // end function

var service = myService();  // saves an object into the variable 'service'
console.log(service); 
service.configure(console, [1, 2, 3, 4]);
service.print('Hello!');
service.print(data);
