var mongoose = require('mongoose');

var authorSchema = mongoose.Schema({
  firstname: String,
  lastname: String,

  // this allows us to reference the Book collection
  // it is an array of Book Object IDs.
  // ref: 'Book' - references the collection Book
  // the type of array is an array of ObjectIDs (from the Book collection)
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book'}]
});

module.exports = mongoose.model('Author', authorSchema);
