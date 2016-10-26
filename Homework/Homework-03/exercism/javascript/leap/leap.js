//var Year = function() {};

function Year(year) {
    this.year = year;
}


Year.prototype.isLeap = function() {

  // If year is evenly divisible by 4 and not evenly disibly by 100 but is evenly divisible by 400, it's a leap year)    
  if (this.year % 400 === 0) {
        return true;
  } else if (this.year % 100 === 0) {
        return false;
  } else if (this.year % 4 === 0) {
        return true; 
  } else {
        return false;
  }         
};

module.exports = Year;