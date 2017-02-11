// Exercise 01

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

function filterDogs(arr){
    var dogArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i].type.toString() === 'dog'){
            dogArr.push(arr[i]);
        }
    }
    return dogArr;
}


console.log(filterDogs(pets));
