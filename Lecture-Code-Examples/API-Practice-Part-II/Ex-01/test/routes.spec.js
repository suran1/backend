var chai = require('chai');
var chaiHTTP = require('chai-http');
var expect = chai.expect;

var app = require('../index.js');

chai.use(chaiHTTP);


// for route testing check the contract. The contract is what is basically the
// doorway

describe('API End Point Tests', function (){
    describe('/', function (){
        it('should have status code of 200 when successful', function (done){

            // use this to test for server
            //chai.request('http://localhost:3000')
            chai.request(app)
              .get('/')
              .end(function (err, res){
                  expect(err).to.be.null;
                  expect(res).to.have.status(200);
                  done();
              });
        });

    });
    describe('/uppercase', function (){
        describe('GET/uppercase', function (){
            it ('should return string in uppercase with proper data', function (done){
                chai.request(app)
                     .get('/uppercase')
                     //chai-http converts this to ?stringToChange='ajd...'
                     .query({stringToChange: 'ajdjkd fjf', userid: '1234'})
                     .end(function (err, res){
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res).to.be.html;
                        done();
                     });
            });
            it ('returns an error when supplied improper data', function (done){
                chai.request(app)
                    .get('/uppercase')
                    .query({ stringToChange: 'This..fails100!', userid: '1234'})
                    .end(function (err, res){
                        expect(err).to.not.be.null;
                        expect(err).to.have.status(400);
                        done();
                    });
            });
        });
        describe('POST/uppercase', function (){
            it('POST: returns uppercase string supplied with proper data', function (done){
                chai.request(app)
                    .post('/uppercase')
                    .send({ stringToChange : 'whatever river', userid: '5678'})
                    .end(function (err, res){
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res).to.be.html;
                        done();
                    });
            });
            it('POST: returns error when improper data is supplied ', function(done){
                chai.request(app)
                    .post('/uppercase')
                    .send({stringToChange : '3434!!*&', userid: '8989'})
                    .end(function (err, res){
                        expect(err).to.not.be.null;
                        expect(err).to.have.status(400);
                        done();
                    });

            });
        });
    });
    describe('/lowercase', function (){
        describe('GET/lowercase', function (){
            it ('should return string in lowercase with proper data', function (done){
                chai.request(app)
                     .get('/lowercase')
                     .query({stringToChange: 'AMAZING ANIMALS', userid: '7777'})
                     .end(function (err, res){
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res).to.be.html;
                        done();
                     });
            });
            it ('returns an error when supplied improper data', function (done){
                chai.request(app)
                    .get('/lowercase')
                    .query({ stringToChange: 'This..fails100!', userid: '8989'})
                    .end(function (err, res){
                        expect(err).to.not.be.null;
                        expect(err).to.have.status(400);
                        done();
                    });
            });
        });
        describe('POST/lowercase', function (){
            it('POST: returns lowercase string supplied with proper data', function (done){
                chai.request(app)
                    .post('/lowercase')
                    .send({ stringToChange : 'THE END OF THE WORLD', userid: '1234'})
                    .end(function (err, res){
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        done();
                    });
            });
            it('POST: returns error when improper data is supplied ', function(done){
                chai.request(app)
                    .post('/lowercase')
                    .send({stringToChange : '3434!!*&', userid:'5678'})
                    .end(function (err, res){
                        expect(err).to.not.be.null;
                        expect(err).to.have.status(400);
                        done();
                    });
            });
        });
        describe('ALL LOGS endpoint', function (){
            it ('should return an array of all logs. Each log is an object', function (done){
                chai.request(app)
                    .get('/allLogs')
                    .end(function (err, res){
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res).to.be.an.array;
                        done();
                    });
            });
        });
        describe.skip('User ID endpoint', function(){
            it('should return an array of all requests for the userid', function (done){
                chai.request(app)
                .get('/1234')
                .end(function (err, res){
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res).to.be.an.array;
                    done();
                });
            });
        })
    });
});
