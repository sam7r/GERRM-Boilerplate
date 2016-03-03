import { MongoClient } from 'mongodb';

export default (location, collection) => {
  MongoClient.connect(location, (err, database) => {
    if (err) throw err;
    database.collection(collection).find({}).toArray((err, items) => {
      if (err) throw err;
      if (!items.length) insertTest(database, collection);
    });
  });
}

let insertTest = (db, collection) => {
   db.collection(collection).insertOne({
      "address": {
         "building": "1007",
         "coord": [ -73.856077, 40.848447 ],
         "street": "Morris Park Ave",
         "zipcode": "10462"
      },
      "borough": "Bronx",
      "cuisine": "Bakery",
      "grades": [
         { "date": { "date": 1393804800000 }, "grade": "A", "score": 2 },
         { "date": { "date": 1378857600000 }, "grade": "A", "score": 6 },
         { "date": { "date": 1358985600000 }, "grade": "A", "score": 10 },
         { "date": { "date": 1322006400000 }, "grade": "A", "score": 9 },
         { "date": { "date": 1299715200000 }, "grade": "B", "score": 14 }
      ],
      "name": "Morris Park Bake Shop",
      "restaurant_id": "30075445"
    },
    (err, result) => {
      if (err) throw err;
      console.log("Inserted a document into the test collection.");
    }
  );
};
