/*
    build a function that takes in two arguments (salary, bonus). Salary will be an integer and bonus is a boolean.
    
    If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make money and must 
    receive only his stated salary. 
    
    Return the total figure the individual will receive as a string prefixed with a '$'.



*/


function bonusTime(salary, bonus) {
    
    if (!bonus) {
        return '$' + salary;
    }
    
    return 'S' + (10 * salary);
        
}

console.log(bonusTime(10000, true));    // '$100000'
console.log(bonusTime(25000, true));    // '$250000'
console.log(bonusTime(10000, false));   // '$10000'
console.log(bonusTime(60000, false));   // '$60000'
console.log(bonusTime(2, true));        // '$20'
console.log(bonusTime(78, false));      // '$78'
console.log(bonusTime(67890, true));    // '$678900'