// Exercise 04

var pets = [
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
];


// Part 1

// Create a function that takes the array of objects mentioned above and returns
// a new array where every object contains a new property called 'isPrecious'
// that is 'true' for dogs and 'false' for cats.

// see ex-03 for the answer





// Part II

// Create a second function that takes the array of objects mentioned above and
// a function as the 2nd argument. This second function should add the isPrecious
// value to teh object and update it. The function should return a new array
// where all objects have been updated with the 'isPrecious' property

var updatePets = function (pet) {
    var newPetObj = {};
    var prop = 'isPrecious';


    // do this so that we make a copy of 'pet' - which is passed by reference
    // this way we don't change the original argument

    // could also do newPetObj = Object.create(pet)
    newPetObj.name = pet.name;
    newPetObj.type = pet.type;


    if(newPetObj.type === 'dog'){
        newPetObj[prop] = true;
    } else{
        newPetObj[prop] = false;
    }
    return newPetObj;

}



var newInfo = function (arr, func) {
    var results = [];
    for (var i = 0; i < arr.length; i++) {
        results.push(func(arr[i]));
    }
    return results;
};


console.log(newInfo(pets, updatePets));


// using map - takes an object, iterates over the object, and updates
// every object (or not). When you return something, you are returning the
// result for that specific index



console.log(pets.map(function(pet){
    if (pet.type === 'dog'){
        pet.isPrecious = true;
    } else {
        pet.isPrecious = false;
    }
    return pet;

}));


// or

var dogsArePrecious = function(pet){
    if (pet.type === 'dog'){
        pet.isPrecious = true;
    } else {
        pet.isPrecious = false;
    }
    return pet;
};

console.log(pets.map(dogsArePrecious));
