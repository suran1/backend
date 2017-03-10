// aggregaing data and using the pipelines, how data flows through it



// reads all documents in restaurants and examining our borough field
// and gathering all the unique boroughs

db.restaurants.aggregate([{ $group: { "_id": "$borough" } }]);


// count all the documents in each unique burough
db.restaurants.aggregate([{ $group: {"_id": "$borough", "count": {$sum: 1}}}]);


//count all restaurants by cuisine
db.restaurants.aggregate([{ $group: {"_id": "$cuisine", "count": {$sum: 1}}}]);

// count all restaurants by zipcode
// NOTE: to access sub-groups, just like a normal object.
db.restaurants.aggregate([{ $group: {"_id" : "$address.zipcode", "count": {$sum : 1}}}]);

// find all restaurants in queens that serve Brazilian
// NOTE: For match, no '$' precedes the id
db.restaurants.aggregate([{ $match: {"borough" : "Queens", "cuisine": "Brazilian"}}])

//Find all italian restaurants in the zipcode 10462
db.restaurants.aggregate([{ $match: {"address.zipcode": "10462", "cuisine": "Italian"}}]);
// Count all Italian restaurants with zipcode of 10462
db.restaurants.aggregate([{ $match: {"cuisine": "Italian", "address.zipcode": "10462"}},
                           { $group: { "_id": null, "count": {$sum: 1}}}
                          ]);

// Find out how mant Italian restaurants are in queens
//NOTE: You have to have an id field for the group. If you don't have or don't
// want one, you can use { $ group: {"_id": null, "count": {$sum : 1}}}
db.restaurants.aggregate([{ $match: { "borough": "Queens", "cuisine": "Brazilian"}},
                         { $group: {"_id": "$borough", "count": { $sum : 1 }}}
                         ]);

// Find all restuarants in Queens with Brazilian cuisine, group those by zipcode and
// count them, and then sort them in descending order by count
db.restaurants.aggregate([{ $match: { "borough": "Queens", "cuisine": "Brazilian"}},
                         { $group: {"_id": "$address.zipcode", "count": { $sum : 1 }}},
                         { $sort: { "count": -1 } }
                        ]);


// Find all restuarants in Queens with Brazilian cuisine, group those by zipcode and
// count them, and then sort them in ascending order by count
db.restaurants.aggregate([{ $match: { "borough": "Queens", "cuisine": "Brazilian"}},
                         { $group: {"_id": "$address.zipcode", "count": { $sum : 1 }}},
                         { $sort: { "count": 1 } }
                        ]);
