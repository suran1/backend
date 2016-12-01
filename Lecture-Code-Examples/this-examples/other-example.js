//'use strict';

var obj = {
    name: 'balk',
    greet: function() {
        console.log(this.name);
    }
};



function howdy() {
    console.log(this.name);
    
}

var name = 'red';
obj.greet();
howdy();  

console.log(name);


// Bind example - never want the object that this refers to to change

var obj = {
    name: 'red';
};


var obj2 = {
    name2: 'red';
};

function howdy() {
    console.log(this.name); 
    console.log(this.name2);
}

var newFunction = howdy.bind(obj);  // bind only takes one object
newFunction();  // newFunction will always use obj as what this refers to 




