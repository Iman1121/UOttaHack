const Takes = require("../models/takesModel");
const mongoose = require("mongoose");

//get all users
const getAllTakes = async (req, res) => {
  const takes = await Takes.find({}).sort({ createdAt: -1 });

  res.status(200).json(takes);
};

const getTakesByLecture = async (req, res) => {
  const { id } = req.params;

  try {
    // const lectureID = req.query.id;
    const takes = await Takes.find({ lectureID: id });
    if (!takes) {
      return res.status(404).send("takes not found");
    }
    res.status(200).json(takes);
  } catch (error) {
    res.status(400).json({ error: error.takes });
  }
};

//get one
const getTakes = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such takes" });
  }
  const takes = await Takes.findById(id);

  if (!takes) {
    return res.status(404).json({ error: "No such takes" });
  }

  res.status(200).json(takes);
};

//create user
const createTakes = async (req, res) => {
  const { lectureID, studentID, text } = req.body;

  try {
    const takes = await Takes.create({ lectureID, studentID, text });
    res.status(200).json(takes);
  } catch (error) {
    res.status(400).json({ error: error.takes });
  }
};

//delete user
const deleteTakes = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such takes" });
  }

  const takes = await Takes.findOneAndDelete({ _id: id });

  if (!takes) {
    return res.status(404).json({ error: "No such takes" });
  }

  res.status(200).json(takes);
};
//update user
const updateTakes = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such takes" });
  }

  const takes = await Takes.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!takes) {
    return res.status(404).json({ error: "No such takes" });
  }

  res.status(200).json(takes);
};

module.exports = {
  createTakes,
  getTakes,
  getAllTakes,
  deleteTakes,
  updateTakes,
  getTakesByLecture,
};
