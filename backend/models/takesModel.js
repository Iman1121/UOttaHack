const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const takesSchema = new Schema(
  {
    studentId: {
      type: Number,
      required: true,
    },
    courseId: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Takes", takesSchema);
