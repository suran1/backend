/*  

    You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup
    that you are organizing.
    
    Your taks is to return an array which includes the developer who is the oldest. In case of a tie , include the ssame-age 
    senior developers listed in the same order as they appeared in the orignal input array. If it's just one, then just an a number.

*/


  var listOne = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

var listTwo = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 54, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 30, language: 'PHP' },
];


function findOldest (arrObject) {
    
    var senior = [];
    var maxAge = 0;
    
    
    for (var i = 0; i < arrObject.length; i++) {
        
        if (maxAge <= arrObject[i].age) {
            maxAge = arrObject[i].age;
        }
    }

    for (var i = 0; i < arrObject.length; i++) {
        if (arrObject[i].age === maxAge){
            senior.push(arrObject[i]);
        }
    }
    
    if (senior.length > 1) {
        return senior;
    }
    
    return maxAge;
}


console.log(findOldest(listOne));
// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]

console.log(findOldest(listTwo)); // 54

