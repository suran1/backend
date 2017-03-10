/*
    Write a function that calculates how much to tip based on the total price and a service rating. Tips should be rounded up to the 
    nearest dollar. Service ratings as follows and should be case insensitive:
    
    Terrible: 0%
    Poor: 5%
    Good: 10%
    Great: 15%
    Excellent: 20%
    
    If an unrecognized rating is received return 'Rating not recognized';
    
*/


function calculateTip (price, rating) {
    
    var tip = 0;
    var upRate = rating.toUpperCase();
        
    switch (upRate) {
        
        case 'TERRIBLE':
            tip;
            break;
        case 'POOR':
            tip = Math.ceil((price * .05));
            break;
        case 'GOOD':
            tip = Math.ceil((price * .10));
            break;
        case 'GREAT':
            tip = Math.ceil((price * .15));
            break
        case 'EXCELLENT':    
            tip = Math.ceil((price * .20));
            break;
        default:
            tip = 'Rating not recognized';
            break;        
    }
    
    return tip;
    
}


console.log(calculateTip(20, "Excellent")); //4
console.log(calculateTip(26.95, "good")); // 3

