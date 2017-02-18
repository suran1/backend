var chai = require('chai');
var expect = chai.expect;
var textHandler = require('../textHandler.js');


// use describe.skip to skip a test
// use describe.only to only runs test that are nexted inside the describe
// block. Only transcends all files - so only runs tests for that trial

describe('Text Handler', function (){
    describe('Uppercase Function', function (){
        it ('should return a capitalized string', function () {
            var capitalizedString = textHandler.toUpper('this is a test');
            expect(capitalizedString).to.equal('THIS IS A TEST');
        });
    });
    describe('Lowercase Function', function (){
        it ('should return a lower case string', function (){
            var lowerCaseString = textHandler.toLower('THIS IS A TEST');
            expect(lowerCaseString).to.equal('this is a test');
        });
    });
});
