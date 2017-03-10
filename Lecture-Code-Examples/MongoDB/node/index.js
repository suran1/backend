var MongoClient = require('mongodb').MongoClient;

var uri = 'mongodb://localhost:27017/test';  // test is the db

MongoClient.connect(uri, function(error, db) {
    if (error) {
        console.log('SOMETHING WENT WRONG: ', error);
    }

    console.log('CONNECTED TO SERVER');
    findAllDocuments(db, function(docs){
        console.log(docs.length)
        db.close();  // close database connection
    });

});

function findAllDocuments(db, callback) {
    var collection = db.collection('restaurants'); // query souce

    // find all docs
    collection.find({}).toArray(function (error, docs){
        console.log('FOUND DOCUMENTS');
        console.log(docs);
        callback(docs);
    });
}

function aggregate(db, callback){
    var collection = db.collection('restaurants');

    collection.aggregate([{ $group: { "_id": "$borough", "count":{ $sum} }}}])
        .toArray(function (err, docs){
            console.log(docs);
            callback(docs);
        });
}
