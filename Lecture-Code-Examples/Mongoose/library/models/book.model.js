var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
  title: String,

  // only have one author in our books
  // this creates a reference to the Author collection ('ref: 'Author)
  // and the type: line says what field we will reference, which is the ObjectID.
  // Mongoose understands type:  and ref:
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' }
});

module.exports = mongoose.model('Book', bookSchema);
