// index command
db.restaurants.getIndexes();

//database states
db.restaurants.stats();


// create an Index on cuisine
db.restaurants.createIndex( {"cuisine" : 1});
/* output of create Index:
  You can't recreate an index
{
	"createdCollectionAutomatically" : false,
	"numIndexesBefore" : 1,    // shows how many indexes before new index is created
	"numIndexesAfter" : 2,     // shows number of indexes after creating new index
	"ok" : 1
}

*/

// query on restaurants.
// explain()  gives info on how Mongo searches - this way it does a full query
db.restaurants.find( {"borough": "Manhattan"}).explain();
// this shows that when it searches for cuisine, it uses and index
db.restaurants.find( {"cuisine": "Italian"}).explain();

// multi-key index
db.restaurants.createIndex( {"cuisine": 1, "address.zipcode":-1})
