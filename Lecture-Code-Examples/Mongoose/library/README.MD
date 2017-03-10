To do aggregate in mongoose, same as in the mongodb driver


Ex:

// mongoose will use a promise. Why this is so is because the code doesn't have
// callback in the aggregate call

Puppy.aggregate([
        { $match: {"dislikes" : "all other animals"} },
        { $sort: {"breed" : 1 } }
    ]).then(function(result){
        console.log(result);
    });


// Sort sorts by a the data type in the Schema - so Number types will be sorted
// as normal (not like in JS where it sorts as a string);
