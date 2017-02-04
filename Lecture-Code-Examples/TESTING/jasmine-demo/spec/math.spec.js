var math = require('../math.js');
var logger = require('../logger.js');

describe('Math', function(){
  describe('Basic Operations', function(){
    describe('Add', function(){
        beforeEach(function(){

          //spyOn - requires a Module and a method from that module
          //spyOn, callFake, is all part of Jasmine
          //this allows to simulate calling the real logger

          // if it was and.callThrough

          // and.returnvalue -
          spyOn(logger, 'logMessage').and.callFake(function() {
            console.log('FAKE LOGGER');
          });

          // example of fake read from a database (database )
          //spyOn(databaseReader, 'readNumber').and.returnValue([7,9,2,3,5]);

        });
      it('should return the sum of two numbers', function(){
        var sum = math.add(2,3);
        expect(logger.logMessage).toHaveBeenCalled();
        expect(math.add(2,3)).toEqual(5)
      });
    });
  });
});
