const Message = require("../models/messageModel");
const mongoose = require("mongoose");

//get all users
const getAllMessage = async (req, res) => {
  const message = await Message.find({}).sort({ createdAt: -1 });

  res.status(200).json(message);
};

const getMessagesByLecture = async (req, res) => {
  const { id } = req.params;

  try {
    const messages = await Message.find({ lecId: id, isNote: false });
    if (!messages) {
      return res.status(404).send("Messages not found");
    }
    res.status(200).json(messages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMessagesByLectureNotes = async (req, res) => {
  const { id } = req.params;

  try {
    const messages = await Message.find({ lecId: id, isNote: true });
    if (!messages) {
      return res.status(404).send("Messages not found");
    }
    res.status(200).json(messages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get one
const getMessage = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such message" });
  }
  const message = await Message.findById(id);

  if (!message) {
    return res.status(404).json({ error: "No such message" });
  }

  res.status(200).json(message);
};

//create user
  const createMessage = async (req, res) => {
    const { lecId, userId, text, hasPicture = false, isNote = false } = req.body;
    console.log(req.body)
    try {
      const message = await Message.create({ lecId, userId, text, hasPicture, isNote });
      res.status(200).json(message);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

//delete user
const deleteMessage = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such message" });
  }

  const message = await Message.findOneAndDelete({ _id: id });

  if (!message) {
    return res.status(404).json({ error: "No such message" });
  }

  res.status(200).json(message);
};
//update user
const updateMessage = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such message" });
  }

  const message = await Message.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!message) {
    return res.status(404).json({ error: "No such message" });
  }

  res.status(200).json(message);
};

module.exports = {
  createMessage,
  getMessage,
  getAllMessage,
  deleteMessage,
  updateMessage,
  getMessagesByLecture,
  getMessagesByLectureNotes,
};
