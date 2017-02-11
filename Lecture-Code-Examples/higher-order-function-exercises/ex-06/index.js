// Exercise 5

// Part I - Create a function that takes the array of objects mentioned and
// returns the number of objects that are dogs.

var pets = [
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
];

var countDogs = function (arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].type === 'dog'){
            count++;
        }
    }
    return count;
};

//console.log(countDogs(pets));


// Part II

// Create a 2nd function that will take the array of objects, a starting number,
// and a function. The function argument should take the current total and update
// it if the object is a dog.


var addDog = function (total, pet){

   if (pet.type === 'dog'){
        return total + 1;

   }
   return total;

};




var dogPop = function (arr, func) {
    var count = 0;
    for(i = 0; i < arr.length; i++) {
        count = func(count, arr[i]);
    }

    return count;
};

console.log(dogPop(pets, addDog));


// reduce is a higher order function
// array.reduce (function (total, element, index, originalArray){

//}, 10)   // 10 is the starting value - doesn't have to count


var x = pets.reduce(function(total, pet){
    if (pet.type === 'dog'){
        return total + 1;
    }
    return total;
}, 0);  // 0 is the initial value of total. If you don't provide an initial value
// reduce will skip over the 1st element and use that as the value. So, always
// provide a value

console.log(x);


// another example
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var n = numbers.reduce(function (total, curNbr){
    return total += curNbr;
}, 0);

console.log(n);  // add up all the numbers in the array;

count = 0;
numbers.forEach(function (element, index, originalArray){
    count += element;
});
console.log(count);
