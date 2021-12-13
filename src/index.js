// https://blog.logrocket.com/building-structuring-node-js-mvc-application/
require("dotenv").config();
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// Route
app.use('/', require('./app/routes/login'));

//listen server
app.listen(process.env.NODE_DOCKER_PORT|| 8080, () => {
  console.log(`Server is running on port ${process.env.NODE_DOCKER_PORT}.`);
  console.log(express.Router());
});