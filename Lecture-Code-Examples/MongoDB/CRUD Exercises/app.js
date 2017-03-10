
db.restaurants.insert({
  "address": {
   "building": "1007",
   "coord": [ -73.856077, 40.848447 ],
   "street": "Morris Park Ave",
   "zipcode": "10462"
  },
  "borough": "Bronx",
  "cuisine": "Bakery",
  "grades": [
     { "date": 1393804800000, "grade": "A", "score": 2 },
     { "date": 1378857600000, "grade": "A", "score": 6 },
     { "date": 1358985600000, "grade": "A", "score": 10 },
     { "date": 1322006400000, "grade": "A", "score": 9 },
     { "date": 1299715200000, "grade": "B", "score": 14 }
  ],
  "name": "Morris Park Bake Shop",
  "restaurant_id": "30075445"
});

db.restaurants.update({"name": "Juni" },
    {
        $set: {"cuisine":"American (New)"}, $currentDate: {"lastModified": true}
    });

db.restaurants.update({
    "restaurant_id": "41156888",
    {
        $set: {"address.street":"East 31st Street"}
    }
});
