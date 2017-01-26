var router = require('express').Router();


// In real life this would be in its own module or database
var puppies = [
  {
    id: 1,
    name: 'Fluffykins',
    breed: 'Labradoodle',
    likes: ['naps', 'bones', 'cuddles'],
    dislikes: ['kitties', 'milk']
  },
  {
    id: 2,
    name: 'Sprinkles',
    breed: 'Dalmatian',
    likes: ['petting', 'snacks', 'swimming'],
    dislikes: ['all other animals', 'Dachshunds']
  },
  {
    id: 3,
    name: 'Bibblyboo',
    breed: 'Pug',
    likes: ['snoring', 'pooping'],
    dislikes: ['Dalmatians', 'trees']
  },
  {
    id: 4,
    name: 'Fred',
    breed: 'Frenchie',
    likes: ['snark', 'chasing rabbits', 'turkey'],
    dislikes: ['birds', 'squirrels', 'uneven bedding']
  }
];

// returns all puppies as an array of objects
router.get('/', function (request, response){
  response.status(200).json(puppies);  // this sends with MIME type 'application':'json'
});

// returns a specific puppy
// uses route parameters - Express automaticaly adds 'id' as a property to the
// response object.
router.get('/:id', function(request, response){
  var puppy;
  for (var i = 0; i < puppies.length; i++){
    // always change to a string, to compare same types
    // params is a property on the request object
    if(request.params.id.toString()=== puppies[i].id.toString()){
      puppy = puppies[i];
    }
  }
  response.status(200).json(puppy);
});




module.exports = router;
