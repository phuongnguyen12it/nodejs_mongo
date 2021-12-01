require("dotenv").config();
const express = require('express')
const mongodb = require('mongodb');
const {mgConnect} = require('mongodb');
const app = express()

// Use connect method to connect to the Server
let mongoClient = mongodb.MongoClient;
mongoClient.connect(mgConnect, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', mgConnect.url);

    // do some work here with the database.

    //Close connection
    db.close();
  }
});

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    name: "Duy Ga",
    bike: "MT15",
    company: "Google"
  });
})

//Launch listening server on port 8080
const PORT = process.env.NODE_DOCKER_PORT || 8080;
console.log(process.env.NODE_DOCKER_PORT);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});