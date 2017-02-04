var chai = require('chai');
var expect = chai.expect;  //so we have this functionality without havint to type 'chai.expect'
                           // expect is a function
var math = require('../math.js');

// you can have any number of describes - these are

describe('Math', function (){     // mocha
  describe('Basic Operations', function(){  // mocha
    describe('Add', function(){  // mocha
      it('should return the sum of 5 when provided with parameters 2 and 3', function (){ //mocha
        var sum = math.add(2,3);
        expect(sum).to.equal(5);      //this is chai
        expect(sum).to.not.equal(7);  // this is chai
      });

      it('should return the sum of 8 when provided with parameters 5 and 3', function (){
        var sum = math.add(5,3);
        expect(sum).to.equal(8);
        expect(sum).to.not.equal(5);
      });

    describe('Subtract', function(){  // mocha
        it('should return the difference of 5 when provided with parameters 8 and 3', function (){ //mocha
          var difference = math.subtract(8,3);
          expect(difference).to.equal(5);      //this is chai - using a variable with sum
          expect(math.subtract(8.3)).to.not.equal(7);  // this is chai - using the function to test
        });

    // pending test - just keeps a line of what it's supposed to do
    describe('Division', function(){
      it('should return the quotient of 2 when provided with parameters 4 and 2');
    });


    });
    });
});
});
