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

console.log(countDogs(pets));
