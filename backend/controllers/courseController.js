const course = require("../models/courseModel");
const mongoose = require("mongoose");

//get all users
const getCourses = async (req, res) => {
  const courses = await course.find({}).sort({ createdAt: -1 });

  res.status(200).json(courses);
};

//get one
const getCourseByCourseCode = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }
  const course = await course.find({ courseCode: id });

  if (!course) {
    return res.status(404).json({ error: "No such course" });
  }

  res.status(200).json(course);
};

//create user
const createCourse = async (req, res) => {
  const { courseCode, timeslot, daySlot, instructor } = req.body;
  console.log(courseCode, timeslot, daySlot, instructor)
  try {
    const course = await Course.create({ courseCode, timeslot, daySlot, instructor });
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete user
const deleteCourse = async (req, res) => {
  const { id } = req.params;

  const course = await Course.findOneAndDelete({ courseCode: id });

  if (!course) {
    return res.status(404).json({ error: "No such course" });
  }

  res.status(200).json(course);
};
//update user
const updateCourse = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOneAndUpdate(
    { courseCode: id },
    {
      ...req.body,
    }
  );
  if (!course) {
    return res.status(404).json({ error: "No such course" });
  }

  res.status(200).json(course);
};

module.exports = {
  createCourse,
  getCourseByCourseCode,
  getCourses,
  deleteCourse,
  updateCourse,
};
