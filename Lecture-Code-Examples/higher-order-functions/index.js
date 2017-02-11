/*
    Objective:  Take a number and a ten to it, and then do it twice in a row.
     2 * (x + 10)
*/


var addTen = function (nbr) {
    return nbr + 10;
};


var addTenTwice = function (nbr) {
    var total = 0;
    total += addTen(nbr);
    total += addTen(nbr);
    return total;
}

console.log(addTenTwice(5));


//refactoring

var addTwice = function (nbr, func) {
    return func(nbr);
}

console.log(addTwice(5, addTen));


// refactoring again

var addTwiceAgain = function (nbr, func) {
    var x = func(nbr);
    func(x);
};

console.log(addTwiceAgain(5, addTen));

// refactoring again

var addTwiceAgainTricky = function (func, nbr) {
    return func(func(nbr));
};

console.log(addTwiceAgainTricky(addTen, 5));
