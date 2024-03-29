const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lectureModel = new Schema(
  {
    courseCode: {
      type: String,
      required: true,
    },
    lecNum: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lecture", lectureModel);
