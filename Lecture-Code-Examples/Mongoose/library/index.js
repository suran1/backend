
var mongodb = require('./mongodb.utils');
var libraryService = require('./library.service');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongodb.createEventListeners();
mongodb.connect();


// Seed authors collection
// libraryService.saveAllAuthors([
//         { "firstname" : "Shirley", "lastname" : "Jackson" },
//         { "firstname" : "Bram", "lastname" : "Stoker" },
//         { "firstname" : "Joseph", "lastname" : "Le Fanu"},
//         { "firstname" : "Henry", "lastname" : "James" }])
//     .then(function(results){
//         console.log('All authors seeded');
//     }).catch(function (err){
//         console.log('An error occurred while inserting auhthors: ' + err);
//     });

// Seed books collection
// libraryService.saveAllBooks([
//                     { "title" : "We Have Always Lived in the Castle", "author" : "58c06994237f9b19dbde7092"},
//                     { "title" : "The Haunting of Hill House", "author" : "58c06994237f9b19dbde7092"},
//                     { "title" : "Dracula", "author" : "58c06994237f9b19dbde7093"},
//                     { "title" : "Carmilla", "author" : "58c06994237f9b19dbde7094"},
//                     { "title" : "The Turn of the Screw", "author" : "58c06994237f9b19dbde7095"}
//                 ])
//             .then(function(results){
//                 console.log('All books seeded');
//             }).catch(function (err){
//                 console.log('An error occurred while inserting books: ' + err);
//             });

app.get('/', function (req, res){
    res.status(200).send('Welcome to the Library app!');
});

app.get('/books', function (req, res){
    libraryService.fetchAllBooks().then(function(booksFetched){
        res.status(200).send(booksFetched);
    }).catch(function (error){
        res.status(500).send(error);
    });
});


app.get('/authors', function (req, res){
    libraryService.fetchAllAuthors().then(function(authorsFetched){
        res.status(200).send(authorsFetched);
    }).catch(function (error){
        res.status(500).send(error);
    });
});

app.get('/books/:title', function (req, res) {
    var bookTitle = req.params.title;
    console.log('bookTitle: ', bookTitle);
    libraryService.fetchByTitle(bookTitle).then(function(titleFetched){
        res.status(200).send(titleFetched);
    }).catch(function(error){
        res.status(500).send(error);
    });
});

app.get('/authors/lastname/:lastname', function (req, res) {
    var lastname = req.params.lastname;
    
    authorLastNameQuery = { lastname : lastname };

    libraryService.fetchAuthorByFirstOrLastName(authorLastNameQuery).then(function (authorFetched){
        res.status(200).send(authorFetched);
    }).catch(function (err) {
        res.status(500).send(err);
    });
});


app.get('/authors/firstname/:firstname', function (req, res){
    var firstname = req.params.firstname;
    authorFirstNameQuery = { firstname : firstname };

    libraryService.fetchAuthorByFirstOrLastName(authorFirstNameQuery).then(function (authorFetched) {
            res.status(200).send(authorFetched);
        }).catch(function (err){
            res.status(500).send(err);
        });
});




app.get('/authors/:name?', function (req, res){
    var authorNameQuery = req.query;  // send the whole query object

    if (authorNameQuery){
        libraryService.fetchAuthorByFirstOrLastName(authorNameQuery).then(function(authorFetched){
            res.status(200).send(authorFetched);
        }).catch(function (err){
            res.status(500).send(error);
        });
    }

});
// add a book - this works
app.post('/book', function (req,res){
    var bookData = req.body.book;

    libraryService.saveBookandAuthor(bookData).then(function (bookSaved){
        res.status(200).send(bookSaved);
    }).catch(function (err){
        res.status(500).send(err);
    });
});

app.post('/author', function (req,res){
    var authorData = req.body.book;
    console.log('bookData: ', authorData);
    libraryService.saveBookandAuthor(authorData).then(function (authorSaved){
        res.status(200).send(authorSaved);
    }).catch(function (err){
        res.status(500).send(err);
    });
});


app.put('/book', function (req, res){
    var bookData = req.body.book;

    libraryService.updateBook(bookData).then(function(bookUpdated) {
        res.status(200).send(bookUpdated);
    }).catch(function (err){
        res.status(500).send(err);
    });

});

app.put('/author', function (req, res){
    var authorData = req.body.author;

    libraryService.updateAuthor(authorData).then(function(authorUpdated){
        res.status(200).send(authorUpdated);
    }).catch(function(err){
        res.status(500).send(err);
    });
});


// process.env means it's a process on the node object - use this when uploading to
// the cloud
app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
