// Homework 02- Nested Data Exercise


// Create an array of arrays and print to console
var myArray = [
    ['Germany', 'United Kingdom', 'France', 'Belgium', 'USA'],
    ['Angela Merkel', 'Theresa May', 'Francois Hollande', 'Charles Michel', 'Barak Obama'],
    [11, 0.3, 4, 2, 8]
];
printStuff('array of arrays: \n', myArray);

/**************************************************************************************************************/
// Create an object with an array
// This will do it via code
var objArray = {
    countries: 5,
    leaders: 5,
    salaries: 5
    // an array of arrays will be added
};

// Add the array of arrays to the objArray object and print to console
objArray.newArray = myArray;
printStuff('object with an array: \n', objArray);

/***************************************************************************************************************/

// Add a nested object into the objArray object
objArray.myNestedObject = {
    currency: ['Euro', 'Pound Sterling', 'Euro', 'Euro', 'Dollar'],
    language: 'English',
    nationalAnthem: 'Star-Spangled Banner',
    population: 324840929
};
printStuff('object with another object for a property:', objArray);


/****************************************************************************************************************/

// Create an array of objects - using for loop for practice and switch
var motoArray = ['Ducati', 'Moto Guzzi', 'BMW', 'Honda'];
var newMotoArray = [];

for (var i = 0; i < 4; i++) {
    
    //create a new motoObject each time through the for loop; 
    //create a make property with a value from the index of motoArray? 
        var motoObject = {
         make: motoArray[i]   
    };
    
    switch(i){
        case 0:        
            motoObject.model = 'ST3';
            motoObject.color = 'Ducati Red';
            break;
            
        case 0:        
            motoObject.model = 'V7 Scrambler II';
            motoObject.color = 'Blue';
            break;    
            
        case 2:        
            motoObject.model = 'K1600GT';
            motoObject.color = 'Silver Metallic';
            break;          
        case 3:        
            motoObject.model = 'NM4';
            motoObject.color = 'Black Matte Metallic';
            
            break;   
        defualt:
            motoObject.model = 'Goldwing';
            motoObject.color = 'yellow';
            break;         
    } //end switch
    newMotoArray.push(motoObject); 
}    
printStuff('array of objects: ', newMotoArray);
printStuff('array of objects: ', motoArray);


// Practicing functions - counting on 'hoisting' to make this work - and it does!
function printStuff(name, obj) {
    console.log('An ' + name);
    console.log(obj);
    console.log('\n');
}

