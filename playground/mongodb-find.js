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

    // db.collection("Todos")
    //   .find({ _id: new ObjectID("5b8568aed0f3e8c004892750") })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log(err);
    //     }
    //   );

    // db.collection("Todos")
    //   .find()
    //   .count()

    //   .then(
    //     count => {
    //       console.log(`Todos count: ${count}`);
    //     },
    //     err => {
    //       console.log(err);
    //     }
    //   );

    db.collection("Users")
      .find({ name: "Bart" })
      .toArray()
      .then(
        docs => {
          console.log(JSON.stringify(docs, undefined, 2));
        },
        err => {
          console.log(err);
        }
      );

    // client.close();
  }
);
