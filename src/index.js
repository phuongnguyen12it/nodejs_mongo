require("dotenv").config();
const express = require('express')
const dbConfig = require("../src/app/config/db.config");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const mainRoutes = require("./app/routes/routes");

//Define request response in root URL (/)
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// set up mongoose
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    console.log('Database connected');
  }).catch((error)=> {
    console.log('Error connecting to database');
  }) ;

// set up route
app.use('/api/', mainRoutes);

//Launch listening server on port 8080
const PORT = process.env.NODE_DOCKER_PORT || 8080;
console.log(process.env.NODE_DOCKER_PORT);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});