// Exercise 02

// Part 1

// Create a function that takes the array of objects mentioned above and return
// a new array that only the objects

var pets = [
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
];




// Part 2
// Create a second function that takes the array of objects mentioned above and
// a function as the second argument. The function should return true if the type
// of the current element is a dog. Use this function to create an array of
// only dog arguments.


var filterPets = function(arr, func){
   var results = [];

   for (var i = 0; i < arr.length; i++){
       if (func(arr[i])) {
          results.push(arr[i]);
       }
   }

   return results;
};

var isDog = function (pet){
    return pet.type === 'dog';
};

var isCat = function (pet){
    return pet.type === 'cat';
};

// console.log(filterPets(pets, function(pet){
//     return pets.type === 'dog';
// }));

console.log(filterPets(pets, isDog));
console.log(filterPets(pets, isCat));



console.log(pets.filter(isDog));
