const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notesSchema = new Schema(
  {
    lecId: {
      type: String,
      required: true,
    },
    msgId: {
      type: Number,
      required: true,
    },
    response: {
      type: String,
      required: true,
    },
    pictureURI: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notes", notesSchema);
