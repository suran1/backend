var mongoose = require('mongoose');

var puppySchema = mongoose.Schema({
    name: String,
    breed: String,
    age: Number,
    likes: [String],
    dislikes: [String],
    clothes: [{ clothesType: String, color : String }]

});

module.exports = mongoose.model('Puppy', puppySchema);
