var Year = function() {};

Year.prototype.isLeap = function(year) {
    
  // If year is evenly divisible by 4 and not evenly disibly by 100 but is evenly divisible by 400, it's a leap year)    
  if (year % 400 === 0) {
        return true;
  } else if (year % 100 === 0) {
        return false;
  } else if (year % 4 === 0) {
        return true; 
  } else {
        return false;
  }      
};

module.exports = Year;