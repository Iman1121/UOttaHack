const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const summarySchema = new Schema(
  {
    lecId: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Summary", summarySchema);
