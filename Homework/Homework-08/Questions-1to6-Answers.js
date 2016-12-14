Question 1 Answer:  
    //Displays a dialog box with the value '12'  
    
    EXPLANATION
    // Because anonymous IIFE function has closure over the global scope, where variable a 
    // is defined and assigned the value '12'
 
Question 2 Answer: 
    // Displays a dialog box with the value '12'

    EXPLANATION
    // Anonymous IIFE function declares a variable 'a' wth the value 12
    // Scope rules mean that the V8 engine will look inside the current scope first and then
    // expand to other scopes if it can't find a value

Question 3 Answer:
    // Displays a dialog box with the value '12' 

    EXPLANATION
    // var x is assigned to an IIFE anonymous function, who's return value is the dialog box 
    // displaying the value of var a. After the IIFE exectues the dialog box does not display...
    // Why?  Becaue the return value of the IIFE is an anonymous function that IS NOT EXECUTED -  // it's just the function definition at this point.

    // Now, when x() exectues, it's value is the following anonymous function definition:
    //          (function () { alert (a); })
    // Due to the rules of closure, var 'a' defined in the IIFE has a value of '12', so therefore
    // the dialog box will have the value '12'

Question 4 Answer:
    // Displays a dialog box with the value '10'

    EXPLANATON
    // var x is assigned to anonymouns IIFE function that contains another function that is 
    // assigned to var y. In this inner anonymous function definition another var a is defined
    // and assigned the value of 12. NOTE: This doesn't have any effect on the return statement // on the outer function. 
    // Why? Because the return function doesn't have any visibility into the inner function
    // assigned to 'y'
    // So, when the IIFE finishes executing, it assigns the anonymous function defintion:
    //     function () { alert(a); }  to var x
    // So, when x() is called, since there is no 'a' variable declared in the outer anonymous
    // function, scope rules dictate that the value of a is 10
    
Question 5 Answer:
    // Displays a dialog box with the value of 12

    EXPLANATION
    
    // Outer anonymous IIFE has an inner IIFE function that assigns the globally declared 
    // var a the value 12, so when the outer function returns the function definition:
    //          (function () { alert (a); });
    // (the value of x) when x() executes, due to closure (and the fact that 'a' is global) the
    // value of a is 12
    
Question 6 Answer:
    // Displays a dialog box with the value '15' if run in the browser; if run in node may be
    // undefned! Correct!

    EXPLANATION
    // IIFE declares its own 'var a' and assigns the value to 15. The global object 'window'
    // has a property called 'x' which is assigned the function:
    //  function () {alert (a);}
