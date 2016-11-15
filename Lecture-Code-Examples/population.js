/*
    We know the population for a small town at the beginning of a year. 
    The population regularly increases by a certain percent per year and 
    moreover a given number of nuew inhabitants per year come to live in the town.
    
    How many years des the town need to see its population greater than or equal to a population goal?
    
    Write this funciton.

*/

function howManyYears(startPop, percentIncrease, immigrants, goal) {
    
    var pop = startPop;
    var years = 0;
    var percent = percentIncrease *.01; 
    
    
    while (pop < goal) {    
        pop = pop + (pop * percent) + immigrants;
        years++;        
    }
    
    return years;
    
    
}


console.log(howManyYears(1500, 5, 100, 5000)); // 15
console.log(howManyYears(1500000, 2.5, 10000, 2000000)); // 10
console.log(howManyYears(1500000, 0.25, 1000, 2000000)); // 94