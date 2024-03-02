const Summary = require("../models/summaryModel");
const mongoose = require("mongoose");

//get all users
const getSummary = async (req, res) => {
  const summaries = await Summary.find({}).sort({ createdAt: -1 });

  res.status(200).json(summaries);
};

const getSummaryByLecture = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user" });
  }
  const summary = await Summary.find({ lecId: id });

  if (!summary) {
    return res.status(404).json({ error: "No such summary" });
  }
  res.status(200).json(summary);
};

// //get one
// const getCourseByCourseCode = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No such user" });
//   }
//   const course = await Course.find({ courseCode: id });

//   if (!course) {
//     return res.status(404).json({ error: "No such course" });
//   }

//   res.status(200).json(course);
// };

// //create user
// const createCourse = async (req, res) => {
//   const { courseCode, timeslot, dayslot } = req.body;

//   try {
//     const course = await Course.create({ courseCode, timeslot, dayslot });
//     res.status(200).json(course);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// //delete user
// const deleteCourse = async (req, res) => {
//   const { id } = req.params;

//   const course = await Course.findOneAndDelete({ courseCode: id });

//   if (!course) {
//     return res.status(404).json({ error: "No such course" });
//   }

//   res.status(200).json(course);
// };
// //update user
// const updateCourse = async (req, res) => {
//   const { id } = req.params;

//   const user = await User.findOneAndUpdate(
//     { courseCode: id },
//     {
//       ...req.body,
//     }
//   );
//   if (!course) {
//     return res.status(404).json({ error: "No such course" });
//   }

//   res.status(200).json(course);
// };

module.exports = {
  getSummary,
  getSummaryByLecture,
};
