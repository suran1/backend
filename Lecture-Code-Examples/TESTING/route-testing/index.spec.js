// or could have named this test.spec.js

var chai = require('chai');
var chaiHTTP = require('chai-http');
var expect = chai.expect;  // this lets us say 'expect..' instead of chai.expect...

// imports our app that we exported
var app = require('./index');

// tells chai to use the chaiHTTP library. It will gives us functions to use
// http calls in our tests
chai.use(chaiHTTP);

describe('Routes', function (){
  describe('/', function (){
    describe('GET', function () {
    // use done as a call back to ensure that the http callw w
      it('should respond with a 200 when succesfull', function(done){

        chai.request(app)   // this starts our server  - we pass our server to chai to test
                            // make sure server IS NOT RUNNING or you'll get an error
          .get('/')
            .end(function (err, res){  // this fires off the request to the server
              expect(err).to.be.null;
              expect(res).to.have.status(200);
              done();
            });
      });
      it('should respond with the correct message', function (done){
          chai.request(app)   // means use this code to test - it has our routes in it to get the response
            .get('/')
            .end(function (err, res){
              expect(err).to.be.null;
              expect(res).to.be.html;     // Express defaults to text/html
              expect(res.text).to.equal('Hello!');
              done();
            });
      });


      it('should respond with the correct status code and response when successful', function(done){
        chai.request(app)
          .get('/tacos')
          .end(function(err, res){
            expect(err).to.be.null
            expect(res).to.be.html;
            expect(res.text).to.equal('Are delicious!');
            expect(res).to.have.status(200);
            done();
        });
      });
    });
    describe('POST', function (){
      it('should respond with a 200 when successful', function (done){
        chai.request(app)
          .post('/')
          .send( { food : 'tacos'})
          .end(function (err, res){
              expect(err).to.be.null;
              expect(res).to.have.status(200);
              done();
          });
        });

      it ('should response with the same object that was submitted', function(done){
          chai.request(app)
            .post('/')
            .send( { food : 'tacos'})
            .end(function (err, res){
              expect(err).to.be.null;
              expect(res).to.be.json;
              expect(res.body).to.deep.equal( {food : 'tacos'});  //this will compare values - without deep, it just compares memory location - which is the same since
                                                                 // objects are passed by reference
              done();
        });
      });
    });
  });
});
