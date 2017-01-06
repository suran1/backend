/*
Exercise 3

The New York Times has hired you to gather metrics about their website. $$ BIG PAYDAY, YES! $$

1. Create new folder in all-together named scraping-html
2. Initialize the scraping-html folder as a git repository
3. Create new file named html-scrape.js from the command line
4. In this file, create a function that will take in a string of HTML and output the number of <div> elements in the file
5. In this file, create a function that will take in a string of HTML and output the total number of html elements in the file
    -- Note that an HTML element is anything between < and > symbol. For example <div></div> is one element which has an opening
       and closing HTML tag.
6. In this file, create a function that will take in a string of HTML and output the number of times New York is referenced in the file (hyperlinks do not count)
7. Within this same file, create a function that tests each of the above output scenarios and outputs true where the function is successful and false otherwise
8. HTML content can be found in this directory, as content.js. This text can be imported into your file using var htmlContent = require('./content.js')();
9. Commit and push all changes to a new GitHub repository from the command line

*/



var htmlContent = require('./content.js')();



function findElement(element) {
  var elem = new RegExp(element);
  var answer = htmlContent.match(elem).length;
  return answer;
}


var testObj = {
    
    div: {count: 312, pattern: /<\/div>/gi},
    total: {count: 1739, pattern: /<\/\w+>|\/>/gi},    //1640 does not include <img .../>, <link .../>, etc. tagss
    city: {count: 23, pattern: /New\sYork/gi}
};
    
    


function testFind(dataObj, testObj) {
    
    var results = [];
   
    for (var prop in dataObj) {
        
        if (findElement(dataObj[prop]) === testObj[prop].count){
            results.push(true);
        } else {
            results.push(false);
        }
            
    }
    

    return  results.length === 3 && results.indexOf(false) === -1 ? true : false ;
    
}

//normal function calls
console.log(findElement(/<\/div>/gi));      //<div></div> count
console.log(findElement(/<\/\w+>|\/>/gi));  // total # of html elements
console.log(findElement(/New\sYork/gi));    // New York occurences count

//test calls
console.log('\nTest results:');
console.log(testFind({ div: /<\/div>/gi, total: /<\/\w+>|\/>/gi, city: /New\sYork/gi }, testObj));

