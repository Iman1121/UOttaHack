const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    courseCode: {
      type: String,
      required: true,
    },
    timeslot: {
      type: String,
      required: true,
    },
    daySlot: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
