/*

Your goal is to implement the method filter, which accepts an array and a predicate function, and returns an array which only contains the elements which apply to the given predicate.

For example: Given the array: [1, 2, 3], and the predicate function function (x) { return x >=2 }, filter should return [2, 3], since x >= 2 applies to both 2 and 3.

Note: the list may be null and can hold any type of value.

*/

function filter (arr, func) {
    var newArr = [];
    
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            newArr.push((arr[i]));
        }
    }
    return newArr;
}





console.log(filter([2, 4, 8], function (x) { return x < 3; }));   // [2]
console.log(filter(['bunny', 'shark', 'bunny', 'lazer', 'bunny', 'piranhas'], function (animal) { return animal === 'bunny'; }));  // ['bunny', 'bunny', 'bunny']
console.log(filter([], function (x) {return x < 3;}));
