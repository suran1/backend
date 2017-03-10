var mongodb = require('./mongodb.utils');
var Author = require('./models/author.model');  // capitalize because it's constructor
var Book = require('./models/book.model');


module.exports = {
    fetchAllBooks : fetchAllBooks,
    fetchAllAuthors : fetchAllAuthors,
    fetchByTitle: fetchByTitle,
    fetchAuthorByFirstOrLastName : fetchAuthorByFirstOrLastName,
    saveBookandAuthor : saveBookandAuthor,
    updateBook : updateBook,
    updateAuthor : updateAuthor
};


// exec is helper that mongoose uses that returns real promises
function fetchAllBooks () {
    return Book.find({}).populate('author').exec();  // populates author field with actual names of the author
    //return Book.find({}).exec();    // just returns authorID
}

function fetchAllAuthors () {
    return Author.find({}).exec();
    // alternately:
    //return Author.find({}).populate('books').exec();  // this doesn't work right sometimes
}


function fetchAuthorByFirstOrLastName (authorToFetch) {
    return Author.find(authorToFetch)
        .populate('books')
        .exec()
        .then(function (searchResult) {
            return prepareResults(searchResult);
        });
}

function prepareResults (searchResult) {
    var authorToReturn = {};
    if (searchResult && searchResult.length > 0) {
        var authorFound = searchResult[0];
        var authorToReturn = {
            firstname : authorFound.firstname,
            lastname : authorFound.lastname,
            books: []
        }

        // push each book to the authorToReturn.books array (starts as empty)
        for (var i = 0; i < authorFound.books.length; i++) {
            authorToReturn.books.push(authorFound.books[i].title);
        }
    }
    return authorToReturn;
}

function fetchByTitle (titleToFetch) {
    return Book.find({ title : titleToFetch }).populate('author').exec().then(function (searchResult) {
       var bookToReturn = {};
       if (searchResult && searchResult.length > 0) {
           var bookFound = searchResult[0];
           var bookToReturn =  {
                   title: bookFound.title,
                   id: bookFound._id,
                 author: {
                   id: bookFound.author._id,
                   firstname: bookFound.author.firstname,
                   lastname: bookFound.author.lastname
                 }
            }
       }
       return bookToReturn;
   });
 }



function saveBookandAuthor(bookToSave){
    var authorInfo;
    var bookInfo;

    // don't include catch here so that it will be caught by the 'catch'
    return Author.find({ firstname : bookToSave.author.firstname, lastname: bookToSave.author.lastname})
                    .exec()
                    .then(function (authorSearchResult){
                        console.log(authorSearchResult);
                        if (authorSearchResult && authorSearchResult.length > 0){
                            return authorSearchResult[0];  // just return first author since we only allow 1 author per book
                        } else {
                            var author = new Author (
                                {
                                    firstname : bookToSave.author.firstname,
                                    lastname : bookToSave.author.lastname
                                }
                            );
                            return author.save();
                        }
                    }).then(function (author){
                        authorInfo = author;

                        // now save the book
                        var book = new Book ({
                            title: bookToSave.title,
                            author: authorInfo._id
                        });

                        return book.save();
                    }).then (function (bookSaved){
                        bookInfo = bookSaved;
                        // add a book to the array
                        authorInfo.books.push(bookInfo._id);
                        return authorInfo.save();
                    }).then (function (updatedAuthorInfo){
                        var infoToReturn = {
                            author: updatedAuthorInfo,
                            book: bookInfo
                        }
                        return infoToReturn;
                    });
}


function updateBook (bookToUpdate) {
    return Book.findById(bookToUpdate.id).then(function (bookFetched){
        if(bookToUpdate.title) {
            bookFetched.title = bookToUpdate.title;
        }

        if (bookToUpdate.author){
            bookFetched.author = bookToUpdate.author;
        }

        return bookFetched.save();
    });
}

function updateAuthor (authorToUpdate) {
    return Author.findById(authorToUpdate._id).then(function(authorFetched){

        if (authorToUpdate.books) {
            authorFetched.books.push(authorToUpdate.books);
        }

        if (authorToUpdate.author) {
            authorFetched.author = authorToUpdate.author;
        }

        return authorFetched.save();
    });

}


// use to seed database - books collection
function saveAllBooks (booksToSeed) {
    return Book.insertMany(booksToSeed).then(function (booksInserted){
        console.log('All books seeded to Book collection in library database.\n'
                    + booksInserted);
    }).catch(function (err){
        console.log('There was an error seeding the database with books: ' + err );
    })

}

// use to seed database - authors collection
function saveAllAuthors (authorsToSeed) {
    return Author.insertMany(authorsToSeed).then(function(authorsInserted){
        console.log('All authors seeded to Author colection in library database.\n'
                    + authorsInserted);
    }).catch(function (err){
        console.log('There was an error seeding the database with authors: ' + err );
    });
}
