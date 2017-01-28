Homework:  Add post and put methods from the in class exercise as per the following technical specification.



/ - root
  / puppies
      /puppies/:id
  / kitties

* GET /*

- Desc:  root (welcome)
- Response: 200 text/html              // http status code and MIME type
- Data:  "Welcome to Puppies Only!"    // string


* GET /puppies*
- Desc:  Returns all puppies
- Response: 200 application/json              
- Data:  [{}, {}, {}]                        // array of objects

*POST /puppies*
- Desc:  Creates and returns a new puppy
- Response: 200 application/json              // http status code and MIME type
- Data:  {}                                   // one object

*GET /puppies/:id*                            
// puppies/:id  <--- this is a route parameter (the colon is)
// 'id' is the variable <-- this is like a filter - pull back info on one puppy that matches the id
// to do multiple variable:
//    /puppies/:id/:color/:breed

- Desc:  Returns a single puppy represented by its 'id'
- Response: 200 application/json              
- Data:  {}                                   // one object


*PUT /puppies/:id*
- Desc:  Updates and returns the matching puppy
- Response: 200 application/json              
- Data:  {}                                   


*GET /kitties*
- Desc:  Returns all kitties (or does it?)
- Response: 200 text/html              
- Data: 'lol jk - No kitties here!'                          



Puppy Object:
{
  id: number,
  name: string,
  breed: string,
  timestamp: date,
  sex: string,
  likes: array,
  dislikes: array
}
