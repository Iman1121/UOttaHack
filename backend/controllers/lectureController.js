const Lecture = require("../models/lectureModel");
const mongoose = require("mongoose");

//get all users
const getLectures = async (req, res) => {
  const lectures = await Lecture.find({}).sort({ createdAt: -1 });

  res.status(200).json(lectures);
};

//get one
const getLecture = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such lecture" });
  }
  const lecture = await Lecture.findById(id);

  if (!lecture) {
    return res.status(404).json({ error: "No such lecture" });
  }

  res.status(200).json(lecture);
};

const getLecturesByCourse = async (req, res) => {
  const { id } = req.params;

  const lectures = await Lecture.find({ courseCode: id }).sort({
    createdAt: -1,
  });

  if (!lectures) {
    return res.status(404).json({ error: "No such lecture" });
  }

  res.status(200).json(lectures);
};

//create user
const createLecture = async (req, res) => {
  const { courseCode, lecNum } = req.body;

  try {
    const lecture = await Lecture.create({ courseCode, lecNum });
    res.status(200).json(lecture);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete user
const deleteLecture = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such lecture" });
  }

  const lecture = await Lecture.findOneAndDelete({ _id: id });

  if (!lecture) {
    return res.status(404).json({ error: "No such lecture" });
  }

  res.status(200).json(lecture);
};
//update user
const updateLecture = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such lecture" });
  }

  const lecture = await Lecture.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!lecture) {
    return res.status(404).json({ error: "No such lecture" });
  }

  res.status(200).json(lecture);
};

module.exports = {
  createLecture,
  updateLecture,
  deleteLecture,
  getLecture,
  getLectures,
  getLecturesByCourse,
};
