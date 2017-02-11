// Exercise 03

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



var updatePets = function (arr) {
    var prop = 'isPrecious';
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {

        newArr.push(arr[i]);

        if (newArr[i].type === 'dog'){
            newArr[i][prop] = true;
        } else {
            newArr[i][prop] = false;
        }
    }
    return newArr;
};

console.log(updatePets(pets));
