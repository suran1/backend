var express = require('express');
var app = express();
var bodyParser = require('body-parser');



app.use(bodyParser.json());
app.get('/', function (req, res){
  res.status(200).send('Hello!');
});


app.get('/tacos', function (req,res){
  res.status(200).send('Are delicious!');
});

app.post('/', function (req, res){
    res.status(200).json(req.body);
});



// When testing routes we want to ensure that the body of the response
// is what is expected and the status

// Sometimes you need to check headers - only in specific cases

app.listen(3000, function (){
  console.log('Listening on port 3000...');
});


// this passes our running application to our tests - this auto starts the
// server when we have test code
module.exports = app;
