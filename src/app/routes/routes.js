const express = require("express");
const {CreateCourse} = require("../controllers/course")

const routes = express.Router();

routes.post("/course", createCourse);

export default routes;