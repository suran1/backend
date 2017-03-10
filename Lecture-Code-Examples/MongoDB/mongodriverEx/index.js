var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var app = express();
var uri = 'mongodb://localhost:27017/zoo';

// connect to the database
MongoClient.connect(uri, function(err, db){
    if (err){
        console.log('Yikes! Connection attempt failed!\n' + JSON.stringify(err));
        return;
    } else {
        var collection = db.collection('animals');
        collection.insertMany([{

            animal: "lion",
            food: "meat",
            hasStripes: false

        },

        {
            animal: "tiger",
            food: "meat",
            hasStripes: true
        },

        {
            animal: "elephant",
            food: "plants",
            hasStripes: false
        }
        ];
, function (err, data){
    if (err){
        console.log('yes')
    }
 }    
});
        app.get('/', function (req, res){

                collection.find({}).toArray(function (err, results){
                    if (err){
                        res.status(500).send('Bad times, bro. ' + err);
                    } else {
                        res.status(200).json(results);
                    }
                });

        });

        app.listen(3000, function (){
            console.log('App listening on port 3000');
        });


});
