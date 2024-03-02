const Picture = require("../models/pictureModel");
const mongoose = require("mongoose");

//get all users
const getPictures = async (req, res) => {
  const pictures = await Picture.find({}).sort({ createdAt: -1 });

  res.status(200).json(pictures);
};

//get one
const getPicturesByMessage = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such message" });
  }
  const pictures = await User.find({ msgId: id }).sort({ createdAt: -1 });

  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }

  res.status(200).json(user);
};

//create user
const createUser = async (req, res) => {
  const { email, name, isStudent, isProf } = req.body;

  try {
    const user = await User.create({ email, name, isStudent, isProf });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }

  res.status(200).json(user);
};

module.exports = {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
};
