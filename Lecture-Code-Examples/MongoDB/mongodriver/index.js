

// MongoDB exports an object, with a property.
// MongoClient is asynchronous - so all commands that you used in the mongo shell have to
// have a callback
var MongoClient = require('mongodb').MongoClient;

// best practice make this connection in your boostratp file (the file that runs the server)
// leave it open, you never close it. Unless the server crashes.
// Leave it open why? because it's expensive performance-wise to create connections, and
// recreate them. Also, people are going to be hitting it all the time. So,
// create connection when server starts


// when we pass this into the connect function, it interprest the mongodb part to
// start the connection
// Default port is 27017 - if you deply to the cloud, change this! Because people
// know the default port

// we are connecting mongo to localhost at port 27017 to our database 'pasta'
var uri = 'mongodb://localhost:27017/pasta';

// send the connection and callback. Callback is error-first, and a connection to the db
MongoClient.connect(uri, function(err, db){
    if (err){
        console.log(err);
        //db.close();   // optional at this point no connection is made so don't need to close
    }

    console.log('Yay! We connected!');

    // store name of collection in a variable - collections naming conventions: always
    // lower case and plural
    var collection = db.collection('types');

    // create a document
    var gnocchi = {
        name: 'gnocchi',
        thickness: 10
    };

    // pass an empty object to find method to get everything
    // collection.find({}, function (err, result){
    //     // handle error
    //     if (err){
    //             console.log('There was an issue inserting the document: ' + err);
    //             db.close();
    //     } else {
    //         console.log(result);   // prints out a cursor object
    //         db.close();
    //     }
    //
    // });


    // Read operation: to get an array of documents
    // collection.find({}).toArray(function (err, result){
    //     // handle error
    //     if (err){
    //             console.log('There was an issue inserting the document: ' + err);
    //             db.close();
    //     } else {
    //         console.log(result);   // prints out a cursor object
    //         db.close();
    //     }
    //
    // });





    // Insert documents is Create comment out so it doesn't insert everytime
    // collection.insert(gnocchi, function (err, result){
    //     if (err){
    //         console.log('There was an issue inserting the document: ' + err);
    //         db.close();
    //     } else {
    //         console.log(result);
    //         //db.close();
    //     }
    // });

    // collection.updateOne(
    //     { name: 'gnocchi'},
    //     { $set: { thickness: 9 }},
    //     function(err, result){
    //         if (err){
    //                 console.log('There was an issue updating the document: ' + err);
    //                 db.close();
    //         } else {
    //             collection.findOne({ name: 'gnocchi'}, function (err, result) {
    //                 console.log(result);
    //                 db.close();
    //             });
    //         }
    //
    //     });



    collection.deleteOne( { name: 'gnocchi'}, function (err, result){
        // if (err) {
        //     console.log('There was an issue updating the document: ' + err);
        //     db.close();
        // } else {
            // after delete, show all records
            collection.find({}).toArray(function (err, result) {
                console.log('after delete: ', result);
                db.close();
            });
        //}

    });


});
