// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

// const obj = new ObjectID();
// console.log(obj);

// const obj = { name: "Me", age: 25 };
// const { name: wow } = obj;
// console.log(wow);

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    // db.collection("Todos").insertOne({ text: "Something to do", completed: false }, (err, result) => {
    //   if (err) {
    //     return console.log(err);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection("Users").insertOne({ name: "Bart", age: 24, location: "London" }, (err, result) => {
    //   if (err) {
    //     return console.log(err);
    //   }
    //   //   console.log(JSON.stringify(result.ops, undefined, 2));
    //   console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
  }
);
