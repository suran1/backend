var express = require('express');
var middleware = require('./app.middleware.js');
var app = express();


var errorMiddleware = function (err, req, res, next){
  //console.error(err);
  res.status(500).send('uh oh - something went wroing')
}


app.use(middleware);

app.get('/', function (req, res){
    var obj  = {
      prop: "Blake"
    };

    // often we use
    try{
      JSON.parse(obj);
    } catch (err){
      err.type = 'exeception';
      throw new Error(err);   // throw stops exection ... flow goes on until eventually goes
                              // to app.use(errorMiddleware)
    }

    //throw new Error("Someting bad happened");
    //res.status(200).send('Brain fog...');
});

app.get('/chocolate', function (req, res){
    res.status(200).send('Give us chocolate!');
});

//often you'd have a error specific middleware for each error type
app.use(errorMiddleware);

app.listen(3000);
