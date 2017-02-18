var chai = require('chai');
var expect = chai.expect;
var inputValidation = require('../inputValidation');

describe('Input Validation Tests', function (){
    describe('isAlpha Function Tests', function(){
        it('should return true with proper data (alpha and spaces)', function (){
            var theString = inputValidation.isAlpha('this is VAlid');
            expect(theString).to.equal.true;
        });

        it('returns false with improper data (punctuation, numbers, non-alpha chars)', function (){
            var theString = inputValidation.isAlpha('This flails...&343(*(333))fails!');
            expect(theString).to.be.false;
        });
    });
});
