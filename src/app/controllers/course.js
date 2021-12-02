const mongoose = require("mongoose");
const Course = require("../models/course");

export function createCourse(req, res) {
    const course = new Course({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
    });

    return course.save()
    .then((newCourse) => {
        return res.status(201).json({
            success: true,
            message: "Added",
            Course: newCourse
        })
    })
    .catch((error)=>{
        console.log(error);
        res.status(500).json({
            success: false,
            message: "sv error 500",
            error: error.message
        })
    })
}