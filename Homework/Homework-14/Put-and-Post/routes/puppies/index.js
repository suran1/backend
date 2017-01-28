var router = require('express').Router();
var puppies = require('./puppies');



// returns all puppies as an array of objects
router.get('/', function (request, response){
  response.status(200).json(puppies);  // this sends with MIME type 'application':'json'
});

// returns a specific puppy
// uses route parameters - Express automaticaly adds 'id' as a property to the
// response object. Id must be included in the request URl: localhost:3000/puppies/3
router.get('/:id', function(request, response){
  var puppy;
  for (var i = 0; i < puppies.length; i++){

    // always change to a string, to compare same types
    // params is a property on the request object;
    // 'params.id' is the number in the browser - see how this varies for put
    if(request.params.id.toString() === puppies[i].id.toString()){
      puppy = puppies[i];
    }
  }
  response.status(200).json(puppy);
});


//add a new puppy to the roster
router.post('/', function (request, response) {
  var id = request.body.id;    //get the ID from the request body
  var addPuppy = checkPuppy(puppies, id, 'POST');  // check to see if the id is already taken

  if (addPuppy.state){
    puppies.push(request.body);
    response.status(200).json(request.body);

  } else {

    var newID = generateID(puppies);  //get the next available ID
    response.status(404).send('Yo! This is a RESTful API! No editing on a POST request!\n'
             + 'You are trying to overwrite an existing ID or add a duplicate ID\n'
             + 'Use PUT with the correct ID to update a puppy\'s info.\n'
             + 'Use POST and the next available ID (which is '
             + newID
             + ') to add a new puppy to the roster.');
  }

});

// Edit an existing puppy's data
router.put('/:id', function (request, response) {
    console.log('Im in my PUT function!');

    // have to use request.params.id because this is the number sent in the request,
    // i.e., the url in the browser:  localhost:3000/puppies/2
    // I tried it with the request.body.id, and it was undefined...so I believe
    // the put function is taking whatever number is passed to it in the
    // localhost:3000/puppies/<somenumber> url in the browser
    // because that is the route. It does not check this number against what's in the puppies array.
    // If it's not in the array, there's an error.

    // Therefore, I should check the actual value in the body-parser. Because it is
    // possible that the route passed is not the same as the id number in the body
    // Ask Blake if that matters.

    var id = request.body.id;


    //check if puppy id exists, if so proceed with update

    var exists = checkPuppy(puppies, id, 'PUT');

    if (exists.state && exists.index !== -1) {
        var puppy = updatePuppy(puppies, request.body, exists.index);
        response.status(200).json(puppy);

    } else {
        response.status(404).send('Invalid puppy ID. Update canceled.');
    }

});




//check to see if the puppy already exists by checking the ID sent
function checkPuppy (pupArr, id, method) {
  var update = { state: true, 'index': -1 };   //flag to see if pup ID already exists
  for (var i = 0; i < pupArr.length; i++) {
    if (id.toString() === pupArr[i].id.toString()) {
      //check if it's POST method or not.
      if (method === 'POST') {
          update.state = false;  // a puppy already has that ID (POST) or Id -
      } else {
          update.index = i;
          console.log(i);
      }
    }
  }
  return update;
}

function generateID (puppyArr) {
  var maxID = 1;
  //iterate over the puppy array and extract all the IDs and put them in an array
  var arrIDs = puppyArr.map(function(obj) { return obj.id  });

  //check if arrIDs has an IDs in it. If so, continue to process
  if (arrIDs.length > 0){
    maxID = Math.max.apply(null, arrIDs) + 1;
    console.log(maxID);
  }

  return maxID;
}

function updatePuppy (puppyArray, newPuppy, i) {
      var puppy;

      puppyArray[i].name = newPuppy.name;
      puppyArray[i].breed = newPuppy.breed;
      puppyArray[i].likes = newPuppy.likes;
      puppyArray[i].dislikes = newPuppy.dislikes;

      puppy = puppyArray[i];

      return puppy;
}




module.exports = router;
