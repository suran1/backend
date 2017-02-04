var chai = require('chai');
var expect = chai.expect;
var chaiHTTP = require('chai-http');

chai.use(chaiHTTP);

describe('API Interactions', function(){

  it('returns status code 200 for root endpoint', function(done){
    chai.request('http://localhost:5000')
    .get('/')
    .end(function(error, response){
      expect(response).to.have.status(200);
      done();
    });
  });


  // need 'done' or 'finish' - by convention people call it done
  // it's a callback used for ansynchronous testing so mocha knows
  // to wait until it gets the callback
  it('returns a person object for person endpoint', function(done){
    chai.request('http://localhost:5000')
    .get('/person')
    .end(function(error, response){
      expect(response).to.have.status(200);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('firstname');
      expect(response.body).to.have.property('lastname');
      expect(response.body).to.have.property('age');
      done();
    });
  });

});
