const Notes = require("../models/notesModel");
const mongoose = require("mongoose");

//get all users
const getNotes = async (req, res) => {
  const notes = await Notes.find({}).sort({ createdAt: -1 });

  res.status(200).json(notes);
};

//get notes by lecture
const getNotesByLecture = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Lecture" });
  }
  const notes = await Notes.find({ lecId: id }).sort({ createdAt: -1 });

  if (!notes) {
    return res.status(404).json({ error: "No such notes" });
  }

  res.status(200).json(notes);
};

// //get one
// const getUser = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No such user" });
//   }
//   const user = await User.findById(id);

//   if (!user) {
//     return res.status(404).json({ error: "No such user" });
//   }

//   res.status(200).json(user);
// };

//create user
const createNote = async (req, res) => {
  const { lecId,response,msgId,pictureURI} = req.body;
  console.log(req.body)
  try {
    const note = await Notes.create({ lecId,response,msgId,pictureURI });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// //delete user
// const deleteUser = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No such user" });
//   }

//   const user = await User.findOneAndDelete({ _id: id });

//   if (!user) {
//     return res.status(404).json({ error: "No such user" });
//   }

//   res.status(200).json(user);
// };
// //update user
// const updateUser = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No such user" });
//   }

//   const user = await User.findOneAndUpdate(
//     { _id: id },
//     {
//       ...req.body,
//     }
//   );
//   if (!user) {
//     return res.status(404).json({ error: "No such user" });
//   }

//   res.status(200).json(user);
// };

module.exports = {
  getNotes,
  getNotesByLecture,
  createNote
};
