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







//Query parameters:
// http://localhost:3000/puppies/?sort=breed
router.get('/', function (request, response){
  // this checks to see if the get request includes Query parameters,
  // if it does, call sortByBreed, otherwise, just assing puppies to puppyArray
  var puppyArray = (request.query.sort === 'breed') ? sortByBreed(puppies) :  puppies;
  response.status(200).json(puppyArray);  // this sends with MIME type 'application':'json'
});


// returns a specific puppy
// uses route parameters - Express automaticaly adds 'id' as a property to the
// response object for you
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




//use body parser for doing posts
router.post('/', function(request, response){
  var puppyID = request.body.id;   //"body" is a property
  puppies.push(request.body);
  var puppy = getPuppy(puppies, puppyID);
  response.status(200).json(puppy);

});

router.put('/:id', function(request, response) {
  // use request.params.id - the id from the route that came from the
  // URL which is the route. Route takes precedence over what's in the data
  var puppy = updatePuppy(puppies, request.body, request.params.id);
  response.status(200).json(puppy);

});


function updatePuppy(arr, newPuppy, id){
  //normally you'd create a new variable and assign the arr value to it
  // to preserve your data
  var puppy;

  for (var i = 0; i < arr.length; i++){
    if (id.toString() === arr[i].id.toString()) {
      arr[i].name = newPuppy.name;
      arr[i].breed = newPuppy.breed;
      arr[i].likes = newPuppy.likes;
      arr[i].dislikes = newPuppy.dislikes;

      puppy = arr[i];
    }
  }

  return puppy;
}

function getPuppy(arr, id){
  var puppy;

  for (var i = 0; i < arr.length; i++){
    if(id.toString() === arr[i].id.toString()){
      puppy = arr[i];
    }
  }

  return puppy;
}

function sortByBreed (arr) {
  var newArr = [];

  // for arrays, have to do this because arrays pass by reference - so newArr
  // would just be pointing to the original arr. The for loop pushs copies of
  // the values in arr to newArr, which is what we want. This will allow the get
  // request will display the 
  for (var i = 0; arr.length; i++) {
    newArr.push = arr[i];
  }


  newArr.sort(function(a, b){
    if (a.breed.toUpperCase() < b.breed.toUpperCase()) {
      return -1;
    }

    if (a.breed.toUpperCase() > b.breed.toUpperCase()) {
      return 1;
    }

    return 0;
  });

  return newArr;
}


module.exports = router;
